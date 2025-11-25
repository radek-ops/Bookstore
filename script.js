"use strict";

let books = [
    {
        "book": true,
        "title": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "book": true,
        "title": "Der vergessene Pfad",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "comments": [],
    },
    {
        "book": true,
        "title": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "book": true,
        "title": "Das Rätsel der Zeit",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        "book": true,
        "title": "Der letzte Wächter",
        "author": "Sabine Grün",
        "likes": 1300,
        "liked": true,
        "price": 16.75,
        "publishedYear": 2017,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "book": true,
        "title": "Im Schatten des Mondes",
        "author": "Philipp Silber",
        "likes": 890,
        "liked": false,
        "price": 12.30,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BücherLiebhaber",
                "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                "name": "Leseratte",
                "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        "book": true,
        "title": "Jenseits der Sterne",
        "author": "Oliver Schwarz",
        "likes": 1450,
        "liked": true,
        "price": 21.00,
        "publishedYear": 2015,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        "book": true,
        "title": "Das verborgene Königreich",
        "author": "Elena Gold",
        "likes": 920,
        "liked": false,
        "price": 17.50,
        "publishedYear": 2020,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Bookworm92",
                "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        "book": true,
        "title": "Liebe in Zeiten des Krieges",
        "author": "Emilia Rot",
        "likes": 1800,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2016,
        "genre": "Romantik",
        "comments": [
            {

                "name": "Bibliophile23",
                "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {

                "name": "StorySeeker",
                "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {

                "name": "SciFiExplorer",
                "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
            }
        ]
    }
]


let bookselection = document.getElementById('bookSelection');
let booksArry = [];


function init() {
    booksObjArry();
}


function booksObjArry() {
    bookselection.innerHTML = '';
    booksArry = books.filter((createArry) => { return createArry['book'] }); //erzeugt ein Array von ObjeKten. 
    console.log(booksArry);


    for (let index = 0; index < booksArry.length; index++) {
        let singleBook = booksArry[index];
        let saveAllBooks = addBooks(index);//hier kein += die Variable ist noch ohne wert dort kann man nichts hinzufügen erst unten bei den kommentaren . 

        for (let commindex = 0; commindex < singleBook.comments.length; commindex++) {
            let singleComment = singleBook.comments[commindex];
            let commArry = addComments(singleComment);
            saveAllBooks += commArry;
        }

        saveAllBooks += "</div>";
        saveAllBooks += inputComment(index);
        saveAllBooks += "</section>";
        bookselection.innerHTML += saveAllBooks;
    }
}


function addBooks(index) {
    return `<section class="book_advertisment">
    <h2>${booksArry[index].title}</h2>
    <div class="underline"></div>
    <div class="book_icon"><img src="./img/icons8-lesen-100.png" alt="stellt ein Buch dar">
    </div>
          <div class="underline"></div>
              <div class="price_and_likes">
               <p class="price">${booksArry[index].price} €</p>
               <div class="liked_container"><p class="likes">${booksArry[index].likes}</p>
               <img class="like_icon" src="./img/icons8-herzen-50.png" alt="dislike herz"
               onclick="likeClick()"></div>
         </div>
    <table>
        <tbody>
             <tr>
                <td>Author &nbsp; &nbsp;</td>
                <td>: ${booksArry[index].author}</td>
            </tr>
            <tr>
                <td>Erscheinungsjahr&nbsp; &nbsp;</td>
                <td>: ${booksArry[index].publishedYear}</td>
            </tr>
            <tr>
                <td>Genere&nbsp; &nbsp;</td>
                <td>: ${booksArry[index].genre}</td>
            </tr>
        </tbody>
    </table>
    <div class="underline"></div>
    </div>
    <h3>Kommentare :</h3>
    <div class="comments">
           `;
}


function addComments(singleComment) {
    return `<div class="name_and_text">
           <div class="comment_name"><strong>[${singleComment.name}]</strong></div>
           <div class="comment_text"><span>: ${singleComment.comment}</span></div>
           </div>`;
}


function inputComment(index) {
    return ` <form class="send_img">
                   <input id="nameInput${index}" aria-label="Name eingeben" class="input_name" type="text" placeholder="Dein Name:" required>
                   <input id="textInput${index}" aria-label="Kommentarfeld" autocomplete="off" type="text" placeholder="Schreibe deinen Kommentar:" required>
                   <button type="button" onclick="sendComment(${index})"><div><img class="send_arrow" ></div></button>
             </form>`;
}


function sendComment(index) {
    let name = document.getElementById(`nameInput${index}`);//oder ('nameInput' + index) 100% das gleiche 
    let text = document.getElementById(`textInput${index}`);

    let textName = name.value;   //komplexe variable immer mit . zugreifen 
    let textComment = text.value;

    let userInput = {
        "name": textName,
        "comment": textComment
    };

    books[index].comments.push(userInput);

    booksObjArry();
}











