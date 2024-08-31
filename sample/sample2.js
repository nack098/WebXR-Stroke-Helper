import * as THREE from "three";
import Scene from "../src/scene.js";

class Sample2 extends Scene {
  static mesh = {
    line: new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(0, 10, 0),
        new THREE.Vector3(10, 0, 0),
      ]),
      new THREE.LineBasicMaterial({ color: 0x0000ff }),
    ),
  };

  init() {
    this.camera.position.set(0, 0, 100);
    this.scene.add(...Object.values(Sample2.mesh));
  }

  update() {}
}

export default Sample2;
