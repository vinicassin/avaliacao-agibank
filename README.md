# Definimos como padrões para esse projeto:

## Dependências: 
 - Node 20.3.1 ou superior
 - Cypress
 - JavaScript


## Configuração:

[Passos para instalar o node.js no windows/mac](https://nodejs.org/en/download/current/)

ou via linha de comando no mac:

[Tutorial via linha de comando](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew)

## Executando testes:

1. **Clone o repositório na sua máquina local.**
    ```bash
    git clone <URL_DO_REPOSITÓRIO>

2. **Abra um terminal na pasta raiz do projeto.**

3. **Digite o comando abaixo para instalar as dependências que estão no arquivo package.json.**
     ```bash
     npm install

5. **Execute os testes Cypress com o seguinte comando:**
    ```bash
    npx cypress open                           // ira se abrir a interface gráfica
    
    npx cypress run                            // ira rodar os testes via terminal
    
    npx cypress run --reporter mochawesome     // ira utilizar o report mochawesome
