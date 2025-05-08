import { Question } from '../types';
//Questions IE
export const questions: Question[] = [
  {
    id: 1,
    text: "It's Friday night! What are you most likely doing?",
    category: 'EI',
    options: [
      { text: "Hosting a party or hanging out with a big group of friends", value: 'E_1' },
      { text: "Chilling with 1-2 close friends or enjoying some me-time", value: 'I_1' },
      { text: "Exploring a new social event or networking opportunity", value: 'E_2' },
      { text: "Reading a book, watching a movie, or pursuing a solo hobby", value: 'I_2' }
    ]
  },
  {
    id: 2,
    text: "Your social media feed is mostly filled with:",
    category: 'EI',
    options: [
      { text: "People doing challenges with friends and group activities", value: 'E_1' },
      { text: "Aesthetic content, deep thoughts, or niche hobbies", value: 'I_1' },
      { text: "Funny skits or trending memes shared by creators", value: 'E_2' },
      { text: "Educational content or tutorials on personal interests", value: 'I_2' }
    ]
  },
  {
    id: 3,
    text: "When learning something new, you prefer:",
    category: 'SN',
    options: [
      { text: "Clear, step-by-step instructions and practical examples", value: 'S_1' },
      { text: "Understanding the big picture and exploring possibilities", value: 'N_1' },
      { text: "Hands-on practice and real-world applications", value: 'S_2' },
      { text: "Theoretical discussions and abstract concepts", value: 'N_2' }
    ]
  },
  {
    id: 4,
    text: "Your camera roll is full of:",
    category: 'SN',
    options: [
      { text: "Photos documenting real moments and experiences", value: 'S_1' },
      { text: "Random screenshots of ideas, memes, and aesthetic inspiration", value: 'N_1' },
      { text: "Organized albums of events and milestones", value: 'S_2' },
      { text: "Creative edits, abstract shots, or experimental photography", value: 'N_2' }
    ]
  },
  {
    id: 5,
    text: "When your friend is going through a tough time, you:",
    category: 'TF',
    options: [
      { text: "Offer practical advice on how to move forward", value: 'T_1' },
      { text: "Focus on validating their feelings and emotional support", value: 'F_1' },
      { text: "Help them analyze what went wrong and how to improve", value: 'T_2' },
      { text: "Spend time with them to cheer them up and show empathy", value: 'F_2' }
    ]
  },
  {
    id: 6,
    text: "You're more likely to binge-watch:",
    category: 'TF',
    options: [
      { text: "Documentaries, sci-fi, or shows with complex plots", value: 'T_1' },
      { text: "Dramas, rom-coms, or shows with deep character development", value: 'F_1' },
      { text: "Crime thrillers or investigative series", value: 'T_2' },
      { text: "Feel-good comedies or heartwarming stories", value: 'F_2' }
    ]
  },
  {
    id: 7,
    text: "Your approach to assignments and deadlines is:",
    category: 'JP',
    options: [
      { text: "Creating a schedule and finishing ahead of time", value: 'J_1' },
      { text: "Flexible timing and often working right up to the deadline", value: 'P_1' },
      { text: "Breaking tasks into smaller, manageable chunks", value: 'J_2' },
      { text: "Procrastinating but pulling through with last-minute creativity", value: 'P_2' }
    ]
  },
  {
    id: 8,
    text: "Your ideal weekend is:",
    category: 'JP',
    options: [
      { text: "Planned out with activities and a rough schedule", value: 'J_1' },
      { text: "Spontaneous and going with the flow", value: 'P_1' },
      { text: "Balancing relaxation with productive tasks", value: 'J_2' },
      { text: "Exploring new places or trying something unplanned", value: 'P_2' }
    ]
  },
  {
    id: 9,
    text: "When faced with a complex problem, you prefer to:",
    category: 'SN',
    options: [
      { text: "Break it down into smaller, manageable parts", value: 'S_1' },
      { text: "Look for patterns and connections to broader concepts", value: 'N_1' },
      { text: "Focus on the immediate, practical implications", value: 'S_2' },
      { text: "Brainstorm innovative, unconventional solutions", value: 'N_2' }
    ]
  },
  {
    id: 10,
    text: "In a group project, you're most likely to:",
    category: 'EI',
    options: [
      { text: "Take the lead and coordinate team efforts", value: 'E_1' },
      { text: "Work independently on your assigned tasks", value: 'I_1' },
      { text: "Facilitate group discussions and brainstorming sessions", value: 'E_2' },
      { text: "Provide thoughtful input when asked", value: 'I_2' }
    ]
  },
  {
    id: 11,
    text: "When making decisions, you typically:",
    category: 'TF',
    options: [
      { text: "Analyze the facts and logical consequences", value: 'T_1' },
      { text: "Consider how it will affect people and relationships", value: 'F_1' },
      { text: "Weigh the pros and cons objectively", value: 'T_2' },
      { text: "Trust your gut feeling and personal values", value: 'F_2' }
    ]
  },
  {
    id: 12,
    text: "Your workspace is usually:",
    category: 'JP',
    options: [
      { text: "Neat, organized, and clutter-free", value: 'J_1' },
      { text: "Creative chaos with everything within reach", value: 'P_1' },
      { text: "Structured with labeled folders and tools", value: 'J_2' },
      { text: "A mix of organized and spontaneous elements", value: 'P_2' }
    ]
  },
  {
    id: 13,
    text: "When starting a new project, you prefer to:",
    category: 'SN',
    options: [
      { text: "Follow established methods and best practices", value: 'S_1' },
      { text: "Experiment with new approaches and innovative ideas", value: 'N_1' },
      { text: "Focus on practical, achievable goals", value: 'S_2' },
      { text: "Explore multiple possibilities and potential outcomes", value: 'N_2' }
    ]
  },
  {
    id: 14,
    text: "In a conversation, you're more likely to:",
    category: 'EI',
    options: [
      { text: "Share your thoughts and experiences openly", value: 'E_1' },
      { text: "Listen attentively and reflect before speaking", value: 'I_1' },
      { text: "Engage in lively debates and discussions", value: 'E_2' },
      { text: "Observe group dynamics and contribute selectively", value: 'I_2' }
    ]
  },
  {
    id: 15,
    text: "When giving feedback, you tend to:",
    category: 'TF',
    options: [
      { text: "Be direct and focus on areas for improvement", value: 'T_1' },
      { text: "Start with positives and phrase critiques gently", value: 'F_1' },
      { text: "Provide objective, data-driven assessments", value: 'T_2' },
      { text: "Consider the person's feelings and potential reactions", value: 'F_2' }
    ]
  },
  {
    id: 16,
    text: "Your approach to planning a trip is:",
    category: 'JP',
    options: [
      { text: "Creating a detailed itinerary with scheduled activities", value: 'J_1' },
      { text: "Having a general idea and figuring it out as you go", value: 'P_1' },
      { text: "Researching thoroughly and booking in advance", value: 'J_2' },
      { text: "Leaving room for spontaneous adventures and detours", value: 'P_2' }
    ]
  },
  {
    id: 17,
    text: "When solving a puzzle, you typically:",
    category: 'SN',
    options: [
      { text: "Follow a systematic approach, piece by piece", value: 'S_1' },
      { text: "Look for patterns and try unconventional methods", value: 'N_1' },
      { text: "Focus on the details and physical characteristics", value: 'S_2' },
      { text: "Visualize the big picture and work backwards", value: 'N_2' }
    ]
  },
  {
    id: 18,
    text: "At a party, you're most likely to:",
    category: 'EI',
    options: [
      { text: "Mingle with various groups and meet new people", value: 'E_1' },
      { text: "Stick with a small group of familiar faces", value: 'I_1' },
      { text: "Be the life of the party, entertaining others", value: 'E_2' },
      { text: "Find a quiet corner for deeper one-on-one chats", value: 'I_2' }
    ]
  },
  {
    id: 19,
    text: "When faced with a moral dilemma, you tend to:",
    category: 'TF',
    options: [
      { text: "Analyze the situation objectively and logically", value: 'T_1' },
      { text: "Consider the impact on people and personal values", value: 'F_1' },
      { text: "Refer to established rules and principles", value: 'T_2' },
      { text: "Follow your heart and what feels right", value: 'F_2' }
    ]
  },
  {
    id: 20,
    text: "Your approach to a new hobby is:",
    category: 'JP',
    options: [
      { text: "Setting clear goals and creating a learning plan", value: 'J_1' },
      { text: "Jumping in and learning through trial and error", value: 'P_1' },
      { text: "Researching techniques and best practices first", value: 'J_2' },
      { text: "Exploring different aspects based on current interests", value: 'P_2' }
    ]
  },
  {
    id: 21,
    text: "When reading, you prefer books that:",
    category: 'SN',
    options: [
      { text: "Describe realistic scenarios and practical information", value: 'S_1' },
      { text: "Explore abstract ideas and theoretical concepts", value: 'N_1' },
      { text: "Provide detailed descriptions and factual accounts", value: 'S_2' },
      { text: "Offer metaphorical narratives and symbolic meanings", value: 'N_2' }
    ]
  },
  {
    id: 22,
    text: "In a group setting, you're most comfortable:",
    category: 'EI',
    options: [
      { text: "Leading discussions and organizing activities", value: 'E_1' },
      { text: "Observing and contributing when you have something specific to add", value: 'I_1' },
      { text: "Engaging in lively debates and sharing stories", value: 'E_2' },
      { text: "Listening attentively and reflecting on others' ideas", value: 'I_2' }
    ]
  },
  {
    id: 23,
    text: "When giving a presentation, you focus on:",
    category: 'TF',
    options: [
      { text: "Presenting clear, logical arguments and data", value: 'T_1' },
      { text: "Connecting with the audience and sharing personal anecdotes", value: 'F_1' },
      { text: "Providing a structured, fact-based analysis", value: 'T_2' },
      { text: "Inspiring and motivating the audience emotionally", value: 'F_2' }
    ]
  },
  {
    id: 24,
    text: "Your ideal work environment is:",
    category: 'JP',
    options: [
      { text: "Structured with clear expectations and deadlines", value: 'J_1' },
      { text: "Flexible with room for spontaneity and creativity", value: 'P_1' },
      { text: "Organized with well-defined roles and responsibilities", value: 'J_2' },
      { text: "Adaptable with the freedom to explore new ideas", value: 'P_2' }
    ]
  },
  {
    id: 25,
    text: "When learning about history, you're most interested in:",
    category: 'SN',
    options: [
      { text: "Specific events and their chronological order", value: 'S_1' },
      { text: "Patterns across different eras and potential future implications", value: 'N_1' },
      { text: "Detailed accounts of how people lived in the past", value: 'S_2' },
      { text: "Theoretical models explaining historical developments", value: 'N_2' }
    ]
  },
  {
    id: 26,
    text: "In a debate, you're more likely to:",
    category: 'EI',
    options: [
      { text: "Actively participate and express your views confidently", value: 'E_1' },
      { text: "Listen carefully and formulate your thoughts before speaking", value: 'I_1' },
      { text: "Enjoy the back-and-forth exchange of ideas", value: 'E_2' },
      { text: "Prefer to research and write about the topic afterwards", value: 'I_2' }
    ]
  },
  {
    id: 27,
    text: "When comforting a friend, you tend to:",
    category: 'TF',
    options: [
      { text: "Offer practical solutions to their problems", value: 'T_1' },
      { text: "Provide emotional support and empathy", value: 'F_1' },
      { text: "Help them analyze the situation objectively", value: 'T_2' },
      { text: "Share personal experiences to show understanding", value: 'F_2' }
    ]
  },
  {
    id: 28,
    text: "Your approach to personal goals is:",
    category: 'JP',
    options: [
      { text: "Setting specific targets with deadlines", value: 'J_1' },
      { text: "Having general aspirations that evolve over time", value: 'P_1' },
      { text: "Creating detailed action plans and tracking progress", value: 'J_2' },
      { text: "Adapting goals based on changing interests and opportunities", value: 'P_2' }
    ]
  },
  {
    id: 29,
    text: "When faced with a new technology, you typically:",
    category: 'SN',
    options: [
      { text: "Learn the basic functions and practical applications", value: 'S_1' },
      { text: "Explore all features and imagine potential future uses", value: 'N_1' },
      { text: "Follow the user manual step-by-step", value: 'S_2' },
      { text: "Experiment with different settings and combinations", value: 'N_2' }
    ]
  },
  {
    id: 30,
    text: "In a team project, you prefer to:",
    category: 'EI',
    options: [
      { text: "Collaborate closely with others throughout the process", value: 'E_1' },
      { text: "Work independently and combine efforts at the end", value: 'I_1' },
      { text: "Facilitate group brainstorming and decision-making", value: 'E_2' },
      { text: "Contribute your ideas through written communication", value: 'I_2' }
    ]
  }
];
