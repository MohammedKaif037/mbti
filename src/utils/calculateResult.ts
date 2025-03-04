import { UserAnswers } from '../types';

export const calculateMBTIType = (answers: UserAnswers): string => {
  let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;

  Object.values(answers).forEach(answer => {
    const type = answer.split('_')[0]; // Extracts 'E', 'I', 'S', 'N'...
    
    switch (type) {
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

  return `${e > i ? 'E' : 'I'}${s > n ? 'S' : 'N'}${t > f ? 'T' : 'F'}${j > p ? 'J' : 'P'}`;
};
