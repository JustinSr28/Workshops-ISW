document.addEventListener('DOMContentLoaded', function () {
    // Ensure the DOM is fully loaded before attaching event listeners
    document.getElementById('autor-form')
        .addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            addAutor(); // Call the function to store inputs
        });
});


function addAutor() {
    const autor = $('#name').val();
    
    //insert to a database
    let booksDb = JSON.parse(localStorage.getItem('autors'));
    if (!booksDb) {
        booksDb = [];
    }
    const book = {
        autor: autor,
        id: booksDb.length + 1,
       

    }
    booksDb.push(book);
    localStorage.setItem('autors', JSON.stringify(booksDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem('autors')));
    window.location.href = 'books.html';
}