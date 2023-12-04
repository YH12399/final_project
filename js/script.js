var first_pet_image_ar = ['first_pet',
                            '<img src="images/pets/pluto/pluto_cookie.jpg" alt="Pluto the dog standing up to eat a cookie"',
                            '<img src="images/pets/pluto/pluto_sleeping.jpg" alt="Pluto sleeping on bed"',
                            '<img src="images/pets/pluto/pluto_sitting.jpg" alt="Pluto sitting and posed on top of a table"',
                            '<img src="images/pets/pluto/pluto_walk.jpg" alt="Pluto the dog on a walking trail" onclick="displayImage(this)"'];

var second_pet_image_ar = ['second_pet',
                            '<img src="images/pets/rocket/rocket_dinner.jpg" alt="Rocket is eating his dinner."',
                            '<img src="images/pets/rocket/rocket_wants_to_go_out.jpg" alt="Rocket wants to come out of the playpen"',
                            '<img src="images/pets/rocket/rocket_childhood.jpg" alt="Rocket is in his childhood."'];

var third_pet_image_ar = ['third_pet',
                            '<img src="images/pets/juno/juno_pup.JPG" alt="A young black and brown dog with his tongue hanging out"',
                            '<img src="images/pets/juno/juno_laying.JPG" alt="A black and brown dog laying on a rug"',
                            '<img src="images/pets/juno/juno_laying_2.JPG" alt="A black and brown dog laying on a wood floor"',
                            '<img src="images/pets/juno/juno_profile.JPG" alt="A profile perspective of a black and brown dog from shoulders up"'];

var fourth_pet_image_ar = ['fourth_pet',
                            '<img src="images/pets/lulu/lulu-eating-1.JPG" alt="Lulu enjoying a pepper"',
                            '<img src="images/pets/lulu/lulu-sleeping-1.jpg" alt="Lulu sleeping in a green house"',
                            '<img src="images/pets/lulu/lulu-sleeping-2.jpg" alt="Lulu sleeping in a gray house"',
                            '<img src="images/pets/lulu/lulu-2.jpg" alt="Lulu sniffing the camera"'];

var fifth_pet_image_ar = ['fifth_pet',
                            '<img src="images/pets/peddie/peddie_play.jpg" alt="Peddie is playing in the snow."',
                            '<img src="images/pets/peddie/peddie_swim.jpg" alt="Peddie is swimming in a lake."',
                            '<img src="images/pets/peddie/peddie_sleep.jpg" alt="Peddie loves sleeping on the couch."',
                            '<img src="images/pets/peddie/peddie_smile.jpg" alt="Peddie has the sweetest in the world."'];

var pets_image_nest_ar = [first_pet_image_ar, second_pet_image_ar, third_pet_image_ar, fourth_pet_image_ar, fifth_pet_image_ar];

var first_travel_image_ar = ['first_travel',
                                '<img src="images/travel/chiangmai/chiangmai1.jpeg" alt="Colorful hot balloons in the heart of Chiang Mai"',
                                '<img src="images/travel/chiangmai/chiangmai2.jpeg" alt="Several elephants and smiley volunteers in the forest"',
                                '<img src="images/travel/chiangmai/chiangmai3.jpeg" alt="ancient temple of Chiang Mai"',
                                '<img src="images/travel/chiangmai/chiangmai4.jpeg" alt="several monks walk by the street"',
                                '<img src="images/travel/chiangmai/chiangmai5.jpeg" alt="several delicious dishes from Chiang Mai"',
                                '<img src="images/travel/chiangmai/chiangmaigif.gif" class="motion_gif" alt="A full sky of Sky Lantern rising up"',
                                '<img src="images/travel/chiangmai/chiangmaigif_static.jpeg" class="static_gif" alt="A full sky of Sky Lantern rising up"'];

var travel_image_ar = [first_travel_image_ar];

function clickFunction(){
    console.log('clicked');
}

function clickFunction(index){
    overlayBackground(index);
    document.body.style.overflow = "hidden";
    disableMainPageInteraction();
}

function overlayBackground(index){
    var query = ".overlay";
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

function closeFunction(){
    document.querySelector(".overlay").removeAttribute("style");
    document.querySelector(".overlay").innerHTML = "";
    document.body.style.overflow = "auto";
    enableMainPageInteraction()
}

function get_image_nest_list(index){
    if(index.search("pet") != -1){
        return pets_image_nest_ar;
    }else if(index.search("travel") != -1){
        return travel_image_ar;
    }else if(index.search("recipe") != -1){
        return recipes_image_ar;
    }
}

function create_preview_image_string(index){
    var source_ar = get_image_nest_list(index);
    var preview_image_string = '';
    var suffix = ' onclick="displayImage(this)" onkeydown="if(event.key === \'Enter\' || event.key === \' \') displayImage(this);" tabindex="0">';
    var image_ar = '';

    console.log(source_ar);

    for (var i = 0; i < source_ar.length; i++){
        if (source_ar[i][0] === index){
            image_ar = source_ar[i];
            break;
        }
    }

    for(var i = 1; i < image_ar.length; i++){
        preview_image_string += image_ar[i] + suffix;
    }

    console.log(preview_image_string);

    return preview_image_string;
}

function create_gallery_string(index){
    var gallery_string = '<div class="gallery_container"><button class="close_button" type="button" onclick="closeFunction()">Close</button><div class="in_display_image"></div><div class="preview_images">' + create_preview_image_string(index) + '</div></div>';
    return gallery_string;
}

async function draw_gallery(index){
    var query = ".overlay";
    var target = document.querySelector(query);
    console.log(target);
    await insert_html_to_gallery(index, target);
    displayImage(document.querySelector(".preview_images img"));
}

async function insert_html_to_gallery(index, target){
    var pet_gallery = create_gallery_string(index);
    target.innerHTML = pet_gallery;
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

