jQuery(document).ready(function(){
    $('.carousel').flickity({
        // options
        imagesLoaded: true,
        contain: true,
        groupCells: 3,
        freeScroll: true,
        wrapAround: true,
        imagesLoaded: true,
        pageDots: false,
        autoPlay: 2000,
    })
})

function popup1(){
    document.getElementById("popup-1").classList.toggle("active");
}

function popup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function popup3(){
    document.getElementById("popup-3").classList.toggle("active");
}
