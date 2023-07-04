import React from 'react';

function DropButton(props) {
   return (
      <>
         <div className={props.class}>
            <div className='option newGroup'>New Group</div>
            <div className='option search'>Search</div>
            <div className='option profile'>Profile</div>
         </div>
      </>
   )
}

export default DropButton;