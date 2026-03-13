import fs from 'fs';

const data = fs.readFileSync('src/data/initialQuiz.ts', 'utf-8');

// Find the start of OBE Chapter 1
const obeStart = data.indexOf('// --- CHAPTER 1: What is Organizational Behavior? (50 questions) ---');
const obeEnd = data.indexOf('// --- CHAPTER 2: Diversity in Organizations (50 questions) ---');

if (obeStart !== -1 && obeEnd !== -1) {
  const obeQuestionsStr = data.substring(obeStart, obeEnd);
  
  // We need to extract the questions and change their id and subjectId
  // It's easier to just replace the id and add subjectId: "ibm"
  
  let newQuestionsStr = obeQuestionsStr.replace(/id: "q1/g, 'id: "ibm_q1');
  newQuestionsStr = newQuestionsStr.replace(/chapter: 1,/g, 'chapter: 1,\n    subjectId: "ibm",');
  
  // Now we need to insert this into the IBM section
  const ibmStart = data.indexOf('// --- IBM CHAPTER 1 ---');
  const ibmEnd = obeStart;
  
  if (ibmStart !== -1) {
    const newData = data.substring(0, ibmStart) + 
                    '// --- IBM CHAPTER 1 ---\n' + 
                    newQuestionsStr + '\n  ' +
                    data.substring(obeStart);
                    
    fs.writeFileSync('src/data/initialQuiz.ts', newData);
    console.log('Done copying questions');
  }
}
