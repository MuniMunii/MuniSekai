import React from "react";
import { useLocation } from "react-router-dom";
function UnitComp() {
  const Location = useLocation();
  const dataUnit=Location.state?.dataUnit
  console.log(dataUnit);
  return (
    <>
      <div className={`h-screen w-full`} style={{backgroundColor:dataUnit.Theme}}>
        <p>this is {dataUnit.groupName}</p>
      </div>
    </>
  );
}
export default UnitComp;
