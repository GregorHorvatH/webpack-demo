import addCat from './cat';
import text from './text.hbs';

console.log(
  text({
    text1: 'trololo',
    text2: 'yo-ho-ho',
  }),
);

const sayHello = () => console.log('Hello from webpack!');

sayHello();
addCat();
