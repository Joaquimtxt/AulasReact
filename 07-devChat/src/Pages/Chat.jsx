import React from 'react'

const Chat = (props) => {
    //Fake message data
    const messages = [
        {authorId: 1, author:"John Doe", text:"Hello, how are you?"},
        {authorId: 2, author:"Jane Doe", text:"I'm fine, thank you! And you?"},
        {authorId: 3, author:"Lucas Doe", text:"I'm good too!"},
    ]
  return (
    <div id="chat-container" style={{width: "400px", height: "600px"}} className='bg-secondary rounded-4 p-3 d-flex flex-column m-4'>
        <div id="chat-body" className='overflow-y-hidden h-100 d-flex flex-column gap-3'>
{messages.map((message, index) => (
    <div className='align-self-start bg-warning-subtle rounded-3 p-2 text-dark me-5' key={index}> 
    <div className='fw-bold' id="message-author">{message.author}</div>
    <div id="message-text">{message.text}</div>
    </div>
))
}

        </div>
        <div id="chat-footer" className='input-group'>
            <input id="msgUser" name="msgUser" type="text" className='form-control' placeholder='Digite sua mensagem...' />
            <button id="send-button" className='btn btn-light m-0 input-group-text' type='button'>
                <i className="bi bi-send-fill"></i>
            </button>
        
          
        </div>

        </div>
  )
}

export default Chat