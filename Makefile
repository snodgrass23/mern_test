setup:
	cd backend && npm install

start: simple

simple:
	node backend/server.js

nodemon:
	./backend/node_modules/.bin/nodemon backend/server.js

.PHONY: setup start simple nodemon
