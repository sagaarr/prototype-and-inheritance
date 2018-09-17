
class Book {
  constructor(title, author , isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookList(book){
    const list = document.getElementById('book-list');
    // create element 
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "delete">X</a></td>
    `;
  
    list.appendChild(row);
  }
  alertUser(message, className){
     // create a div
    const div = document.createElement('div');
    // Add a class 
    div.className = ` alert ${className} `;
    div.appendChild(document.createTextNode(message));
    // Get parent element
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);
    // Set TimeOut after 3sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);

  }

  deleteBook(target){
    
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();

  }
  }

  clearFiled(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }



}

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

        // Put this value in Book  object
        const book = new Book(title, author , isbn);

        // put this value in UI
        const ui = new UI();

        // Validate
        if(title === '' || author === '' || isbn === ''){
          ui.alertUser('Please Fill allthe fields', 'error');
        }else{
                ui.alertUser('Book added to the list SuccessFully' , 'success');
                // Add book to list 
                ui.addBookList(book);
                // clear field
                ui.clearFiled();
        }
    

  e.preventDefault();
})


document.querySelector('#book-list').addEventListener('click', function(e){

  const ui = new UI();
  ui.deleteBook(e.target);
  ui.alertUser('Book Removed SuccessFully', 'success');
  e.preventDefault();
})