<h1 align="center"> Swiftpay</h1>
<p align="center">
  <img src="./frontend/public//assets/project-Swiftpay.jpg" alt="Swiftpay">
</p>

####  A Paytm-inspired payment platform that enables user registration, smooth peer-to-peer transactions, and efficient user search features for quick and easy money transfers.

## Technology used: 
- React
- Typescript
- shadcn (Tailwind css)
- Nodejs
- Expressjs
- MongoDB 
- Zod


## Project Setup

1. **Clone the repository**
``` bash
git clone https://github.com/Vinaymore1/Swiftpay.git
```

2. **Navigate to the project directory and install dependencies for the backend**
``` bash
cd Swiftpay
cd backend
pnpm install
```

3. **Copy the environment variables for the backend & update the .env file with your MongoDB credentials**
```bash
cp .env.sample .env
```
```bash
MONGO_URL=your-mongodb-url
JWT_SECRET=your-secret-key
PORT=3000
FRONTEND_URL='http://localhost:5173'
```

4. **Start the backend server**
```bash
pnpm run dev
```

5. **In a new terminal, navigate to the frontend directory and install the dependencies**
```bash
cd ../frontend
pnpm install
```

6. **Copy the environment variables for the frontend and update the .env file with the backend URL**
```bash
cp .env.sample .env
```
```bash
VITE_BACKEND_URL=http://localhost:3000/api/v1
```

7. **Start the frontend development server**
```bash
pnpm run dev
```
