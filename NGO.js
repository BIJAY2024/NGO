// document.getElementById("ham").addEventListener ("click", function(){
//     document.getElementById("hamburger-nav").classList.add("smenu");
// });
// document.getElementById("close").addEventListener ("click", function(){
//     document.getElementById("hamburger-nav").classList.remove("smenu");
// });

document.getElementById("ham").addEventListener("click", function() {
    document.getElementById("hamburger-nav").classList.toggle("smenu");
  });
  
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("hamburger-nav").classList.remove("smenu");
  });
  