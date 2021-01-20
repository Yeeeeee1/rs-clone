import path from 'path';
import express from 'express';

import homeRoutes from './routes/home.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRoutes);

app.listen(PORT, () => {
	console.log('Server has been started');
});

