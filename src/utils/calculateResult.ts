import { UserAnswers } from '../types';

export const calculateMBTIType = (answers: UserAnswers): string => {
  // Initialize counters for each dimension
  let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;
  
  // Count the answers
  Object.values(answers).forEach(answer => {
    switch (answer) {
      case 'E': e++; break;
      case 'I': i++; break;
      case 'S': s++; break;
      case 'N': n++; break;
      case 'T': t++; break;
      case 'F': f++; break;
      case 'J': j++; break;
      case 'P': p++; break;
    }
  });
  
  // Determine the type for each dimension
  const firstLetter = e > i ? 'E' : 'I';
  const secondLetter = s > n ? 'S' : 'N';
  const thirdLetter = t > f ? 'T' : 'F';
  const fourthLetter = j > p ? 'J' : 'P';
  
  // Combine to get the MBTI type
  return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
};