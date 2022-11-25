import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [channelsNavToggle, setChannelsNavToggle] = useState(true);
  const [directMsgToggle, setDirectMsgToggle] = useState(true);

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
            <button className="btn" onClick={channelToggle}>toggle</button>
            <h3>Channels</h3>
            <button>+</button>
          </div>
          {channelsNavToggle ? 
            <div className='channel-list'>
              <h1>TEMP CHANNEL 1</h1>
              <h1>TEMP CHANNEL 2</h1>
              <h1>TEMP CHANNEL 3</h1>
              <h1>TEMP CHANNEL 4</h1>
              <h1>TEMP CHANNEL 5</h1>
            </div>
          : ''}
        </div>


      </div>

      <div className='nav-list'>

        <div className='channel-section'>
          <div>
            <button className="btn" onClick={msgToggle}>toggle</button>
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