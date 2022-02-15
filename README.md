# rentx-project :blue_car:

API to car rentals project.

### Cadastro de carros
**Requisitos funcionais**
- Deve ser possível cadastrar um carro.
- Deve ser possível listar todas as categorias.

**Regras de negócio**
- Não deve ser possível cadastrar um carro com uma placa já cadastrada.
- Não deve ser possível alterar uma placa de carro cadastrado.
- O carro deve ser cadastrado como disponível por padrão.
- Somente administradores podem cadastrar carros.

### Listagem de carros
**Requisitos funcionais**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome da especificação.

**Regras de negócio**
- Não precisa estar logado para listar carros.

### Cadastro de especificações do carro
**Requisitos funcionais**
- Deve ser possível cadastrar uma ou mais especificações para um carro.
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**Regras de negócio**
- Não deve ser possível cadastrar uma especificação já cadastrada.

### Cadastro de imagens do carro
**Regras funcionais**
- Deve ser possível cadastrar imagens do carro.
- Deve ser possível listar todos os carros.

**Regras de negócio**
- Possibilitar cadastrar mais de uma imagem para o mesmo carro.
- Somente administradores podem cadastrar imagens.

### Aluguel de carros
**Regras funcionais**
- Deve ser possível alugar um carro.

**Regras de negócio**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar novo aluguel para um usuário com aluguel em aberto.
- Não deve ser possível cadastrar novo aluguel para um carro com aluguel em aberto.
