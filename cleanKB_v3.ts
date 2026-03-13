import fs from 'fs';

const data = fs.readFileSync('src/data/knowledgeBase.ts', 'utf-8');

// The file structure is:
// export const knowledgeBase: Section[] = [
//   ...ibmChapter1,
//   {
//     id: "ibm_1.1",
//     ...
//   },
//   ...
// ];

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

// Fix the trailing comma issue
let finalLines = [];
for (let i = 0; i < newLines.length; i++) {
    if (newLines[i].trim() === '},' && newLines[i+1] && newLines[i+1].trim() === '},') {
        // This is a comma we might need to remove
    }
    finalLines.push(newLines[i]);
}

fs.writeFileSync('src/data/knowledgeBase.ts', finalLines.join('\n'));
console.log('Done cleaning knowledge base');
