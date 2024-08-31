import { Scene as THREE_SCENE, PerspectiveCamera } from "three";
import Settings from "./utilities.js";

class Scene {
  scene;
  camera;
  constructor() {
    this.scene = new THREE_SCENE();
    this.camera = new PerspectiveCamera(
      Settings.FOV,
      Settings.ASPECT,
      0.1,
      1000,
    );

    this.init();
  }

  init() {}

  update() {}

  createAnimationLoop(renderer) {
    return () => {
      this.update();
      renderer.render(this.scene, this.camera);
    };
  }
}

export default Scene;
