# next.js boilerplate

## 로컬 Docker
Docker 빌드
```
$> docker build -f Dockerfile.local -t nextjs-docker:latest .
```

Docker 실행
```
$> docker run -p 3000:3000 nextjs-docker:latest
```


## 스토리북
```
$> yarn storybook

http://localhost:6006
```