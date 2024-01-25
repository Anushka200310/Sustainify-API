import connectDb from "./db/connectDb.js";
import productModel from "./Model/productModel.js";
import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("./product.json");

const start = async () => {
    try {
        await connectDb();
        await productModel.deleteMany();
        const rawData = await fs.readFile(filePath, "utf-8");
        const productData = JSON.parse(rawData);
        await productModel.create(productData);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();
