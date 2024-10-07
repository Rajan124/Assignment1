const express = require('express');
const app = express();
const PORT = 4000;

let products = [];
let getRequestCount = 0;
let postRequestCount = 0;

app.use(express.json());

// Log each request before handling the routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - Request received`);
    next();
});

// GET request to retrieve all products
app.get('/products', (req, res) => {
    getRequestCount++;
    console.log(`> products GET: received request`);
    res.json(products);
    console.log(`< products GET: sending response`);
    console.log(`Processed Request Count --> Get:${getRequestCount}, Post:${postRequestCount}`);
});

// POST request to add a new product
// app.post('/products', (req, res) => {
//     postRequestCount++;
//     console.log('> products POST: received request');
    
//     const product = req.body;
//     if (!product.productId || !product.name || !product.price || !product.quantity) {
//         return res.status(400).json({ error: 'Missing product fields' });
//     }

//     products.push(product);
//     res.status(201).json({ message: 'Product added successfully!', product });

//     console.log(`< products POST: sending response`);
//     console.log(`Processed Request Count --> Get:${getRequestCount}, Post:${postRequestCount}`);
// });

// // DELETE request to delete all products
// app.delete('/products', (req, res) => {
//     products = [];
//     console.log(`> products DELETE: received request`);
//     res.json({ message: 'All products deleted successfully!' });
//     console.log(`< products DELETE: sending response`);
// });

// Log server startup information
app.listen(PORT, () => {
    console.log(`Server is listening at http://127.0.0.1:${PORT}`);
    console.log(`Endpoints:
    http://127.0.0.1:${PORT}/products method: GET, POST, DELETE`);
});
