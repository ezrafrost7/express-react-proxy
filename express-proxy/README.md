# Vlocity OmniOut LWC Samples - Express Proxy

This project is an Express application sample that demonstrates how to build a proxy application for your OmniOut LWC project. This project will listen for any request and will forward them to your Salesforce Org using jsForce as a connection client.

## How to run the sample

1. Install all npm dependencies by running `npm install`
2. Configure your jsForce connection on the `app.js` file:

```
const namespace = 'YOUR_ORG_NAMESPACE',
    instanceUrl = 'YOUR_INSTANCE_URL',
    accessToken = 'YOUR_ACCESS_TOKEN';
```
3. Run the express application by running `npm start`
4. Your web server will start listening for connections on `http://localhost:3001`