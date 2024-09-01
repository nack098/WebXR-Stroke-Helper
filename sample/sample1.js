import * as THREE from "three";
import Scene from "@/scene.js";

class Sample1 extends Scene {
  static mesh = {
    cube1: new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    ),
  };

  init() {
    this.camera.position.z = 5;
    this.scene.add(...Object.values(Sample1.mesh));
  }

  update() {
    Sample1.mesh.cube1.rotation.x += 0.01;
    Sample1.mesh.cube1.rotation.y += 0.01;
  }
}

export default Sample1;
