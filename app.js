import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
	console.error(err.stack);
	res
		.status(err.status || 500)
		.json({ message: err.message || 'Internal Server Error!' });
});
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// import Routers
import adminRouter from './routes/admin.routes.js';
import assignmentRouter from './routes/assignment.routes.js';
import classRouter from './routes/class.routes.js';
import studentRouter from './routes/student.routes.js';
import teacherRouter from './routes/teacher.routes.js';
import userRouter from './routes/user.routes.js';
app.use('/api/v1/users', userRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/classes', classRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/assignments', assignmentRouter);

export default app;
