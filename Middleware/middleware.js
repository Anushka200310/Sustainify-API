import { Router } from "express";
const middlewares = Router();

import dotenv from "dotenv";
dotenv.config();

// API key middleware
middlewares.use((req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
});

// Error middleware
middlewares.use((err, req, res, next) => {
  console.error(err.stack); // Log the error  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const extraDetails = err.extraDetails || 'Error from backend';

  return res.status(status).json({ message, extraDetails });
});

export default middlewares;
