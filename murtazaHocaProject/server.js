import exprss from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = exprss();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//how to using res.sendFile ?
app.use("/js", exprss.static('./js/'));
app.get('/', (_req, res) => {
    res.sendFile(`${__dirname}/index.html`);

});
app.get('./main');
const server = app.listen(4000);
console.log(server.address().port);