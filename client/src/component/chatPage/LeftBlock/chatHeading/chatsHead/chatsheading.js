import React from 'react';
import Dots from './dots.js';
// import DropButton from './dropdownMenu';

function ChatsHeading(props) {

    return (<>
        <div className='chatsHeading'>
            <h1>PC</h1>
            <Dots onClick={props.onPressDot} />
        </div>
    </>);
}

export default ChatsHeading;