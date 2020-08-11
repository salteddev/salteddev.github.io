let firstSlide = document.getElementById('first_slide');
let secondSlide = document.getElementById('second_slide');
let thirdSlide = document.getElementById('third_slide');
let fourthSlide = document.getElementById('fourth_slide');
let fifthSlide = document.getElementById('fifth_slide');
let firsBtn = document.getElementById('first_btn');
let secondBtn = document.getElementById('second_btn');
let thirdBtn = document.getElementById('third_btn');
let fourthBtn = document.getElementById('fourth_btn');
let fifthBtn = document.getElementById('fifth_btn');
let firstPost = document.getElementById('first_post');
let secondPost = document.getElementById('second_post');
let thirdPost = document.getElementById('third_post');
let fourthPost = document.getElementById('fourth_post');
let fifthPost = document.getElementById('fifth_post');
let sideNav = document.getElementById('side_nav');
let test = document.getElementById('test');
let workBtn = document.getElementById('btn_link4work');
firsBtn.style.transform = "scale(1.5)";

function showFirst(){
    firstSlide.style.display = "block";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    fourthSlide.style.display = "none";
    fifthSlide.style.display = "none";
    firstPost.style.display = "block";
    secondPost.style.display = "none";
    thirdPost.style.display = "none";
    fourthPost.style.display = "none";
    fifthPost.style.display = "none";
    firsBtn.style.transform = "scale(1.5)";
    secondBtn.style.transform = "scale(1)";
    thirdBtn.style.transform = "scale(1)";
    fourthBtn.style.transform = "scale(1)";
    fifthBtn.style.transform = "scale(1)";
}
function showSecond(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "block";
    thirdSlide.style.display = "none";
    fourthSlide.style.display = "none";
    fifthSlide.style.display = "none";
    firstPost.style.display = "none";
    secondPost.style.display = "block";
    thirdPost.style.display = "none";
    fourthPost.style.display = "none";
    fifthPost.style.display = "none";
    firsBtn.style.transform = "scale(1)";
    secondBtn.style.transform = "scale(1.5)";
    thirdBtn.style.transform = "scale(1)";
    fourthBtn.style.transform = "scale(1)";
    fifthBtn.style.transform = "scale(1)";
}
function showThird(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "block";
    fourthSlide.style.display = "none";
    fifthSlide.style.display = "none";
    firstPost.style.display = "none";
    secondPost.style.display = "none";
    thirdPost.style.display = "block";
    fourthPost.style.display = "none";
    fifthPost.style.display = "none";
    firsBtn.style.transform = "scale(1)";
    secondBtn.style.transform = "scale(1)";
    thirdBtn.style.transform = "scale(1.5)";
    fourthBtn.style.transform = "scale(1)";
    fifthBtn.style.transform = "scale(1)";
}
function showFourth(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "none"
    thirdSlide.style.display = "none";
    fourthSlide.style.display = "block";
    fifthSlide.style.display = "none";
    firstPost.style.display = "none";
    secondPost.style.display = "none";
    thirdPost.style.display = "none";
    fourthPost.style.display = "block";
    fifthPost.style.display = "none";
    firsBtn.style.transform = "scale(1)";
    secondBtn.style.transform = "scale(1)";
    thirdBtn.style.transform = "scale(1)";
    fourthBtn.style.transform = "scale(1.5)";
    fifthBtn.style.transform = "scale(1)";
}
function showFifth(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    fourthSlide.style.display = "none";
    fifthSlide.style.display = "block";
    firstPost.style.display = "none";
    secondPost.style.display = "none";
    thirdPost.style.display = "none";
    fourthPost.style.display = "none";
    fifthPost.style.display = "block";
    firsBtn.style.transform = "scale(1)";
    secondBtn.style.transform = "scale(1)";
    thirdBtn.style.transform = "scale(1)";
    fourthBtn.style.transform = "scale(1)";
    fifthBtn.style.transform = "scale(1.5)";
}

function menu(){
    if(sideNav.style.width == "0%"){
        sideNav.style.width = "100%";
        test.style.overflow = "hidden";

    }
    else{
        sideNav.style.width = "0%";
        test.style.overflow = "scroll";
    }
}
function pressBtn(){
    sideNav.style.width = "0%";
    test.style.overflow = "scroll";
}