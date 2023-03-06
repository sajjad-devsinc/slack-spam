const express = require('express');
const { WebClient } = require('@slack/web-api');

const router = express.Router()

router.post('/spam', (req, res) => {
  const payload = req.body;

  if (payload && payload.Type === 'SpamNotification') {
    
    const client = new WebClient(process.env.API_KEY);

    client.chat.postMessage({
      channel: '#spam-alerts',
      text: `Spam alert! Email: ${payload.Email}`
    })
      .then((result) => {
        console.log(`Sent message to channel ${result.channel}`);
      })
      .catch((error) => {
        console.error(`Error sending message: ${error}`);
      });
  }
  res.sendStatus(200);
});

module.exports = router
