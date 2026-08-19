(function(){
 var header=document.getElementById("siteHeader");
 var toggle=document.getElementById("navToggle");
 var nav=document.getElementById("siteNav");
 function onScroll(){
 if(!header)return;
 if(window.scrollY>10)header.classList.add("is-solid");
 else header.classList.remove("is-solid");
 }
 window.addEventListener("scroll",onScroll,{passive:true});
 onScroll();
 if(toggle&&nav){
 toggle.addEventListener("click",function(){
 var open=document.body.classList.toggle("nav-open");
 toggle.setAttribute("aria-expanded",open?"true":"false");
 });
 nav.querySelectorAll("a").forEach(function(a){
 a.addEventListener("click",function(){
 document.body.classList.remove("nav-open");
 toggle.setAttribute("aria-expanded","false");
 });
 });
 }
 var clock=document.getElementById("boardClock");
 function tickClock(){
 if(!clock)return;
 var d=new Date();
 var hh=String(d.getHours()).padStart(2,"0");
 var mm=String(d.getMinutes()).padStart(2,"0");
 clock.textContent=hh+":"+mm;
 }
 tickClock();
 setInterval(tickClock,15000);
 var reduce=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(!reduce){
 document.querySelectorAll(".flip[data-flip]").forEach(function(el){
 var frames=String(el.getAttribute("data-flip")||"").split(",");
 var i=0;
 if(frames.length<2)return;
 setInterval(function(){
 i=(i+1)%frames.length;
 el.textContent=frames[i];
 },2400+Math.floor(Math.random()*400));
 });
 }
})();
