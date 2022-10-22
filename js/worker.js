let clickbutton = document.getElementById('GCC');
let modbox = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementById("close");
span.onclick = function() {
    modbox.style.display = "none";
  }
clickbutton.onclick = function(){
    console.log("We are onlin");
    let text = document.getElementById('caption').value;
    console.log(text);
    let result = text.replace(/(\r\n|\r|\n)/g, '⁣\n')
    console.log(result);
    navigator.clipboard.writeText(result);
    modbox.style.display = 'block';
}
window.onclick = function(event) {
    if (event.target == modbox) {
      modbox.style.display = "none";
    }
  }