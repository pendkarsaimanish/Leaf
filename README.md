# 🍃 Leaf - A Minimalist Blogging Platform

[![React Version][react-badge]][react-url]
[![Vite Version][vite-badge]][vite-url]
[![License: MIT][license-badge]][license-url]

Leaf is a modern, sleek, and minimalist blogging platform designed for meaningful exchange. It provides a clean and focused writing experience, allowing you to publish your ideas and discover others with ease. Built with a powerful stack featuring React for the frontend and Appwrite for the backend.

## ✨ Features

- **Sleek & Responsive UI**: A beautiful and intuitive user interface built with **Tailwind CSS** and **MUI Joy**.
- **Secure Authentication**: Easy and secure sign-in with **Google OAuth** powered by Appwrite.
- **Protected Routes**: Client-side routing with protected areas accessible only to authenticated users.
- **Fast & Performant**: Built with **Vite** for a lightning-fast development experience and optimized builds.
- **Scalable Backend**: Leverages **Appwrite** for user authentication and (soon) database management for posts.

---

## 🛠️ Tech Stack

This project is built with a modern and robust set of technologies:

| Technology                       | Description                                                                |
| :------------------------------- | :------------------------------------------------------------------------- |
| ![React][react-shield]           | A JavaScript library for building user interfaces.                         |
| ![Vite][vite-shield]             | A next-generation frontend tooling for fast development.                   |
| ![Appwrite][appwrite-shield]     | The open-source backend platform for building web and mobile applications. |
| ![Tailwind CSS][tailwind-shield] | A utility-first CSS framework for rapid UI development.                    |
| ![React Router][router-shield]   | The standard library for routing in React.                                 |
| ![MUI Joy][mui-shield]           | A library of beautifully designed React UI components.                     |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An [Appwrite](https://appwrite.io/) instance (cloud or self-hosted)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/leaf-blog.git
    cd leaf-blog
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up Appwrite:**

    - Create a new project in your Appwrite console.
    - Under **Auth**, enable the **Google** OAuth provider and configure it with your Google API credentials.
    - Note your **Project ID** and **API Endpoint**.

4.  **Configure Environment Variables:**
    Create a `.env.local` file in the root of your project and add your Appwrite credentials:

    ```env
    VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
    VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173`.

---

## 🖼️ Screenshots

_(Here you can add screenshots of your application)_

**Landing Page**

!Landing Page Screenshot

**Login Page**

!Login Page Screenshot

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

<!-- MARKDOWN BADGES & LINKS -->

[react-badge]: https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black
[react-url]: https://reactjs.org/
[vite-badge]: https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
[license-badge]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/MIT
[react-shield]: https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black
[vite-shield]: https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white
[appwrite-shield]: https://img.shields.io/badge/Appwrite-F02E65?style=flat&logo=appwrite&logoColor=white
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white
[router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white
[mui-shield]: https://img.shields.io/badge/MUI_Joy-007FFF?style=flat&logo=mui&logoColor=white
