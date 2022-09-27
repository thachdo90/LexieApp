const readingImg = require('./reading.jpeg');
const readingImg2 = require('./reading2.avif');
const readingImg3 = require('./reading3.webp');

let images = [readingImg, readingImg2, readingImg3];

let Node = (value) => {
  return {
    value: value,
    next: null
  }
};

let head = Node(readingImg);
let current = head;

for (let i = 1; i < images.length; i++) {
  let newNode = Node(images[i]);
  current.next = newNode;
  current = newNode
}
current.next = head;

const randomImg = () => {
  let result = current.value;
  current = current.next;
  return  result;
}

module.exports = randomImg;
