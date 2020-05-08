// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() 
{
    const div = document.createElement( "div" );
    div.className = "header";

    const span = document.createElement( "span" );
    span.className = "date";
    span.textContent = "SMARCH 28, 2019";

    const h1 = document.createElement( "h1" );

    const span2 = document.createElement( "span" );
    span2.className = "temp";
    span2.textContent = `98\xB0`;

    [ span, h1, span2 ].forEach( element => div.appendChild( element ) );
    
    return div;
}

document.querySelector( "div.header-container" ).appendChild( Header() );
