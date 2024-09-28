// Fetch the JSON data and display it on the webpage
fetch('books.json')
    .then(response => response.json())
    .then(data => {
        let bookList = document.getElementById('bookList');
        data.forEach(book => {
            let li = document.createElement('li');
            li.innerHTML = `<h3>Title: ${book.title}</h3><p>Author: ${book.author}</p>`;
            bookList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching the book data:', error));

// Function for searching through books
function searchBooks() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let books = document.getElementsByTagName('li');

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let text = book.innerText.toLowerCase();

        if (text.includes(input)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    }
}
