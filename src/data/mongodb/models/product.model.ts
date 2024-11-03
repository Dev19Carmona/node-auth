import mongoose, { Schema } from 'mongoose';

const collectionName = 'Product';
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    amount: { type: Number, default: 0 },
    img: { type: String, default: 'no-image' },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: [true, 'Company ID is required'] },
    shopId: { type: Schema.Types.ObjectId, ref: 'Shop' },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model(collectionName, schema);
