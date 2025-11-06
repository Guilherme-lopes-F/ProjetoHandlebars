const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/pessoas', (req,res) => {
    res.render('ListarPessoas', { pessoas });
});

app.get('/pessoas/create', (req,res) => {
    res.render('cadastrarPessoas');
});

app.post('/pessoas', (req,res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const sexo = req.body.sexo;
    const novaPessoa = {
        id: pessoas.length + 1,
        nome: nome,
        idade: idade,
        sexo: sexo
    };

    pessoas.push(novaPessoa);

    res.render('ListarPessoas', { pessoas });
});

app.get('/pessoas/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa){
        res.render('detalharPessoas', { pessoa });
    } else {
        res.status(404).send('Esta pessoa não está cadastrada')
    }
});

let pessoas = [
    {id : 1, nome: 'Joao G', idade: 17, sexo: 'Masculino'},
    {id : 2, nome: 'Alice', idade: 35, sexo: 'Feminino'},
    {id : 3, nome: 'Tomé', idade: 15, sexo: 'Masculino'},
    {id : 4, nome: 'Bruna', idade: 35, sexo: 'Feminino'},
    {id : 5, nome: 'Davi', idade: 23, sexo: 'Masculino'}
];







app.listen(port, () => {
    console.log(`Servidor em execução: http://localhost:${port}`);
});