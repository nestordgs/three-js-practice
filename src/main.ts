import { OrbitControls } from 'three/examples/jsm/Addons.js';
import './style.css';
import * as THREE from 'three';

let width = window.innerWidth;
let height = window.innerHeight;


// camera
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

// // Main body of the plate
// const plateGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.05, 100);
// const plateMaterial = new THREE.MeshBasicMaterial({ color: 0xb8503d }); // Black color
// const plate = new THREE.Mesh(plateGeometry, plateMaterial);

// // Hole in the center
// const holeGeometry = new THREE.TorusGeometry(0.1, 0.04, 20, 100);
// const holeMaterial = new THREE.MeshBasicMaterial({ color: 0xbdbec0 }); // Black color
// const hole = new THREE.Mesh(holeGeometry, holeMaterial);

// // Position the hole in the center of the plate
// hole.rotation.x = Math.PI / 2;
// // hole.rotation.y = Math.PI / 2;
// // hole.position.y = 0;

// plate.rotation.x = Math.PI / 1;
// // plate.rotation.y = Math.PI / 2;

// // Add the hole to the plate
// // plate.add(hole);

// // Add the plate to the scene
// // scene.add(plate);


// barbell
// Bar
const barGeometry = new THREE.CylinderGeometry(0.02, 0.02, 2, 100);
const barMaterial = new THREE.MeshBasicMaterial({ color: 0xbdbec0 }); // Black color
const bar = new THREE.Mesh(barGeometry, barMaterial);

// Plates
const plateGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.02, 100);
const plateMaterial = new THREE.MeshBasicMaterial({ color: 0xb8503d }); // Black color
const plate1 = new THREE.Mesh(plateGeometry, plateMaterial);
const plate2 = new THREE.Mesh(plateGeometry, plateMaterial);

// Hole in the center of the plates
const holeGeometry = new THREE.TorusGeometry(0.04, 0.0222, 5, 100);
const holeMaterial = new THREE.MeshBasicMaterial({ color: 0xbdbec0 }); // Black color
const hole1 = new THREE.Mesh(holeGeometry, holeMaterial);
hole1.material.alphaTest = 0.5;
const hole2 = new THREE.Mesh(holeGeometry, holeMaterial);

// Position the holes in the center of the plates
hole1.rotation.x = Math.PI / 2;
hole1.position.y = 0;
hole2.rotation.x = Math.PI / 2;
hole2.position.y = 0;

// Add the holes to the plates
plate1.add(hole1);
plate2.add(hole2);

// Position the plates at the ends of the bar
plate1.position.x = 0;
plate2.position.x = 0;
plate1.position.y = 0.7;
plate2.position.y = -0.7;

// Add the plates to the bar
bar.add(plate1);
bar.add(plate2);

bar.rotation.z = Math.PI / 2;
// bar.position.z = -1;

// Add the barbell to the scene
scene.add(bar);

// light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);
scene.add(light);
const lightHelper = new THREE.DirectionalLightHelper(light, 0.05);
scene.add(lightHelper);


// render
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );


// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();
// resize
function resize( ) {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );
}

// animation
function animation( ) {
  requestAnimationFrame( animation );
	// mesh.rotation.x += 0.001;
	// mesh.rotation.y += 0.001;

  // cylinder.rotation.x += 0.005;
  // cylinder.rotation.y += 0.005;

  // plate.rotation.x += 0.005;
  // plate.rotation.y += 0.005;
  // plate.rotation.z += 0.005;
  // hole.rotation.x += 0.005;

	renderer.render( scene, camera );

}

animation();
window.addEventListener('resize', resize);