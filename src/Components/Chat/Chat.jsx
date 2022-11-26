import React from 'react'
import './Chat.css'
import ChatIcons from './ChatIcons/ChatIcons'
import boldIcon from '../../assets/images/bold-logo.png'
import italic from '../../assets/images/italic-logo.png'
import strikeThrough from '../../assets/images/strike-logo.png'
import link from '../../assets/images/link-logo.png'
import numList from '../../assets/images/numbered-list.png'
import bullList from '../../assets/images/bulleted-list.png'
import code from '../../assets/images/code-logo.png'
import plusLogo from '../../assets/images/plus-logo.png'
import videoLogo from '../../assets/images/video-logo.png'
import micLogo from '../../assets/images/mic-logo.png'
import emoji from '../../assets/images/emoji-logo.png'
import mention from '../../assets/images/mention-logo.png'

const Chatbox = () => {
    return (
        <div className='chat-box-container'>
            <div className='chat-header'>CEEJAY@EMAIL.COM</div>
            <div className='chat-section'>

            </div>

            <div className='chat-form'>
                <form className=''>
                    <ChatIcons icon={boldIcon}/>
                    <ChatIcons icon={italic}/>
                    <ChatIcons icon={strikeThrough}/>
                    <ChatIcons icon={link}/>
                    <ChatIcons icon={numList}/>
                    <ChatIcons icon={bullList}/>
                    <ChatIcons icon={code}/>
                    <input
                        type='text'
                        placeholder='Message UwU'
                    />
                    <ChatIcons icon={plusLogo}/>
                    <ChatIcons icon={videoLogo}/>
                    <ChatIcons icon={micLogo}/>
                    <ChatIcons icon={boldIcon}/>
                    <ChatIcons icon={emoji}/>
                    <ChatIcons icon={mention}/>
                </form>
            </div>
        </div>
    )
}

export default Chatbox