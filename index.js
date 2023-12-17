gsap.to("#navbar",{
    backgroundColor:"#211d1d",
    height:"90px",
    duration:0.5,
    scrollTrigger: {
        trigger:"#navbar",
        scroller:"body",
        start: "top -10%",
        end: "top -100%",
        scrub: 2,
        }
})

gsap.to("#main",{
    backgroundColor:"#211d1d",

    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        start: "top -50%",
        end: "top -60%",
        scrub: 2,
    },
})

