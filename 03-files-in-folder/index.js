const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'secret-folder');


fs.readdir(filePath, (error, filesInFolder) => {
  if(error) console.log(error.message);
  
  filesInFolder.forEach(el => {
    fs.stat((path.join(filePath, el)), (error, data) => {
      if(error) {
        console.log(error.message)
      }
      else if(data.isFile()) {
        const sizeF = data.size / 1024;
        const extName = path.extname(el);
        const fileName = path.basename(el, extName);
        console.log(`${fileName} - ${extName.replace('.', '')} - ${Math.round(sizeF.toFixed(3))}kb`);
      }
    });
  });
});