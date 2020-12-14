console.log('lets make notes app');
shownotes();
// whenever user adds a note, add it to local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {

    let textArea = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textArea.value = "";
    console.log(notesObj);
    shownotes();
});

//  function to show notes
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    let i = 1;
    notesObj.forEach(element => {
        html += `<div class="notecard mx-2 my-2" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Note ${i}</h5>
           <p class="card-text">${element}</p>
           <button id="${i}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
       </div> `;
        i++;
    });
    let showNotes = document.getElementById('notes');
    if (notesObj.length != 0) {
        showNotes.innerHTML = html;
    }
    else {
        showNotes.innerHTML = `<p>Add your notes to view here</p>`
    }
}

//function to delete note
function deletenote(index) {
    // console.log('delete func called');
    let notes = localStorage.getItem('notes');
    notesObj = JSON.parse(notes);
    notesObj.splice(index - 1, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();

}

//search functionality

let searchtext = document.getElementById('searchtext');
searchtext.addEventListener('input', function () {

    let input = searchtext.value;
    console.log(input);
    let cards = document.getElementsByClassName('notecard');
    Array.from(cards).forEach(function (elements) {

        let cardtxt = elements.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(input)) {
            elements.style.display = "block";
        }
        else {
            elements.style.display = "none";
        }
    });

});
