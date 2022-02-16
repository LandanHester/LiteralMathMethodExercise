// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase()); // HI, I'M OLAF AND I LIKE WARM HUGS.

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs); // Hi, I'm Olaf and I love warm hugs.

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18, 36)); // I've been impaled.
// console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones); // I don't have a skull...or bones.

// 4
console.log(Math.PI); // 3.141592653589793

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber); // 1, 2, or 3

// Using Ceil (NOTE: Could possibly be 0 in this answer)
// let randomNumber = Math.random();
// randomNumber *= 3;
// randomNumber = Math.ceil(randomNumber);
// console.log(randomNumber);