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

  


  
 
    const getRandom = (arr) => {
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    };

 
    
    module.exports = { emails, usernames,   getRandom };