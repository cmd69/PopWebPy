const iconsDiv = document.getElementById("icons-div");
const dropdownLogin = document.getElementById("dm-options");


const $menu = $('.profile-wrapper');

/*$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $menu.removeClass('is-active');
  }
 });

$('.icons-div').on('click', () => {
  $menu.toggleClass('is-active');
});*/





/*iconsDiv.addEventListener('click', ()=>{
    dropdownLogin.classList.add('hide-dropdown');
})*/

/*document.addEventListener('click', ()=>{
    console.log("this is body");
    if (dropdownLogin.offsetWidth > 0){
        dropdownLogin.classList.remove('show-menu');
        dropdownLogin.classList.add('hide-dropdown');
        console.log('we do be removing');
    }
    console.log(dropdownLogin.offsetWidth);
})*/

function onClickBurger(){
    document.getElementById("bg-lines").classList.toggle("change");
    document.getElementById("bubble-bg").classList.toggle("change-bubble");
    document.getElementById("bg-nav").classList.toggle("change-nav");
}

function onClickProfile(){
    document.getElementById("dm-options").  classList.toggle("show-menu");
    document.getElementById("dm-arrow").classList.toggle("show-arrow");
}

function close(){
    document.getElementById("dm-options").  classList.toggle("close-menu");
    document.getElementById("dm-arrow").classList.toggle("close-menu");
}

window.addEventListener('mouseup', function(Event){
    let bgmenu = document.getElementById('bubble-bg');
    let bglines = document.getElementById('bg-lines');
    let user = document.getElementById('user-arrow-options');
    let iconsDiv = document.getElementById('icons-div');
    let dropdown = document.getElementById('dm-options');

    let img1 = document.getElementById('img-user');
    let img2 = document.getElementById('img-arrow');


    /*if(Event.target != bglines && Event.target != bgmenu && bgmenu.classList.contains("change-bubble")){
        onClickBurger();
    }*/

    /*console.log(Event.target);*/
    if(Event.target != bglines && Event.target != bgmenu){
        if (bgmenu.classList.contains("change-bubble")){
            onClickBurger();
            console.log("cierro menu outside");
        }
    }

});

/*window.addEventListener('mouseup'), function(Event){
    let profile = document.getElementById("icons-div");
    let dropdown = document.getElementById('dm-options');

    if(Event.target !== profile && dropdown.classList.contains("show-menu")){
        onClickProfile();
    }

}*/