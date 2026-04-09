# Aplicacao DevOps

Aplicacao Node.js com Express.js desenvolvida para a disciplina **Ferramentas de Implantacao Continua - DevOps** (Avaliacao N1).

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## Estrutura do projeto

```
aplicacao-devops/
├── src/
│   ├── app.js          # Servidor Express e definicao dos endpoints
│   └── views/
│       └── index.html  # Pagina HTML de boas-vindas
├── package.json
└── README.md
```

## Como instalar e executar

### Pre-requisitos

- Node.js instalado (versao 14 ou superior)
- npm (incluido com o Node.js)

### Instalacao

1. Clone o repositorio:
   ```bash
   git clone https://github.com/dealni/aplicacao-devps.git
   cd aplicacao-devps
   ```

2. Instale as dependencias:
   ```bash
   npm install
   ```

### Executando a aplicacao

```bash
node src/app.js
```

O servidor sera iniciado em `http://localhost:3000`.

## Endpoints

| Metodo | Rota           | Descricao                                          |
|--------|----------------|----------------------------------------------------|
| GET    | `/`            | Retorna a pagina HTML de boas-vindas               |
| GET    | `/integrantes` | Retorna JSON com os nomes dos integrantes do grupo |

### Exemplos de resposta

**GET /** — Retorna a pagina `index.html` com uma mensagem de boas-vindas.

**GET /integrantes**
```json
{
  "integrantes": [
    { "nome": "Kevin Kuznier" },
    { "nome": "Diogo Vieira" },
    { "nome": "Lucas Corso" }
  ]
}
```

## Integrantes do grupo

- Kevin Kuznier
- Diogo Vieira
- Lucas Corso
