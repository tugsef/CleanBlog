const express = require('express')

const app = express();

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog)
})


let port = 3333;
app.listen(port, () => {
    console.log(`🚀🚀🚀 Uygulama ${port} portunda aktif.`);
})