const please = require('../../requests.js');

const generateGlossary = (text, cb) => {
  let words = text.split(' ');
  let glossary;
  let wordPromises = [];

  const lookup = async(word) => {
    try {
      const data = await please.getDefinition(word);
      return {word: word, definition: data.data[0].meanings[0].definitions[0].definition};
    } catch (error) {
      return {word: word, definition: null};
    }
  }

  for (let word of words) {
    wordPromises.push(lookup(word))
  }

  Promise.all(wordPromises)
    .then(values => cb(values))
    .catch(err => console.log(err))
}


module.exports = generateGlossary;

// parse out words, becareful of contractions
// split by spaces
// trim any surrounding punctuations
// feed into dictionary api to get definition
// use arrays or objects
// I should alphabetize the words at some point


// ignore word if
  // it has contractions, those are common words anyways
  // it's listed in a common word object
  // it has numbers
  // it has any special characters
  // it doesn't have a definition