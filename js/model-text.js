
var spanCitations = document.querySelector("#textSpan");

spanCitations.onclick = function() { 
    modalCitations.style.display = "none";
  }

var modalCitations = document.getElementById("myModalCitations");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalCitations.style.display = "block";
}
