const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const middlewares = jsonServer.defaults();

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users } = db;
        const userFromDb = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromDb) {
            return res.json(userFromDb);
        }

        return res.status(403).json({ message: 'AUTH ERROR' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        res.status(403).json({
            message: 'AUTH EROR',
        });
    }
    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('Сервер запущен на порту 8000');
});
