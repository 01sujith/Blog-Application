import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import blogRoutes from './routes/blog.js';
import ejsMate from 'ejs-mate'; // Use default import for CommonJS module

const app = express();
const PORT = 3000;

// Middleware
app.engine('ejs', ejsMate); // Use ejs-mate for EJS templates
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Routes
app.use('/', blogRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

