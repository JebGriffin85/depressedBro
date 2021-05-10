import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import './index.css';
let socket;

const Chat = () => {
    const messagesEndRef = useRef(null);
    const messageEl = useRef(null);
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    let user = useSelector(state => state.session.user)

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        socket.on("chat", (chat) => {
            setMessages(messages => [...messages, chat])
        })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    if (!user) {
        user = {firstname: 'Thad'}
    }
    //referenced from stack https://stackoverflow.com/questions/25505778/automatically-scroll-down-chat-div
    useEffect(() => { //pushes chat messages down to bottom when adding a new message 
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight});
      });
    } else {
        return
    }
}, [])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        socket.emit("chat", { user: user.firstname, msg: chatInput });
        setChatInput("")
    }


    return (user && (
        <div className='main-container'>
            <div className='container' ref={messageEl}>
                {messages.map((message, ind) => (
                    <div key={ind}>{`${message.user}: ${message.msg}`}</div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendChat}>
                <input className='text-input'
                    value={chatInput}
                    onChange={updateChatInput}
                />
                {/* <button type="submit">Send</button> */}
            </form>
        </div>
    )
    )
};


export default Chat;