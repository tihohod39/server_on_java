import express from 'express';
import taskRouter from './routes/tasks.js';
const products = require("./data/products");

hbs.registerPartials(__dirname +"/views/partials");

const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
app.use(express.json());

app.use('/tasks', tasksRouter);


app.engine("handlebars", engine());


app.set("view engine", "handlebars");


app.set(
    "views",
    path.join(__dirname, "views")
);


app.use(express.static(
    path.join(__dirname, "../public")
));


app.get("/", (req, res) => {
    res.render("home", {
        title: "Главная страница"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title:"О нас",
        description: "Мы создем учебный магазин"
    });
});
app.get("/products", (req, res) => {
    res.render("products", {
        title: "Каталог товаров",
        products: products
    });
});

app.get("/login", (req, res) => {
    res.render("products", {
        title: "Страница входа",
    });
});
app.get("/register", (req, res) => {
    res.render("register", {
        title: "Страница регистрации",
    });
});
app.get("/products/cheap", (req, res) => {
    const cheapProducts = products.filter(product =>product.price < 3000);
    res.render("products", {
        title: "Каталог недорогих товаров",
        products: cheapProducts
    });
});

app.get("/products/:id",(req,res) =>{
    const productId = Number(req.params.id);
    const product = products.find(
        item =>item.id ===productId
    );
    if(!product){
        return res.status(404).send(
            "Товар не найден"
        );
    }
    res.render("product",{
        title: product.name,
        product
    });
});

module.exports = app;

app.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000");
});