import React from 'react';
function SendMessage() {
    return (<>
        <div className='inputDiv'>
            <form action='#' >
                <input type='text' name='message' id='sendMessage' placeholder='write your message' />
                <button type='submit' id='sendButton'>send</button>
            </form>

        </div>
    </>)

}

export default SendMessage;