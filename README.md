# Event Management Application

##  Features

* Users can create new events with required details
* View a list of all available events
* View complete details of a selected event
* Register for an event using name and email
* Duplicate registrations are prevented for the same event

---

##  Tech Stack

* Backend: Node.js with Express
* Frontend: HTML, CSS, JavaScript
* Storage: In-memory data (arrays)

---

##   Why this stack?

Node.js and Express provide a simple and efficient way to build APIs.
Using basic HTML, CSS, and JavaScript keeps the application lightweight and easy to understand.

---

##   Trade-offs

* Data is not persistent (resets when server restarts)
* No authentication or user login system
* Minimal UI styling

---

##   System Design

The application follows a client-server architecture:

* The frontend is served directly by the Express server
* The backend exposes REST APIs for event management and registration
* Data is stored temporarily in memory

---

##   API Endpoints

* `POST /events` → Create a new event
* `GET /events` → Retrieve all events
* `GET /events/:id` → Retrieve a specific event
* `POST /register` → Register a user for an event

---

##   Run Locally

1. Install Node.js
2. Open terminal in the project directory
3. Run the following commands:

```
npm install
node server.js
```

4. Open your browser and visit:
   http://localhost:3000

---

##   Live Demo

https://event-app-sqbv.onrender.com

