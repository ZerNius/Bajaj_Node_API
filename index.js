import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
//Get request
app.get('/bfhl', (req, res) => {
    const status = {
        "operation-code": 1
    };
    res.status(200);
    res.json(status);
});

//Post request
app.post('/bfhl', (req, res) => {
    // fetching data from user requesty
    const requestData = req.body.data;
    // Extracting data 

    //Extracting integers
    const integerRegex = /^\d+$/;
    const numberArray = requestData.filter((data)=>integerRegex.test(data))
    
    //Extracting Alphabets
    const alphabeticStringRegex = /^[a-zA-Z]+$/;
    const alphaArray = requestData.filter((data)=>alphabeticStringRegex.test(data))

    //Finding highest alphabet
    const highestAlphabet = alphaArray.reduce((highest, current) => (current > highest ? current : highest), 'A');
    const highest_alphabet = [highestAlphabet];

    const response = {
        "is_sucess": true,
        "user_id": "udit_shrivastava_19052002",
        "email": "udit.shrivastava2020@vitbhopal.ac.in",
        "roll_number": "20BCG10109",
        "numbers": numberArray,
        "alphabets": alphaArray,
        "highest_alphabet": highest_alphabet,
      };

      res.json(response);
      res.send(requestData);
});


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
