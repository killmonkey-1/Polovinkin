








async function getPosts(){
    const url = "https://kinopoiskapiunofficial.tech/api/v2.2/films"
    const response = await fetch(url,{
        headers: {
            'X-API-KEY': '55e405a2-5a1d-411d-90b1-ebd2cd5b9ffe',
            'Content-Type': 'application/json',
        }, 
    });
    const posts = await response.json();
    console.log(posts);
    showposts(posts.items)
    
}
function showposts(posts) {
    const postsDiv = document.getElementById('posts');
    for (const post of posts) {
        postsDiv.innerHTML +=`
        
    <div class="pudd">
        <div class="home2">
            <div>
                <img src="${post.posterUrl}"style= "width:423px;height:570px;border: 2px solid black;">
            </div>
            <div style= "font-weight: bold;">
                Название: ${post.nameRu}
            </div>
            <div style= "font-weight: bold;">
                рэйтинг: ${post.ratingKinopoisk}
            </div>
            <div style= "font-weight: bold;">
                год: ${post.year}
            </div>
            <div class="but1">
            <a href="./ao-pd2.html">
            <button onclick="ifbut1(${post.kinopoiskId})">
                    Подробнее
                </button>
            </a>
                
            </div>
        </div> 
    </div>            

        `
    }
}
getPosts();

function text(b) {}

function ifbut1(kinopoiskId){
    localStorage.setItem("key",kinopoiskId)

}


function lagFunc(){
    if(document.getElementById("#inp").value == ""){
    } else if (document.getElementById("#inp").value != "") {
        innerHTML+=`
        <div class="window1">
            дом
        </div>
        
        `
    }
console.log(lagFunc)
}

// виды запросов: GET"получение данных"
// POST"запись данных",
// (DELETE,PUT)
// статус код запросаЖ
// 200 успешно
// 400 ошибка
// пармаетры
// PATH - параметр(параметр пути)https://jsonplaceholder.typicode.com/posts1
//https://jsonplaceholder.typicode.com/comments?postId=1"
