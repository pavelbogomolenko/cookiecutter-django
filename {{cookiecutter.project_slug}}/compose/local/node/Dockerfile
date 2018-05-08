FROM node:8.11.1

WORKDIR /app

COPY ./package.json /app/package.json
RUN npm install

COPY ./webpack.config.js /app/webpack.config.js
COPY ./karma.conf.js /app/karma.conf.js

COPY ./{{ cookiecutter.project_slug }}/static /app/{{ cookiecutter.project_slug }}/static

CMD npm run build-watch
