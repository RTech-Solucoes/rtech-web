# Site institucional RTech

Site público em React 18 e Vite, baseado na branch `master` de
`RTech-Solucoes/rtech-web`. O formulário utiliza EmailJS no navegador.

## Desenvolvimento

```sh
npm ci --ignore-scripts
npm run dev -- --host 127.0.0.1
```

O build de produção é gerado com `npm run build` em `dist/`. O formulário usa
`EMAIL_API_KEY`, `EMAIL_SERVICE_KEY` e `EMAIL_TEMPLATE_KEY` no build; a primeira
é a chave pública do EmailJS. Esses identificadores são incorporados ao código
do navegador e não devem ser confundidos com credenciais administrativas.

## Hospedagem

O Worker `rtech-site-institucional` pertence à conta Cloudflare corporativa e
serve os arquivos de `dist/` em [rtechsolution.com.br](https://rtechsolution.com.br/).
A rota `rtechsolution.com.br/*` atende somente o domínio principal; o registro A
do domínio está com proxy e endereço reservado `192.0.2.0`. O Worker redireciona
HTTP para HTTPS e entrega os arquivos estáticos. A configuração está em
`wrangler.jsonc`, o Worker em `src/worker.ts` e os cabeçalhos HTTP em
`public/_headers`. O perfil Wrangler é `rtech`.

O domínio usava o IP `34.220.152.147` da antiga VM. Homologação, deploy de
aplicações e os demais subdomínios têm rotas próprias e não foram alterados.
Testes em redes brasileiras encontraram falhas de acesso aos IPs IPv4
compartilhados da Cloudflare, também observadas no NFAg. O site permanece
publicado, mas a disponibilidade entre operadoras precisa de solução e nova
validação. O envio de mensagens pelo EmailJS também precisa de validação com
um destinatário autorizado.
