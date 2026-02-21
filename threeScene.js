const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10,10,10);
scene.add(light);

// Placeholder fruit (replace with real model later)
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xff4d4d });
const fruit = new THREE.Mesh(geometry, material);

scene.add(fruit);

function animate() {
  requestAnimationFrame(animate);
  fruit.rotation.y += 0.003;
  fruit.rotation.x += 0.002;
  renderer.render(scene, camera);
}
animate();
