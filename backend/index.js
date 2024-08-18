import express from "express";
import cors from "cors"
const app = express();


app.use(cors({
    origin: '*',  // Adjust according to your security needs
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  }));

app.get("/", (req, res) => {
    res.send("server is running");
});




app.get("/api/product", (req, res) => {
    const products = [
        { id: 1, title: "title1" },
        { id: 2, title: "title2" },
        { id: 3, title: "title3" }
    ];
    res.send(products);
});

const port = 8080;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
