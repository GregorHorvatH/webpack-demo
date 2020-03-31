import pic from './cat.jpg';
import styles from './cat.css';

const addCat = () => {
  const body = document.querySelector('body');
  const img = new Image();

  img.src = pic;
  img.className = styles.cat;
  body.appendChild(img);
};

export default addCat;
