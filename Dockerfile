FROM node:20
RUN git clone https://github.com/ibrahimaitech/BLACK-PANTHER-MD /root/ibrahimaitech
WORKDIR /root/ibrahimaitech
RUN yarn install
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
