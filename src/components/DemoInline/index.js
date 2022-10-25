import React from "react";

const divStyleOne = {
    backgroundColor : 'blue',
    padding : '10px'
};

const DemoInline = ({title = "Default text", active = false, backgroundColor = 'blue'}) => {
    let color = 'white';
    if (active)
        color = 'yellow';
    return <>
        <div style={{...divStyleOne, backgroundColor}}>
            <div style={{color}}>{title}</div>
        </div>
    </>;
};

export default DemoInline;