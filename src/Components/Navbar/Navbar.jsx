import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import './Navbar.css'

const Navbar = () => {

  const [channelsNavToggle, setChannelsNavToggle] = useState(true);
  const [directMsgToggle, setDirectMsgToggle] = useState(true);
  const { channels } = useContext(UserContext)

  const channelToggle = () => {
    setChannelsNavToggle(prevChannelsNavToggle => !prevChannelsNavToggle)
  }

  const msgToggle = () => {
    setDirectMsgToggle(prevDirectMsgToggle => !prevDirectMsgToggle)
  }

  return (

    <div className='navbar-container'>
      <h1>CHATS?</h1>

      <div className='nav-list'>

        <div className='channel-section'>
          <div>
          <i class={channelsNavToggle ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down right"}  aria-hidden="true" onClick={channelToggle}></i>
            
            <h3>Channels</h3>
            <button>+</button>
          </div>
          {channelsNavToggle ?
            <div className='channel-list'>
              {channels.length > 0 && channels.map((channel, i) => {
                return (
                  <div key={i}>
                  <div>{channel.name}</div>
                  </div>
                )
              })}
            </div>
            : null}
        </div>


      </div>

      <div className='nav-list'>

        <div className='channel-section'>
          <div>
          <i class={directMsgToggle ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down right"} aria-hidden="true" onClick={msgToggle}></i>
            <h3>Direct messages</h3>
            <button>+</button>
          </div>
          {directMsgToggle ?
            <div className='channel-list'>
              <h1>TEMP MSG 1</h1>
              <h1>TEMP MSG 2</h1>
              <h1>TEMP MSG 3</h1>
              <h1>TEMP MSG 4</h1>
              <h1>TEMP MSG 5</h1>
            </div>
            : ''}
        </div>


      </div>
    </div>
  )
}

export default Navbar