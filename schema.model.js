const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const customerSchema = new Schema({
    customerName: {
        type: String
    },
    email: {
        type: String
    },
    contactNumber: {
        type: String
    },
    streetAddress: {
        type: String
    },
    addressUnit: {
        type: String
    },
    postalCode: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    country: {
        type:  String
    },
    status: {
        type: Boolean
    }

});

const productSchema = new Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    createdDate: {
        type: String
    },

});
const customer = mongoose.model('customer', customerSchema);
const product = mongoose.model('product', productSchema);
const user = mongoose.model('user', UserSchema);

module.exports = {
    customer,
    product,
    user
}