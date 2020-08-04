let items = document.querySelectorAll('.slider_item');
let nextBtn = document.querySelector(".slider_arrow2");
let prevBtn = document.querySelector(".slider_arrow");
let total = items.length;
let index = 0;

nextBtn.onclick=function () {
    anotherOne("next");
}
prevBtn.onclick=function () {
    anotherOne("prev");
}

function anotherOne(direction){

   if(direction == "next"){
        index++; 
        if(index == total){
            index = 0;
        }
    } 
   else{
            if(index == 0){
                index = total -1;
            }
            else{
                index--;
            }
    }

  for(i=0; i<items.length; i++){
        items[i].className.remove("active");
    }
    items[index].className.add("active");     

}
