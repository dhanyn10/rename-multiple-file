var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './rename-multiple-file-win32-ia32',
    outputDirectory: './installer',
    authors: 'Dhany Nurdiansyah',
    exe: 'rename-multiple-file.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));