document.querySelector('#playbtn').addEventListener("click", function(){
    document.querySelector('.video').classList.add('video-active');
    document.querySelector('#video').play();
});
window.addEventListener("scroll", function(){
    document.querySelector('.video').classList.remove('video-active');
    document.querySelector('#video').pause();
});


document.querySelector('.video').addEventListener("keyup", function(event){
    if (event.keycode === 27) {
        document.querySelector('.video').classList.remove('video-active'); 
    }
});