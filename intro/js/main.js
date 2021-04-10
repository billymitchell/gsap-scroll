let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        // 4 positions:
        // Enter Viewport
        // Exit Viewport 
        // Re Enter Viewport 
        // Out of viewport 

        // options:
        // play
        // pause
        // resume
        // reverse
        // restart 
        // reset
        // complete
        // none
        // toggleActions: "restart pause reverse pause",
        // Start of animation
        // 20px down from animated object
        // 80% down from top of viewport
        start: "20px 80%",
        // End of animation
        // bottom of animated object
        // 100px down from top of page
        // +=300 is relative to start
        // You can use a function () => 
        end: "bottom 100px",
        markers: true,
        // true or number in seconds 
        scrub: .5,
        // true for self or target object ".target"
        pin: true,
    },
})

tl.to(".box", {
    
    x: 500,
    rotation: 360,
    duration: 3,
    ease: "none",
})
tl.to(".box", {
    
    backgroundColor: "purple",
    duration: 1,
})
tl.to(".box", {
    x: 0,
    duration: 3,
})