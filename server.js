const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

// set CORS
let whiteList = [
    'http://localhost:8081',
];
let corsOption = {
    origin: function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS !'));
        }
    }
}
app.use(cors(corsOption));

// set parse request application/json x-www-form-urlencode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// routing here ===================================================
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to RestFull API Tedy'
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

