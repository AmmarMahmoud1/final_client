import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {toastError}  from '../lib/toastError';
import React  from "react";


const AllMessages = () => {
    const [messages, setMessages] = useState();

    useEffect(() => {
      (async () => {
        try {
          const headers = { 'Authorization': 'Bearer my-token' };
          const { data } = await axios('https://searchandoffer.onrender.com/api/messages/all');
          console.log(data);
          setMessages(data);
          console.log(messages,'messages');
          
        } catch (error) {
          toastError(
            error.message || 'No messages,  Sorry..!'
          );
          
        }
      })().catch(e => {console.error(e)});
    }, []);



      return (
        <>
        {!messages ? <div>loading</div> : 
       messages.map(
        (message) => {
          return (
            <div> {message.text} </div>
          )
        }
        
        )}
        </>
      )





}

export default AllMessages;