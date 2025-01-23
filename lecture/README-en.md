## lecture
[日本語のドキュメントはこちら](./README.md)

Thid directory is for the Web application used in the lecture. You can launch the app with Docker Compose.

## 事前に必要なツール
- Docker
  - MacOS: [Install Docker Desktop on Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
  - Windows: [Install Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
  - Linux: [Install Docker Desktop on Linux](https://docs.docker.com/desktop/setup/install/linux/)
- Editor
  - Use you favorite one.
  - I recommend VS Code as the installation is easy compared to others.
    - [Download page for the installer](https://code.visualstudio.com/download)

## The Way to Launch the Application
RUn the following commands in this directory.

### Launch the Application
```bash
docker compose up 
```

### Finish the Application
```bash
docker compose down
```

### Re-launch the Application(when you edit a file or such a case)
```bash
docker compose restart
```
