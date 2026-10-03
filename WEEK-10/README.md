# Week 10 - MERN Student Registration CRUD

React (Vite) + Express + Mongoose + MongoDB. Database: `studentdb`, collection: `students`.

## Run

1. Start MongoDB (`mongod`) so it listens on 127.0.0.1:27017.
2. Server:
   ```
   cd server
   npm install
   npm start
   ```
   Expect: "MongoDB connected" and "Server running on port 5000".
3. Client (new terminal):
   ```
   cd client
   npm install
   npm run dev
   ```
   Open http://localhost:5173

## API
| Method | URL | Purpose |
|---|---|---|
| GET | /students | Retrieve all students |
| POST | /students | Register a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |
