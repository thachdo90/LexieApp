const please = require('../../requests.js');

// for testing purpose, delete after
// const generateGlossary = (text) => {
//   let words = text.split(' ');
//   let glossary = []

//   for (let word of words) {
//     glossary.push({name: word, definition: 'definition'})
//   }
//   return glossary;
// }

const generateGlossary = async (text) => {
  let words = text.split(' ');
  let glossary = []

  for (let word of words) {
    try {
      let data = await please.getDefinition(word);
      // for now, just grab the first definition
      // console.log(data.data[0].meanings[0].definitions[0].definition);
      glossary.push({name: word, definition: data.data[0].meanings[0].definitions[0].definition})
    } catch (err) {
      glossary.push({name: word, definition: null})
    }
  }
  return glossary;
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