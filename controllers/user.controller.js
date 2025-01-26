import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createUser = asyncHandler(async (req, res) => {
	const { email, name, photoURL } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		return res
			.status(200)
			.json({ message: 'User already exists and not saved in db this time!' });
	}
	const user = await User.create({
		email,
		name,
		photoURL,
	});
	return res.status(201).json({
		message: 'User data saved to Database.',
	});
});
export const getUsers = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (email) {
		const user = await User.findOne({ email });
		return res.status(200).json(user);
	} else {
		const users = await User.find();
		return res.status(200).json(users);
	}
});
export const checkAdmin = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}
	const user = await User.findOne({ email });
	if (user && user.role === 'admin') {
		return res.json({ isAdmin: true });
	}
	return res.json({ isAdmin: false });
});
export const checkUserRole = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}

	const user = await User.findOne({ email });
	if (user) {
		return res.json({ role: user.role });
	}

	return res.status(404).json({ message: 'User not found' });
});
