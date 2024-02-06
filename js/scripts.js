
let count = 3;
let startHidden = 3;
const cartItem = document.querySelectorAll('.work__cart').length;
const cartList = Array.from(document.querySelector('.work__wrapper').children);
const cartButtonMore = document.querySelector('.serves__button');



Accordion();
MaskPhone();
CartInform()
Modal();


window.addEventListener('resize',(e) =>{
     const widthContent = document.body.clientWidth;
  
       if(widthContent < 650){
             getServesHidden();
              cartButtonMore.style.display = 'block';
              getServesShow();
       }
       else {
             getServesShowAll();
               cartButtonMore.style.display = 'none';
       }
  })


// let CONTENT_CART = [

//     {
//       "id": 1,
//       "title" : "Работа над сайтом по чистке территории",
//       "imgOne" : "none",
//       "error" : {
//          'title' : "Нет аптимизации кода",
//          'title' : "Не прописаны мета теги",
//          'title' : "Не оптимизированны картинки"

//       }

//     },
//      {
//       'id': 2,
//       'title': 'Работа над сайтом по чистке ',
//       'imgOne': 'none',
//        "error" : {
//          'title' : "Нет аптимизации кода",
//          'title' : "Не прописаны мета теги",
//          'title' : "Не оптимизированны картинки"

//       }

//     }





// ]

// for ( let i in CONTENT_CART  ) {
   
//      for ( let j in  CONTENT_CART[i].error.title) {
//            console.log( CONTENT_CART[i].error[j])
//      } 

// }


    











function Modal(){

   const modal = document.querySelector('.modal');
   const modalButtonOpen = document.querySelector('.header__button');
   const modalButtonClose = document.querySelector('.modal__closed');

   modalButtonOpen.addEventListener('click',()=>{

      modal.classList.add('modal--open');
   })
   modalButtonClose.addEventListener('click',()=>{
        modal.classList.remove('modal--open');
   })

}

function Accordion(){
 
 const accordionItem = document.querySelectorAll(".accordion__item");
 
  accordionItem.forEach((item,index)=>{
     
     item.addEventListener('click',()=>{

         item.classList.toggle('accordion__item--opend');
         item.classList.contains('accordion__item--opend') ?  AccordionOpen(item) :  AccordionClose(item);
         AccordionCloseAll(accordionItem,index);
     })
    

  })
}
function AccordionOpen(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`${answer.scrollHeight}px`;
      item.querySelector('.accordion__trigger').classList.add('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-plus","bx-minus");
}
function AccordionClose(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`0px`;
      item.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-minus","bx-plus");
}
function AccordionCloseAll(accordionItem,index){
    accordionItem.forEach(function(itemCurrent, indexCurrent) {
       if(index != indexCurrent){
          itemCurrent.classList.remove("accordion__item--opend");
          let answerCurrent = itemCurrent.querySelector(".accordion__content");
          answerCurrent.style.height  = '0px';
          itemCurrent.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
          itemCurrent.querySelector("i").classList.replace("bx-minus","bx-plus");

       }
    });
}


function MaskPhone(){
      var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
          }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
      }
      var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
      for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
        }
      }
  }

function CartInform(){

    const cartProjectAll = document.querySelectorAll('.work__cart-img');

    cartProjectAll.forEach(function(items){
      items.addEventListener('click',()=>{
            console.log(items.getAttribute('data-cart'));

         }) 
    });
}

const MoreView = {

          Hidden(startItem,cartItems,cartList){
                 const hiddenItem  = cartList.slice(startItem,cartItems);
                 hiddenItem.forEach(function(item) {
                    item.classList.add('work__cart--none');
                });
              },
          Show(temp,cartList,cartItems,button){
         
              count+=temp;

              const visiItems = cartList.slice(0,count);
            visiItems.forEach( function(items) {
                  items.classList.add('work__cart--active');  
                 
                 })
                },

          ShowAll(startItem,cartItems,cartList){
               const hiddenItem  = cartList.slice(startItem,cartItems);
                 hiddenItem.forEach(function(item) {
                    item.classList.remove('work__cart--none');
                });
          },
          MoreButton(count,cartItems,button){
                 if(count>cartItems) {
                      button.classList.add('work__cart--none');
                      
            }
          }
}


cartButtonMore.style.display = 'none';
function getServesHidden(){

  MoreView.Hidden(startHidden,cartItem,cartList);

  // let servesButtonMore = `  
      
  //      <button> Показать ещё</button>

  // `;
   
  
}
function getServesShowAll(){
  MoreView.ShowAll(startHidden,cartItem,cartList);
}
function getServesShow(){

    cartButtonMore.addEventListener('click',()=> {
      MoreView.Show(count,cartList,cartItem,cartButtonMore);
      MoreView.MoreButton(count,cartItem,cartButtonMore);
    })

}

const swiperSL3 = new Swiper('.revirews__wrapper', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next-revirews',
    prevEl: '.swiper-button-prev-revirews',
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    
   992: {
        slidesPerView: 3,
   },
    697: {
        slidesPerView: 2,
   }

  }

});
