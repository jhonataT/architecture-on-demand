# Documentação


*Esta documentação mostrará os passos para executar a plataforma em ambiente de desenvolvimento, além de detalhar as funcionalidades disponíveis.*

## Pré-requisitos

Antes de executar, certifique-se de ter o seguinte instalado:

 - **Node.js** (versão v16.16.0 ou superior)
 - **Yarn** (versão v1.22.19 ou superior)
 -  **Git** (versão 2.40.0 ou superior)
 - **Backend** (https://github.com/jhonataT/architecture-on-demand-server) 

## Como executar:

> Siga as etapas abaixo para executar a plataforma em um ambiente de desenvolvimento.

 1. Clone este repositório em sua máquina local.
	
    **bash:**
	```bash
    > git clone https://github.com/jhonataT/architecture-on-demand.git
    ``` 
2.  Instale as dependências do projeto.

    **bash:**
    ```bash
    > cd architecture-on-demand
    > yarn install
    ```

4.  Com as dependências já instaladas, execute:

    **bash:**
    ```bash
    > yarn run dev
    ```

5.  A API estará disponível em http://localhost:3001.