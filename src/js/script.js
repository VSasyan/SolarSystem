var T = 0;
var t = 0;
var astres = [];
var camera;
var camControls;

function init() {
	setInterval(function() {t += 1;}, 50);
	var clock = new THREE.Clock();

	var scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	$.ajax({
		url : 'astres.json.php',
		type : 'GET',
		success : function(data) {
			dataAstres = JSON.parse(data);
			$.each(dataAstres, function(i,d) {
				var astre = new Astre(d);
				scene.add(astre.element);
				astres.push(astre);
			});
		}
	})

	/*camControls = new THREE.FirstPersonControls(camera);
	camControls.lookSpeed = 0;
	camControls.movementSpeed = 10;
	camControls.lookVertical = true;
*/
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 3;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var render = function () {
		requestAnimationFrame(render);

		if (T != t / 100000) {
			T = t / 100000;
			$.each(astres, function(i, astre) {
				astre.setPosition(T);
			});
		}

		var delta = clock.getDelta();
		//camControls.update(delta);
		renderer.render(scene, camera);
	};
	render();

}

window.onload = init;