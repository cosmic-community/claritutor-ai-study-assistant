const fs = require('fs');
const path = require('path');

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      injectScript(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('dashboard-console-capture.js')) {
        if (content.includes('</head>')) {
          content = content.replace('</head>', `${scriptTag}\n</head>`);
        } else if (content.includes('<body>')) {
          content = content.replace('<body>', `<body>\n${scriptTag}`);
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`Injected console capture into ${filePath}`);
      }
    }
  });
}

// Start from the build output directory
const buildDirs = ['.next', 'dist', 'build', 'out'];
buildDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Injecting console capture script into ${dir}...`);
    injectScript(dir);
  }
});

console.log('Console capture injection complete!');