import React from 'react';
import SendMessage from './inputDiv';
import LeftChat from './chat/chtatLeft';
import RightChat from './chat/chatRight';
function RightBlock() {
    return (
        <>
            <div className='rightBlock'>
                <LeftChat />
                <RightChat />
                <SendMessage />
            </div>
        </>
    );
}

export default RightBlock;