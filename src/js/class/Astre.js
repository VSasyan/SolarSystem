function Astre(properties) {
	// Properties :
	this.name = properties.name;
	this.color = properties.color || 0x0000ff;
	this.quality = properties.quality || 128;
	// Trajectory :
	this.size = properties.size;
	this.positionFixed = properties.positionFixed || false;
	if (!this.positionFixed) {
		this.a = properties.a;
		this.e = properties.e;
		this.I = properties.I;
		this.L = properties.L;
		this.omega = properties.omega;
		this.OMEGA = properties.OMEGA;
		this.mExtended = properties.mExtended || false;
		if (this.mExtended) {
			this.b = properties.b;
			this.c = properties.c;
			this.s = properties.s;
			this.f = properties.f;
		}
	}
	// WebGL :
	this.geometry = new THREE.SphereGeometry(this.size, this.quality, this.quality);
	this.material = new THREE.MeshBasicMaterial({color: this.color});
	this.element = new THREE.Mesh(this.geometry, this.material);
}

Astre.prototype.getPosition = function(T) { // http://ssd.jpl.nasa.gov/txt/aprx_pos_planets.pdf
	if (!this.positionFixed) {
		// Computation : elm = elm0 + T * elm';
		var a = this.a[0] + T * this.a[1];
		var e = this.e[0] + T * this.e[1];
		var e_ = 57.29578 * e;
		var I = (this.I[0] + T * this.I[1]) / 180 * Math.PI;
		var L = (this.L[0] + T * this.L[1]) / 180 * Math.PI;
		var omega = (this.omega[0] + T * this.omega[1]) / 180 * Math.PI;
		var OMEGA = (this.OMEGA[0] + T * this.OMEGA[1]) / 180 * Math.PI;
		if (this.mExtended) {
			var b = this.b[0] + T * this.b[1];
			var c = this.c[0] + T * this.c[1];
			var s = this.s[0] + T * this.s[1];
			var f = this.f[0] + T * this.f[1];
		}

		// Approximation of E :
		var w = omega - OMEGA;
		var M = L - omega;
		if (this.mExtended) {M += b * T * T + c * Math.cos(f * T) + s * Math.sin(f * T);}
		M = M % 180;
		var En = M + e_ * Math.sin(M);
		var deltaE = 1;
		var tol = 1 / 1000;
		//var i = 0;
		while (Math.abs(deltaE) > tol /*&& i < 1000000*/) {
			var deltaM = M - (En - e_ * Math.sin(En));
			deltaE = deltaM / (1 - e * Math.cos(En));
			En += deltaE;
			//i++;
		}
		var E = En;
		//console.log(i);

		// Speeds :
		var x_ = a * (Math.cos(E) - e);
		var y_ = a * Math.sqrt(1 - e * e) * Math.sin(E);
		var z_ = 0;
		
		// Positions :	
		var cos_w = Math.cos(w);
		var sin_w = Math.sin(w);
		var cos_I = Math.cos(I);
		var sin_I = Math.sin(I);
		var cos_OMEGA = Math.cos(OMEGA);
		var sin_OMEGA = Math.sin(OMEGA);

		var position = {
			x : (cos_w * cos_OMEGA - sin_w * sin_OMEGA * cos_I) * x_ + (-sin_w * cos_OMEGA - cos_w * sin_OMEGA * cos_I) * y_,
			y : (cos_w * sin_OMEGA + sin_w * cos_OMEGA * cos_I) * x_ + (-sin_w * sin_OMEGA + cos_w * cos_OMEGA * cos_I) * y_,
			z : (sin_w * cos_I) * x_ + (cos_w * sin_I) * y_
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