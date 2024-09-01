import * as settings from "/settings.json";

const Settings = {
  ...settings,
  ASPECT: window.innerWidth / window.innerHeight,
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
};

const updateSettings = () => {
  Settings.ASPECT = window.innerWidth / window.innerHeight;
  Settings.WIDTH = window.innerWidth;
  Settings.HEIGHT = window.innerHeight;
};

export default Settings;

export { updateSettings };
