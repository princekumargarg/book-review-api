# 📚 Book Review API

A RESTful API built with Node.js, Express, and MongoDB for managing books and user reviews.

## 🚀 Features

- JWT-based authentication
- CRUD for books and reviews
- One review per book per user
- Search, filter, and pagination

## 🔧 Tech Stack

- Node.js, Express
- MongoDB, Mongoose
- JWT, bcrypt

## 📦 Setup Instructions

1. Clone and install:

   ```bash
   git clone <repo_url>
   cd book-review-api
   npm install
   ```

2. Create `.env`:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/book_review_api
   JWT_SECRET=your_jwt_secret
   ```

3. Start server:

   ```bash
   npm run dev
   ```

## 🧪 Sample API Requests

### Auth

- ` POST /signup``{ "email": "user@example.com", "password": "123456" } `
- `POST /login`
  `{ "email": "user@example.com", "password": "123456" }`

### Books

- `GET /books`
- `GET /books/search?query=orwell`
- `POST /books` _(auth required)_

### Reviews

- `POST /books/:id/reviews` _(auth required)_
- `PUT /reviews/:id`
- `DELETE /reviews/:id`

## 🗃️ Schema (Simplified)

**User**: email, password
**Book**: title, author, genre
**Review**: userId, bookId, rating, comment

## 💡 Notes

- Users can review a book only once.
- Only review authors can update/delete their reviews.
