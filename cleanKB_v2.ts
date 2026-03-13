import fs from 'fs';

const data = fs.readFileSync('src/data/knowledgeBase.ts', 'utf-8');

// The file structure is:
// export const knowledgeBase: Section[] = [
//   ...ibmChapter1,
//   {
//     id: "...",
//     chapter: ...,
//     subjectId: "ibm",
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
    // We need to backtrack and remove the opening '{'
    // The previous line should be '{'
    if (newLines[newLines.length - 1].trim() === '{') {
      newLines.pop();
    }
    continue;
  }
  
  if (inIBMSection) {
    if (lines[i].includes('},')) {
      inIBMSection = false;
      // Also remove the trailing comma if it's the last element of the object
      // This is getting complex.
    }
    continue;
  }
  
  newLines.push(lines[i]);
}

fs.writeFileSync('src/data/knowledgeBase.ts', newLines.join('\n'));
console.log('Done cleaning knowledge base');
