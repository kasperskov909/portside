#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const prismaDir = path.join(__dirname, '../generated/prisma');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace all .js imports with .ts (preserving the original quote style)
    content = content.replace(/from\s+(['"])(.+?)\.js\1/g, "from $1$2.ts$1");
    content = content.replace(/import\s+(['"])(.+?)\.js\1/g, "import $1$2.ts$1");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed imports in ${path.relative(process.cwd(), filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts')) {
      fixImportsInFile(filePath);
    }
  });
}

if (fs.existsSync(prismaDir)) {
  console.log('Fixing Prisma generated file imports...');
  walkDir(prismaDir);
  console.log('Done!');
} else {
  console.warn('Prisma directory not found:', prismaDir);
}
