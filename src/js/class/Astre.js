function Astre(properties) {
	// Properties :
	this.name = properties.name;
	this.color = properties.color || 0x0000ff;
	this.quality = properties.quality || 256;
	// Trajectory :
	this.size = properties.size;
	this.positionFixed = properties.positionFixed || false;
	if (!this.positionFixed) {
		this.N = properties.N;
		this.i = properties.i;
		this.w = properties.w;
		this.a = properties.a;
		this.e = properties.e;
		this.M = properties.M;
	}
	// WebGL :
	this.geometry = new THREE.SphereGeometry(Math.sqrt(this.size) / 2000, this.quality, this.quality);
	this.material = new THREE.MeshBasicMaterial({color: this.color});
	this.element = new THREE.Mesh(this.geometry, this.material);
}

Astre.prototype.getPosition = function(T) {

	// http://ssd.jpl.nasa.gov/txt/aprx_pos_planets.pdf
	// http://www.stjarnhimlen.se/comp/ppcomp.html

	if (!this.positionFixed) {
		// Computation : elm = elm0 + T * elm';
		var N = this.N[0] + T * this.N[1];
		var i = this.i[0] + T * this.i[1];
		var w = (this.w[0] + T * this.w[1]) / 180 * Math.PI;
		var a = this.a[0] + T * this.a[1];
		var e = (this.e[0] + T * this.e[1]) / 180 * Math.PI;
		var M = (this.M[0] + T * this.M[1]) / 180 * Math.PI;

		// Approximation of E :
		var E = M + e * Math.sin(M) * (1.0 + e * Math.cos(M));
		if (E < 0.05) {
			var tol = 0.001;
			var i = 0;
			while (Math.abs(deltaE) > tol && i < 10000) {
				deltaE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
				E -= deltaE;
				i++;
			}
		}

		// Speeds :
		var x_ = a * (Math.cos(E) - e);
		var y_ = a * Math.sqrt(1.0 - e * e) * Math.sin(E);
		var v = Math.atan2(y_, x_);
		var r = Math.sqrt(x_*x_ + y_*y_);
		
		// Positions :
		var cos_N = Math.cos(N);
		var sin_N = Math.sin(N);
		var cos_v_w = Math.cos(v+w);
		var sin_v_w = Math.sin(v+w);
		var cos_i = Math.cos(i);
		var sin_i = Math.sin(i);

		var position = {
			x : r * (cos_N * cos_v_w - sin_N * sin_v_w * cos_i),
			y : r * (sin_N * cos_v_w + cos_N * sin_v_w * cos_i),
			z : r * sin_v_w * sin_i
		};
		return position;
	} else {return false;}
}

Astre.prototype.setPosition = function(T) {
	if (!this.positionFixed) {
		var position = this.getPosition(T);
		this.element.position.x = position.x;
		this.element.position.y = position.y;
		this.element.position.z = position.z;
	}
}