// let a=Array.from(document.getElementsByClassName("button"));
// console.log(a);

// const poslistener =document.getElementById("button1");
   
// poslistener.addEventListener('click',function(){
//     document.getElementById("input_field").innerHTML = "I have changed!";
//     console.log(poslistener.value)
  


// });

function myFunction(a) {
    let ans=0;
    let b= document.getElementById("input_field");
    b.value+=a;
  
  
  }


  var input = document.getElementById("input_field");

   input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      event.preventDefault();
      let rr= document.getElementById(input_field)
      input_field.value=eval(input_field.value);
    }
  });
