let circle = document.querySelector("#circle");

window.addEventListener("mousemove", (details) => {
    let yVal = details.pageY ;
    let xVal = details.pageX ;

    setTimeout(() => {
        circle.style.top = yVal+"px" ;
        circle.style.left = xVal+"px" ;
    }, 150);

})


// Animate Hero Heading with Textillate js

$('.wisdom-heading').textillate({
    in : {
        effect : "fadeInUp"
    },
    // enable looping
    loop: true
    ,
    out : {
        effect : "fadeOutRight"
    }
});


// Scroll Trigger Animation 

gsap.to(".fader" , {
    scrollTrigger: {
        trigger: "#down",
        // markers : true ,
        start : "top 10%" ,
        toggleActions : "play pause resume reverse", 
    },
    opacity : 0 ,
    y : -100 ,
    stagger : .3 ,
    duration : 2  ,
    onComplete : function (){
        $('#text h3').textillate("start")
    }
})

 // Animate Para with Textillate js
 $('#text h3').textillate({
    autoStart : false ,
    in : {
        effect : "fadeInUp" ,
        delay: 15,
    },
    callback : function () {
        gsap.fromTo("#down #text img.visitnow-btn" , {
            opacity : 0,
            y : -40 ,
            duration : 2 ,
            ease : "Expo.easeInOut"
        } ,
        {
            opacity : 1 ,
            y: 0 ,
        } 
        )
    }
});