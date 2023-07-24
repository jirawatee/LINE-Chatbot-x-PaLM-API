const {onRequest} = require("firebase-functions/v2/https");
const axios = require("axios");
const palm = require("./palm");

exports.webhook = onRequest(async (req, res) => {
  if (req.method === "POST") {
    const events = req.body.events;
    for (const event of events) {
      switch (event.type) {
        case "message":
          if (event.message.type === "text") {
            const result = await palm.chat(event.message.text);
            const msg = result[0].candidates[0].content;
            await reply(event.replyToken, [{ type: "text", text: msg }]);
          }
          break;
      }
    }
  }

  res.send(req.method);
});

const reply = (token, payload) => {
  return axios({
    method: "post",
    url: `https://api.line.me/v2/bot/message/reply`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`
    },
    data: { replyToken: token, messages: payload }
  });
};
