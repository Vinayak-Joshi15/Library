const shelf = document.querySelector(".shelf");

let list = [{name:"One Piece",author:"Eichiro Oda"},{name:"Naruto",author:"Masashi Kishimoto"}];


function supplier(name,author){
    this.name = name;
    this.author = author;
}


function regenerate(){
    shelf.replaceChildren();
    list.forEach(element => {
        let book = document.createElement("div");
        book.classList = "Book";
        book.textContent = element.name + "\n By\n" + element.author;
        shelf.appendChild(book);
    });
}

let form = document.querySelector(".container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputNameField = document.querySelector("#name");
        let inputAuthorField = document.querySelector("#author");

        // Ensure the elements exist
        if (!inputNameField || !inputAuthorField) {
            console.error("One or more input fields not found!");
            return;
        }

        let inputName = inputNameField.value.trim();
        let inputAuthor = inputAuthorField.value.trim();

        if (inputName === "" || inputAuthor === "") {
            console.log("Both fields are required.");
            return;
        }
    const newBook = new supplier(inputName,inputAuthor);

    if(newBook instanceof supplier){
        list.push(newBook);
        console.log(list);
    }
    
    regenerate();

});


regenerate();
