FROM node:4-slim
RUN npm install express
RUN npm install redis
COPY static/ /static/
COPY server.js /
CMD ["node", "server.js"]
EXPOSE 80
