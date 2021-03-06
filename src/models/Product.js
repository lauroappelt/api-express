import {Schema, model} from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    price : {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

export default model('Propduct', ProductSchema);