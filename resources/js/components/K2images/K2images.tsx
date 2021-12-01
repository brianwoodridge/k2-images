import * as React from "react";
import "./K2images.scss";

interface props {
    className?: string
}

export const K2images: React.FC<props> = (props) => {
    return <>
        <div className={'logo ' + props.className}>
            <span className='k2'>K2</span>
            <span className='images'>images</span>
        </div>
    </>;
}
