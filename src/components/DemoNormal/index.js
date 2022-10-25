import React from "react";
import './style.css';

const DemoNormal = ({title = 'Default text', selected = false}) => {
    let className = "outer";
    if (selected)
        className += " selected";
    return <>
        <div className={className}>
            <div className="inner">{title}</div>
        </div>
    </>;
};
export default DemoNormal;