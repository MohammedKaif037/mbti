import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "It's Friday night! What are you most likely doing?",
    category: 'EI',
    options: [
      { text: "Hosting a party or hanging out with a big group of friends", value: 'E' },
      { text: "Chilling with 1-2 close friends or enjoying some me-time", value: 'I' },
      { text: "Exploring a new social event or networking opportunity", value: 'E' },
      { text: "Reading a book, watching a movie, or pursuing a solo hobby", value: 'I' }
    ]
  },
  {
    id: 2,
    text: "Your social media feed is mostly filled with:",
    category: 'EI',
    options: [
      { text: "People doing challenges with friends and group activities", value: 'E' },
      { text: "Aesthetic content, deep thoughts, or niche hobbies", value: 'I' },
      { text: "Funny skits or trending memes shared by creators", value: 'E' },
      { text: "Educational content or tutorials on personal interests", value: 'I' }
    ]
  },
  {
    id: 3,
    text: "When learning something new, you prefer:",
    category: 'SN',
    options: [
      { text: "Clear, step-by-step instructions and practical examples", value: 'S' },
      { text: "Understanding the big picture and exploring possibilities", value: 'N' },
      { text: "Hands-on practice and real-world applications", value: 'S' },
      { text: "Theoretical discussions and abstract concepts", value: 'N' }
    ]
  },
  {
    id: 4,
    text: "Your camera roll is full of:",
    category: 'SN',
    options: [
      { text: "Photos documenting real moments and experiences", value: 'S' },
      { text: "Random screenshots of ideas, memes, and aesthetic inspiration", value: 'N' },
      { text: "Organized albums of events and milestones", value: 'S' },
      { text: "Creative edits, abstract shots, or experimental photography", value: 'N' }
    ]
  },
  {
    id: 5,
    text: "When your friend is going through a tough time, you:",
    category: 'TF',
    options: [
      { text: "Offer practical advice on how to move forward", value: 'T' },
      { text: "Focus on validating their feelings and emotional support", value: 'F' },
      { text: "Help them analyze what went wrong and how to improve", value: 'T' },
      { text: "Spend time with them to cheer them up and show empathy", value: 'F' }
    ]
  },
  {
    id: 6,
    text: "You're more likely to binge-watch:",
    category: 'TF',
    options: [
      { text: "Documentaries, sci-fi, or shows with complex plots", value: 'T' },
      { text: "Dramas, rom-coms, or shows with deep character development", value: 'F' },
      { text: "Crime thrillers or investigative series", value: 'T' },
      { text: "Feel-good comedies or heartwarming stories", value: 'F' }
    ]
  },
  {
    id: 7,
    text: "Your approach to assignments and deadlines is:",
    category: 'JP',
    options: [
      { text: "Creating a schedule and finishing ahead of time", value: 'J' },
      { text: "Flexible timing and often working right up to the deadline", value: 'P' },
      { text: "Breaking tasks into smaller, manageable chunks", value: 'J' },
      { text: "Procrastinating but pulling through with last-minute creativity", value: 'P' }
    ]
  },
  {
    id: 8,
    text: "Your ideal weekend is:",
    category: 'JP',
    options: [
      { text: "Planned out with activities and a rough schedule", value: 'J' },
      { text: "Spontaneous and going with the flow", value: 'P' },
      { text: "Balancing relaxation with productive tasks", value: 'J' },
      { text: "Exploring new places or trying something unplanned", value: 'P' }
    ]
  },
  {
    id: 9,
    text: "When faced with a complex problem, you prefer to:",
    category: 'SN',
    options: [
      { text: "Break it down into smaller, manageable parts", value: 'S' },
      { text: "Look for patterns and connections to broader concepts", value: 'N' },
      { text: "Focus on the immediate, practical implications", value: 'S' },
      { text: "Brainstorm innovative, unconventional solutions", value: 'N' }
    ]
  },
  {
    id: 10,
    text: "In a group project, you're most likely to:",
    category: 'EI',
    options: [
      { text: "Take the lead and coordinate team efforts", value: 'E' },
      { text: "Work independently on your assigned tasks", value: 'I' },
      { text: "Facilitate group discussions and brainstorming sessions", value: 'E' },
      { text: "Provide thoughtful input when asked", value: 'I' }
    ]
  },
  {
    id: 11,
    text: "When making decisions, you typically:",
    category: 'TF',
    options: [
      { text: "Analyze the facts and logical consequences", value: 'T' },
      { text: "Consider how it will affect people and relationships", value: 'F' },
      { text: "Weigh the pros and cons objectively", value: 'T' },
      { text: "Trust your gut feeling and personal values", value: 'F' }
    ]
  },
  {
    id: 12,
    text: "Your workspace is usually:",
    category: 'JP',
    options: [
      { text: "Neat, organized, and clutter-free", value: 'J' },
      { text: "Creative chaos with everything within reach", value: 'P' },
      { text: "Structured with labeled folders and tools", value: 'J' },
      { text: "A mix of organized and spontaneous elements", value: 'P' }
    ]
  },
  {
    id: 13,
    text: "When starting a new project, you prefer to:",
    category: 'SN',
    options: [
      { text: "Follow established methods and best practices", value: 'S' },
      { text: "Experiment with new approaches and innovative ideas", value: 'N' },
      { text: "Focus on practical, achievable goals", value: 'S' },
      { text: "Explore multiple possibilities and potential outcomes", value: 'N' }
    ]
  },
  {
    id: 14,
    text: "In a conversation, you're more likely to:",
    category: 'EI',
    options: [
      { text: "Share your thoughts and experiences openly", value: 'E' },
      { text: "Listen attentively and reflect before speaking", value: 'I' },
      { text: "Engage in lively debates and discussions", value: 'E' },
      { text: "Observe group dynamics and contribute selectively", value: 'I' }
    ]
  },
  {
    id: 15,
    text: "When giving feedback, you tend to:",
    category: 'TF',
    options: [
      { text: "Be direct and focus on areas for improvement", value: 'T' },
      { text: "Start with positives and phrase critiques gently", value: 'F' },
      { text: "Provide objective, data-driven assessments", value: 'T' },
      { text: "Consider the person's feelings and potential reactions", value: 'F' }
    ]
  },
  {
    id: 16,
    text: "Your approach to planning a trip is:",
    category: 'JP',
    options: [
      { text: "Creating a detailed itinerary with scheduled activities", value: 'J' },
      { text: "Having a general idea and figuring it out as you go", value: 'P' },
      { text: "Researching thoroughly and booking in advance", value: 'J' },
      { text: "Leaving room for spontaneous adventures and detours", value: 'P' }
    ]
  },
  {
    id: 17,
    text: "When solving a puzzle, you typically:",
    category: 'SN',
    options: [
      { text: "Follow a systematic approach, piece by piece", value: 'S' },
      { text: "Look for patterns and try unconventional methods", value: 'N' },
      { text: "Focus on the details and physical characteristics", value: 'S' },
      { text: "Visualize the big picture and work backwards", value: 'N' }
    ]
  },
  {
    id: 18,
    text: "At a party, you're most likely to:",
    category: 'EI',
    options: [
      { text: "Mingle with various groups and meet new people", value: 'E' },
      { text: "Stick with a small group of familiar faces", value: 'I' },
      { text: "Be the life of the party, entertaining others", value: 'E' },
      { text: "Find a quiet corner for deeper one-on-one chats", value: 'I' }
    ]
  },
  {
    id: 19,
    text: "When faced with a moral dilemma, you tend to:",
    category: 'TF',
    options: [
      { text: "Analyze the situation objectively and logically", value: 'T' },
      { text: "Consider the impact on people and personal values", value: 'F' },
      { text: "Refer to established rules and principles", value: 'T' },
      { text: "Follow your heart and what feels right", value: 'F' }
    ]
  },
  {
    id: 20,
    text: "Your approach to a new hobby is:",
    category: 'JP',
    options: [
      { text: "Setting clear goals and creating a learning plan", value: 'J' },
      { text: "Jumping in and learning through trial and error", value: 'P' },
      { text: "Researching techniques and best practices first", value: 'J' },
      { text: "Exploring different aspects based on current interests", value: 'P' }
    ]
  },
  {
    id: 21,
    text: "When reading, you prefer books that:",
    category: 'SN',
    options: [
      { text: "Describe realistic scenarios and practical information", value: 'S' },
      { text: "Explore abstract ideas and theoretical concepts", value: 'N' },
      { text: "Provide detailed descriptions and factual accounts", value: 'S' },
      { text: "Offer metaphorical narratives and symbolic meanings", value: 'N' }
    ]
  },
  {
    id: 22,
    text: "In a group setting, you're most comfortable:",
    category: 'EI',
    options: [
      { text: "Leading discussions and organizing activities", value: 'E' },
      { text: "Observing and contributing when you have something specific to add", value: 'I' },
      { text: "Engaging in lively debates and sharing stories", value: 'E' },
      { text: "Listening attentively and reflecting on others' ideas", value: 'I' }
    ]
  },
  {
    id: 23,
    text: "When giving a presentation, you focus on:",
    category: 'TF',
    options: [
      { text: "Presenting clear, logical arguments and data", value: 'T' },
      { text: "Connecting with the audience and sharing personal anecdotes", value: 'F' },
      { text: "Providing a structured, fact-based analysis", value: 'T' },
      { text: "Inspiring and motivating the audience emotionally", value: 'F' }
    ]
  },
  {
    id: 24,
    text: "Your ideal work environment is:",
    category: 'JP',
    options: [
      { text: "Structured with clear expectations and deadlines", value: 'J' },
      { text: "Flexible with room for spontaneity and creativity", value: 'P' },
      { text: "Organized with well-defined roles and responsibilities", value: 'J' },
      { text: "Adaptable with the freedom to explore new ideas", value: 'P' }
    ]
  },
  {
    id: 25,
    text: "When learning about history, you're most interested in:",
    category: 'SN',
    options: [
      { text: "Specific events and their chronological order", value: 'S' },
      { text: "Patterns across different eras and potential future implications", value: 'N' },
      { text: "Detailed accounts of how people lived in the past", value: 'S' },
      { text: "Theoretical models explaining historical developments", value: 'N' }
    ]
  },
  {
    id: 26,
    text: "In a debate, you're more likely to:",
    category: 'EI',
    options: [
      { text: "Actively participate and express your views confidently", value: 'E' },
      { text: "Listen carefully and formulate your thoughts before speaking", value: 'I' },
      { text: "Enjoy the back-and-forth exchange of ideas", value: 'E' },
      { text: "Prefer to research and write about the topic afterwards", value: 'I' }
    ]
  },
  {
    id: 27,
    text: "When comforting a friend, you tend to:",
    category: 'TF',
    options: [
      { text: "Offer practical solutions to their problems", value: 'T' },
      { text: "Provide emotional support and empathy", value: 'F' },
      { text: "Help them analyze the situation objectively", value: 'T' },
      { text: "Share personal experiences to show understanding", value: 'F' }
    ]
  },
  {
    id: 28,
    text: "Your approach to personal goals is:",
    category: 'JP',
    options: [
      { text: "Setting specific targets with deadlines", value: 'J' },
      { text: "Having general aspirations that evolve over time", value: 'P' },
      { text: "Creating detailed action plans and tracking progress", value: 'J' },
      { text: "Adapting goals based on changing interests and opportunities", value: 'P' }
    ]
  },
  {
    id: 29,
    text: "When faced with a new technology, you typically:",
    category: 'SN',
    options: [
      { text: "Learn the basic functions and practical applications", value: 'S' },
      { text: "Explore all features and imagine potential future uses", value: 'N' },
      { text: "Follow the user manual step-by-step", value: 'S' },
      { text: "Experiment with different settings and combinations", value: 'N' }
    ]
  },
  {
    id: 30,
    text: "In a team project, you prefer to:",
    category: 'EI',
    options: [
      { text: "Collaborate closely with others throughout the process", value: 'E' },
      { text: "Work independently and combine efforts at the end", value: 'I' },
      { text: "Facilitate group brainstorming and decision-making", value: 'E' },
      { text: "Contribute your ideas through written communication", value: 'I' }
    ]
  }
];
