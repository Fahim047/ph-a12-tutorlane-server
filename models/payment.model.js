import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
	{
		student: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		class: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Class',
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ['success', 'failed'],
			default: 'success',
		},
		transactionId: {
			type: String,
			required: true,
			unique: true,
		},
		paymentDate: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;
