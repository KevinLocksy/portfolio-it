const cursorEvent_start = "pointermove";
const cursorEvent_ending = "pointerout";
const scrollingEvent_start = "scroll";
const scrollingEvent_ending = "scrollend";

export function setCursorPositions(){
  const cursor = new CursorPosition();
  
  document.addEventListener(cursorEvent_start, setCursorPosition);
  document.addEventListener(scrollingEvent_start, setScrollPosition)

  function setCursorPosition(e){
    cursor.setCursorProperties(e.clientX,e.clientY);
    e.target.removeEventListener(cursorEvent_ending,removeListener);
  }
  
  function setScrollPosition(e){
    const html = document.documentElement;//to get the scroll position
    cursor.setScrollProperties(html.scrollLeft,html.scrollTop);
    e.target.removeEventListener(scrollingEvent_ending,removeListener);
  }

  function removeListener(ev){
    ev.target.removeEventListener(cursorEvent_start,setCursorPosition);
    ev.target.removeEventListener(cursorEvent_ending,removeListener);
    ev.target.removeEventListener(scrollingEvent_ending,removeListener);
  }
}


class CursorPosition {
  constructor() {
    this.posX = {
      scroll:0,
      mouse:0,
    };
    this.posY = {
      scroll:0,
      mouse:0,
    };
  }

  setCursorProperties(positionX,positionY){
    this.posX.mouse=positionX;
    this.posY.mouse=positionY;
    this.#setCursorPositionProperties();
  }
  setScrollProperties(positionX,positionY){
    this.posX.scroll=positionX;
    this.posY.scroll=positionY;
    this.#setCursorPositionProperties();
  }

  #setCursorPositionProperties(){
    const html = document.documentElement;//to get the scroll position
    html.style.setProperty("--x", this.posX.scroll+this.posX.mouse);
    html.style.setProperty("--y", this.posY.scroll+this.posY.mouse);
  }
}