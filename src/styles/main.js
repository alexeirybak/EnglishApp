import { createGlobalStyle } from 'styled-components';

import bgLondon from './bg_London.jpg';

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  border: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  
}

html,
body {
  font-size: 16px;
}

@media (max-width: 1024px) {
  html,
  body {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  html,
  body {
    font-size: 13px;
  }
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url('${bgLondon}');
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  position: relative;
}

a,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

button,
input[type='submit'] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

:root {
  --blackpure: #000;
  --black: #171718;
  --black-border: #26292d;
  --white: #fff;
  --purple: #5c62ec;
  --id-word: #012169;
  --accent: #5c62ec;
  --nav-bg: #14203d;
  --nav-border: #777;
  --nav-text: #fff;
  --header-bg: #000;
  --header-text: #fff;
  --footer-bg: #14203d;
  --footer-text: #fff;
}

  :root[data-theme='light'] {
  --page-bg: #d1d1d1;
  --page-bg-item: #c1c1c1;
  --page-bg-item-2: #b3b3b3;
  --page-bg-tab: #ddd; 
  --page-bg-button: #ed5b5b;
  --page-bg-button-2: #c14c4c;
  --text-color: #555; 
  --title-1: #555;
  --project-card-bg: #fff;
  --project-card-text: #14203d;
  --box-shadow: 0 0 10px rgb(33 150 243 / 80%);
  --box-shadow-item: 2px 2px 4px rgb(0 26 255 / 0.5);
  --bg-lesson-table: #fff;
  --table-header: #ccc;
  --bg-lesson-table-odd: #eee;
  --span-text: #f1c40f;
}



:root[data-theme='dark'] {
  --page-bg: #132d4e;
  --page-bg-item: #0e182f;
  --page-bg-item-2: #14203d;
  --page-bg-tab: #14203d;
  --page-bg-button: #5f10c8;
  --page-bg-button-2: #7221dd;
  --text-color: #ccc;
  --title-1: #ccc;
  --project-card-bg: #000;
  --project-card-text: #fff;
  --box-shadow: 0 0 10px rgb(256 256 256 / 80%);
  --box-shadow-item: 2px 2px 4px rgb(16 255 19 / 0.5);
  --bg-lesson-table: #444;
  --bg-lesson-table-odd: #222;
  --table-header: #333;
  --id-word: #c8102e;
  --span-text: #0062cc;
}
`;
