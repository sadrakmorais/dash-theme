import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
* {
  margin:0;
  padding:0;
  /* -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box; */
    -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline:none;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
:root {
  scroll-behavior: smooth;
  --light-700: #f7f7f7;
  --gray-300: #3C3C3C;
  --gray-400: #4f575e;
  --gray-500: #707070;
  --gray-600: #808080;
  --gray-700: #9a9a9a;
  --gray-800: #8d8d8d;
  --gray-850:#585858;
  --gray-900: #424242;
  --indigo-500: #0660FF;
  --blue-100: #2d5299;
  --blue-200: #3cc8e7;
  --blue-300: #00caf9;
  --blue-400: #0c73e9;
  --blue-500: #0069bf;
  --blue-600: #0d73e8;
  --blue-700: #2680c9;
  --blue-800: #003b9b;
  --blue-900: #131964;
  --blue-950: #075495;
}
html{
  font-size: 62.5%; // 1rem to equal 10px
}
@media (max-width: 1080px){
  html{
    font-size: 58%;
  }
}
@media (max-width: 720px){
  html{
    font-size: 54%;
  }
}
html,
body,
#__next {
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
  margin: 0;

}
.custom-scroll::-webkit-scrollbar {
  width: 10px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #ddd;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #666;
}
img{
  -webkit-user-drag: none;
}
h1, h2, h2, h3, h4, h5, h6, strong{
  font-weight: 500;
  font-size: 1.6rem;
}
li{
  list-style: none;
}
button{
  cursor: pointer;
  outline:none;
  border: 0;
  background: none;
}
body, input, button, textarea{
  font-family: 'Montserrat', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}
a{
  color: inherit;
  text-decoration: none;
}
.sections {
  padding: 2rem ;
  background:var(--light-700) ;
}
.show {
  display: initial ;
}
@media screen and (max-width: 768px){
  .benefits {
    padding: 0 !important;
  }
}
.yt-lite {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    border-radius: 0;
    margin: 0 auto ;
}
/* gradient */
.yt-lite::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
}
/* responsive iframe with a 16:9 aspect ratio
    thanks https://css-tricks.com/responsive-iframes/
*/
.yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
}
.yt-lite > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
/* play button */
.yt-lite > .lty-playbtn {
    width: 70px !important;
    height: 46px;
    background-color: #212121;
    z-index: 1;
    opacity: 0.8;
    border-radius: 7px;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
}
.yt-lite:hover > .lty-playbtn {
    background-color: #f00;
    opacity: 1;
}
/* play button triangle */
.yt-lite > .lty-playbtn:before {
    content: '';
    border-style: solid;
    border-width: 11px 0 11px 19px;
    border-color: transparent transparent transparent #fff;
}
.yt-lite > .lty-playbtn,
.yt-lite > .lty-playbtn:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}
/* Post-click styles */
.yt-lite.lyt-activated {
    cursor: unset;
}
.yt-lite.lyt-activated::before,
.yt-lite.lyt-activated > .lty-playbtn {
    opacity: 0;
    pointer-events: none;
}
 .mySwiper {
    height: 350px;
    .swiper-pagination > .swiper-pagination-bullet {
      width: 50px;
      border-radius: 0;
    }
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    article {
      button {
        margin: 0 !important ;
      }
      width: 560px;
      height: 315px;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
   .embed-youtube {
    iframe {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
`;
