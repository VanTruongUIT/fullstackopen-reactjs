const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Successful response!');
})

const PORT = 3003;



app.listen(PORT, () => console.log(`Express server is running on port: ${PORT}`));