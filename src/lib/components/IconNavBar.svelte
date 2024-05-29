<script>
  export let open;
</script>

<div id='iconNavBar'>
  <div id='bar1' class:open={open} class='bar'></div>
  <div id='bar2' class:open={open} class='bar'></div>
  <div id='bar3' class:open={open} class='bar'></div>
</div>

<style>
#iconNavBar {
  max-height:50px;
  max-width:50px;
}
#iconNavBar:hover {
  opacity: 0.8;
}
/* creating icon bars*/
.bar {
  width: 25px;
  height: 5px;
  background-color: white;
  margin: 5px 0;
  transition: 0.2s;
}
#bar1.open{
  transform: translate(0, 10px) rotate(-45deg);
}
#bar2.open{
  opacity:0;
}
#bar3.open{
  transform: translate(0, -10px) rotate(45deg);
}
</style>