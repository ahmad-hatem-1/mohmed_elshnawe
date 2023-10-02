// header cousomize 
let hdr = document.querySelector('header')
let hdr_logo = document.querySelector('#logo-h2')
let nav_links = document.querySelectorAll('nav a')
let fill_to_end = document.querySelector('.fill-to-end')
let triangle = document.querySelector('.triangle')
function ahmed() {
    addEventListener("scroll", () => {
        for (let i = 0; i < nav_links.length; i++) {

            if (scrollY >= 20) {
                hdr.classList.add("hdr_scroll")
                nav_links[i].classList.add("nav_i_style_scroll")
                hdr_logo.classList.add('logo_h2_scroll')
                hdr_logo.previousElementSibling.style.width = "40px"

            }
            else {
                hdr.classList.remove("hdr_scroll")
                nav_links[i].classList.remove("nav_i_style_scroll")
                hdr_logo.classList.remove('logo_h2_scroll')
                hdr_logo.previousElementSibling.style.width = ""
            }
        }
    })
}
ahmed()
addEventListener("scroll", () => {
    scrollY < 100 ? nav_links[0].classList.add("nav_a_active_have") : nav_links[0].classList.remove("nav_a_active_have")
    scrollY > 100 && scrollY != 100 ? nav_links[1].classList.add("nav_a_active_have") : nav_links[1].classList.remove("nav_a_active_have")
    scrollY > 100 && scrollY != 100 ? nav_links[1].classList.add("nav_a_active_have") : nav_links[1].classList.remove("nav_a_active_have")
    if (scrollY >= 100) {
        triangle.style.width = '100%'
    }
    else {
        triangle.style.width = ""
    }
})
nav_links[0].classList.add("nav_a_active_have")

// end header cousomize 
// start cousomize load 
addEventListener('load', () => {
    let hdr_blur = document.getElementsByTagName('header')[0]
    let main_blur = document.getElementsByTagName('main')[0]
    let loader = document.querySelector('.loding')
    let landing_text_h1 = document.querySelector(".landing .container .text h1")
    let landing_text_p = document.querySelector(".landing .container .text p")
    main_blur.classList.add('finish_blur_loding')
    hdr_blur.classList.add('finish_blur_loding')
    loader.classList.add('finish_loding')
    landing_text_h1.classList.add('transform-and-opactie-return')
    landing_text_p.classList.add('transform-and-opactie-return')
    document.querySelector('nav').classList.add('transform-and-opactie-return')
    document.querySelector('header .logo').classList.add('transform-and-opactie-return')
})
// end cousomize bo_top icoe 


// start cousomize bo_top icoe 
let go_top = document.querySelector('.go_top')
// scrolly >=50 ? go_top.style.opacity = "1":go_top.style.opacity = "0"
addEventListener("scroll", () => {
    scrollY >= 50 ? go_top.style.opacity = "1" : go_top.style.opacity = ""
})
go_top.addEventListener("click", () => { scroll(0, 0) })
// end cousomize bo_top icoe 

// start customize card 
let card = function () {
    let card_row_1 = document.querySelectorAll('.row-1')
    let card_row_2 = document.querySelectorAll('.row-2')
    for (let i = 0; i < card_row_1.length; i++) {
        addEventListener('scroll', _ => {
            if (scrollY >= 550) {
                card_row_1[i].classList.add('scale-animation')
            }
            if (scrollY < 500) {
                card_row_1[i].classList.remove('scale-animation')
            }
        })
    }
    for (let i = 0; i < card_row_2.length; i++) {
        addEventListener('scroll', _ => {
            if (scrollY >= 1000) {
                card_row_2[i].classList.add('to-top-animation')
            }
            if (scrollY < 900) {
                card_row_2[i].classList.remove('to-top-animation')
            }
        })
    }

}
card()
// end customize card 





// to-filll-start 


function to_Top() {
    let scroll_Value_now = document.documentElement.scrollTop, height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let result = (scroll_Value_now / height) * 100
    document.querySelector(".fill-to-end").style.width = result + "%"
}
(function () { onscroll = function () { to_Top() } })()
// to-filll-end






// ************************* landing background ****************

let bc = _=> {
    let bcLan = document.querySelector(".landing")
    let background = ["imgs/landin-1.jpg","imgs/landin-2.jpg","imgs/landin-3.jpg"]
    background.reverse()
    let i = 0
    setInterval(_=>{
        if (i === background.length){
            i = 0
        }
        bcLan.style.cssText = `
        background-image: url(${background[i]});
        background-position: 100% 100%;
        `
        i++
    },5000)
}
bc()

// ************************* work ****************
let slide = document.querySelector('.slide')
let slide_img = document.querySelector('.slide img')
let slide_close = document.querySelector('.slide i ')
slide_close.onclick = () => {
    slide.classList.remove("slide-active")
    }
console.log(slide)
let imgWork = document.querySelectorAll(".work .container .img-cont img") 
imgWork.forEach(img=>{
img.onclick = (e) => {
slide.classList.add("slide-active")
slide_img.src = e.target.src
}

})