function dropdown1() {
    document.getElementById("dropbtn_1").classList.toggle("showcontent");
    document.getElementById("dropbtn_2").classList.remove("showcontent");
    document.getElementById("dropbtn_3").classList.remove("showcontent");
}

function dropdown2() {
    document.getElementById("dropbtn_2").classList.toggle("showcontent");
    document.getElementById("dropbtn_3").classList.remove("showcontent");
    document.getElementById("dropbtn_1").classList.remove("showcontent");
    
}

function dropdown3() {
    document.getElementById("dropbtn_3").classList.toggle("showcontent");
    document.getElementById("dropbtn_2").classList.remove("showcontent");
    document.getElementById("dropbtn_1").classList.remove("showcontent");
      
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropcontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showcontent')) {
        openDropdown.classList.remove('showcontent');
      }
    }
  }
}

