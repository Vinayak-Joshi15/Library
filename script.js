//document.addEventListener("DOMContentLoaded", function () {
    const shelf = document.querySelector(".shelf");
    const form = document.querySelector(".container");

    let list = [
        { name: "One Piece", author: "Eichiro Oda" },
        { name: "Naruto", author: "Masashi Kishimoto" }
    ];

    function Supplier(name, author) {
        this.name = name;
        this.author = author;
    }

    function regenerate() {
        shelf.replaceChildren();
        list.forEach(element => {
            let book = document.createElement("div");
            book.classList.add("Book");
            book.textContent = `${element.name}\nBy\n${element.author}`;
            shelf.appendChild(book);
        });
    }

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const title = document.getElementById('name');
    const author = document.getElementById('author');

    let titleInput = title.value;
    let authorInput = author.value;

    let book = new Supplier(titleInput,authorInput);
    list.push(book);
    
    document.getElementById('name').value = '';
        document.getElementById('author').value = '';
//});

    regenerate();
});

regenerate();