const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Premium_Product_Visuals');
const destDir = path.join(__dirname, 'public', 'products');

// Ensure destDir exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Remove old files
const oldFiles = fs.readdirSync(destDir);
for (const file of oldFiles) {
  fs.unlinkSync(path.join(destDir, file));
}

// Copy and rename new files
const newFiles = fs.readdirSync(srcDir);
for (const file of newFiles) {
  if (file.endsWith('.png')) {
    const newName = file.replace(/_premium_\d+/, '').replace(/_/g, '-');
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
  }
}
console.log('Files copied and renamed successfully.');
