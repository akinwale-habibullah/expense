const mongoose = require('mongoose');
const app = require('./server/index');

mongoose.connect('mongodb://localhost:27017/expense');

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
