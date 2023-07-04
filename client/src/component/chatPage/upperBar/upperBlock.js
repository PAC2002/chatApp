import React from 'react';
// import { ChatState } from '../../../context/ChatProvidercontext';
function UpperBlock() {

    return (<>

        <div className='upperblock'>
            <div className="search">
                <input
                    type="search"
                    placeholder="Search user here"
                />
                <span><button type='submit'>Search</button></span>
            </div>

            <span> <h3>USERNAME</h3></span>
            <div className='upperButton'>
                <button type='submit' className='join'>Join Group</button>
                <button type='submit' className='logOut'>Log Out</button>
            </div>

        </div>

    </>)
}

export default UpperBlock;