import React from "react";
import { useEffect } from "react";
import '../styles/root.css'
import RotatingPhone from "./rotatingPhone";
import { DATA_SEKAI } from "../utils/data";
import { unitListAnimation } from "../utils/utils";
import "../styles/page.css"
function UnitListIntroduction(){
    useEffect(()=>{
        setTimeout(() => {
            unitListAnimation();
        }, 100); 
    },[])
    function UnitList() {
        const getLogo=DATA_SEKAI.map(unit=>{
            const { LEO, MMJ, VBS, WXS, NIJI } = unit;
            return (
                <>
                    <div key={LEO.id} className="unit-list opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative w-28 h-60 border-black border h rounded-t-xl mx-3">
                        <img src={`${require('../assets/Unit/'+LEO.Logo)}`}></img>
                    </div>
                    <div key={MMJ.id} className="unit-list opacity-0 -translate-x-full transition-all delay-100 duration-1000 relative w-28 h-60 border-black border h rounded-t-xl mx-3">
                        <img src={`${require('../assets/Unit/'+MMJ.Logo)}`}></img>
                    </div>
                    <div key={VBS.id} className="unit-list opacity-0 -translate-x-full transition-all delay-150 duration-1000 relative w-28 h-60 border-black border h rounded-t-xl mx-3">
                        <img src={`${require('../assets/Unit/'+VBS.Logo)}`}></img>
                    </div>
                    <div key={WXS.id} className="unit-list opacity-0 -translate-x-full transition-all delay-150 duration-1000 relative w-28 h-60 border-black border h rounded-t-xl mx-3">
                        <img src={`${require('../assets/Unit/'+WXS.Logo)}`}></img>
                    </div>
                    <div key={NIJI.id} className="unit-list opacity-0 -translate-x-full transition-all delay-200 duration-1000 relative w-28 h-60 border-black border h rounded-t-xl mx-3">
                        <img src={`${require('../assets/Unit/'+NIJI.Logo)}`}></img>
                    </div>
                </>
            )
        })
        return getLogo
    }
    return(
        <>
        <div className="w-full h-40 bg-yellow-100">
            <div className="w-[80%] mx-auto ">
                <p className="text-black text-3xl text-center">Sekai</p>
                <div className="flex justify-center ">
                    <UnitList/>
                </div>
            </div>
        </div>
        </>
    )
}
export default UnitListIntroduction