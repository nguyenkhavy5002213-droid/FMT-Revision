import fs from 'fs';

const data = fs.readFileSync('src/data/initialQuiz.ts', 'utf-8');

// Find the start of OBE Chapter 1
const obeStart = data.indexOf('// --- CHAPTER 1: What is Organizational Behavior? (50 questions) ---');

// Find the start of Chapter 5
const chapter5Start = data.indexOf('// --- CHAPTER 5: Personality and Values (50 questions) ---');

if (obeStart !== -1 && chapter5Start !== -1) {
  const obeQuestionsStr = data.substring(obeStart, chapter5Start);
  
  // We need to extract the questions and change their id and subjectId
  // It's easier to just replace the id and add subjectId: "ibm"
  
  let newQuestionsStr = obeQuestionsStr.replace(/id: "q1/g, 'id: "ibm_q1');
  newQuestionsStr = newQuestionsStr.replace(/chapter: 1,/g, 'chapter: 1,\n    subjectId: "ibm",');
  
  // Now we need to insert this into the IBM section
  const ibmStart = data.indexOf('// --- IBM CHAPTER 1 ---');
  
  if (ibmStart !== -1) {
    const newData = data.substring(0, ibmStart) + 
                    '// --- IBM CHAPTER 1 ---\n' + 
                    newQuestionsStr + '\n  ' +
                    data.substring(obeStart);
                    
    fs.writeFileSync('src/data/initialQuiz.ts', newData);
    console.log('Done copying questions');
  } else {
    console.log('IBM start not found');
  }
} else {
  console.log('OBE start or end not found');
}
