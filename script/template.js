function addBooks(index) {
    return `<section class="book_advertisment">
    <h2>${booksArry[index].title}</h2>
    <div class="underline"></div>
    <div class="book_icon"><img src="./img/icons8-lesen-100.png" alt="stellt ein Buch dar">
    </div>
          <div class="underline"></div>
              <div class="price_and_likes">
               <p class="price">${booksArry[index].price.toFixed(2).replace(".", ",")} €</p>
               <div class="liked_container"><p id="sumLikes${index}" class="likes">${booksArry[index].likes}</p>
               <button class="like_button" typ="button" onclick="likeClick(${index})"><img id="likeIcon${index}" class="like_icon" src="./img/icons8-herzen-50.png"
              ></button></div>
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
                   <input id="nameInput${index}" name="name" aria-label="Name eingeben" class="input_name" type="massage"  placeholder="Dein Name:" required>
                   <input id="textInput${index}" aria-label="Kommentarfeld" autocomplete="off" type="massage" placeholder="Schreibe deinen Kommentar:" required>
                   <button type="submit"  title="Senden" onclick="sendComment(${index})"><div><img src="./img/icons8-hoch-2-30.png" alt="Sende-Pfeil" class="send_arrow"></div></button>
              </form>`;

}