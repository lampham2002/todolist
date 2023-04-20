
var li = document.getElementsByTagName("li");
var i;
for (i = 0; i < li.length;  i++){
  var span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  li[i].appendChild(span);
}

var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++){
  close[i].onclick = function(){
    var x = this.parentElement;
    x.style.display =" none"
  } }


  function newElement() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("myInput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if ( inputValue==""){
      alert("")
     }
     else {
      document.getElementById("myUL").appendChild(li)
     }
     
     
    }
   
 
  
  
  
  
 

  
  
