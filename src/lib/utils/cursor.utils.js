const event = "pointermove";
const event_ending = "pointerout";

function findScroller(element) {
  element.onscroll = function() { console.log(element)}
  if (element.onscroll){
    return element
  }
  Array.from(element.children).forEach(findScroller);
}



export function setCursorPositions(){
  const html = document.querySelector("html");
  const scrolling_Elem = findScroller(document);
  let posX={
    scroll:0,
    mouse:0,
  };
  let posY={
    scroll:0,
    mouse:0,
  };
  scrolling_Elem.addEventListener(event, setCursorProperties);

   document.addEventListener("scroll", () => {
    console.log("test, document.documentElement=",document.documentElement)
    console.log("test, document.documentElement.scrollTop; =",document.documentElement.scrollTop)
    console.log("test, document.documentElement.scrollLeft; =",document.documentElement.scrollLeft)
    posX.scroll=html.scrollLeft;
    posY.scroll=html.scrollTop;
    html.style.setProperty("--x", posX.scroll+posX.mouse);
    html.style.setProperty("--y", posY.scroll+posY.mouse);
  })

  function setCursorProperties(e){
    posX.mouse = e.clientX;
    posY.mouse  = e.clientY;
    // console.log("test, e=",e)
    // console.log("test, e.clientX=",e.clientX)
    // console.log("test, e.pageX=",e.pageX)
    // console.log("test, e.x=",e.pageX)
    // console.log("test, e.layerX=",e.layerX)
    // console.log("test, e.screenX=",e.screenX)
    // console.log("test, e.target=",e.target)
    html.style.setProperty("--x", posX.scroll+posX.mouse);
    html.style.setProperty("--y", posY.scroll+posY.mouse);
 
    e.target.removeEventListener(event_ending,removeListener);
  }
  

  function removeListener(ev){

    ev.target.removeEventListener(event,setCursorProperties);
    ev.target.removeEventListener(event_ending,removeListener);


  }
}