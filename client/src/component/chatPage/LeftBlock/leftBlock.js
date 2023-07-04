import React, { useState } from 'react';
import ChatsHeading from './chatHeading/chatsHead/chatsheading';
// import Contacts from './chatContact';
import DropButton from './chatHeading/chatsHead/dropdownMenu';
function LeftBlock({ contacts }) {
    const [style, setStyle] = useState("menu");
    const clickedDot = () => {
        console.log("you just clicked");
        if (style === "menu") {
            return setStyle("dotSelected");
        }
        return setStyle("menu");
    }


    
    return (<>
        <div className='leftBlock'>
            <ChatsHeading onPressDot={clickedDot} />
            <DropButton class={style} />
            <div className='contacts'>
                <div className='avatar'>
                    <span></span>
                </div>
                <div className='contactname'>
                    <h2> </h2>
                </div>
            </div>
        </div>
    </>);
}

export default LeftBlock;