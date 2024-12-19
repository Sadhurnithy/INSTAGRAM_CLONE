const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('sidebar');


function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sideBar.classList.contains('close')){
        sideBar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

function toggleSideBar(){
    sideBar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    Array.from(sideBar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    })
}