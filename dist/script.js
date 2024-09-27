import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/examples/jsm/controls/OrbitControls.js";
import nebula from "../imgs"

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 2, 8);
orbit.update();

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
box.position.y = 3;

const ringGeometry = new THREE.RingGeometry(1, 2, 10);
const ringMaterial = new THREE.MeshBasicMaterial({
  color: 0x673ab7,
  side: THREE.DoubleSide
});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(ring);
ring.rotation.x = -0.5 * Math.PI;
ring.position.y = 3;

const ringTwoGeometry = new THREE.RingGeometry(1, 2, 10);
const ringTwoMaterial = new THREE.MeshStandardMaterial({
  color: 0x673ab7,
  side: THREE.DoubleSide
});
const ringTwo = new THREE.Mesh(ringTwoGeometry, ringTwoMaterial);
scene.add(ringTwo);
ringTwo.position.y = 3;

const sphereGeometry = new THREE.SphereGeometry(2, 32, 16);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: false,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-5, 3, 0);
sphere.castShadow = true;

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0x808080,
  side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dLightHelper);

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

function animate() {
  box.rotation.y += -0.1;

  ring.rotation.z += 0.1;

  ringTwo.rotation.z += -0.1;

  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);