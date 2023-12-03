function clickFunction(){
    console.log('clicked');
}

function clickFunction(index){
    overlayBackground(index);
    // slideIn();
}

function overlayBackground(index){
    var query = ".overlay." + index;
    document.querySelector(query).style="display: block;position: absolute;top: 0;left: 0;right: 0;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(20px);overflow: hidden;width: 100%;height: 100%;transition: .5s ease-in-out;overscroll-behavior: none;";
    /*style for overlay used above
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: .5s ease-in-out;
    overscroll-behavior: contain;
    */
   draw_gallery(index);
}

var first_pet_image = '<img src="images/pets/pluto/pluto_cookie.jpg" alt="Pluto the dog standing up to eat a cookie"><img src="images/pets/pluto/pluto_sleeping.jpg" alt="Pluto sleeping on bed"><img src="images/pets/pluto/pluto_sitting.jpg" alt="Pluto sitting and posed on top of a table"><img src="images/pets/pluto/pluto_walk.jpg" alt="Pluto the dog on a walking trail">';


var first_pet_gallery = '<div class="gallery_container first_pet"><button class="close_button" onclick="closeFunction()">Close</button><div class="in_display_image"><div class="flip_button"></div></div><div class="preview_images">' + first_pet_image + '</div></div>';

function closeFunction(){
    document.querySelector(".overlay").removeAttribute("style");
    document.querySelector(".overlay").innerHTML = "";
}

function draw_gallery(index){
    var query = ".overlay." + index;
    var target = document.querySelector(query);
    console.log(target);
    insert_html_to_gallery(target);
}

async function insert_html_to_gallery(target){
    target.innerHTML = first_pet_gallery;
}
