import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.text};
  font-size:  ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.medium};
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

/* обнуляем дефолтные маркеры у всех маркированных списков */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* обнуляем дефолтные подчеркивания у всех ссылок */
a {
  text-decoration: none;
  color: inherit;
  /* display: block; */
}

* {
  margin: 0;
  padding: 0;
}

`;
