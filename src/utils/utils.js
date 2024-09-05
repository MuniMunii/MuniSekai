// use targrt class as parameter and class animation for second parameter
// menggunakan class untuk parameter target dan param class animation 
export function entryAnimation(Target,animation){
    const observer=new IntersectionObserver((entries)=>{
        console.log(entries);
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add(animation)
            }
        })
        
    })
    const getTargetClass=document.querySelectorAll(Target)
    getTargetClass.forEach((el=>observer.observe(el)))
}
export function matchWindowLandscapes(setIsLandscapes){
    const WINDOW_LANDSCAPES=window.matchMedia('(min-width:500px)')
    function updateOrientationStatus(e){
        const isLandscapes =e ?e.matches:WINDOW_LANDSCAPES.matches
        if (!isLandscapes) {
            console.log('Please rotate your phone');
            setIsLandscapes(false)
        } else {
            console.log('Good');
            // will firing again if the condition fullfiled
            // function bakal di aktifin lagi kalo kondisi nya terpenuhi
            entryAnimation()
            setIsLandscapes(true)
        }
    }
    updateOrientationStatus()
    WINDOW_LANDSCAPES.addEventListener('change',updateOrientationStatus)
}
// harus pake arrow function/callback untuk pass event target nya
// need use arrow function/callback for passing event target prop
export function mouseEnterAndLeaveEffect(event,targetClass,animation) {
    // ngambil class dari target yang di pencet
    const classTarget = event.currentTarget.querySelector(targetClass);
    if (event.type === "mouseenter") {
      if (classTarget) {
        classTarget.classList.add(animation);
      }
    } else if (event.type === "mouseleave") {
      if (classTarget) {
        classTarget.classList.remove(animation);
      }
    }
  }

export function parallaxedHoverEffext(){
  let getBoxParallax=document.querySelector(".box-parallax");
  console.log(getBoxParallax);
  
getBoxParallax.addEventListener("mousemove", function(event) {
  parallaxed(event);
});
function parallaxed(e) {
      let amountMovedX = (e.clientX * -0.2 / 8);
      let amountMovedY = (e.clientY * -0.2 / 8);
      let x = document.getElementsByClassName("parallaxed");
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}
}