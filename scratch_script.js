const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/solutions-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const generateSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const regex = /(subCategories:\s*\[\s*)([\s\S]*?)(\],)/g;
content = content.replace(regex, (match, prefix, items, suffix) => {
    const updatedItems = items.replace(/\{\s*title:\s*"(.*?)",\s*description:\s*"(.*?)"\s*\}/g, (m, title, desc) => {
        return `{\n        slug: "${generateSlug(title)}",\n        title: "${title}",\n        description: "${desc}"\n      }`;
    });
    return prefix + updatedItems + suffix;
});

fs.writeFileSync(filePath, content);
console.log('Done!');
