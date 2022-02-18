const readline = require('readline');

const input = process.stdin;
const output = process.stdout;


const rl = readline.createInterface({ input, output });

rl.question(`\nWhat's your name? Nicknames are also acceptable :) `, (name) => {
  // ask name
  rl.question(`What's an activity you like doing? `, (activity) => {
    // ask favorit activity
    rl.question(`What do you listen to while ${activity}? `, (music) => {
    // ask favorit music
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
      // ask favorit meal
        rl.question(`What's your favourite thing to eat for ${meal}?  `, (food) => {
        // ask favorit food
          rl.question(`Which sport is your absolute favourite?  `, (sport) => {
          // ask favorit sport
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!  `, (superpower) => {
            // ask superpower
              console.log(`\n${name}, thank you for your time.
  We create a nice profile for you, hope you enjoy!\n\n\n`);

              console.log(`  ${name} loves listening to ${music} while ${activity},
  devouring ${food} for ${meal}, 
  prefers ${sport} over any other sport, 
  and is amazing at ${superpower} at inopportune times.\n`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
