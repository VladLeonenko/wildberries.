const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

//cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const closeModalButton = document.querySelector('.modal-close')

const openModal = () => 	modalCart.classList.add('show')
const closeModal = () => 	modalCart.classList.remove('show')


closeModalButton.addEventListener('click', closeModal);
buttonCart.addEventListener('click', openModal);


//scroll smooth

{
const scrollLinks = document.querySelectorAll('a.scroll-link');

for (let i = 0; i < scrollLinks.length; i++){
	scrollLinks[i].addEventListener('click', function(event){
		event.preventDefault();
		const id = scrollLinks[i].getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});
 }
}