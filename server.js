import  express  from "express";
import connectDb from "./db/connectDb.js";
import router from "./Routes/productRoutes.js";
import dotenv from "dotenv";
import middlewares from "./Middleware/middleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "*", 
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    allowedHeaders: ["Content-Type", "x-api-key"],
  };

app.use(express.json());

app.use(cors(corsOptions));

app.use(middlewares);

app.use("/api/products", router);

connectDb().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`the server is running at port no ${PORT}`);
})
});



