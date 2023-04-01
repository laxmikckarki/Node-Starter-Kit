const express = require("express");
const axios = require("axios");

const app = express();
const DATA = ["lincolnshire", "frankfuter", "salam"]; //could use as an ID
app.get("/", function (req, res) {
  res.send("Yay Node!");
});

// app.get("/server", (req, res) => {
//   axios.get("http://localhost:8080/sausages").then();
// });

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)

app.get("/server", function (req, res) {
  res.json({ Mm: "server :O" });
});

app.get("/sausages", (req, res) => {
  res.json({ sausages: DATA });
});

app.get("/", function (req, res) {
  res.status(200).send("Welcome to Laxmi's API!!! Mitch here");
});

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept request!`);
});

// Yes, I understand all these terms.

// In Postman, an example of a client could be a web browser sending an HTTP request to the server. The server would then respond with an HTTP response containing the requested data. The front-end is the user interface of the application and the back-end is the code and logic that powers the application. A full stack developer is someone who has knowledge in both the front-end and back-end components.

// A request is a set of instructions sent from the client to the server. The server responds with a response, which is the data and information sent back by the server. HTTP (Hypertext Transfer Protocol) is the protocol used when making requests and exchanging responses between a client and a server. HTTP response codes indicate the status or result of the request and are usually three-digit codes, followed by their description. HTTP request methods, or verbs, are the types of actions used in a request. Examples of HTTP request methods include GET, PUT, POST, and DELETE.

// Some common APIs that people know about include:
// 1. Google Maps API - This API can be used to integrate custom maps into applications and websites, allowing users to get directions, create customized markers, calculate distances, and more.
// 2. Twitter API - The Twitter API enables developers to access core Twitter features such as timeline data, user profiles, and direct messages, as well as related algorithms of the social media platform. It can also be used to search for tweets, collect data on trends, and track activity.
// 3. Stripe API - This API allows developers to accept payments across different platforms by integrating the Stripe payment gateway into apps and websites. It provides a secure way to process credit card and other kinds of information.
// 4. Amazon Web Services (AWS) API - This API is used for cloud-based computing services like storage, databases, analytics, deployment, and more. It gives developers access to a range of web services in order to build, manage, and scale applications on the internet.

// What might you do with these APIs?
// - Create a map-based app that gives users directions from one location to another.
// - Build a website or mobile app that shows Tweets related to a certain topic or keyword.
// - Integrate a payment system into an e-commerce website to securely process payments.
// - Use AWS to store and manage data for applications.
