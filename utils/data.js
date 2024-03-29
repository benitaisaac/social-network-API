//TODO: hardcode data for now and randomize later

const usersData = [
  { username: "john_doe", email: "john.doe@example.com" },
  { username: "jane_smith", email: "jane.smith@example.com" },
  { username: "mike_jones", email: "mike.jones@example.com" },
  { username: "sara_adams", email: "sara.adams@example.com" },
  { username: "chris_brown", email: "chris.brown@example.com" },
  { username: "lisa_davis", email: "lisa.davis@example.com" },
  { username: "alex_carter", email: "alex.carter@example.com" },
  { username: "emily_white", email: "emily.white@example.com" },
  { username: "ryan_miller", email: "ryan.miller@example.com" },
  { username: "olivia_taylor", email: "olivia.taylor@example.com" },
];

const thoughtData = [
  {
    thoughtText: "This is my first thought",
     username: "john_doe", 
    reactions: [{ reactionBody: "Interesting!", username: "john_doe" }],
  },
  {
    thoughtText: "Just thinking out loud",
     username: "jane_smith", 
    reactions: [{ reactionBody: "Agree!", username: "john_doe" }],
  },
  {
    thoughtText: "Deep thoughts on a rainy day",
     username: "mike_jones", 
    reactions: [{ reactionBody: "Thought-provoking!", username: "john_doe" }],
  },
  {
    thoughtText: "Reflecting on life",
     username: "sara_adams", 
    reactions: [{ reactionBody: "Deep!", username: "john_doe" }],
  },
  {
    thoughtText: "What a beautiful world",
     username: "lisa_davis", 
    reactions: [{ reactionBody: "Absolutely!", username: "john_doe" }],
  },
  {
    thoughtText: "Dreaming big",
     username: "chris_brown", 
    reactions: [{ reactionBody: "Inspiring!", username: "john_doe" }],
  },
  {
    thoughtText: "Lost in thought",
     username: "ryan_miller", 
    reactions: [{ reactionBody: "Lost in thought too!", username: "john_doe" }],
  },
  {
    thoughtText: "Contemplating the universe",
     username: "olivia_taylor", 
    reactions: [{ reactionBody: "Mind-blowing!", username: "john_doe" }],
  },
  {
    thoughtText: "Feeling grateful",
     username: "lisa_davis", 
    reactions: [{ reactionBody: "Gratitude is key!", username: "john_doe" }],
  },
  {
    thoughtText: "Thinking about the future",
     username: "alex_carter", 
    reactions: [
      { reactionBody: "Exciting times ahead!", username: "john_doe" },
    ],
  },
];

module.exports = { usersData, thoughtData };
