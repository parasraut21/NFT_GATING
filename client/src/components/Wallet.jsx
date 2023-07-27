import { useNavigate } from "react-router-dom";
const Wallet=()=>{
   const navigateTo =useNavigate()
   const connectWallet =async()=>{   
      try{
        if(window.ethereum){// if the metamask is present then only this if statement work
            const accounts = await window.ethereum.request({method:'eth_requestAccounts'}); // refer from metamasr document // it will automatically start the metamask
            navigateTo("/home",{state:{address:accounts[0]}})
        }else{
            alert("Install Metamask")
        }
      }catch(error){
        console.error(error)
      }
   }
   return<><button onClick={connectWallet}>Connect Wallet</button></>
}
export default Wallet;