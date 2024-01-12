# LINE Chatbot x PaLM API
Code of integrating LINE Chatbot with PaLM API using Cloud Functions for Firebase 2nd Gen

## Prerequisites
* [Node.js v14](https://nodejs.org) or higher
* [Create a channel on the LINE Developers console](https://developers.line.biz/en/docs/messaging-api/getting-started/)
* Create a Firebase project using the [Firebase Console](https://console.firebase.google.com) and select <b>Blaze plan</b>

## Cloud Functions for Firebase
* Copy credentials and set them in Environment variable (.env)
```
CHANNEL_ACCESS_TOKEN=CHANNEL-ACCESS-TOKEN-FROM-LINE
API_KEY=API-KEY-FROM-MAKERSUITE
```

## Documentation
* [LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/overview)
* [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/get-started)
* [PaLM API](https://developers.generativeai.google/guide/palm_api_overview)
