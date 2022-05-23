
const fspromise = require('fs/promises');
const path = require('path');
const myFirstFolder = path.join(__dirname, 'files');
const myLastFolder = path.join(__dirname, 'filesCopy');
async function copy() {
    await fspromise.mkdir(myLastFolder, { recursive: true });
    const contain = await fspromise.readdir(myFirstFolder);
    contain.forEach((el) => { 
      fspromise.copyFile(path.join(myFirstFolder, el), path.join(myLastFolder, el)) 
    });
    const toCopy = await fspromise.readdir(myLastFolder);
    toCopy.forEach((el) => {
    if(!contain.includes(el)) fspromise.rm(path.join(myLastFolder, el));
    console.log('Done');
});
}
copy();