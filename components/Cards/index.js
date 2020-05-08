// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get( "https://lambda-times-backend.herokuapp.com/articles" )
    .then( response =>
    {
        Object.values( response.data.articles ).forEach( function( articles )
        {
            articles.forEach( article => document.querySelector( ".cards-container" ).appendChild( create_card( article ) ) );
        } );
    } )
    .catch( response => console.log( "Something Went Wrong!!!" ) );

function create_card( article )
{
    const card = document.createElement( "div" );
    card.className = "card";

    const headline = document.createElement( "div" );
    headline.className = "headline";
    headline.textContent = article.headline;   

    const author = document.createElement( "div" );
    author.className = "author";

    const img_container = document.createElement( "div" );
    img_container.className = "img-container";

    const img = document.createElement( "img" );
    img.src = article.authorPhoto;              

    const author_name = document.createElement( "span" );
    author_name.textContent = `By ${ article.authorName }`;

    img_container.appendChild( img );

    author.appendChild( img_container );
    author.appendChild( author_name );

    card.appendChild( headline );
    card.appendChild( author );

    return card;
}