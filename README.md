# BubbleChat

BubbleChat is a real-time chat application that enables users to communicate instantly through a sleek and intuitive interface. Built with a modern tech stack, it offers seamless messaging capabilities, making it ideal for both personal and group conversations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Messaging**: Instantaneous communication between users.
- **User-Friendly Interface**: Clean and responsive design for optimal user experience.
- **Scalable Architecture**: Modular codebase for easy scalability and maintenance.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.IO
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running locally or remotely.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/NavvAbhishek/BubbleChat.git
   cd BubbleChat
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```
3. **Install frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**:

   Create a `.env` file in the `backend` directory with the following content:

```bash
  MONGODB_URI=
  PORT=
  JWT_SECRET=
  NODE_ENV=
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=
```  

5. **Start the backend server:**

   ```bash
   cd backend
   npm run dev
   ```
6. **Start the frontend:**

   ```bash
   cd frontend
   npm run dev
   ```
   
   The application will be available at `http://localhost:3000`.

## Usage

1. **Register**: Create a new account by providing a username and password.
2. **Login**: Access your account using your credentials.
3. **Chat**: Start real-time conversations with other registered users.

## Project Structure

```
BubbleChat/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
