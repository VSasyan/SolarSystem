<?php


	$astres = array();

	$astres[] = array(
		'name' => 'the Sun',
		'color' => 0x00ffff,
		'size' => 1395200,
		'positionFixed' => true,
		'N' => array(0, 0),
		'i' => array(0, 0),
		'w' => array(282.9404, +4.70935E-5),
		'a' => array(1.000000, 0),
		'e' => array(0.016709, -1.151E-9),
		'M' => array(356.0470, +0.9856002585)
	);

	$astres[] = array(
		'name' => 'the Moon',
		'color' => 0x00ffff,
		'size' => 12800,
		'N' => array(25.1228, -0.0529538083),
		'i' => array(5.1454, 0),
		'w' => array(318.0634, 0.1643573223),
		'a' => array(0.0025665675708556, 0),
		'e' => array(0.054900, 0),
		'M' => array(115.3654, 13.0649929509)
	);

	$astres[] = array(
		'name' => 'Mercury',
		'color' => 0x888888,
		'size' => 4900,
		'N' => array(48.3313, 3.24587E-5),
		'i' => array(7.0047, 5.00E-8),
		'w' => array(29.1241, 1.01444E-5),
		'a' => array(0.387098, 0),
		'e' => array(0.205635, 5.59E-10),
		'M' => array(168.6562, 4.0923344368)
	);

	$astres[] = array(
		'name' => 'Venus',
		'color' => 0x880000,
		'size' => 12000,
		'N' => array(76.6799, 2.46590E-5),
		'i' => array(3.3946, 2.75E-8),
		'w' => array(54.8910, 1.38374E-5),
		'a' => array(0.723330, 0),
		'e' => array(0.006773, -1.302E-9),
		'M' => array(48.0052, 1.6021302244)
	);

	$astres[] = array(
		'name' => 'Mars',
		'color' => 0xff0000,
		'size' => 6800,
		'N' => array(49.5574, 2.11081E-5),
		'i' => array(1.8497, -1.78E-8),
		'w' => array(286.5016, 2.92961E-5),
		'a' => array(1.523688, 0),
		'e' => array(0.093405, 2.516E-9),
		'M' => array(18.6021, 0.5240207766)
	);

	// 12800

	$astres[] = array(
		'name' => 'Jupiter',
		'color' => 0x222200,
		'size' => 144000,
		'N' => array(00.4542, 2.76854E-5),
		'i' => array(1.3030, -1.557E-7),
		'w' => array(273.8777, 1.64505E-5),
		'a' => array(5.20256, 0),
		'e' => array(0.048498, 4.469E-9),
		'M' => array(19.8950, 0.0830853001)
	);

	$astres[] = array(
		'name' => 'Saturn',
		'color' => 0x222200,
		'size' => 120000,
		'N' => array(13.6634, 2.38980E-5),
		'i' => array(2.4886, -1.081E-7),
		'w' => array(339.3939, 2.97661E-5),
		'a' => array(9.55475, 0),
		'e' => array(0.055546, -9.499E-9),
		'M' => array(316.9670, 0.0334442282)
	);

	$astres[] = array(
		'name' => 'Uranus',
		'color' => 0x4444ff,
		'size' => 52000,
		'N' => array(74.0005, 1.3978E-5),
		'i' => array(0.7733, 1.9E-8),
		'w' => array(96.6612, 3.0565E-5),
		'a' => array(19.18171, -1.55E-8),
		'e' => array(0.047318, 7.45E-9),
		'M' => array(142.5905, 0.011725806)
	);

	$astres[] = array(
		'name' => 'Neptune',
		'color' => 0x1111ff,
		'size' => 50000,
		'N' => array(31.7806, 3.0173E-5),
		'i' => array(1.7700, -2.55E-7),
		'w' => array(272.8461, -6.027E-6),
		'a' => array(30.05826, 3.313E-8),
		'e' => array(0.008606, 2.15E-9),
		'M' => array(260.2471, 0.005995147)
	);

	// 2300





/*	$astres[] = array(
		'size' => array(0.1,
		'color' => array(0xffff00,
		'name' => array('Soleil',
		'positionFixed' => array(true
	);

	$astres[] = array(
		'size' => array(0.02,
		'color' => array(0xffff55,
		'name' => array('Vénus',
		'a' => array([0.72333566, 0.00000390],
		'e' => array([0.00677672, -0.00004107],
		'I' => array([3.39467605, -0.00078890],
		'L' => array([181.97909950, 58517.81538729],
		'omega' => array([131.60246718, 0.00268329],
		'OMEGA' => array([76.67984255, -0.27769418],
		'mExtended' => array(false
	);

	$astres[] = array(
		'size' => array(0.05,
		'color' => array(0x0000ff,
		'name' => array('Terre',
		'a' => array([1.00000261, 0.00000562],
		'e' => array([0.01671123, -0.00004392],
		'I' => array([-0.00001531, -0.01294668],
		'L' => array([100.46457166, 35999.37244981],
		'omega' => array([102.93768193, 0.32327364],
		'OMEGA' => array([0.0, 0.0],
		'mExtended' => array(false
	);

	/*$astres[] = array(
		'size' => array(0.03,
		'color' => array(0xff0000,
		'name' => array('Mars',
		'a' => array([1.52371034, 0.00001847],
		'e' => array([0.09339410, 0.00007882],
		'I' => array([1.84969142, -0.00813131],
		'L' => array([-4.55343205, 19140.30268499],
		'omega' => array([-23.94362959, 0.44441088],
		'OMEGA' => array([49.55953891, -0.29257343],
		'mExtended' => array(false
	);

	$astres[] = array(
		'size' => array(0.07,
		'color' => array(0xffffff,
		'name' => array('Jupiter',
		'a' => array([5.20288700, 0.04838624],
		'e' => array([0.09339410, 0.00007882],
		'I' => array([1.30439695, -0.00183714],
		'L' => array([34.39644051, 3034.74612775],
		'omega' => array([14.72847983, 0.21252668],
		'OMEGA' => array([100.47390909, 0.20469106],
		'mExtended' => array(false
	);*/

	echo json_encode($astres);

?>