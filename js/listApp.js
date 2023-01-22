let input=document.getElementById("name");
let p=document.getElementById("p");
input.addEventListener("input", function(event) {
  handleChange(event.target.value);
});

function handleChange(str){
  p.style.fontWeight="bolder"
  p.textContent = str;
}
let btn=document.getElementById("btn");
let liste=document.querySelector("ul")
p.style.display="inline"
btn.addEventListener("click",function(event) {
    if (input.value!="") {
      handleAjout();
  } else{
    alert("Please type something")
  }}
);
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    if (input.value!="") {
      handleAjout();
  } else{
    alert("Please type something")
  }}
});
function handleAjout(event){
  liste.innerHTML += `<li class="item">  ${input.value}   </li>`;
  input.value=""
}
