import text from './text.hbs';
import addCat1 from './cat1'; // ./cat1/index.js
import addCat2 from './cat2';
// import testSass from './testSass';

console.log(
  text({
    text1: 'trololo',
    text2: 'yo-ho-ho',
  }),
);

const sayHello = () => console.log('Hello from webpack!');

sayHello();

// testSass();

addCat1();
addCat2();
