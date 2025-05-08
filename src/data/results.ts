import { MBTIResult } from '../types';

//Result Rendering Page
export const mbtiResults: Record<string, MBTIResult> = {
  'ISTJ': {
    type: 'ISTJ',
    description: 'The Logistician: Practical, fact-minded, and reliable. ISTJs are organized, responsible, and detail-oriented individuals who value tradition and order.',
    strengths: [
      'Honest and direct',
      'Strong-willed and dutiful',
      'Very responsible',
      'Calm and practical',
      'Create and enforce order',
      'Jacks-of-all-trades'
    ],
    weaknesses: [
      'Stubborn',
      'Insensitive',
      'Always by the book',
      'Judgmental',
      'Often unreasonably blame themselves'
    ],
    famousPeople: [
      'Queen Elizabeth II',
      'Natalie Portman',
      'Jeff Bezos',
      'George Washington'
    ],
    emoji: '📊',
color: '#2F4F4F',
  },
  'ISFJ': {
    type: 'ISFJ',
    description: 'The Defender: Dedicated, warm, and protective. ISFJs are caring individuals who take their responsibilities seriously and have a strong desire to protect and serve others.',
    strengths: [
      'Supportive',
      'Reliable and patient',
      'Imaginative and observant',
      'Enthusiastic',
      'Hardworking and devoted',
      'Good practical skills'
    ],
    weaknesses: [
      'Shy and overly humble',
      'Take things too personally',
      'Repress their feelings',
      'Overload themselves',
      'Reluctant to change'
    ],
    famousPeople: [
      'Mother Teresa',
      'Kate Middleton',
      'Rosa Parks',
      'Christopher Walken'
    ],
    emoji: '🛡️',
color: '#8FBC8F',
  },
  'INFJ': {
    type: 'INFJ',
    description: 'The Advocate: Quiet, mystical, and insightful. INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential.',
    strengths: [
      'Creative',
      'Insightful',
      'Principled',
      'Passionate and altruistic',
      'Idealistic',
      'Deep and complex thinkers'
    ],
    weaknesses: [
      'Sensitive to criticism',
      'Extremely private',
      'Perfectionist',
      'Always need to have a cause',
      'Can burn out easily'
    ],
    famousPeople: [
      'Martin Luther King Jr.',
      'Nelson Mandela',
      'Lady Gaga',
      'Plato'
    ],
    emoji: '🦄',
color: '#9370DB',
  },
  'INTJ': {
    type: 'INTJ',
    description: 'The Architect: Imaginative and strategic thinkers, with a plan for everything. INTJs are innovative problem-solvers driven by their own original ideas to achieve improvements.',
    strengths: [
      'Quick, imaginative, and strategic mind',
      'High self-confidence',
      'Independent and decisive',
      'Hard-working and determined',
      'Open-minded',
      'Jack-of-all-trades'
    ],
    weaknesses: [
      'Arrogant',
      'Judgmental',
      'Overly analytical',
      'Loathe highly structured environments',
      'Clueless in romance'
    ],
    famousPeople: [
      'Elon Musk',
      'Friedrich Nietzsche',
      'Michelle Obama',
      'Christopher Nolan'
    ],
    emoji: '🧠',
color: '#7B68EE',
  },
  // ... (continue with the remaining 12 personality types)
  'ISTP': {
    type: 'ISTP',
    description: 'The Virtuoso: Practical and hands-on problem-solvers. ISTPs are flexible and adaptable individuals who enjoy understanding how things work and excel at finding logical solutions.',
    strengths: [
      'Optimistic and energetic',
      'Creative and practical',
      'Spontaneous and rational',
      'Know how to prioritize',
      'Great in a crisis',
      'Relaxed'
    ],
    weaknesses: [
      'Stubborn',
      'Insensitive',
      'Private and reserved',
      'Easily bored',
      'Dislike commitment',
      'Risk-prone'
    ],
    famousPeople: [
      'Bear Grylls',
      'Clint Eastwood',
      'Milla Jovovich',
      'Tom Cruise'
    ],
    emoji: '🔧',
color: '#708090',
  },
  'ISFP': {
    type: 'ISFP',
    description: 'The Adventurer: Flexible and charming artists. ISFPs are sensitive, creative individuals who live in the moment and enjoy exploring new things, valuing their personal freedom and space.',
    strengths: [
      'Charming',
      'Sensitive to others',
      'Imaginative',
      'Passionate',
      'Curious',
      'Artistic'
    ],
    weaknesses: [
      'Fiercely independent',
      'Unpredictable',
      'Easily stressed',
      'Overly competitive',
      'Fluctuating self-esteem',
      'Difficult to get to know'
    ],
    famousPeople: [
      'Britney Spears',
      'Lana Del Rey',
      'Michael Jackson',
      'Frida Kahlo'
    ],
    emoji: '🎨',
color: '#FF7F50',
  },
  'INFP': {
    type: 'INFP',
    description: 'The Mediator: Idealistic and creative dreamers. INFPs are compassionate individuals driven by their core values and beliefs, often seeking to make the world a better place.',
    strengths: [
      'Empathetic',
      'Generous',
      'Open-minded',
      'Creative',
      'Passionate',
      'Idealistic'
    ],
    weaknesses: [
      'Unrealistic',
      'Self-isolating',
      'Unfocused',
      'Emotionally vulnerable',
      'Desperate to please',
      'Self-critical'
    ],
    famousPeople: [
      'William Shakespeare',
      'J.R.R. Tolkien',
      'Johnny Depp',
      'Audrey Hepburn'
    ],
    emoji: '🌈',
color: '#FF69B4',
  },
  'INTP': {
    type: 'INTP',
    description: 'The Logician: Inventive and curious thinkers. INTPs are logical and innovative individuals who enjoy theoretical and abstract concepts, constantly seeking to expand their knowledge.',
    strengths: [
      'Analytical',
      'Original',
      'Open-minded',
      'Curious',
      'Objective',
      'Honest'
    ],
    weaknesses: [
      'Disconnected',
      'Insensitive',
      'Absent-minded',
      'Condescending',
      'Loathe rules and guidelines',
      'Second-guess themselves'
    ],
    famousPeople: [
      'Albert Einstein',
      'Bill Gates',
      'Isaac Newton',
      'Marie Curie'
    ],
    emoji: '🔬',
color: '#4682B4',
  },
  'ESTP': {
    type: 'ESTP',
    description: 'The Entrepreneur: Energetic and action-oriented doers. ESTPs are bold and practical individuals who enjoy living on the edge and excel at thinking on their feet in dynamic situations.',
    strengths: [
      'Bold',
      'Rational and practical',
      'Original',
      'Perceptive',
      'Direct',
      'Sociable'
    ],
    weaknesses: [
      'Impatient',
      'Risk-prone',
      'Unstructured',
      'Defiant',
      'May miss the bigger picture',
      'Insensitive'
    ],
    famousPeople: [
      'Donald Trump',
      'Madonna',
      'Ernest Hemingway',
      'Jack Nicholson'
    ],
    emoji: '🚀',
color: '#FF4500',
  },
  'ESFP': {
    type: 'ESFP',
    description: 'The Entertainer: Spontaneous and enthusiastic performers. ESFPs are vivacious and fun-loving individuals who enjoy being the center of attention and living in the present moment.',
    strengths: [
      'Bold',
      'Original',
      'Aesthetics and showmanship',
      'Practical',
      'Observant',
      'Excellent people skills'
    ],
    weaknesses: [
      'Sensitive',
      'Conflict-averse',
      'Easily bored',
      'Poor long-term planners',
      'Unfocused',
      'Dislike abstract theories'
    ],
    famousPeople: [
      'Marilyn Monroe',
      'Jamie Oliver',
      'Will Smith',
      'Adele'
    ],
    emoji: '🎉',
color: '#FF1493',
  },
  'ENFP': {
    type: 'ENFP',
    description: 'The Campaigner: Enthusiastic and creative free spirits. ENFPs are charismatic and idealistic individuals who are driven by their values and enjoy exploring new ideas and possibilities.',
    strengths: [
      'Curious',
      'Observant',
      'Energetic and enthusiastic',
      'Excellent communicators',
      'Know how to relax',
      'Very popular and friendly'
    ],
    weaknesses: [
      'Poor practical skills',
      'Find it difficult to focus',
      'Overthink things',
      'Get stressed easily',
      'Highly emotional',
      'Independent to a fault'
    ],
    famousPeople: [
      'Robin Williams',
      'Robert Downey Jr.',
      'Walt Disney',
      'Ellen DeGeneres'
    ],
    emoji: '✨',
color: '#FF6347',
  },
  'ENTP': {
    type: 'ENTP',
    description: 'The Debater: Quick-witted and audacious challengers. ENTPs are innovative and strategic thinkers who enjoy intellectual debates and are always looking for creative solutions to complex problems.',
    strengths: [
      'Knowledgeable',
      'Quick thinkers',
      'Original',
      'Excellent brainstormers',
      'Charismatic',
      'Energetic'
    ],
    weaknesses: [
      'Very argumentative',
      'Insensitive',
      'Intolerant',
      'Can find it difficult to focus',
      'Dislike practical matters',
      'Struggle with routine'
    ],
    famousPeople: [
      'Leonardo da Vinci',
      'Thomas Edison',
      'Steve Jobs',
      'Mark Twain'
    ],
    emoji: '🎭',
color: '#FF8C00',
  },
  'ESTJ': {
    type: 'ESTJ',
    description: 'The Executive: Efficient and structured leaders. ESTJs are practical and traditional individuals who value order and enjoy taking charge to get things done in a systematic way.',
    strengths: [
      'Dedicated',
      'Strong-willed',
      'Direct and honest',
      'Loyal, patient and reliable',
      'Excellent organizers',
      'Good at creating and enforcing order'
    ],
    weaknesses: [
      'Inflexible and stubborn',
      'Uncomfortable with unconventional situations',
      'Judgmental',
      'Too focused on social status',
      'Difficulty expressing emotion'
    ],
    famousPeople: [
      'Judge Judy',
      'Alec Baldwin',
      'Sonia Sotomayor',
      'Frank Sinatra'
    ],
    emoji: '💼',
color: '#8B4513',
  },
  'ESFJ': {
    type: 'ESFJ',
    description: 'The Consul: Caring and social helpers. ESFJs are warm-hearted and conscientious individuals who enjoy taking care of others and maintaining social harmony in their communities.',
    strengths: [
      'Strong practical skills',
      'Strong sense of duty',
      'Very loyal',
      'Sensitive and warm',
      'Good at connecting with others',
      'Strong organizational skills'
    ],
    weaknesses: [
      'Worried about their social status',
      'Inflexible',
      'Reluctant to innovate or improvise',
      'Vulnerable to criticism',
      'Often too needy',
      'Too selfless'
    ],
    famousPeople: [
      'Taylor Swift',
      'Bill Clinton',
      'Jennifer Garner',
      'Sam Walton'
    ],
    emoji: '🤝',
color: '#20B2AA',
  },
  'ENFJ': {
    type: 'ENFJ',
    description: 'The Protagonist: Charismatic and inspiring leaders. ENFJs are passionate and altruistic individuals who have a natural ability to inspire and motivate others towards a common goal.',
    strengths: [
      'Tolerant',
      'Reliable',
      'Charismatic',
      'Altruistic',
      'Natural leaders',
      'Excellent communicators'
    ],
    weaknesses: [
      'Overly idealistic',
      'Too selfless',
      'Too sensitive',
      'Fluctuating self-esteem',
      'Struggle to make tough decisions',
      'Tendency to be overly controlling'
    ],
    famousPeople: [
      'Barack Obama',
      'Oprah Winfrey',
      'Nelson Mandela',
      'Emma Watson'
    ],
    emoji: '🌟',
color: '#FFD700',
  },
  'ENTJ': {
    type: 'ENTJ',
    description: 'The Commander: Bold and imaginative leaders. ENTJs are strategic thinkers with a natural talent for leadership, driven by their desire to turn ideas into action and achieve long-term goals.',
    strengths: [
      'Efficient',
      'Energetic',
      'Self-confident',
      'Strong-willed',
      'Strategic thinkers',
      'Charismatic and inspiring'
    ],
    weaknesses: [
      'Stubborn and dominant',
      'Intolerant',
      'Impatient',
      'Arrogant',
      'Poor handling of emotions',
      'Cold and ruthless'
    ],
    famousPeople: [
      'Margaret Thatcher',
      'Franklin D. Roosevelt',
      'Gordon Ramsay',
      'Steve Jobs'
    ],
    emoji: '👑',
color: '#B22222',
  }
};
