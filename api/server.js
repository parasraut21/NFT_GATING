const express = require('express');
const cors = require('cors')
const {Web3} = require('web3'); // in then new version we should write web3 in curly brackets
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

// quick node api to dirrectly interact with sepolia test net

const web3 =new Web3('https://winter-light-slug.ethereum-sepolia.discover.quiknode.pro/f2a79f13360bc491709c33aca3832163c4a3a340/')
// to make instance of contract we need two things : abi , contract address

 const contractAddress = '0x63D6DdEEda260f50980C04ea6570f410C5f38895';
 const contract = new web3.eth.Contract(ABI,contractAddress); // instance of sc
 //console.log(contract)

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       console.log(Number(nftBalance))
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

// fetchNFTs ("0x7b89098216AE4A880b60F140Bec37373926ac29c");

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       console.log(account)
       const numNFTs = await fetchNFTs(account)

       if(numNFTs.userNFTs>0){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft",numNFTs});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.post('/webhook',async(req,res)=>{  
    try{
      const account = req.body[0].from;
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated',{userNFTs:numNFTs.userNFTs})
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})


const PORT=3000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})
const io = socketIO(server); // beacuse we need to push messege from the server to client
io.on('connection',()=>{
  console.log("Connected")
})