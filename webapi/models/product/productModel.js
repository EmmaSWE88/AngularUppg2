const mongodb = require('mongoose')
const Product = require('./productSchema')

exports.addProducts = (req, res) => {

    try {
        for(current of req.body) {
            let product = new Product({
                
                _id:                new mongodb.Types.ObjectId,
                name:               current.name,
                description:        current.description,
                shortDescription:   current.shortDescription,
                image:              current.image,
                inStockAmount:      current.inStockAmount,
                price:              current.price         
    
            })
    
            product.save()
        }

        return res.status(200).json()
    }
    catch {
        return res.status(400).json()
    }
}
