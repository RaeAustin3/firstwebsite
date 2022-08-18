// makes  drop down for picking siezes work
function getOption() {
  var obj = document.getElementById("pickSize");
  document.getElementById("sizes").innerHTML =
  obj.options[obj.selectedIndex].text;
}
