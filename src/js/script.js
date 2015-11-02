var T = 0;
var t = 0;
setInterval(function() {t += 1;}, 50);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


Soleil = new Astre({
	size : 0.1,
	color : 0xffff00,
	name : 'Soleil'
});
Venus = new Astre({
	size : 0.02,
	color : 0xffff55,
	name : 'Vénus',
	a : [0.72333566, 0.00000390],
	e : [0.00677672, -0.00004107],
	I : [3.39467605, -0.00078890],
	L : [181.97909950, 58517.81538729],
	omega : [131.60246718, 0.00268329],
	OMEGA : [76.67984255, -0.27769418],
	mExtended : false
});
Terre = new Astre({
	size : 0.05,
	color : 0x0000ff,
	name : 'Terre',
	a : [1.00000261, 0.00000562],
	e : [0.01671123, -0.00004392],
	I : [-0.00001531, -0.01294668],
	L : [100.46457166, 35999.37244981],
	omega : [102.93768193, 0.32327364],
	OMEGA : [0.0, 0.0],
	mExtended : false
});
Mars = new Astre({
	size : 0.03,
	color : 0xff0000,
	name : 'Mars',
	a : [1.52371034, 0.00001847],
	e : [0.09339410, 0.00007882],
	I : [1.84969142, -0.00813131],
	L : [-4.55343205, 19140.30268499],
	omega : [-23.94362959, 0.44441088],
	OMEGA : [49.55953891, -0.29257343],
	mExtended : false
});
Jupiter = new Astre({
	size : 0.07,
	color : 0xffffff,
	name : 'Jupiter',
	a : [5.20288700, 0.04838624],
	e : [0.09339410, 0.00007882],
	I : [1.30439695, -0.00183714],
	L : [34.39644051, 3034.74612775],
	omega : [14.72847983, 0.21252668],
	OMEGA : [100.47390909, 0.20469106],
	mExtended : false
});

scene.add(Soleil.element);
scene.add(Venus.element);
scene.add(Terre.element);
scene.add(Mars.element);
scene.add(Jupiter.element);
camera.position.z = 3;

var render = function () {
	requestAnimationFrame(render);

	if (T != t / 100000) {
		T = t / 100000;
		Venus.setPosition(T);
		Terre.setPosition(T);
		//Mars.setPosition(T);
		//Jupiter.setPosition(T);
	}

	renderer.render(scene, camera);
};
render();