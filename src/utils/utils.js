export function unitListAnimation(){
    const observer=new IntersectionObserver((entries)=>{
        console.log(entries);
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                console.log('Element is in view:', entry.target);
                entry.target.classList.add('show-unit')
            }
        })
        
    })
    const getUnitListClass=document.querySelectorAll('.unit-list')
    getUnitListClass.forEach((el=>observer.observe(el)))
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
            setIsLandscapes(true)
        }
    }
    updateOrientationStatus()
    WINDOW_LANDSCAPES.addEventListener('change',updateOrientationStatus)
}
