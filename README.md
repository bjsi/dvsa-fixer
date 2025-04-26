# Full Stack TypeScript Application

This is a full-stack TypeScript application with a React frontend (Vite) and Express backend.

## Project Structure

- `frontend/` - React + TypeScript frontend built with Vite
- `backend/` - Express + TypeScript backend

## Getting Started

First, install dependencies in all directories:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
cd ..
```

### Running the Application

You can run both frontend and backend servers with a single command from the root directory:

```bash
npm run dev
```

This will start:
- Frontend at `http://localhost:3535`
- Backend at `http://localhost:4545`

### Running Servers Separately

If you need to run the servers separately:

#### Frontend

```bash
cd frontend
npm run dev
```

#### Backend

```bash
cd backend
npm run dev
```

## Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend servers
- `npm run frontend` - Start only the frontend server
- `npm run backend` - Start only the backend server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production server

## API Endpoints

- `GET /api/test` - Test endpoint that returns a message