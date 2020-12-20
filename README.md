### 서울대학교 정보문화학 과제전 웹페이지

### Client
```sh
cd client
yarn
yarn start
```

### Server
```sh
cd server
yarn
yarn start
```

### 배포 환경해서 실행하기
1. docker & docker-compose 설치
2. 이미지 빌드
```sh
docker-compose build
```
3. 컨테이너 생성 및 실행
```sh
docker-compose up -d
```