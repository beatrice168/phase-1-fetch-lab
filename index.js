function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 const retriveData = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => renderBooks(data) )
  return retriveData;
}
  
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
//const renderBooksSpy = chai.spy.on(object, 'renderBooks');
//expect(renderBooksSpy).to.have.been.called();


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
