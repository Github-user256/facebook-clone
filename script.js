/*---------Like Buttons-------------*/
const  likeBtn = document.querySelector('.like-btn');
let likeIcon = document.querySelector('#icon');
const count = document.querySelector("#count");

let clicked = false;
likeBtn.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML =  `<i
        class="fa-solid fa-thumbs-up" style="font-size: 25px;cursor: pointer"
      ></i>`
        count.textContent++;
    }else{
        clicked = false;
        likeIcon.innerHTML =  `<i
        class="fa-regular fa-thumbs-up" style="font-size: 25px;cursor: pointer"
      ></i>`
        count.textContent--
    }
})


const  likeBtns = document.querySelector('.like-btn2');
let likeIcons = document.querySelector('#icon2');
const counts = document.querySelector("#count2");

let clicker = false;
likeBtns.addEventListener("click", () => {
    if(!clicker) {
        clicker = true;
        likeIcons.innerHTML =  `<i
        class="fa-solid fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        counts.textContent++;
    }else{
        clicker = false;
        likeIcons.innerHTML =  `<i
        class="fa-regular fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        counts.textContent--
    }
})


const  likeBtn3 = document.querySelector('.like-btn3');
let likeIcon3 = document.querySelector('#icon3');
const count3 = document.querySelector("#count3");

let clicked3 = false;
likeBtn3.addEventListener("click", () => {
    if(!clicked3) {
        clicked3 = true;
        likeIcon3.innerHTML =  `<i
        class="fa-solid fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        count3.textContent++;
    }else{
        clicked3 = false;
        likeIcon3.innerHTML =  `<i
        class="fa-regular fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        count3.textContent--
    }
})

const  likeBtn4 = document.querySelector('.like-btn4');
let likeIcon4 = document.querySelector('#icon4');
const count4 = document.querySelector("#count4");

let clicked4 = false;
likeBtn4.addEventListener("click", () => {
    if(!clicked4) {
        clicked4 = true;
        likeIcon4.innerHTML =  `<i
        class="fa-solid fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        count4.textContent++;
    }else{
        clicked4 = false;
        likeIcon4.innerHTML =  `<i
        class="fa-regular fa-thumbs-up" style="font-size: 25px;cursor: pointer; color: #1876f2;"
      ></i>`
        count4.textContent--
    }
})

/*-----Comments pop up-----------*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');


open.addEventListener('click', () => {
    modal_container.classList.add('show');

});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})



/*-----Comments pop up2-----------*/
const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal-container2');
const close2 = document.getElementById('close2');


open2.addEventListener('click', () => {
    modal_container2.classList.add('show');

});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
})

/*-----Comments pop up3-----------*/
const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal-container3');
const close3 = document.getElementById('close3');


open3.addEventListener('click', () => {
    modal_container3.classList.add('show');

});

close3.addEventListener('click', () => {
    modal_container3.classList.remove('show');
})

/*-----Comments pop up4-----------*/
const open4 = document.getElementById('open4');
const modal_container4 = document.getElementById('modal-container4');
const close4 = document.getElementById('close4');


open4.addEventListener('click', () => {
    modal_container4.classList.add('show');

});

close4.addEventListener('click', () => {
    modal_container4.classList.remove('show');
})