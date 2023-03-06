# Slack Alert Endpoint
This is a production-ready web endpoint that accepts a JSON payload as a POST request and sends an alert to a Slack channel if the payload matches desired criteria.

## Requirements
The alert should only be sent to the Slack channel if the payload is a spam notification.

The Slack alert should include the email address included in the payload.

## Setup
- Clone the repository.

- Install dependencies using npm:

> **npm install**

- Set the environment variables in a .env file:

> make .env file in root directory

> API_KEY= your Slack app token

To use the Slack API to send messages to a channel, you will need to add the chat:write OAuth scope to your Slack app. This scope allows your app to send messages on behalf of users.

### Here's how to Slack Api:

Go to the Slack API website and sign in to your Slack workspace.

Navigate to the "Your Apps" page and select the app you want to use for sending alerts.

Click on the "OAuth & Permissions" tab and scroll down to the "Scopes" section.

Click the "Add an OAuth Scope" button and select the "chat:write" scope from the list.

Click the "Save Changes" button to update your app's permissions.

After adding the chat:write scope to your app, you will need to reinstall the app to your workspace for the changes to take effect. Once the app is installed with the new scope, it will be able to send messages to channels on behalf of users.

- Start the server:

> **npm start**

## Usage
Make a POST request to the server's /alert endpoint with a JSON payload that matches the desired criteria. If the payload is a spam notification, an alert will be sent to the Slack channel.

## Example payload:

`{
  "RecordType": "Bounce",
  "Type": "SpamNotification",
  "TypeCode": 512,
  "Name": "Spam notification",
  "Tag": "",
  "MessageStream": "outbound",
  "Description": "The message was delivered, but was either blocked by the user, or",
  "Email": "zaphod@example.com",
  "From": "notifications@honeybadger.io",
  "BouncedAt": "2023-02-27T21:41:30Z"
}`

## Docker
1.To build a Docker image of the application, run the following command:

> **docker build -t <your-image-name> .**

2.Then, to run a container from the image:

> **docker run -p <your-host-port>:3000 -d <your-image-name>**

Replace <your-image-name> with the name you want to give your Docker image, and <your-host-port> with the port number on your host that you want to use to access the containerized application.
