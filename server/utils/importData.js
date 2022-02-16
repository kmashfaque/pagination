import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import Post from "../models/postModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();
const __dirname = path.resolve();
console.log(__dirname);
const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/utils/posts.json`, "utf-8")
);

const importData = async () => {
  try {
    await Post.create(posts);
    console.log("Data imported successfully 👏👏👏👏");
    process.exit();
  } catch (error) {
    console.log(`Error 🔥🎇🎆`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data deleted successfull 😐😐😐😐");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
