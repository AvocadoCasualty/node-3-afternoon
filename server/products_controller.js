
module.exports = {
    createProduct: (req, res) => {
        const db = req.app.get('db');

        const {name, description, price, image_url} = req.body;

        db.create_product(name, description, price, image_url)
            .then(product => res.status(200).send(product))
            .catch(error => res.status(500).send(error))
    },
    getOneProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(error => res.status(500).send(error))
    },
    getAllProducts: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
            .then(products => res.status(200).send(products))
            .catch(error => res.status(500).send(error))

    },
    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {desc} = req.query;

        db.update_product(desc, id)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(500).send(error))

    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(error => res.status(500).send(error))

    },
}