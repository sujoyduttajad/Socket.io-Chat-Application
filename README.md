# Real-time Chat Application using Socket.io, React.js, Node.js & Express.js
My goal was to build a Chat app that allows users to create room and do real-time communication and send emojis. 
This app is build using web sockets that Socket.io uses internally.

# The app is live here - 
[Click here to see the live demo](https://5f8db8ab81543495e98f17cd--gallant-archimedes-a7086a.netlify.app)

<img src="./home-page.png" alt="the screenshot of the app large screen"/>
<img src="./chat-page.png" alt="the screenshot of the app large screen"/>
<img src="./home-page-mobile.png" alt="the screenshot of the app large screen"/> <img src="./chat-page-mobile.png" alt="the screenshot of the app large screen"/>


# The project structure is distributed into sections - 
* client 
* server
# The libraries included in this app are - 
* For the Server side it has the backend packages like -
  * Node.js 
  * Express.js(CORS middleware) 
  * Socket.io 
  * Nodemon
* For the Client side - 
  * React 
  * React-router 
  * React-emoji 
  * Query-string 
  * Socket.io Client 

# Setting up the server-side
Most of the server-side setup is done requiring http module and then encapsulating it inside the socket.io. Using express makes setting up easier and allows us to use different middleware like the CORS middleware which has been used here.
All the handling of the users adding, removing, admin work,... everything is done on the server side. Also used nodemon module to automaate the serving.

# Setting up the client-side 
Firstly, the design is completely mine, asthetics is an important part that I always try to maintain in all of my projects.
The home page design was build using a tool called blush which allows to make vector illustrations based on humaaans vector graphics.
The responsive design of the home page, changes when opened in a mobile-device.
Secondly, for React file structure two main components were created Join.js(Homepage) and Chat.js. All the other components were created on top of these main components
React-router is used for routing and apart from that for smooth scrolling react-scroll-to-bottom and react-emojis for more user interaction just like any other Chat-app.
Query-strings were used to parse the location i.e. Name & Room. 

Both the client and the server is connected using socket.io, the socket.io-client at the client side and socket.io in the server side enables the user to send constant events. There is constant emmiting and listening of events between the client and the server.

# Deployment
The server is deployed using Heroku and the client is deployed using Netlify.

# Features
* It shows the current users who are in the same room, 
* Send notifications when any user joins or left,
* This chat app allows the entry of unique users for a single room For ex- if Joe is in room "Gamers" he cannot join within the same name.

# Future Scope
* This app is currently session based and does not at any circumstances stores or monitors the Chat going in any room. 
* Will be connected to a database either FIrebase or MongoDB to act as cache so that users can take a look at their previous chats.
* A column will be added to show all the online users.
* The ability to add images, videos and docs.
* To add a variety of emojis more easily
