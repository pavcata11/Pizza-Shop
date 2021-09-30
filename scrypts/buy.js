
let comments = [];
document.getElementById("comment").innerHTML = comments;

function comment() {
  let name =   document.getElementById("Name_comment").value ;
  let x =  name + "  Коментира:  " + document.getElementById("Comment").value +"<br>" ;
  comments.push(x);
  comments.reverse();
  document.getElementById("comment").innerHTML = comments;
  document.getElementById("Name_comment").value =""; //clear
  document.getElementById("Comment").value="";      //clear
}

function order() {
  let name = document.getElementById("Name").value;
  let adress = document.getElementById("adress").value;
  name =  name +", благодарим за поръчката! Ще бъде доставена на следният адрес: "+ adress;
   alert(name);
//  document.getElementById("name").innerHTML  = x; //като текст
document.getElementById("Name").value =""; //clear
document.getElementById("adress").value="";

}
