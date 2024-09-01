import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Sky } from "three/addons/objects/Sky.js";

import Scene from "@/scene.js";

class MainScene extends Scene {
  static mesh = {
    skyLight: new THREE.HemisphereLight(0xffffff, 0x080820, 1),
    sky: new Sky(),
  };

  static loadOnInit = [
    {
      path: "/model.glb",
      isScene: false,
      onLoad: (gltf) => {},
      onProgress: (instance) => {},
      onError: (error) => {},
    },
  ];

  init() {
    this.camera.position.z = 2;
    this.camera.position.y = 1;
    this.loadModels();
    this.initSky();

    this.scene.add(...Object.values(MainScene.mesh));
  }

  update() {}

  initSky() {
    const sky = MainScene.mesh.sky;
    sky.scale.setScalar(450000);

    const phi = THREE.MathUtils.degToRad(90);
    const theta = THREE.MathUtils.degToRad(180);
    const sun = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
    sky.material.uniforms.sunPosition.value = sun;
  }

  loadModels() {
    const loader = new GLTFLoader();
    MainScene.loadOnInit.map((value) => {
      // Monads
      loader.load(
        value.path,
        (gltf) => {
          value.onLoad(gltf);
          if (value.isScene) {
            this.scene.add(gltf.scene);
            return;
          }
          gltf.scene.children.map((child) => {
            MainScene.mesh[child.name] = child;
            this.scene.add(child);
          });
        },
        (instance) => {
          value.onProgress(instance);
        },
        (error) => {
          value.onError(error);
          console.error(error);
        },
      );
    });
  }
}

export default MainScene;
