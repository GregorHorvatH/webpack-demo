import pic from './cat2.png';

import styles from './cat2.css';

const addCat = () => {
  const body = document.querySelector('body');
  const img = new Image();

  img.src = pic;
  img.className = styles.cat;
  body.appendChild(img);
};

export default addCat;
