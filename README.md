# Next.js Cache App

This project is a full-stack web application built with Next.js and a custom backend. It demonstrates the use of caching in React/Next.js for custom data sources, such as messages, to improve performance and user experience.

## Features

- **Next.js Frontend**: Modern React-based UI with server-side rendering and static site generation.
- **Custom Backend**: Node.js/Express backend for handling API requests and data storage.
- **Message System**: Create, view, and manage messages.
- **Built-in Caching**: Utilizes React/Next.js caching mechanisms for efficient data fetching.

## Project Structure

```
next_cache_app/
├── app/                # Next.js app directory (pages, layouts, etc.)
│   ├── messages/       # Messages feature (list, new message, etc.)
│   └── ...
├── backend/            # Custom backend (Node.js/Express)
│   └── app.js
├── components/         # Reusable React components
├── lib/                # Shared libraries (e.g., data fetching, caching)
├── public/             # Static assets
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
└── jsconfig.json       # JS/TS configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd next_cache_app
   ```
2. **Install dependencies for frontend:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Install dependencies for backend:**
   ```bash
   cd backend
   npm install
   # or
   yarn install
   cd ..
   ```

### Running the App

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   # or
   yarn start
   ```
2. **Start the Next.js frontend:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate to `/messages` to view and create messages.
- The app demonstrates caching for message data to reduce backend requests.

## Customization

- Modify `lib/messages.js` to change data fetching or caching logic.
- Update backend logic in `backend/app.js` as needed.

## License

This project is licensed under the MIT License.
