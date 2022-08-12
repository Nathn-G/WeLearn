FROM node:alpine

WORKDIR /WeLearnFront/

# COPY WeLearnFront/package.json ./
COPY WeLearnFront/ ./

RUN npm i

WORKDIR /WeLearnApi/

# COPY WeLearnApi/package.json ./
COPY WeLearnApi/ ./

RUN npm i

WORKDIR /
COPY start.sh ./start.sh

run chmod +x start.sh
run ./start.sh

WORKDIR /WeLearnFront/

run ls 
# WORKDIR /WeLearnApi/
# CMD ["npm", "start"]

# COPY start.sh ./start.sh

# CMD ["./start.sh"]
