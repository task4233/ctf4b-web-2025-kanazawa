## demo-app
[EN is here](./README-en.md)

lectureは講義で利用するWebアプリケーション用のディレクトリです。Docker Composeで起動することが出来ます。

## 事前に必要なもの
- Docker
  - MacOS: [Install Docker Desktop on Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
  - Windows: [Install Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
  - Linux: [Install Docker Desktop on Linux](https://docs.docker.com/desktop/setup/install/linux/)
- エディタ
  - お好みでどうぞ
  - VS Codeがインストール楽なのでオススメです
    - [インストーラのダウンロードページ](https://code.visualstudio.com/download)

## アプリケーションの実行方法
このディレクトリ内で下記のコマンドを実行してください。

### アプリケーションの実行
```bash
docker compose up 
```

### アプリケーションの終了
```bash
docker compose down
```

### アプリケーションの再起動(ファイルを編集した場合など)
```bash
docker compose restart
```
