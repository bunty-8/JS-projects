console.log('this is index js file');
let API_Key = 'a6be31f6d4b741699b0c73c6b7ab3f3f';
let source = 'the-times-of-india';

//grab the container which will populate the news in the dom
let newsAccordion = document.getElementById('newsAccordian');

//ajax get request from the news api site
const xhr = new XMLHttpRequest();

//open the xhr
xhr.open('GET', 'http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a6be31f6d4b741699b0c73c6b7ab3f3f', true);
xhr.getResponseHeader('Access-Control-Allow-Origin', 'http');

//what to do while fetching
xhr.onprogress = function () {
    console.log('loading content....');
}

//what to do when request is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        let newsHtml = '';
        let index=1;
        console.log(articles);
        articles.forEach(element => {
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button colla" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
                                <li></li><strong>${element['title']}</strong>
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">${element['content']}.<a href="${element['url']}" target="_blank">Read more</a></div>
                        </div>
                </div>`
            newsHtml += news;
            index++;
        });
        document.getElementById('newsAccordion').innerHTML = newsHtml;
    }
    else {
        console.log('API fetch unsuccessful');
    }
}

xhr.send();

