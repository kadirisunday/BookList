// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){}
    //Add book to List
    UI.prototype.addBookList = function(book){
        const list = document.getElementById('book-list');

        //creating the row
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">x</a></td>
        `
        list.appendChild(row);
    }
// clear fields
UI.prototype.clearFieds = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''

}

//Creating Event Listeners

document.getElementById("book-form").addEventListener('submit', 
function(e){
    //Get forms value
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //Instantiating Book object
    const book = new Book(title, author, isbn);
    
    //Instantiating UI object
    const ui = new UI()
    ui.addBookList(book);
    ui.clearFieds();
        
    e.preventDefault();
})