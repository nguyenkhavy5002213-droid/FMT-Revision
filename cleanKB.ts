import fs from 'fs';

const data = fs.readFileSync('src/data/knowledgeBase.ts', 'utf-8');

// We want to keep ...ibmChapter1 and everything that is NOT subjectId: "ibm"
// This is tricky because the sections are just objects in an array.

const lines = data.split('\n');
let newLines = [];
let inIBMSection = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('...ibmChapter1,')) {
    newLines.push(lines[i]);
    continue;
  }
  
  if (lines[i].includes('subjectId: "ibm",') && !lines[i].includes('...ibmChapter1,')) {
    // This is a section we want to remove, unless it's part of ibmChapter1
    // But ibmChapter1 is already included via ...ibmChapter1
    // So we should remove all sections that have subjectId: "ibm"
    inIBMSection = true;
    continue;
  }
  
  if (inIBMSection) {
    if (lines[i].includes('},')) {
      inIBMSection = false;
    }
    continue;
  }
  
  newLines.push(lines[i]);
}

fs.writeFileSync('src/data/knowledgeBase.ts', newLines.join('\n'));
console.log('Done cleaning knowledge base');
