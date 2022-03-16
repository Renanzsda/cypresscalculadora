# Imagem básica pegada através de:https://github.com/cypress-io/cypress-docker-images
FROM cypress:browsers:node14.17.0-chrome91-ff89
# Criar um repositório aonde nosso projeto será armazenado
RUN Mkdir /my-cypress-project
# Trabalhar no repositorio criado
WORKDIR /my-cyress-project
#Vai copiar os arquivos essenciais que você precisa para rodar os scripts.
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
#Instala as dependencias do cypress no diretorio de trabalho
RUN npm install
#Comandos executáveis ​​que o container usará
ENTRYPOINT [ "npx","cypress","run" ]
#com cmd Neste caso, podemos especificar mais parâmetros para o último ponto de entrada
CMD [""]
