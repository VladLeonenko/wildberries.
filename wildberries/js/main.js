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

// for (let i = 0; i < scrollLinks.length; i++){
// 	scrollLinks[i].addEventListener('click', function(event){
// 		event.preventDefault();
// 		const id = scrollLinks[i].getAttribute('href');
// 		document.querySelector(id).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start"
// 		})
// 	});
//  }
for (const scrollLink of scrollLinks){
	scrollLink.addEventListener('click', function(event){
		event.preventDefault();
		const id = scrollLink.getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});
 }
}



//goods

const more = document.querySelector('.more')
const navigationLink = document.querySelectorAll('.navigation-link')
const longGoodsList = document.querySelector('.long-goods-list')
const categoryButton = document.querySelectorAll('.category-button')




const getGoods = async () => {
	const result = await fetch('db/db.json');
	if(!result.ok){
		throw 'Ошибка ' + result.status 
	}
	return await result.json()
}
// getGoods().then(function(data){

// })

const createCard = function({ label, name, img, description, id, price }){
	const card = document.createElement('div')
	card.className = 'col-lg-3 col-sm-6'


	// { labal, name, img, description, id, price }

	card.innerHTML = `
	<div class="goods-card">
		${label ? `<span class="label">${label}</span>` : ''}
		
		<img src="db/${img}" alt="${name}" class="goods-image">
		<h3 class="goods-title">${name}</h3>
		<p class="goods-description">${description}</p>
		<button class="button goods-card-btn add-to-cart" data-id=${id}>
		<span class="button-price">$${price}</span>
		</button>
	</div>
	`
	return card;
}


const renderCards = function(data){
	longGoodsList.textContent = '';

	const cards = data.map(createCard)
	// card.forEach(function(card){
	// 	longGoodsList.append(card)
	// })

	longGoodsList.append(...cards)


	document.body.classList.add('show-goods')
}

more.addEventListener('click', function(event){
	event.preventDefault();
	getGoods().then(renderCards);
});


const filterCards = function(field, value){
	getGoods()
		.then(function(data){
			const filteredGoods = data.filter(function(good){
				return good[field] === value
			})
			return filteredGoods
		})
		.then(renderCards)
}

navigationLink.forEach(function (link){
	link.addEventListener('click', function(event){
		event.preventDefault()
		const field = link.dataset.field
		const value = link.textContent
		if(value == 'All'){
			getGoods().then(renderCards);
		} else{
			filterCards(field, value)
		}
		
	})
  
})



more.addEventListener('click', function(e){
	e.preventDefault();
	body.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
})

