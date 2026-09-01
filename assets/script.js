const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let selectedCarouselSlideIndex = 0

const bannerImage = document.querySelector(".banner-img")
const bannerTagLine = document.querySelector("#banner > p")

const dotsContainer = document.querySelector(".dots")
const dots = []
slides.forEach((slide, dotIndex) => {
	const dot = document.createElement("button")
	dot.classList.add("dot")
	dot.addEventListener("click", event => {
		selectCarouselSlide(dotIndex)
	})

	dotsContainer.appendChild(dot)
    dots.push(dot)
})

const bannerLeftArrow = document.querySelector("#banner .arrow_left")
bannerLeftArrow.addEventListener("click", event => {
	let nextIndex = selectedCarouselSlideIndex - 1
	if (nextIndex < 0) {
		nextIndex = slides.length - 1
	}
	selectCarouselSlide(nextIndex)
})

const bannerRightArrow = document.querySelector("#banner .arrow_right")
bannerRightArrow.addEventListener("click", event => {
	let nextIndex = selectedCarouselSlideIndex + 1
	if (nextIndex >= slides.length) {
		nextIndex = 0
	}
	selectCarouselSlide(nextIndex)
})

function selectCarouselSlide(index) {
	dots.forEach(dot => dot.classList.remove("dot_selected"))
	dots[index].classList.add("dot_selected")
	selectedCarouselSlideIndex = index

	const slide = slides[index]
	bannerImage.src = `assets/images/slideshow/${slide.image}`
	bannerTagLine.innerHTML = slide.tagLine
}

selectCarouselSlide(0)
