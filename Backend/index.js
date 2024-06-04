import app from './app/app.js';
const server = app.listen(3000, async () => {
    console.log(`Server is working!`);
    console.log(`Server running at PORT 3000`);
});
server.on('error', (err) => {
    console.log("Server Error: ", err);
});
