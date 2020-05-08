/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let i = 0;

const carousel = document.createElement( "div" );
carousel.className = "carousel";

const left = document.createElement( "div" );
left.className = "left-button";
left.textContent = "<";

const images = [ "./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg" ];

const img  = document.createElement( "img" );
img.src = images[ 0 ];
img.style.display = "inline-block";


const right = document.createElement( "div" );
right.className = "right-button";
right.textContent = ">";

left.addEventListener( "click", e => img.src = images[ i - 1 >=0 ? i -= 1 : i ] );  
right.addEventListener( "click", e => img.src = images[ i + 1 < images.length ? i += 1 : i ] );

[ left, img, right ].forEach( element => carousel.appendChild( element ) );

document.querySelector( ".carousel-container" ).appendChild( carousel );