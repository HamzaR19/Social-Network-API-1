const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const {emails, usernames} = require('./data');

connection.on(`error`, (err) => err)

connection.once(`open`, async () => {
    console.log(`Connected to database!`);
    await Users.deleteMany({});
    await Thoughts.deleteMany({});

    const users = [];
    for (let i = 0; i < 10; i++) {
        users.push({
            username: usernames[i],
            email: emails[i],
            
        });
            
        }
        await Users.insertMany(users);
        console.log(`Users seeded!`);
        process.exit(0);
    });
        
