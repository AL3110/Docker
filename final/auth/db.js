const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://keshavagrawal1105:ccproject@cluster0.kojmscx.mongodb.net/ccproject?retryWrites=true&w=majority&appName=Cluster0";

module.exports = async function(callback) {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const foodCollection =
      await mongoose.connection.db.collection("food_items");
    const foodData = await foodCollection.find({}).toArray();

    const categoryCollection =
      await mongoose.connection.db.collection("food_category");
    const categoryData = await categoryCollection.find({}).toArray();

    callback(null, foodData, categoryData);
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
    callback(err, null, null);
  }
};
