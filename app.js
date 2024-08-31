import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import Settings from "./src/utilities.js";
import Sample2 from "./sample/sample2.js";

class App {
  constructor() {
    if (!WebGL.isWebGL2Available()) {
      const warning = WebGL.getWebGL2ErrorMessage();
      document.body.appendChild(warning);
    }
    const currentScene = new Sample2();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(Settings.WIDTH, Settings.HEIGHT);
    document.body.appendChild(renderer.domElement);
    renderer.render(currentScene.scene, currentScene.camera);
    renderer.setAnimationLoop(currentScene.createAnimationLoop(renderer));
  }
}

export { App };
