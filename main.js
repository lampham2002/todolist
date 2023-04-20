setInterval(myfunction, 100);
    function myfunction (){
       let d = new Date ();
       document.getElementById("demo").innerHTML=
       
       d.getHours()+" : "+
       d.getMinutes()+ " : " +
       d.getSeconds();
    }
 

var li = document.getElementsByTagName("li");
var i;
for (i = 0; i < li.length;  i++){
  var span = document.createElement("span");
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


  function them() {
     var li = document.createElement("li");
     var inputValue = document.getElementById("Input").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if ( inputValue==""){
      alert("")
     }
     else {
      document.getElementById("UL").appendChild(li)
     }
     document.getElementById("Input").value ="";
     
      var span = document.createElement("span")
      var x = document.createTextNode("\u00D7")
      span.className ="close"
      span.appendChild(x)
      li.appendChild(span)

      for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
          var x = this.parentElement;
          x.style.display =" none"
        } }
      
      
    } 
   
 
  
    
  
  
