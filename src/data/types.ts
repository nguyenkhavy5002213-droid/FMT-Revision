export interface SubSection {
  id: string;
  title: string;
  content: string;
  example?: string;
}

export interface Section {
  id: string;
  chapter: number | string;
  subjectId?: string; // e.g., 'obe' or 'ibm'
  title: string;
  content?: string;
  subsections: SubSection[];
}

export interface QuizQuestion {
  id: string;
  chapter: number | string;
  subjectId?: string; // e.g., 'obe' or 'ibm'
  questionEn: string;
  questionVi: string;
  options: {
    A: { en: string; vi: string };
    B: { en: string; vi: string };
    C: { en: string; vi: string };
    D: { en: string; vi: string };
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationEn: string;
  explanationVi: string;
  relatedSectionId: string;
  topic: string;
}

export interface ChapterData {
  id: number | string;
  title: string;
  theory: Section[];
  quiz: QuizQuestion[];
}

export interface SubjectData {
  id: string;
  name: string;
  chapters: ChapterData[];
}
