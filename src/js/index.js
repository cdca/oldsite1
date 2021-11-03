gsap.registerPlugin(ScrollTrigger);
gsap.set('.hp__images-image-block',{
    transformOrigin: 'right'
})
gsap.set('.hp__images-image.two',{
    yPercent: -10
})
gsap.set('.hp__images-image.three',{
    yPercent: -20
})
gsap.set('.hp__images-image.four',{
    yPercent: -30
})
gsap.set('.features__x4-img',{
    scale: .8
})
gsap.set('.f', {
    opacity: 0,
    y: 50
})

gsap.set(".features__x4-redbox", {
    yPercent: -7
})
// gsap.set('.features_x4', {
//     yPercent: 7
// })

gsap.set('[data-ani="blog"] > a', {
    opacity: 0,
    yPercent: 30
})
let redbox = document.querySelectorAll('.features__x4-redbox')
let imgs = document.querySelectorAll('.features__x4 ')

redbox.forEach(box => {
    gsap.to(box, {
        scrollTrigger: {
            trigger: box,  
            start: "top bottom",
            end: "bottom top",
            ease: 'power4.in',
            //markers: true,
            scrub: 1,
            },
            yPercent: 7
        })
})

// imgs.forEach(box => {
//     gsap.to(box, {
//         scrollTrigger: {
//             trigger: box,  
//             start: "top bottom",
//             end: "bottom top",
//             ease: 'power4.in',
//             //markers: true,
//             scrub: .4,
//             },
//             yPercent: -7
//         })
// })

function init(){
    gsap.to('.hp__images-image-block', {
        duration: .8,
        scaleX: 0,
        stagger: .08
    })

    gsap.to('.hp__images-image', {
        scrollTrigger: {
            //trigger: '.hp__images-image',  
            endTrigger: '.hp__images',
            start: "top top",
            end: "bottom top",
            ease: 'power4.in',
            //markers: true,
            scrub: 1,
            },
        yPercent: 15
        })


    //observer
    const ani = document.querySelectorAll('.ani');
    
    let mainOptions ={
        threshold: 0,
        rootMargin: "0% 0% -15% 0%"
    }
    
    var mainObserver = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
    
            var dataAni = entry.target.dataset.ani;
     
            if (entry.isIntersecting && dataAni === 'x4') {  
                gsap.to(entry.target.children, {
                    duration: .9,
                    scale: 1,
                    ease: 'expo.out',
                    stagger: .1
                })
            }  
            if (entry.isIntersecting && dataAni === 'blog') {  
                gsap.to(entry.target.children, {
                    duration: 1.2,
                    opacity: 1,
                    yPercent: 0,
                    ease: 'power3.out',
                    stagger: .15
                })
            }  
            if (entry.isIntersecting && dataAni === 'content') {  
                let anime = entry.target.querySelectorAll('.f')
                gsap.to(anime, {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'expo.out',
                    stagger: .05
                })
            }  
            if (entry.isIntersecting && dataAni === 'block') {  
                let block = entry.target.querySelectorAll('.r')
                gsap.to(block, {
                    duration: 1.7,
                    scaleX: 0,
                    ease: 'power3.out',
                    stagger: .1
                })
            }  
        })
    }, mainOptions)
    
    ani.forEach(ani => {
        mainObserver.observe(ani);
    })
    
}
window.addEventListener('load', function(){
    init();    
})

