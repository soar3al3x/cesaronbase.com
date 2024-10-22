$('.slap-leaderboard .sl-header').on("click", function () {     
    
    if (!$(this).parent().hasClass("active")) {
        //$(this).addClass("active");
        $(this).parent().addClass("active");
    } else { 
        //$(this).removeClass("active");
        $(this).parent().removeClass("active");
    }
});

/* ***************************************************************** */

$('.menu-btn').on("click", function (e) {

    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('body').addClass("view-menu");
        menuBtnTl.play();
        menuTl.play();

    } else {
        $(this).removeClass("active");
        $('body').removeClass("view-menu");
        menuBtnTl.reverse();
        menuTl.reverse();
    }

});

const slapTitle = new SplitText(".sc-title", { type: "words, chars" });
const slapSubTitle = new SplitText(".sc-subtitle", { type: "words" });
const slapDisplay = new SplitText(".sc-no", { type: "words, chars" });


gsap.set('.menu-line', { transformOrigin: '100% 50%' });
gsap.set('.menu-line-1', { y: -26 });
gsap.set('.menu-line-3', { y: 26 });
gsap.set('.menu-delete-line', { transformOrigin: '50% 50%' });

const menuBtnTl = gsap.timeline({ paused: true });

menuBtnTl
    .to('.menu-line', {
        duration: .6,
        scaleX: 1,
        y: 0,
        transformOrigin: '50% 50%',
        ease: "back.in"
    })
    .to('.menu-line', {
        duration: .6,
        scaleX: .15,
        ease: "back.out"
    }, '>-.05')

    .from('.menu-delete-line', {
        duration: .6,
        x: gsap.utils.wrap([-60, 60, 60, -60]),
        y: gsap.utils.wrap([-60, -60, 60, 60]),
        ease: "back.out"
    }, '>-.5');

    var menuTl = gsap.timeline({ paused: true });

    menuTl
        .to('.main-menu', {
            duration: .5,
            autoAlpha: 1,
            ease: "power3.out"
        });
        
        

/* ***************************************************************** */


const intro = gsap.timeline({ });

    intro 
        .to('.wrapper, .header, .footer', {       
            duration: .5,
            autoAlpha: 1,
            ease: "power1.out",
        })
        .from('.header-left', {       
            duration: .3,
            xPercent: -100,
            autoAlpha: 0,
            ease: "power1.out",
            transformOrigin: '0% 50%'
        }, ">-.3")   
        .from('.follow-us', {       
            duration: .3,
            xPercent: 50,
            autoAlpha: 0,
            ease: "power1.out",
            transformOrigin: '100% 50%'
        }, ">-.3")
        
        .from('.logo ', {       
            duration: .5,
            scale: .7,
            autoAlpha: 0,
            rotate: 180,
            ease: "power1.out",
        }, ">-.1")        
        .from('.follow-us strong', {       
            duration: .5,            
            y: "1.5vh",
            autoAlpha: 0,
            ease: "power1.out",
        }, ">-.5")
        .from('.follow-icon', {       
            duration: .5,
            stagger: .1,
            scale: .7,
            autoAlpha: 0,
            ease: "power1.out",
            transformOrigin: '50% 50%'
        }, ">-.3")

        .from('.chain-address, .main-menu, .slap-leaderboard', {       
            duration: .5,
            stagger: .1,
            y: gsap.utils.wrap(["1.5vh","-1.5vh","-1.5vh"]),
            autoAlpha: 0,
            ease: "power1.out",
        }, ">-.6")
        .from('.menu-btn', {       
            duration: .3,
            scale: .8,
            y: "-1.5vh",
            rotate: 180,
            autoAlpha: 0,
            ease: "power1.out",
        }, ">-.6")

        .from(slapTitle.chars, {       
            duration: .5,
            stagger: {
                each: 0.05,
                from: "left",
                grid: "auto"
            },
            autoAlpha: 0,            
            y: "4.4vh",
            ease: "power1.out"
        }, "1")
        .from(slapSubTitle.words, {       
            duration: .5,
            stagger: {
                each: 0.05,
                from: "left",
                grid: "auto"
            },
            autoAlpha: 0,
            y: "3.4vh",
            ease: "power1.out"
        }, "1.1")
        .from(slapDisplay.chars, {       
            duration: .5,
            stagger: {
                each: 0.05,
                from: "left",
                grid: "auto"
            },
            autoAlpha: 0,
            y: "5.4vh",
            ease: "power1.out"
        }, "1.1");

/* ***************************************************************** */

