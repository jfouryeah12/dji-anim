window.addEventListener('DOMContentLoaded', () => {
    
    const masterTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    masterTimeline.from("#part-d", { duration: 0.8, x: -130, opacity: 0 })
                  .from("#part-i", { duration: 0.8, x: 150, opacity: 0 }, "-=0.8")
                  .from("#part-j", { duration: 0.8, y: 150, opacity: 0 }, "-=0.6");

    masterTimeline.to("#logo-wrapper", { 
        duration: 0.8, 
        scale: 0.75, 
        x: -75,  
        y: -75, 
        delay: 0.5 
    });

    masterTimeline.to("#drone-wrapper", { 
        duration: 1.2,
        x: 0,
        y: -200,
    }, "-=0.5");

    //Just for Fade-In Animation.
    masterTimeline.fromTo("#drone-wrapper", 
        { opacity: 0 }, 
        { 
            opacity: 1, 
            duration: 0.7, 
            ease: "power1.inOut" 
        }, 
        "-=0.5"
    );
    //END

    masterTimeline.to("#copy-container", { 
        duration: 0.6, 
        opacity: 1 
    }, "-=0.4");

    masterTimeline.add(() => {
        startAmbientLoops();
    });

    let hoverTween;
    let lightTween;

    function startAmbientLoops() {
        hoverTween = gsap.to("#drone-wrapper", {
            y: "+=5",
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        lightTween = gsap.to(".drone-light", {
            opacity: 1,
            duration: 0.4,
            yoyo: true,
            y: 10,
            repeat: -1,
            ease: "steps(1)"
        });
    }

    //End All Animation at 15s
    gsap.delayedCall(15.0, () => {
        masterTimeline.pause();
        if (hoverTween) hoverTween.pause();
        if (lightTween) lightTween.pause();
        gsap.set(".drone-light", { opacity: 0, repeat: 0 });
        console.log("15.0 seconds.");
    });
});