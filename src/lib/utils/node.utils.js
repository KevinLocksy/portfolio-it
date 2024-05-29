const eventName = 'click_outside';

export function clickOutside(node){
  const clickOutsideNode = e => {
    if (node && !node.contains(e.target) && !e.defaultPrevented){
      node.dispatchEvent(new Event(eventName));
      console.log("Click outside element '"+(node.id ? node.id : node.className)+"'. Dispatch event:",eventName);
    }
  }
  document.addEventListener('click',clickOutsideNode);
  return {
    destroy(){
      document.removeEventListener('click',clickOutsideNode);
    }
  }
}