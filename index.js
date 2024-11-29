import passport from "passport";
import bodyParser from "body-parser";
import session from "express-session";
import e from "express";

const app = e()

app.use(bodyParser.json())
app.use(session({
    secret: 'es un secreto que tu mamá vendía empanadas a mil quiniento',
    resave: false,
    saveUninitialized: true
}))

app.listen(3000)