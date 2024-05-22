const express = require('express')
const path = require('path');
const router = express.Router();
const data = require("../data/blogs")

// app.use(express.static(path.join(__dirname, "static")));

router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render("home");
})

router.get('/blog',(req,res) =>
    {
        // res.sendFile(path.join(__dirname, "../templates/blog.html"))
        res.render('single-blog', {
            blogs: data
        });
    }); 
    
router.get('/blog/:slug',(req,res) =>
{
    myblog = blogs.filter(function(e)
{
        return e.slug == req.params.slug;
})
    console.log(req.params.slug);
    // res.sendFile(path.join(__dirname, "../templates/single-blog.html"))
    res.render('blog');
})

module.exports = router;