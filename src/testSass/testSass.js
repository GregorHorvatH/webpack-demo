import './testSass.scss';

const testSass = () =>
  document.querySelector('body').insertAdjacentHTML(
    'beforeend',
    `
      <h3 class="title">Outter title</h3>

      <div class="box">
        <h2 class="title">Formatted with sass</h2>
        <p class="text">sdfgdsgsdgsdfgs</p>
      </div>
    `,
  );

export default testSass;
