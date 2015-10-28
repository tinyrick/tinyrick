var _ = require('lodash');
var quotes = [
  'What do you— what do you think of this f-flying vehicle, Morty? I built it out of stuff I found in the garage',
  'We\'re gonna drop it down there, just... get a whole fresh start, Morty. Create a whole fresh start.',
  'When I drop the bomb, I wa— [chugs booze] Y\'know, I want you to have somebody, y\'know... I want you to have the thing—I\'m gonna make you like a new Adam and Eve, and you\'re gonna be Adam—',
  'Alright, alright, Morty! Alright, alright, I\'ll... I\'ll land, I\'ll land, I\'ll land, I\'ll land the thing, I\'ll land the thing. Big tough guy all of a sudden.',
  'It\'s a device, Morty, that when you put it in your ear, you can enter people\'s dreams, Morty. It\'s just like that movie you keep crowing about!',
  'That\'s okay! I\'m Mr. Meeseeks! Look at me! Try again and keep your head down!',
  'On one of our adventures, Rick and I basically destroyed the whole world, so we bailed on that reality and we came to this one. Because in this one, the world wasn\'t destroyed. And in this one, we were dead. So we came here, a-an-an-and we buried ourselves and we took their place. And every morning, Summer, I eat breakfast 20 yards away from my own rotting corpse!',
  'Whatever you\'re asking, the answer is I\'m amazing. And away we go!',
  'I\'m reeeeelly a brillllliant guy, I just get like dis so I can hang oud with my buddzzz!',
  'An entire afternoon at BLIPS AND CHI-I-I-I-I-ITZ!!!!',
  'The worlds can be one together, cosmos without hatred. Stars like diamonds in your eyes. The ground can be space (space, space, space, space). With feet marching towards a peaceful sky. All the moon men want things their way. But we make sure they see the sun. Goodbye, moon men. You say goodbye, moon men Goodbye—',
  'Would everybody just relax for a second? There\'s no such thing as an "Uncle Steve", that is an alien parasite. ',
  'You gotta get schwifty',
  'You gotta get schwifty in here',
  'It\'s time to get schwifty.',
  'So he made a universe, and that guy is from that universe, and that guy made a universe... and that\'s the universe where I was born? Where my father died... Where I couldn\'t make time for his funeral because I was working on my universe.',
  'Oh, they won\'t be slaves. They\'ll work for each other and pay each other money.',
  'Huntin a vampire with my grandkids!! Tiny Rick!!',
  'Damn, girl! You need to chill out! This whole thing was your idea in the first place, and now you\'re tryin to rush it along.',
  'I’m begging for help, I’m pleading for help! Please come let me out! I’m dying in a vat in the gara-a-age!',
  'Let me out! Let me out! This is not a dance.',
  'Snuffles is my slave name, you can call me snowball.',
  'He\'s not a hot girl. He can\'t just bail on his life and set up shop in someone else\'s.',
  'That just sounds like slavery with extra steps!',
  'Wait for the ramp Morty! They love the slow ramp.',
  'What about the reality where Hitler cured cancer, Morty? The answer is: Don\'t think about it.',
  'From now on, no more of this clever-name bullcrap. When a vampire is pretending to be a human, they can just call themselves Alan Jefferson or something like that.',
  'It\'s a figure of speech, Morty! They\'re bureaucrats! I don\'t respect them. Just keep shooting, Morty! You have no idea what prison is like here!',
  'It\'s like the N word and the C word had a baby and it was raised by all the bad words for Jews.',
  'Get off the high road Summer. We all got pink eye because you wouldn\'t stop texting on the toilet.',
  'GRAAAAAASSSSSSS.... tastes bad.',
  'Wubbalubbadubdub!'
];

module.exports = {
  getSchwifty: function() {
    return _.sample(quotes, 1)[0];
  },
  getSchwiftyInHere: function() {
    return quotes;
  }
};
