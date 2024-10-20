// use targrt class as parameter and class animation for second parameter
// menggunakan class untuk parameter target dan param class animation
export function entryAnimation(Target, animation) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting&&!entry.target.classList.contains('animated')) {
        entry.target.classList.add(animation,'animated');
        observer.unobserve(entry.target);
      }
    });
  });
  const getTargetClass = document.querySelectorAll(Target);
  getTargetClass.forEach((el) => observer.observe(el));
}
export function matchWindowLandscapes(setIsLandscapes) {
  const WINDOW_LANDSCAPES = window.matchMedia("(min-width:500px)");
  function updateOrientationStatus(e) {
    const isLandscapes = e ? e.matches : WINDOW_LANDSCAPES.matches;
    if (!isLandscapes) {
      setIsLandscapes(false);
    } else {
      // will firing again if the condition fullfiled
      // function bakal di aktifin lagi kalo kondisi nya terpenuhi
      entryAnimation();
      setIsLandscapes(true);
    }
  }
  updateOrientationStatus();
  WINDOW_LANDSCAPES.addEventListener("change", updateOrientationStatus);
}
// harus pake arrow function/callback untuk pass event target nya
// need use arrow function/callback for passing event target prop
export function mouseEnterAndLeaveEffect(event, targetClass, animation) {
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

// use box-parallax class as parent container and class parallaxed to object/child that wanted to have parallaxed
// gunakan box-parallax sebagai class parent nya dan class parallaxed untuk object/child yang ingin ada effect nya 
export function parallaxedHoverEffext(targetClass,parallaxDirection) {
  let getBoxParallax = document.querySelector(".box-parallax");
  getBoxParallax.addEventListener("mousemove", function (event) {
    parallaxed(event);
  });
  function parallaxed(e) {
    let amountMovedX = (e.clientX * -0.2) / 8;
    let amountMovedY = (e.clientY * -0.2) / 8;
    let x = document.getElementsByClassName('parallaxed');
    // const specificTarget=document.querySelector(targetClass)
    // console.log(specificTarget);
    let i;
    // if(specificTarget){
    //   console.log('accesing if');
    //   if(x==='parallaxed-x'){
    //     for (i = 0; i < specificTarget.length; i++) {
    //       specificTarget[i].style.transform =
    //         "translate(" + amountMovedX + "px)";
    //     }
    //   }
    //   else if(x==='parallaxed-y'){
    //     for (i = 0; i < specificTarget.length; i++) {
    //       specificTarget[i].style.transform =
    //         "translate(" + amountMovedY + "px)";
    //     }
    //   }
    //   else{
    //     for (i = 0; i < x.length; i++) {
    //       x[i].style.transform =
    //         "translate(" + amountMovedX + "px," + amountMovedY + "px)";
    //     }
    //   }
    // }
    // else{
      for (i = 0; i < x.length; i++) {
        x[i].style.transform =
          "translate(" + amountMovedX + "px," + amountMovedY + "px)";
      }
    // }
  }
}
export function scrollStopEffect(condition){
  let getAppClass=document.querySelector('.App')
  if(condition){
    getAppClass.classList.add('overflow-hidden')
    getAppClass.classList.remove('overflow-auto')
  }
  else if(!condition){
    getAppClass.classList.add('overflow-auto')
    getAppClass.classList.remove('overflow-hidden')
  }
}
// opacity value need to be like og css (0.4 not 40) not in tailwind ways  
export function hexToRGBA(hex, opacity) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r},${g},${b},${opacity})`;
}