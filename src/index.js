const express=require('express')
const dotenv = require("dotenv");
const router = require('./routes');


dotenv.config();
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
//   await connectToDB();
  console.log(`Server is running on port ${PORT}`);
  
});