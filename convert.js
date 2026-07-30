const fs = require('fs');
const path = require('path');

const phpDir = path.join(__dirname, '../includes');
const outDir = path.join(__dirname, 'components');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const files = fs.readdirSync(phpDir).filter(f => f.endsWith('.php') && f !== 'handle-enquiry.php');

function convertToJSX(html) {
  // Remove PHP blocks
  html = html.replace(/<\?php[\s\S]*?\?>/g, '');
  
  // class to className
  html = html.replace(/class="/g, 'className="');
  
  // for to htmlFor
  html = html.replace(/for="/g, 'htmlFor="');
  
  // Self close img, input, hr, br
  html = html.replace(/<img(.*?)(?<!\/)>/g, '<img$1 />');
  html = html.replace(/<input(.*?)(?<!\/)>/g, '<input$1 />');
  html = html.replace(/<br>/g, '<br />');
  html = html.replace(/<hr>/g, '<hr />');
  
  // Clean up any double closures like <img ... /> />
  html = html.replace(/\/> \/>/g, '/>');

  // Fix unclosed single tags inside attributes if any, but unlikely here.
  
  // Style strings to objects
  html = html.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(s => s.trim());
    const obj = {};
    rules.forEach(rule => {
      let [key, val] = rule.split(':');
      if (key && val) {
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        val = val.trim();
        obj[key] = val;
      }
    });
    return `style={${JSON.stringify(obj)}}`;
  });

  // add leading slash to image/ and icon/
  html = html.replace(/src="image\//g, 'src="/image/');
  html = html.replace(/src="icon\//g, 'src="/icon/');

  return html;
}

files.forEach(file => {
  const name = file.replace('.php', '');
  const ComponentName = name.charAt(0).toUpperCase() + name.slice(1);
  const content = fs.readFileSync(path.join(phpDir, file), 'utf8');
  
  let jsx = convertToJSX(content);
  
  const componentStr = `export default function ${ComponentName}() {
  return (
    <>
${jsx}
    </>
  );
}`;

  fs.writeFileSync(path.join(outDir, `${ComponentName}.jsx`), componentStr);
});

console.log('Conversion complete!');
