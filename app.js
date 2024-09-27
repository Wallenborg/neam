// Words to choose from
const wordsArray = [
  "Give",
  "Orange",
  "Me",
  "Eat",
  "You",
  "More",
  "Drink",
  "Banana",
  "Apple",
  "Play",
  "Hug",
  "Friend",
  "Nim",
  "Mommy",
  "Daddy",
  "No",
  "Yes",
  "Open",
  "Close",
  "Help",
  "Throw",
  "Catch",
  "Good",
  "Bad",
  "Up",
  "Down",
  "Sit",
  "Go",
  "Come",
  "Sleep",
  "Monkey",
  "Baby",
];

// Scroll event to show random words
window.addEventListener("scroll", () => {
  const randomWords = getRandomWords();
  // Assuming there's a display area for the words
  const displayArea = document.getElementById("wordDisplay"); // Replace with your actual display element
  displayArea.textContent = randomWords.join(" ");
});

function getRandomWords() {
  // Set higher probability for shorter sentences
  const probabilityArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9];
  const numberOfWords =
    probabilityArray[Math.floor(Math.random() * probabilityArray.length)]; // Choose number of words based on probability array

  const randomWords = [];

  // Select random words allowing duplicates
  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length); // Pick a random word
    randomWords.push(wordsArray[randomIndex]); // Add the word, allowing duplicates
  }

  return randomWords; // Return the randomly selected list of words
}
