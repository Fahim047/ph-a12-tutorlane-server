import mongoose from 'mongoose';

const DB_NAME = 'tutor-lane';
export const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${DB_NAME}`
		);
		console.log('Connected to database...!');
	} catch (err) {
		console.error('MongoDB connection error: ', err);
		process.exit(1);
	}
};
