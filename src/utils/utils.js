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
