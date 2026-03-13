import fs from 'fs';

const data = fs.readFileSync('src/data/knowledgeBase.ts', 'utf-8');

// Find the start of OBE Chapter 1
const obeStart = data.indexOf('  {\n    id: "1.1",');
const chapter3Start = data.indexOf('  {\n    id: "3.1",');

if (obeStart !== -1 && chapter3Start !== -1) {
  const obeQuestionsStr = data.substring(obeStart, chapter3Start);
  
  // We need to extract the questions and change their id and subjectId
  // It's easier to just replace the id and add subjectId: "ibm"
  
  let newQuestionsStr = obeQuestionsStr.replace(/id: "1/g, 'id: "ibm_1');
  newQuestionsStr = newQuestionsStr.replace(/chapter: 1,/g, 'chapter: 1,\n    subjectId: "ibm",');
  
  // Now we need to insert this into the IBM section
  const ibmStart = data.indexOf('  ...ibmChapter1,');
  
  if (ibmStart !== -1) {
    const newData = data.substring(0, ibmStart) + 
                    '  ...ibmChapter1,\n' + 
                    newQuestionsStr + '\n' +
                    data.substring(ibmStart + '  ...ibmChapter1,'.length);
                    
    fs.writeFileSync('src/data/knowledgeBase.ts', newData);
    console.log('Done copying knowledge base');
  } else {
    console.log('IBM start not found');
  }
} else {
  console.log('OBE start or end not found');
}
