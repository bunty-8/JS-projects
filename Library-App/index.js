// fetch the list from the local storage and show
showList();

//class for book
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
//adding book to the local storage
function addBook(bookObj) {
    let list = localStorage.getItem('list');
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    listObj.push([bookObj.name, bookObj.author, bookObj.type]);
    localStorage.setItem('list', JSON.stringify(listObj));
}

//function to show the list on the UI
function showList() {
    let list = localStorage.getItem('list');
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    let tableEntry='';
    let c=1;
    listObj.forEach(element => {
        tableEntry+=`<tr>
                        <th scope="row">${c}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td>${element[2]}</td>
                    </tr>`
        c+=1;
    });
    document.getElementById('tablebody').innerHTML=tableEntry;
}

//adding event listener to "add book" button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    if (document.getElementById('fiction').checked) {
        type = 'fiction';
    }
    else if (document.getElementById('programming').checked) {
        type = 'programming';
    }
    else {
        type = 'others';
    }
    let bookObj = new Book(name, author, type);
    console.log(bookObj);
    addBook(bookObj);
    showList();
    document.getElementById('bookname').value = "";
    document.getElementById('author').value = "";
    e.preventDefault();
});