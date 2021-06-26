import { app } from "electron";

app.setAboutPanelOptions({
  applicationName: app.getName(), 
  applicationVersion: app.getVersion()
});

export default {
  label: "App",
  submenu: [
    {
      label: "About "+app.getName(),
      click: () => {
        app.showAboutPanel();
      }
    },
    {
      label: "Quit",
      accelerator: "CmdOrCtrl+Q",
      click: () => {
        app.quit();
      }
    }
  ]
};
