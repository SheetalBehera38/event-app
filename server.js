const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let events = [];
let registrations = [];

// CREATE EVENT
app.post("/events", (req, res) => {
  const { title, date, type, description } = req.body;

  if (!title || !date || !type || !description) {
    return res.status(400).json({ error: "All fields required" });
  }

  const event = {
    id: events.length + 1,
    title,
    date,
    type,
    description
  };

  events.push(event);
  res.json(event);
});

// GET EVENTS
app.get("/events", (req, res) => {
  res.json(events);
});

// EVENT DETAILS
app.get("/events/:id", (req, res) => {
  const event = events.find(e => e.id == req.params.id);
  if (!event) return res.status(404).json({ error: "Not found" });
  res.json(event);
});

// REGISTER
app.post("/register", (req, res) => {
  const { eventId, name, email } = req.body;

  if (!eventId || !name || !email) {
    return res.status(400).json({ error: "All fields required" });
  }

  const exists = registrations.find(
    r => r.eventId == eventId && r.email === email
  );

  if (exists) {
    return res.status(400).json({ error: "Already registered" });
  }

  registrations.push({ eventId, name, email });

  res.json({ message: "Registered successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});