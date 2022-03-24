# Imagem básica pegada através de:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node14.17.0-chrome91-ff89 as builder
# Criar um repositório aonde nosso projeto será armazenado
#RUN mkdir /my-cypress-project
# Trabalhar no repositorio criado
ADD ./ /cypress
WORKDIR /cypress
#Vai copiar os arquivos essenciais que você precisa para rodar os scripts.

#Instala as dependencias do cypress no diretorio de trabalho
RUN npm install 

    
#Comandos executáveis ​​que o container usará
ENTRYPOINT [ "npm","run","cy:run"]
#com cmd Neste caso, podemos especificar mais parâmetros para o último ponto de entrada
CMD [""]

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder cypress/cypress/reports .