import * as settings from "../settings.json";

const Settings = {
  ...settings,
  ASPECT: window.innerWidth / window.innerHeight,
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
};

export default Settings;