const slapSound = new Audio();
slapSound.src = "./assets/sounds/slap.mp3";

gsap.set(".sc-title, .sc-subtitle, .sc-no", { transformOrigin: '50% 50%' })
gsap.set(".slap-message", { scaleX: 0, transformOrigin: '0% 50%' })

$("#slap-button-1").on("click", function () {  

    slapSound.play();
    const tl = gsap.timeline({ });

    tl 
        .to('#slap-background-1', {       
            duration: .1,
            autoAlpha: 1,
            ease: "power1.out",
        })
        .to('#slap-background-1', {       
            duration: .1,
            autoAlpha: 0,
            ease: "power1.in",
        }, ">+.3")
        .to('.slap-message-1', {       
            duration: .1,
            display:"block",
            scaleX: 1,
            ease: "power1.out",
        }, ".15")
        .to('.slap-message-1', {       
            duration: .1,
            display:"none",
            scaleX: 0,
            ease: "power1.in",
        }, ">+.5")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            stagger: .02,
            scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
            ease: "back.inOut",
        }, ".15")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            scale: gsap.utils.wrap([1, 1, 1]),
            ease: "back.inOut",
        }, ">+.3");       
 
        tl();

});

$("#slap-button-2").on("click", function () {  
    
    slapSound.play();
    const tl = gsap.timeline({ });

    tl 
        .to('#slap-background-2', {       
            duration: .1,
            autoAlpha: 1,
            ease: "power1.out",
        })
        .to('#slap-background-2', {       
            duration: .1,
            autoAlpha: 0,
            ease: "power1.in",
        }, ">+.3")
        .to('.slap-message-2', {       
            duration: .1,
            display:"block",
            scaleX: 1,
            ease: "power1.out",
        }, ".15")
        .to('.slap-message-2', {       
            duration: .1,
            display:"none",
            scaleX: 0,
            ease: "power1.in",
        }, ">+.5")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            stagger: .02,
            scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
            ease: "back.inOut",
        }, ".15")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            scale: gsap.utils.wrap([1, 1, 1]),
            ease: "back.inOut",
        }, ">+.3");       
 
        tl();

});

$("#slap-button-3").on("click", function () {  
    
    slapSound.play();
    const tl = gsap.timeline({ });

    tl 
        .to('#slap-background-3', {       
            duration: .1,
            autoAlpha: 1,
            ease: "power1.out",
        })
        .to('#slap-background-3', {       
            duration: .1,
            autoAlpha: 0,
            ease: "power1.in",
        }, ">+.3")
        .to('.slap-message-3', {       
            duration: .1,
            display:"block",
            scaleX: 1,
            ease: "power1.out",
        }, ".15")
        .to('.slap-message-3', {       
            duration: .1,
            display:"none",
            scaleX: 0,
            ease: "power1.in",
        }, ">+.5")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            stagger: .02,
            scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
            ease: "back.inOut",
        }, ".15")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            scale: gsap.utils.wrap([1, 1, 1]),
            ease: "back.inOut",
        }, ">+.3");       
 
        tl();

});

$("#slap-button-4").on("click", function () {  
    
    slapSound.play();
    const tl = gsap.timeline({ });

    tl 
        .to('#slap-background-4', {       
            duration: .1,
            autoAlpha: 1,
            ease: "power1.out",
        })
        .to('#slap-background-4', {       
            duration: .1,
            autoAlpha: 0,
            ease: "power1.in",
        }, ">+.3")
        .to('.slap-message-4', {       
            duration: .1,
            display:"block",
            scaleX: 1,
            ease: "power1.out",
        }, ".15")
        .to('.slap-message-4', {       
            duration: .1,
            display:"none",
            scaleX: 0,
            ease: "power1.in",
        }, ">+.5")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            stagger: .02,
            scale: gsap.utils.wrap([1.1, 1.04, 1.14]),
            ease: "back.inOut",
        }, ".15")
        .to('.sc-title, .sc-subtitle, .sc-no', {       
            duration: .1,
            scale: gsap.utils.wrap([1, 1, 1]),
            ease: "back.inOut",
        }, ">+.3");       
 
        tl();

});

var count = 0;
var countDisplay = document.getElementById("countDisplay");

function countClicks(memeName) {
    count = count + 1;
    
    countDisplay.innerHTML = count;

    $.ajax({
        url: "http://localhost:38080/slap",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: {
            meme_name: memeName
        },
        success: function(response) {
            console.log("Request successful:", response);
        },
        error: function(xhr, status, error) {
            console.error("Request failed:", status, error);
        }
    });
}


