#!/bin/sh

cd ../WeLearnApi
npm i
npm start &

cd ../WeLearnFront
npm i
npm run dev