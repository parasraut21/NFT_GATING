//8c160a51-f485-42ee-88f5-de61ec435e51
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_618b120668cf4a5a994c89c44de12dd4'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICc3Yjg5MDk4MjE2QUU0QTg4MGI2MEYxNDBCZWMzNzM3MzkyNmFjMjljJykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweDYzRDZEZEVFZGEyNjBmNTA5ODBDMDRlYTY1NzBmNDEwQzVmMzg4OTUnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['8c160a51-f485-42ee-88f5-de61ec435e51']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '7b89098216AE4A880b60F140Bec37373926ac29c') && 
// (tx_logs_address == '0x63D6DdEEda260f50980C04ea6570f410C5f38895') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')