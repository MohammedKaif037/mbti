export interface Question {
  id: number;
  text: string;
  options: Option[];
  category: 'EI' | 'SN' | 'TF' | 'JP'; // E/I, S/N, T/F, J/P
}

export interface Option {
  text: string;
  value: string; // 'E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'
}

export interface MBTIResult {
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  famousPeople: string[];
  emoji: string;
  color: string;
}

export interface UserAnswers {
  [questionId: number]: string;
}