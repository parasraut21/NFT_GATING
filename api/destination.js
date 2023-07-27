const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_618b120668cf4a5a994c89c44de12dd4'
};

const data = {
  name: 'My Destination',
  to_url: 'https://46d7-2405-201-1004-7030-4869-5add-d1c-affd.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));