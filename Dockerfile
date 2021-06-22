FROM node:14-slim
COPY . .
ENV NODE_ENV=production
RUN npm install --production
CMD [ "node", "index.js" ]