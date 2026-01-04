# Chatbot Iframe Tester

A Node.js/Express application with multiple test website layouts for testing chatbot embed solutions.

## Overview

This application provides various standard website layouts with Lorem ipsum content to test how chatbot embeds behave across different design patterns and page structures.

## Features

- **Homepage**: Overview and navigation to all test layouts
- **Blog Layout**: Traditional blog with articles, sidebar, and comments
- **E-commerce Layout**: Product page with images, descriptions, and reviews
- **Landing Page**: Modern SaaS landing page with hero, features, and testimonials
- **Dashboard Layout**: Data-heavy admin dashboard with charts and tables

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Server

Start the development server:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

Available test pages:
- `http://localhost:3000/` - Home page
- `http://localhost:3000/blog` - Blog layout
- `http://localhost:3000/ecommerce` - E-commerce product page
- `http://localhost:3000/landing` - Landing page
- `http://localhost:3000/dashboard` - Dashboard layout

## Adding Your Chatbot Script

To test your chatbot embed:

1. Open any HTML file in the `public/` directory
2. Find the comment at the end of the file before `</body>`:
   ```html
   <!-- Add your chatbot script here -->
   ```
3. Add your chatbot script tag, for example:
   ```html
   <script src="https://your-chatbot-url.com/embed.js"></script>
   ```
4. Save the file and refresh your browser

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Styling**: Pure CSS (no frameworks)

## Project Structure

```
chatbot-iframe-tester/
├── server.js          # Express server
├── package.json       # Dependencies
├── public/           # Static HTML pages
│   ├── index.html    # Home page
│   ├── blog.html     # Blog layout
│   ├── ecommerce.html # E-commerce layout
│   ├── landing.html  # Landing page
│   └── dashboard.html # Dashboard layout
└── README.md
```

## License

MIT
