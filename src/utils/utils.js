// use class as parameter
// menggunakan class untuk parameter nya
export function entryAnimation(Target){
    const observer=new IntersectionObserver((entries)=>{
        console.log(entries);
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                console.log('Element is in view:', entry.target);
                entry.target.classList.add('show-unit')
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
