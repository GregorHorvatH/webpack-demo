import pic from './cat.jpg';

import './cat.css';

const addCat = () => {
  const body = document.querySelector('body');
  const img = new Image();

  img.src = pic;
  img.className = 'cat';
  body.appendChild(img);
};

export default addCat;
