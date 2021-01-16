console.log('Welcome to CV Screener!');

const data = [
    {
        name: 'Debi Prasad',
        age: 22,
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        Place: 'Cuttack',
        Language: 'Javascript',
        Framework: 'Nodejs'
    },
    {
        name: 'Rohit Sharma',
        age: 33,
        image: "https://randomuser.me/api/portraits/men/72.jpg",
        Place: 'Mumbai',
        Language: 'Python',
        Framework: 'Django'
    },
    {
        name: 'Shubman Gill',
        age: 22,
        image: "https://randomuser.me/api/portraits/men/80.jpg",
        Place: 'Chandigarh',
        Language: 'C++',
        Framework: 'Django'
    },
    {
        name: 'Cheteshwar Pujara',
        age: 34,
        image: "https://randomuser.me/api/portraits/men/71.jpg",
        Place: 'Baroda',
        Language: 'Java',
        Framework: 'Spring Boot'
    },
    {
        name: 'Virat Kohli',
        age: 32,
        image: "https://randomuser.me/api/portraits/men/84.jpg",
        Place: 'Delhi',
        Language: 'Python',
        Framework: 'Flask'
    }

];
let current = iterator(data);
function iterator(CV) {
    let nextIndex = 0;
    let prevIndex = -1;
    return {
        next: function () {
            if (nextIndex < data.length) {
                prevIndex++;
                return {
                    value: CV[nextIndex++],
                    done: false
                };
            }
            else {
                return { done: true };
            }
        },
        prev: function () {
            if (prevIndex >= 0) {
                nextIndex--;
                return {
                    value: CV[--prevIndex],
                    done: false
                };
            }
            else {
                return { done: true };
            }
        }
    };
}
displayNextCV();
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
nextButton.addEventListener('click', displayNextCV);
prevButton.addEventListener('click',displayPrevCV);

function displayNextCV() {
    //action after clicking next, the iterator should point to the next CV
    let currentCandidate = current.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="" class="src">`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.place}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.Language}</li>
                             <li class="list-group-item">Uses ${currentCandidate.Framework} framework</li>
                        </ul>`;
    }
    else {
        alert('No more CVs are available');
        window.location.reload();
    }
}
function displayPrevCV() {
    //action after clicking prev, the iterator should point to the previous CV
    let currentCandidate = current.prev().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="" class="src">`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.place}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.Language}</li>
                             <li class="list-group-item">Uses ${currentCandidate.Framework} framework</li>
                        </ul>`;
    }
    else {
        alert('No more CVs are available');
        window.location.reload();
    }
}

