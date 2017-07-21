let search = document.getElementById('search');

search.addEventListener('focus',(e)=>{
    search.className = 'search active';
});
search.addEventListener('blur',(e)=>{
    search.className = 'search';
});