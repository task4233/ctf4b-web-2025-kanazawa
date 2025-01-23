const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FLAG = process.env.FLAG || 'flag{this_is_fake_flag}';

const app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function merge(tgt, src) {
    for (let key in src) {
        if (isObject(tgt[key]) && isObject(src[key])) {
            merge(tgt[key], src[key]);
        } else {
            tgt[key] = src[key];
        }
    }
    return tgt;
}

// ユーザー情報の模擬データベース（本番ではデータベースや認証システムを使用）
const users = {
    'alice': { admin: false },
    'bob': { admin: false },
    'carol': { admin: false },
};

// ユーザー情報を名前に基づいて取得する関数
function getUserByName(name) {
    return users[name];
}

// source ページを表示するエンドポイント
app.get('/source', (_, res) => {
    res.render('source', {
        name: 'req.query.name',
        names: Object.keys(users),
        user: 'undefined',
        objectPrototypeAdmin: '${Object.prototype.admin}',
    });
});


// 新規ユーザを作成するエンドポイント
app.post('/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.name) {
        return res.status(400).send('Bad Request');
    }
    if (users[newUser.name]) {
        return res.status(409).send('Conflict');
    }

    merge(users, newUser);
    res.status(201).send('Created');
});

// メインページを表示するエンドポイント
app.get('/', (req, res) => {
    // クエリパラメータの 'name' を取得
    const userName = req.query.name; 

    // 'name' が指定されていない場合はエラーを返す
    if (!userName) {
        return res.status(400).render('index', {
            title: 'Bad Request',
            name: req.query.name,
            user: JSON.stringify(undefined),
            names: Object.keys(users),
            objectPrototypeAdmin: Object.prototype.admin,
            message: 'You must select user.',
        });
    }

    // ユーザーを取得
    const user = getUserByName(userName);
    if (!user) {
        return res.status(400).render('index', {
            title: 'Not Found',
            name: req.query.name,
            user: JSON.stringify(user),
            names: Object.keys(users),
            objectPrototypeAdmin: Object.prototype.admin,
        });
    }

    console.log(`'User: ${userName}: ${JSON.stringify(user)}`);
    if (user.admin === true) {
        // 管理者ユーザーには secret ページを表示
        return res.render('index', {
            title: `Secret Page: The flag is ${FLAG}`,
            name: req.query.name,
            user: JSON.stringify(user),
            names: Object.keys(users),
            objectPrototypeAdmin: Object.prototype.admin,
        });
    } else {
        // 管理者でないユーザーにはアクセス拒否
        return res.render('index', {
            title: 'Forbidden: You are not admin.',
            name: req.query.name,
            user: JSON.stringify(user),
            names: Object.keys(users),
            objectPrototypeAdmin: Object.prototype.admin,
        });
    }
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
