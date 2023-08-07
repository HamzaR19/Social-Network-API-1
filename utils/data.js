const usernames = [
    "CoolUser123",
    "AwesomeSauce",
    "TechGeek007",
    "HappyCamper",
    "CreativeMind",
    "GamerGirl98",
    "SuperCoder21",
    "NatureLover",
    "MusicFanatic",
    "TravelBuddy",
    "Bookworm_42",
    "FoodieExplorer",
    "FitnessGuru",
    "ArtisticSoul",
    "MovieBuff88",
    "SportsFan45",
    "AdventureSeeker",
    "Dreamer_55",
    "PetLoverForever",
    "Fashionista22",
    "ScienceNerd",
    "StarGazer_17",
    "BeachBum87",
    "YogaLover",
    "TechWhiz"
  ];
  const emails = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "alex.wilson@example.com",
    "emily.johnson@example.com",
    "michael.brown@example.com",
    "olivia.martin@example.com",
    "william.davis@example.com",
    "sophia.miller@example.com",
    "james.anderson@example.com",
    "emma.thompson@example.com",
    "david.thomas@example.com",
    "ava.jones@example.com",
    "joseph.white@example.com",
    "mia.harris@example.com",
    "charles.martin@example.com",
    "harper.clark@example.com",
    "samuel.lewis@example.com",
    "evelyn.hall@example.com",
    "benjamin.allen@example.com",
    "lily.green@example.com",
    "logan.carter@example.com",
    "grace.morris@example.com",
    "gabriel.jenkins@example.com",
    "chloe.roberts@example.com",
    "elijah.ward@example.com"
  ];
  const thoughts = [
    "Life is a journey, not a destination.",
    "Happiness comes from within.",
    "Every problem is an opportunity in disguise.",
    "The only constant in life is change.",
    "Kindness costs nothing but means everything.",
    "Success is the sum of small efforts repeated day in and day out.",
    "You are never too old to set a new goal or dream a new dream.",
    "The best way to predict the future is to create it.",
    "Challenges make life interesting; overcoming them makes life meaningful.",
    "Gratitude turns what we have into enough.",
    "Mistakes are proof that you are trying.",
    "The past cannot be changed, but the future is in your hands.",
    "A smile is the most beautiful curve on a person's face.",
    "Believe in yourself and you're halfway there.",
    "Life is short; make it sweet.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Every day is a new beginning.",
    "Don't wait for the perfect moment; take the moment and make it perfect.",
    "The secret to getting ahead is getting started.",
    "You are capable of more than you know.",
    "Your thoughts create your reality.",
    "The best is yet to come.",
    "Follow your heart but take your brain with you.",
    "Simplicity is the ultimate sophistication.",
    "Success is not about the destination but the journey.",
  ];
  
 
  
  
 
    const getRandom = (arr) => {
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    };

 
    
    module.exports = { emails, usernames, thoughts, getRandom };