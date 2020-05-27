require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    ctrl= require('./products_controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    port= SERVER_PORT,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
})
    .catch((error => console.log(error)))

app.get('/api/products', ctrl.getAllProducts)
app.get('/api/products/:id', ctrl.getOneProduct)
app.put('/api/products/:id', ctrl.updateProduct)
app.post('/api/products', ctrl.createProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)

app.listen(port, () =>  console.log(`Server running on ${port}`));