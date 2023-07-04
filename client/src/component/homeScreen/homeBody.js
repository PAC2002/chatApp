import React from 'react';

function Body() {
    return (<>
        <div className='bodyHome'>
            <div className='sampleChat'>
                <div className='chat sample left'>Hey! How are you?</div>
                <div className='chat sample right'>Not bad. What about you?</div>
                <div className='inputDiv'>
                    <form action='#' >
                        <input type='text' name='message' id='sendMessage' placeholder='write your message' autoComplete='off' />
                        <button type='submit' id='sendButton'>send</button>
                    </form>
                </div>
            </div>
            <div className='description'>
                <p><h1>About The App</h1><br />
                    This is an app that provides a person to have a real time chatting personally or in a group by having their credentials.
                </p>
            </div>
        </div>
    </>)
}
export default Body;
