const fs = require('fs');

module.exports = function() {

  let dir = fs.readdirSync('./_src/assets/icons/');
  let icons = [];

  for (let i = 0; i < dir.length; i++) {
    if (dir[i].includes('.svg')) {
      dir[i] = dir[i].replace('.svg', '');
      icons.push(dir[i]);
    }
  }
  return icons;
};