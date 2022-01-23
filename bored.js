let heading = document.getElementById('heading');
let button = document.getElementById('button');
let loader = document.getElementById('loader');


async function getData() {
    url = 'https://www.boredapi.com/api/activity/'
    await fetch(url).then((Response)=>{
        return Response.text();
    }).then((data)=>{
        let text = JSON.parse(data);
        heading.innerText = text.activity;

    })
    loader.style.display = 'none';
};

button.addEventListener('click', function(){
    location.reload();
})

getData();