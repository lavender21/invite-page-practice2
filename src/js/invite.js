let search = document.getElementById('search');
let main = document.getElementsByTagName('main')[0];
let checks = document.getElementsByClassName('checks');
let count = document.getElementById('count');

search.addEventListener('focus',(e)=>{
    search.className = 'search active';
});
search.addEventListener('blur',(e)=>{
    search.className = 'search';
});
main.addEventListener('change',(e)=>{
    if(e.target.className === 'checks'){
        changeStatus();
    }
});
function changeStatus() {
    let num = 0;
    for(let i=0;i<checks.length;i++){
        if (checks[i].checked){
            num++;
        }
    }
    count.innerText = num;
}
