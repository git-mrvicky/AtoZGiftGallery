const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');
const collapse = document.getElementById('collapse');
if(closeBtn){
    closeBtn.addEventListener('click', ()=>{
        sideMenu.classList.add('hide');
    })
}
if(collapse){
    collapse.addEventListener('click', ()=>{
        sideMenu.classList.remove('hide');
    })
}