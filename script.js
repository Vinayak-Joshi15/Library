const shelf = document.querySelector(".shelf");

let list = [{name:"One Piece",author:"Eichiro Oda"},{name:"Naruto",author:"Masashi Kishimoto"}];


list.forEach(element => {
    let book = document.createElement("div");
    book.classList = "Book";
    book.textContent = element.name + "\n By\n" + element.author;
    shelf.appendChild(book);
});