const express = require("express"); /*import express package, require keyword is used to bring in the packages from express*/
const dotenv = require("dotenv"); /* import dot env file*/
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');


const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express(); /*create object of imported package*/
dotenv.config(); /* prepare to use the dotenv file */
connectDB();//connnect the database
app.use(express.json());//whenever you accept json data from the user we have to mention

/*API Endpoint :- when ever we try to fetch data from the database or backend the API Endpoint is the route from where the data is served or on where the data is served */

app.get("/", (req, res) => {
  res.send("API is running"); // response ,message when API is started to send responses
}); /*get brings data from the backend to the front end and displays it, "/" is the endpoint 1st parameter is endpointin this case it is slash, ()=> is callback this function is called arrow function in side that arrow function we have request and response variables*/

/* find keyword is used to find an element inside an array, we can fetch the id from the url using req.params */

app.use('/api/users',userRoutes);//create new routes related to users
app.use('/api/notes',noteRoutes);//create new routes related to notes


app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000; // Assign port

app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
/*create webserver, listen is used to listen on a particular port, console.log displays a message on success in the terminal*/