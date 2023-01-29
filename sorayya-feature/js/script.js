
const animationInfo = {

    targets: '#container h2',
    
    translateX:{
        value:'630px',
        delay: anime.stagger(100)
    },
    
    opacity: {
        value:'1.0',
        delay: anime.stagger(100),
    
    },
    
    color: {
        value: 'hsl(0, 50%, 90%)',
        delay: anime.stagger(300)
    },
    
    scale: {
        value: 3,
        delay: anime.stagger(100)
    },
    
    duration:2500,
    
    easing: 'easeInOutBounce',
    direction: 'alternate',
    loop: true,
    autoplay: false
    }

    const imagesAnimation = {

        
        translateX:{
            value:'630px',
            delay: anime.stagger(100)
        },
        
        opacity: {
            value:'1.0',
            delay: anime.stagger(100),
        
        },
        
        color: {
            value: 'hsl(0, 50%, 90%)',
            delay: anime.stagger(300)
        },
        
        scale: {
            value: 3,
            delay: anime.stagger(100)
        },
        
        duration:2500,
        
        easing: 'easeInOutBounce',
        direction: 'alternate',
        loop: true,
        autoplay: false
        }
        
    
    const but = anime(animationInfo);
    const photoList = anime(imagesAnimation);

    const playBtn = document.querySelector("#play");
    const pauseBtn = document.querySelector("#pause");
    const stopBtn = document.querySelector("#stop");
    
    playBtn.addEventListener("click", () => {
        photoList.play();
        but.play();
    });
    pauseBtn.addEventListener("click", () => {
        but.pause()
        photoList.pause();
    });
    stopBtn.addEventListener("click", function() {
      but.restart();
      but.pause();
      photoList.restart();
      photoList.pause();

    });
    