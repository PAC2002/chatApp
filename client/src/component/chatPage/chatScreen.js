import React, { createContext, useEffect, useState } from 'react';
import UpperBlock from "./upperBar/upperBlock";
import LeftBlock from "./LeftBlock/leftBlock";
import RightBlock from "./rightBlock/rightBlock";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ChatProvider, { ChatState } from '../../context/ChatProvidercontext';

function ChatScreen() {


  // const user = 1;
  const { user } = ChatState();
  return (
    <>
      <div className="app">
        {user && <UpperBlock />}
        <div className="container">
          {user && <LeftBlock />}
          {user && <RightBlock />}
        </div>
      </div>
    </>
  )
}
export default ChatScreen;
