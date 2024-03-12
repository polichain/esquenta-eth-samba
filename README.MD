# Template para o Ethereum 2024

Esse projeto divide-se em duas partes, a primeira é o `hardhat`, onde temos o desenvolvimento do contrato, já a segnda, é o `frontend` construido usando `React`.

A conexão dessas duas partes é o grande desafio. Para isso, utilizei a biblioteca `wagmi` e o comando `wagmi-cli` para auxiliar nas chamadas para o contrato.

## Hardhat

Aqui, temos o template incial do hardhat. Para fazer o ciclo completo do contrato basta seguir os seguintes passos:

1. desenvolver o contratos na pasta contracts, em sequência contruir os testes, que estão na pasta `hardhat/test`. Para rodar os testes basta:

   ```bash
   npx hardhat run test
   ```

2. Agora, para relizar o deploy do contrato, é necessário ter em mente qual a rede. Caso seja a rede local, primeiro certifique-se de que está rodando:

   ```bash
   npx hardhat node
   ```

   2.1 Em outro terminal, execute o script para realizar o deploy do seu contrato.

   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

   Caso você pretenda fazer o deploy em uma rede de testes, não é necessário rodar o node localmente. Basta adicinar as variáveis de ambiente `ALCHEMY_API_KEY` `SEPOLIA_PRIVATE_KEY` no arquivo `.env` e executar:

   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

3. Também é possivel verificar o contrato na rede, através do `etherscan`. Para isso, basta adicionar a chave da api na variável `ETHERSCAN_API_KEY` no arquivo `.env` e por fim executar o comando

   ```bash
   npx hardhat verify --network sepolia <address> <constructor arguments>

   ```

## Frontend

Com o `Hardhat` já definido, podemos continuar o desenvolvimento com a construção do `Frontend`. O principal componente que realiza a conexão do `frontend` com a blockchain é o `wagmi-cli`. Essa biblioteca está configurada, no arquivo `wagmi.config.ts` para procurar pelo projeto do `hardhat`. Daí, é possível gerar os `React Hooks` a partir do seguinte comando:

```bash
npx wagmi generate
```

Isso gera o arquivo `src/generated.ts` que contém as chamadas para escrita e leitura do contrato. Essas chamadas são tipadas e possuem auto-complete.

Por fim, para interagir com o contrato é necessário adicionar o endereço do mesmo no arquivo `.env`. Atualmente esse processo é feito de maneira manual.

## Deploy

Esse site não pretende ser um site dinâmico, mas sim uma web app estático. Para realizar o build e porfim o deploy execute os seguintes comandos:

```bash
npm run build
```

Depois, ecolha qualquer ferramenta e hosting. Como por exemplo, [firebase hosting](https://firebase.google.com/docs/hosting), [cloudflare pages](https://pages.cloudflare.com/), [vercel](https://vercel.com).
