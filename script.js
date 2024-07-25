const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//

loader
var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top = "-100%";
},3000)
//end

var tl0 = gsap.timeline({
    delay:5,
    duration:1
});
tl0
.from(".textarea p",{
    opacity: 0
})
.from(".textarea a",{
    opacity: 0
})
.from(".textarea h2",{
    opacity: 0
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#cups",
    // markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:1.5,
    pin:true,
}});
tl
.to("#lineone",{
    marginTop: "-120vh",
},'baba')
.to("#linetwo",{
    marginTop: "20vh",
},'baba')

$('.textarea h1').textillate({initialDelay: 2500, in: { effect: 'fadeInUp',delayScale:1, delay: 60 } });





//


var tl = gsap.timeline({
    scrollTrigger:{
    trigger: ".part-1",
    start:"10% 10%",
    end:"100% 50%",
    scrub:true,
    // markers:true,
    pin:true,
 }
})


tl.to(".scrolling",{
    width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})



let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"50% 50%",
        end: "200% 50%",
        pin: true,
        scrub: 1,
    },  
});
tl4.to(".c-one",{
    marginTop: "-25%",
    opacity:"1",
}, 'sct-1')
tl4.to(".c-two",{
    opacity:"1",
}, 'sct-2')
tl4.to(".c-one",{
    marginTop: "-100",
    opacity:"0",
}, 'sct-2')
tl4.to(".c-three",{
    opacity:"1",
}, 'sct-3')
tl4.to(".c-two",{
    opacity:"0",
}, 'sct-3')
tl4.to(".c-one",{
    marginTop:"-180%",
}, 'sct-3')
tl4.to(".c-one",{
    marginTop:"-230%",
}, 'sct-4')
tl4.to(".c-three",{
    opacity:"0",
}, 'sct-4')
tl4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate: 360
}, 'sct-4')









// let tl6 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".part-6",
//         start:"0% 70%",
//         end: "15% 50%",
//         // markers: true,
//         scrub: 1,
//     },  
// });
// tl6.to(".rounded-div-wrapper-6",{
//     height:"0%",
//     marginTop: 0,
// })



let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});
tl7.to("#demoo",{
    bottom:"7%",
})
tl7.to(".our-work-txt-divv",{
    height:"60vh",
}, 'height')
tl7.to(".our-work-txtt",{
    height:"60vh",
}, 'height')
tl7.to("#ourr",{
    left:"0%",
}, 'height')
tl7.to("#workk",{
    right:"0%",
}, 'height')
tl7.to(".scroll-imgg",{
    marginTop:"-300%",
})




// var tl0 =gsap.timeline({
//     delay:.5,
//     duration:1
// });
// tl0
// .from(".textarea p",{
//     opacity: 0
// })
// .from(".textarea a",{
//     opacity: 0
// })
// .from(".textarea h2",{
//     opacity: 0
// })

///////////////////////////////////////////
// var tl = gsap.timeline({scrollTrigger:{
//     trigger:"#mainpage",
//     markers:true,
//     start:"50% 50%",
//     end:"150% 50%",
//     scrub:1.5,
//     pin:true,
// }});
// tl
// .to("#lineone",{
//     marginTop: "-120vh",
// },'baba')
// .to("#linetwo",{
//     marginTop: "20vh",
// },'baba')

// $('.textarea h1').textillate({initialDelay: 200, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });



 gsap.to(".part-2 .smallcup", {
      scale:3,
      duration:2,
      rotate:60,
      y:600,
      scrollTrigger: {
        trigger: ".part-2", 
        scroller:"body",// The element that triggers the animation
        start: "top 0%",
        // end:"top -40%", // When the top of the trigger hits the center of the viewport
        scrub: true, // Smoothly scrubs the animation
        // markers: true, // Shows start and end markers (useful for debugging)
      },
     
    });


    gsap.to(".kokam img", {
        scale:6,
        duration:2,
        rotate:60,
        y:600,
        scrollTrigger: {
          trigger: ".part-4", 
          scroller:"body",// The element that triggers the animation
          start: "top 0%",
          // end:"top -40%", // When the top of the trigger hits the center of the viewport
          scrub: true, // Smoothly scrubs the animation
        //   markers: true, // Shows start and end markers (useful for debugging)
        },
       
      });




    //   cupsscroll

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#onee",
            pin: true,
            // markers: true,
            start: "50% 50%",
            end: "150% 50%",
            scrub: true
        }
    });
    
    tl2.to(".flex-p-content", {
        scale: "0.8"
    })
        .to("#one-text", {
            top: "50%"
        })
    
    
    gsap.timeline({
        scrollTrigger: {
            trigger: "#img-one",
            start: "0% 90%",
            end: "200% 90%",
            scrub: true,
            // markers: true,
        }
    })
        .to("#img-one", {
            backgroundSize: "50%",
        });
    
    gsap.timeline({
        scrollTrigger: {
            trigger: "#img-two",
            start: "0% 90%",
            end: "200% 90%",
            scrub: true,
            // markers: true,
        }
    })
        .to("#img-two", {
            backgroundSize: "50%",
        });
    
    gsap.timeline({
        scrollTrigger: {
            trigger: "#img-three",
            start: "0% 90%",
            end: "200% 90%",
            scrub: true,
            // markers: true,
        }
    })
        .to("#img-three", {
            backgroundSize: "50%",
        });
    
    gsap.timeline({
        scrollTrigger: {
            trigger: "#img-four",
            start: "0% 90%",
            end: "200% 90%",
            scrub: true,
            // markers: true,
        }
    })
        .to("#img-four", {
            backgroundSize: "50%",
        });
    



        // parag

        var tl = gsap.timeline({scrollTrigger:{
            trigger:".p",
            // scroller:"body",
            // markers:true,
            start:"75% 50%",
            end:"100% 50%",
            scrub:5,
            duration: 1,
            pin:true,
          }});
        
          tl
          .to(".img",{
            width: "100vw",
            height: "100vh",
          })




          //menu

         