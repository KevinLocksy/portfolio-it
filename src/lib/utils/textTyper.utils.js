export function typeText(node){
  const txt = node.innerText;
  node.innerText="";
  var i = 0;
  var speed = 50;
  typeWriter();

  function typeWriter() {
    if (i < txt.length) {
      node.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    return;
  }//end function typeWriter()
}//end export function typeText(node)