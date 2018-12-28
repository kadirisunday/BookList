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
    //delete book
    UI.prototype.deleteBook = function(target){
        if(target.className ==='delete'){
            target.parentElement.parentElement.remove();
        }
    }
    UI.prototype.showAlert = function(message, className){
        // create the error div
        const div = document.createElement('div');
        //add class
        div.className = `alert ${className}`
        //add message
        div.appendChild(document.createTextNode(message));
        //get container
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        //append div into container
        container.insertBefore(div,form)
        //set time out
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
    
    // clear fields
UI.prototype.clearFieds = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''

}

//Event Listeners to add book

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
    if(title === ''|| author===''||isbn===''){
        ui.showAlert('Please fill in the fields', 'error');
    }else{
        //add book list
        ui.addBookList(book);
        //show success message
        ui.showAlert('Book Added', 'success');
        // clear book fields
         ui.clearFieds();
    }
    
        
    e.preventDefault();
})

// Event Listener to delete book
document.getElementById('book-list').addEventListener('click',
function(e){
     //Instantiating UI object
    const ui = new UI()
    //delete book
    ui.deleteBook(e.target);
    //show success message
    ui.showAlert('Book Deleted', 'success');

    e.preventDefault();
});