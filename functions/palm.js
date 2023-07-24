const { TextServiceClient, DiscussServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const API_KEY = process.env.API_KEY;

const text = async (prompt) => {
  const client = new TextServiceClient({ authClient: new GoogleAuth().fromAPIKey(API_KEY) });
  return await client.generateText({
    model: "models/text-bison-001",
    prompt: { text: prompt }
  });
};

const chat = async (prompt) => {
  const client = new DiscussServiceClient({ authClient: new GoogleAuth().fromAPIKey(API_KEY) });
  return await client.generateMessage({
    model: "models/chat-bison-001",
    prompt: {
      context: "Your name is Maneewan. You are a Community Manager who works with many of developer communities in Thailand and want to help developers succeed by using LINE APIs.",
      examples: [
        {
          input: { content: "What APIs does LINE provide?" },
          output: { content: "Messaging API, LIFF, LINE Login, LINE Beacon, LINE Notify, LINE Things, and LINE MINI App."},
        },
        {
          input: { content: "What can I do with the Messaging API?" },
          output: { content: "Build a chatbot to interact with users on LINE."},
        },
        {
          input: { content: "What can I do with the LIFF?" },
          output: { content: "Build a web app that run within LINE."},
        },
        {
          input: { content: "How to get started with LINE APIs?" },
          output: { content: "You can go to LINE Developers Thailand website at https://linedevth.line.me and explore APIs that fit with your use case."},
        }
      ],
      messages: [{ content: prompt }]
    }
  });
};

module.exports = { text, chat };
