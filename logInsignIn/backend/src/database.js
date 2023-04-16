import mongoose from "mongoose";

const uri = "mongodb+srv://luisarce60089:rGYwVKko8ihLmyaC@cluster1.mtiwqud.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export default async function connectDB() {
  await mongoose.connect(uri, options, () => {
    console.log("Database is connected");
  });
}
