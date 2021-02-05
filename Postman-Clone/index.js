console.log('welcome to postman clone project');

// initially hide the parameters box as json is the default option
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';
document.getElementById('addParams').style.display='none';

//hide the json box when custom parameters is clicked
let customparameters = document.getElementById('customparameters');
customparameters.addEventListener('click', () => {
    parametersBox.style.display = 'block';
    document.getElementById('addParams').style.display='block';
    document.getElementById('requestJsonBox').style.display = 'none';
});

// hide the custom parameters box when json is clicked
let json = document.getElementById('json');
json.addEventListener('click', () => {
    parametersBox.style.display = 'none';
    document.getElementById('addParams').style.display='none';
    document.getElementById('requestJsonBox').style.display = 'block';
});

// initial No. of parameter boxes
let count = 2;

//add extra parameter boxes on clicking + button
let plusButton = document.getElementById('plusButton');
let string = '';
plusButton.addEventListener('click', () => {
    string = ` <div class="form-group row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameter Key </label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="parameterkey${count}" placeholder="Enter parameter key">
                </div>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="parametervalue${count}" placeholder="Enter parameter value">
                </div>
                <div class="col-sm-1">
                    <button id="minusButton${count}" class="btn btn-primary delete">-</button>
                </div>
                </div>`
    let paramElement = getElementFromString(string);
    console.log(paramElement);
    document.getElementById('addParams').appendChild(paramElement);

    //code when minus button is clicked
    let deleteParams = document.getElementsByClassName('delete');
    for (const item of deleteParams) {
        item.addEventListener('click', (elem) => {
            elem.target.parentElement.parentElement.remove();
        })
    }
    count++;
});
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//if user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {

    // showing wait message to the user
    document.getElementById('responsePrism').innerHTML = 'Please wait...while we are fetching response';
    let url = document.getElementById('url').value;
    let requestType, contentType;

    if (document.getElementById('get').checked)
        requestType = document.getElementById('get').value;
    else
        requestType = document.getElementById('post').value;

    if (document.getElementById('json').checked)
        contentType = document.getElementById('json').value;
    else
        contentType = document.getElementById('customparameters').value;

    // logging values to the console for debugging
    console.log(url);
    console.log(requestType);
    console.log(contentType);

    // if user has clicked custom parameters then we have to collect it into a single object
    let data = {};
    if (contentType == 'customparameters') {

        for (let i = 0; i < count; i++) {
            if (document.getElementById('parameterkey' + (i + 1)) != undefined) {
                data[document.getElementById('parameterkey' + (i + 1)).value] = document.getElementById('parametervalue' + (i + 1)).value;
            }

        }
        data = JSON.stringify(data);
    }
    else
        data = document.getElementById('requestJsonText').value;

    //logging the object data
    console.log(data);

    if (requestType == 'get') {
        console.log('inside fetch');
        fetch(url, { method: 'GET' })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            })
    }

    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }

}); 