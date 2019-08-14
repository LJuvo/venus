import { app, screen, BrowserWindow } from "electron";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import { enableLiveReload } from "electron-compile";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

// if (isDevMode) enableLiveReload();

const createWindow = async() => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        // width: 960,
        // height: 650,
        width: 400,
        height: 400,
        transparent: true,
        frame: false,
        useContentSize: true,
        alwaysOnTop: true //窗口是否总是显示在其他窗口之前
    });

    // const size = screen.getPrimaryDisplay().workAreaSize; //获取显示器的宽高
    // const winSize = mainWindow.getSize(); //获取窗口宽高
    // //设置窗口的位置 注意x轴要桌面的宽度 - 窗口的宽度
    // mainWindow.setPosition(size.width - winSize[0] - 20, size.height - winSize[1] - 20);

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    if (isDevMode) {
        await installExtension(VUEJS_DEVTOOLS);
        mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    mainWindow.setAlwaysOnTop(true, "screen-saver", 99999999999999);

    // mainWindow.setIgnoreMouseEvents(true)
};

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.