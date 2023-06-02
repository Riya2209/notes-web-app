import React from "react";

const ToggleHeader = ({ handleDarkMode }) => {
return(
    <>
    <div className="toggle-header">
        <h1>Notes</h1>
        <button onClick={()=>{
            handleDarkMode((previousDarkMode)=> !previousDarkMode
            )
        }} className="save">Toggle Mode</button>
    </div>
    </>
)
}

export default ToggleHeader;