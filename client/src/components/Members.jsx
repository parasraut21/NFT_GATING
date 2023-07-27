import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import io from 'socket.io-client'
import hato from '../images/hato.jpeg'
const Members=()=>{
    const [socket,setSocket]=useState(null);
    const navigateTo = useNavigate();

    useEffect(()=>{
      const socketInstance = io('http://localhost:3000');
      setSocket(socketInstance);

      return()=>{
        socketInstance.disconnect()
      }
    },[])

    useEffect(()=>{
      if(socket){
        socket.on('nftsUpdated',(data)=>{
          if(data.userNFTs<1){
             navigateTo('/')
             alert("You've been logged out because you no longer hold any NFTs in collection")
          }
        })
      }
    },[socket])

    return<>
      <p>Thank you for being a holder of my NFT collection, here's your message:</p>
      <img src={hato}></img>
    </>
 }
 export default Members;