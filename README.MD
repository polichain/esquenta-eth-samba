# Template para o Ethereum 2024

[Visite o site](https://esquenta-eth-samba.pages.dev/)

Este projeto divide-se em duas partes: a primeira é o `hardhat`, que envolve o desenvolvimento do contrato, e a segunda, é o `frontend`, construído usando `React`.

A conexão entre essas duas partes é o grande desafio. Para isso, utilizei a biblioteca `wagmi` e o comando `wagmi-cli` para auxiliar nas chamadas ao contrato.

## Hardhat

Aqui, temos o template inicial do hardhat. Para realizar o ciclo completo do contrato, basta seguir os seguintes passos:

1. Desenvolver os contratos na pasta `contracts` e, em sequência, construir os testes, que estão localizados na pasta `hardhat/test`. Para executar os testes, basta:

   ```bash
   npx hardhat run test
   ```

2. Agora, para realizar o deploy do contrato, é necessário definir a rede. Se for a rede local, primeiro certifique-se de que ela está em funcionamento:

   ```bash
   npx hardhat node
   ```

   2.1 Em outro terminal, execute o script para realizar o deploy do seu contrato.

   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

   Caso pretenda fazer o deploy em uma rede de testes, não é necessário executar o node localmente. Basta adicionar as variáveis de ambiente `ALCHEMY_API_KEY` e `SEPOLIA_PRIVATE_KEY` no arquivo `.env` e executar:

   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

3. Também é possível verificar o contrato na rede, através do `etherscan`. Para isso, adicione a chave da API na variável `ETHERSCAN_API_KEY` no arquivo `.env` e, por fim, execute o comando:

   ```bash
   npx hardhat verify --network sepolia <address> <constructor arguments>
   ```

## Frontend

Com o `Hardhat` configurado, podemos prosseguir com o desenvolvimento do `Frontend`. O principal componente que realiza a conexão do `frontend` com a blockchain é o `wagmi-cli`. Esta biblioteca está configurada no arquivo `wagmi.config.ts` para procurar pelo projeto do `hardhat`. Assim, é possível gerar os `React Hooks` usando o seguinte comando:

```bash
npx wagmi generate
```

Isso gera o arquivo `src/generated.ts`, que contém as chamadas para escrita e leitura do contrato. Estas chamadas são tipadas e oferecem auto-completar.

Por fim, para interagir com o contrato, é necessário adicionar o endereço do mesmo no arquivo `.env`. Atualmente, esse processo é realizado de forma manual.

## Deploy

Este site não pretende ser um site dinâmico, mas sim uma web app estática. Para realizar o build e, por fim, o deploy, execute os seguintes comandos:

```bash
npm run build
```

Depois, escolha qualquer ferramenta de hosting, como, por exemplo, [Firebase Hosting](https://firebase.google.com/docs/hosting), [Cloudflare Pages](https://pages.cloudflare.com/), ou [Vercel](https://vercel.com).
