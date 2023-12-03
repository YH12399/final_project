function clickFunction(){
    console.log('clicked');
}

function clickFunction(index){
    overlayBackground(index);
    document.body.style.overflow = "hidden";
    disableMainPageInteraction();
}

function overlayBackground(index){
    var query = ".overlay." + index;
    document.querySelector(query).style="display: block;position: fixed;top: 0;left: 0;right: 0;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(20px);overflow: hidden;width: 100%;height: 100%;transition: .5s ease-in-out;overscroll-behavior: none;";
    /*style for overlay used above
    display: block;
    position: fix;
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

var first_pet_image_ar = ['<img src="images/pets/pluto/pluto_cookie.jpg" alt="Pluto the dog standing up to eat a cookie" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">',
                            '<img src="images/pets/pluto/pluto_sleeping.jpg" alt="Pluto sleeping on bed" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">',
                            '<img src="images/pets/pluto/pluto_sitting.jpg" alt="Pluto sitting and posed on top of a table" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">',
                            '<img src="images/pets/pluto/pluto_walk.jpg" alt="Pluto the dog on a walking trail" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">']

var first_pet_image = '<img src="images/pets/pluto/pluto_cookie.jpg" alt="Pluto the dog standing up to eat a cookie" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0"><img src="images/pets/pluto/pluto_sleeping.jpg" alt="Pluto sleeping on bed" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0"><img src="images/pets/pluto/pluto_sitting.jpg" alt="Pluto sitting and posed on top of a table" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0"><img src="images/pets/pluto/pluto_walk.jpg" alt="Pluto the dog on a walking trail" onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">';

var first_pet_gallery = '<div class="gallery_container first_pet"><button class="close_button" type="button" onclick="closeFunction()">Close</button><div class="in_display_image"></div><div class="preview_images">' + first_pet_image + '</div></div>';

function closeFunction(){
    document.querySelector(".overlay").removeAttribute("style");
    document.querySelector(".overlay").innerHTML = "";
    document.body.style.overflow = "auto";
    enableMainPageInteraction()
}

async function draw_gallery(index){
    var query = ".overlay." + index;
    var target = document.querySelector(query);
    console.log(target);
    await insert_html_to_gallery(target);
    displayImage(document.querySelector(".preview_images img"));
}

async function insert_html_to_gallery(target){
    target.innerHTML = first_pet_gallery;
}

function disableMainPageInteraction() {
    const focusableEls = document.querySelectorAll('div, a, button, textarea, input, select');
    focusableEls.forEach(el => {
        if (!el.closest('.overlay')) {
            el.setAttribute('tabindex', '-1');
            el.setAttribute('aria-hidden', 'true');
        }
    });
}

function enableMainPageInteraction() {
    const focusableEls = document.querySelectorAll('div, a, button, textarea, input, select');
    focusableEls.forEach(el => {
        el.removeAttribute('tabindex');
        el.removeAttribute('aria-hidden');
    });
}

function displayImage(image){
    console.log(image);
    document.querySelector(".in_display_image").innerHTML = image.outerHTML;
}

