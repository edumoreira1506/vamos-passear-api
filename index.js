import Server from './config/server.js';

const port = process.env.PORT || 3000;

Server.listen(port, () => {
	console.log(`Online API on port ${port}`);
})
