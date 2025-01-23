import { Router } from 'express';

const router = Router();
let posts = []; // In-memory storage for posts

// Home Page: View All Posts
router.get('/', (req, res) => {
    res.render('index', { posts });
});

// Create New Post
router.post('/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: Date.now(), title, content });
    res.redirect('/');
});

// Edit Post Form
router.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.redirect('/');
    res.render('edit', { post });
});

// Update Post
router.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    posts = posts.map(p => (p.id == id ? { ...p, title, content } : p));
    res.redirect('/');
});

// Delete Post
router.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

// Export router as the default export
export default router;
