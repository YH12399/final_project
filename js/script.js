function clickFunction(){
    console.log('clicked');
}

function clickFunction(index){
    overlayBackground(index);
    slideIn();
}

function overlayBackground(index){
    var query = ".overlay." + index;
    document.querySelector(query).style="display: block;position: absolute;top: 0;left: 0;right: 0;background-color: rgba(0, 0, 0, 0.5);backdrop-filter: blur(20px);overflow: hidden;width: 100%;height: 100%;transition: .5s ease-in-out;";
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
    */
}

function slideIn(){
    document.querySelector(".gallery_container").classList.toggle("open")
}