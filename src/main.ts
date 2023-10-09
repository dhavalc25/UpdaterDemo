import { app, ipcMain } from "electron";
const express = require("express");
import { autoUpdater } from "electron-updater";

const SERVER_PORT = 3000;

app.on("ready", () => {
  // Check for updates
  autoUpdater.checkForUpdatesAndNotify();

  // Express server
  const server = express();

  server.get("/", (req: any, res: { send: (arg0: string) => void }) => {
    res.send("Hello from Electron App Web UI!");
  });

  server.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}`);
  });
});

app.on("window-all-closed", (event: { preventDefault: () => any }) =>
  event.preventDefault()
);
