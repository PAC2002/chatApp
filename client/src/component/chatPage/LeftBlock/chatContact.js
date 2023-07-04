import React from 'react';
// import Avatar from './avatar';
// import ContactName from './contactName';

function Contacts(props) {
    return (<>
        <div className='contacts'>
            <div className='avatar'>
                <span>{props.FriendsAvatar}</span>
            </div>
            <div className='contactname'>
                <h2>{props.FriendsName} </h2>
            </div>
        </div>
    </>)
}

export default Contacts;