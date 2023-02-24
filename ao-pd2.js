async function getPosts(){
    let kot = localStorage.getItem('key');
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kot}`
    const response = await fetch(url,{
        headers: {
            'X-API-KEY': '55e405a2-5a1d-411d-90b1-ebd2cd5b9ffe',
            'Content-Type': 'application/json',
        }, 
    });
    const posts = await response.json();
    console.log(posts);
    showposts(posts);
    
}
function showposts(post) {
    const postsDiv = document.getElementById('posts');
log = postsDiv
        postsDiv.innerHTML +=`

    <div class="pudd">
        <div class="home2-1">
            <div class="img2">
                <img src="${post.posterUrl}"style= "width:100%;border: 2px solid black;">
            </div>
        </div> 
    </div>
    <div class="style-1">
        <div class="style-2">
            <div class="text-1">
                ${post.nameRu}
            </div>
            <div class="text-2">
                О фильме
            </div>
            <div class="text-3">
                Оценка: ${post.ratingKinopoisk}
            </div>
            <div class="text-3">
                Год: ${post.year}
            </div>
            <div class="text-3">
                Жанр: ${post.genres[0].genre}
            </div>
            <div class="text-3">
                Страна: ${post.countries[0].country}
            </div>
            <div class="text-3">
                Возраст: ${post.ratingAgeLimits.slice(3)}+
            </div>
        </div>
            <div class="text-4">
                ${post.description}
            </div>
        <div class="line"></div>
        <div class="comments1">
            <div class="comments2">
                Оставьте свой отзыв
            </div>
            <input class="comments3">
        </div>
        <div>
            <button onclick=""class="ifbut2">
        </div>
    </div>


        `
    }
getPosts();

function text(b) {}