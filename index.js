const customExpress = require('./config/customExpress')

const Tabelas = require('./infra/tabelas')

const conexao = require('./infra/conexao')

conexao.connect((erro) => {
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso!');

        Tabelas.init(conexao)

        const app = customExpress()
        
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
    }
});


