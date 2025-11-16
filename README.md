# Awaz

[![License: Unlicensed](https://img.shields.io/badge/license-Unlicensed-red.svg)](https://github.com/AyushRaj-10/Awaz) [![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)]() [![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)]() [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)]() [![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=flat-square&logo=node.js&logoColor=white)]() [![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square)]()


Awaz is a platform designed to facilitate communication and support within a college environment. It provides both confidential reporting channels and a public forum for students to voice their concerns, seek assistance, and engage in community discussions.

## Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🔑 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🔗 Important Links](#-important-links)
- [📝 Footer](#-footer)

## ✨ Features

- **Confidential Reporting 🔒:** Students can submit anonymous reports to the college administration regarding sensitive issues such as ragging, harassment, or safety concerns. These reports are securely transmitted to the admin panel for review.
- **AI-Powered Support Chat 🤖:** An AI chatbot is available to provide students with immediate mental health support. The chat is designed to be anonymous and confidential, offering a safe space for students to discuss their issues.
- **Public Forum 🗣️:** A public forum allows students to discuss campus-wide topics, such as mess food quality, infrastructure issues, or upcoming events. Posts are anonymous, promoting open and honest discussions.
- **Admin Dashboard 📊:** Administrators can manage and review reports, update their statuses, and reply to student queries via a dedicated admin dashboard.
- **Real-time Notifications 🔔:** Students receive notifications for new messages in their confidential report chats, ensuring timely responses and updates.

## 🛠️ Tech Stack

- **Frontend:**
   - React: A JavaScript library for building user interfaces. ⚛️
   - Vite: A build tool that provides a fast and optimized development experience. ⚡
   - Tailwind CSS: A utility-first CSS framework for rapidly designing custom designs. 🎨
   - lucide-react: Beautifully simple, pixel-perfect icons. 🖼️
   - React Router DOM: For navigation and routing. 🗺️

- **Backend:**
   - Node.js: A JavaScript runtime environment for server-side development. ⚙️
   - Express.js: A web application framework for Node.js. 🌐
   - Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. 🍃
   - Multer: Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. 📤
   - Multer Storage Cloudinary: Cloudinary storage engine for Multer. ☁️
   - JSON Web Tokens (JWT): For user authentication. 🔑
   - Cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 🍪
   - Bcryptjs: For password hashing. 🛡️

- **AI Support:**
   - Python: Programming language used to develop the AI chatbot. 🐍
   - Flask: A micro web framework for Python used to create the API endpoint for the AI chatbot. 🧮
   - Perplexity AI API: Used to generate responses for the AI chatbot. 🧠
   - Flask CORS: Handling Cross-Origin Resource Sharing (CORS) in Flask applications. 🚦

## 🚀 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AyushRaj-10/Awaz.git
    cd Awaz
    ```

2.  **Install dependencies for the React frontend:**

    ```bash
    cd Awaz
    npm install
    ```

3.  **Install dependencies for the React Admin frontend:**

    ```bash
    cd awaz-admin
    npm install
    ```

4.  **Install dependencies for the Node.js server:**

    ```bash
    cd Server
    npm install
    ```

5.  **Set up environment variables:**
    - Create a `.env` file in the `Server` directory.
    - Add the following variables:
        ```
        MONGO_URI=<Your MongoDB Connection URI>
        JWT_SECRET=<Your JWT Secret Key>
        PORT=8000
        ```
    - In `ai/server.py`, ensure you have set the `PERPLEXITY_API_KEY` environment variable.

6.  **Configure Cloudinary (Optional - if you want media upload):**
    - Update the `Server/config/cloudinary.js` with your Cloudinary credentials:
        ```javascript
        import { v2 as cloudinary } from 'cloudinary'

        cloudinary.config({
          cloud_name: "your_cloud_name",
          api_key: "your_api_key",
          api_secret: "your_api_secret"
          });

          export default cloudinary;
        ```

## 💻 Usage

### Running the Applications

1.  **Start the React frontend:**

    ```bash
    cd Awaz
    npm run dev
    ```

    This command starts the development server for the student interface.

2.  **Start the React Admin frontend:**

    ```bash
    cd awaz-admin
    npm run dev
    ```

    This command starts the development server for the admin dashboard.

3.  **Start the Node.js server:**

    ```bash
    cd Server
    npm start
    ```

    This command starts the backend server, which handles user authentication, post management, and database connections.

4.  **Run the AI support chatbot:**

    ```bash
    cd ai
    python server.py
    ```
    Make sure you have all required python libraries. Install them using pip if necessary.  This starts the Flask server for the AI support chatbot.

### Accessing the Applications

-   **Student Interface:** Open your web browser and navigate to `http://localhost:5173` (or the port Vite is running on) to access the student interface.
-   **Admin Dashboard:** Access the admin dashboard by navigating to `http://localhost:5173` (or the port Vite is running on) for admin panel.

### Use Cases

- Students can use the platform to report incidents of ragging anonymously, ensuring their safety and encouraging them to speak up.
- Students experiencing stress or anxiety can use the AI chatbot for immediate support and guidance.
- The student forum allows the student community to address issues such as the quality of mess food in hostels, promoting a transparent and collaborative approach to problem-solving.
- College administrators can efficiently manage and address student complaints through the admin dashboard, improving overall responsiveness and support.

## 📂 Project Structure

```
Awaz/
├── Awaz/                 # React frontend for students
├── awaz-admin/           # React frontend for administrators
├── Server/               # Node.js backend
├── ai/                   # Python Flask app for AI chatbot
└── README.md
```

-   **`Awaz/`**: Contains the React frontend code for the student interface.
    -   `src/`: Contains React components, pages, layouts, and context providers.
    -   `components/`: Reusable React components such as `PostCard`, `StudentNavbar`, and `ComplaintRow`.
    -   `pages/`: React components for different routes, including `HomePage`, `LoginPage`, `StudentDashboard`, and `CreatePostPage`.
    -   `layouts/`: Layout components that provide a consistent structure for different sections of the application.
    -   `context/`: Manages authentication state using React Context.
    -   `App.jsx`: Main application component that defines routes and layouts.
    -   `index.html`: The main HTML file for the React application.
    -   `vite.config.js`: Configuration file for the Vite build tool.
    -   `tailwind.config.js`: Configuration file for Tailwind CSS.
    -   `eslint.config.js`: Configuration file for ESLint.

-   **`awaz-admin/`**: Contains the React frontend code for the administrator dashboard.
    -   Similar structure to the `Awaz/` directory, with components and pages tailored for administrative tasks.
    -   `src/components/ComplaintRow.jsx`: Displays individual complaint items in a table.
    -   `src/pages/AdminDashboard.jsx`: Implements the main admin dashboard with data filtering and management.
    -   `src/pages/ComplaintDetailsPage.jsx`: Enables administrators to view and update complaint details.

-   **`Server/`**: Contains the Node.js backend code.
    -   `server.js`: Main entry point for the backend server.
    -   `config/`: Contains configuration files for database connection, Cloudinary, and Multer.
    -   `controllers/`: Contains route handlers for user authentication and post management.
    -   `middleware/`: Contains middleware functions for authentication and authorization.
    -   `models/`: Defines the Mongoose models for users and posts.
    -   `routes/`: Defines the API routes for users and posts.
    -   `.env`: Stores environment-specific variables.

-   **`ai/`**: Contains the Python code for the AI support chatbot.
    -   `server.py`: Flask application that provides an API endpoint for the AI chatbot.

## 🔑 API Reference

### User Authentication Endpoints (Server/routes/user.routes.js)

-   **`POST /user/api/register`**: Registers a new user.
    -   Request body:
        ```json
        {
          "username": "string",
          "password": "string",
          "role": "string" (optional, default: "user")
        }
        ```
    -   Response:
        ```json
        {
          "success": true,
          "message": "User registered successfully",
          "user": {
            "username": "string",
            "role": "string"
          }
        }
        ```

-   **`POST /user/api/login`**: Logs in an existing user.
    -   Request body:
        ```json
        {
          "username": "string",
          "password": "string"
        }
        ```
    -   Response:
        ```json
        {
          "success": true,
          "message": "Login successful",
          "user": {
            "username": "string",
            "role": "string"
          }
        }
        ```

### Post Management Endpoints (Server/routes/post.routes.js)

-   **`POST /user/post`**: Creates a new post (authentication required).
    -   Request body (form data):
        ```form-data
        {
          "text": "string",
          "anonymous": boolean (optional, default: true),
          "title": "string" (required if anonymous is false),
          "media": file (optional)
        }
        ```
    -   Response:
        ```json
        {
          "success": true,
          "postId": "string",
          "message": "Post created successfully",
          "post": {}
        }
        ```

-   **`GET /user/post/:postId`**: Retrieves a specific post by ID (authentication required).
    -   Response:
        ```json
        {
          "post": {}
        }
        ```

-   **`GET /user/post/public`**: Retrieves all public posts.
    -   Response:
        ```json
        {
          "posts": []
        }
        ```

-   **`PATCH /user/post/status/:postId`**: Updates the status of a post (authentication required).
    -   Request body:
        ```json
        {
          "status": "pending" | "done"
        }
        ```
    -   Response:
        ```json
        {
          "message": "Post marked as [status]",
          "post": {}
        }
        ```

### AI Chatbot Endpoint (ai/server.py)

-   **`POST /api/chat`**: Sends a message to the AI chatbot and receives a response.
    -   Request body:
        ```json
        {
          "message": "string"
        }
        ```
    -   Response:
        ```json
        {
          "reply": "string"
        }
        ```

## 🤝 Contributing

Contributions are welcome! Here are the steps to contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Test your changes thoroughly.
5.  Submit a pull request.

## 📜 License

This project is unlicensed.

## 🔗 Important Links

- **Live Demo:** Not Available
- **Project Repository:** [https://github.com/AyushRaj-10/Awaz](https://github.com/AyushRaj-10/Awaz)

## 📝 Footer

- Project: Awaz
- Repository: [https://github.com/AyushRaj-10/Awaz](https://github.com/AyushRaj-10/Awaz)
- Author: [AyushRaj-10](https://github.com/AyushRaj-10)

⭐️ Like the project? Give it a star! 🍴 Fork it to contribute! 🐛 Report issues to help improve it! Contact: [Contact Author]


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**