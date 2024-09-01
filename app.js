import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { XRButton } from "three/addons/webxr/XRButton.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import Settings, { updateSettings } from "./src/utilities.js";
import MainScene from "./scenes/mainScene.js";

class App {
  currentScene;
  renderer;
  constructor() {
    if (!WebGL.isWebGL2Available()) {
      const warning = WebGL.getWebGL2ErrorMessage();
      document.body.appendChild(warning);
    }
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(Settings.WIDTH, Settings.HEIGHT);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
    this.renderer = renderer;

    const scene = new MainScene();
    this.currentScene = scene;

    document.body.appendChild(
      XRButton.createButton(renderer, {
        optionalFeatures: ["depth-sensing"],
        depthSensing: {
          usagePreference: ["gpu-optimized"],
          dataFormatPreference: [],
        },
      }),
    );
    const controls = new OrbitControls(scene.camera, renderer.domElement);
  }

  start() {
    this.renderer.render(this.currentScene.scene, this.currentScene.camera);
    this.renderer.setAnimationLoop(
      this.currentScene.createAnimationLoop(this.renderer),
    );
    window.addEventListener("resize", () => this.onResize());
  }

  onResize() {
    updateSettings();
    this.currentScene.camera.aspect = Settings.ASPECT;
    this.currentScene.camera.updateProjectionMatrix();
    this.renderer.setSize(Settings.WIDTH, Settings.HEIGHT);
  }
}

export { App };
