# Documentação

## Instalação

Primeiro de tudo faça o fork deste [repositório](https://github.com/Guilhermejob/customer_registration_front_end)
  - Apos o fork ser feito na usa maquina execute o comando de git clone
```
  $ git clone "Link do repositório que fez o fork"
```

 - Após o clone ser feito para sua máquina instale as dependencias
 ```
  $ yarn
```

- Com o ambiente todo pronto agora é só rodar a aplicação

```
  $ yarn start
```

## ROTAS

- /
  - Rota "Home"
  - Responsável por ser a primeira página a ser carregada
  - Caso o usuário esteja logado irá dar a opção de acessar a lista de clientes e de logout
  - Caso o usuário não esteja logado irá dar a opção de logar
- /login
  - Responsável por logal o usuario, nela será dada a opção do usuário se cadastrar
- /register
  - Responsável por Cadastrar o usuario OBS: Todos os campos são obrigatórios menos o de complemento
- /customers
  - Responsavel por Listar todos os clientes/usuários cadastrados OBS: para acessar esta rota você precisará estar logado
   

