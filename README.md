# vue2 webpack project with Federation Module

### használat:

1. készítesz egy buildet:
docker build -t company-image . 

2. én magam a docker-local-environment docker-compose.yml fájlába tettem a következőt:
```
remote-app:
    image: company-image
    hostname: sr-remote-app
    ports:
      - 8080:8080
    networks:
      static-network:
        ipv4_address: 172.30.128.57
```
ezzel azt is eléred, hogy az Aurora containeren belülről is tudsz majd hivatkozni a `remote-app` image-re az Aurorás containeren belül.


### important
Ha a configon vagy a fájlokon változtatsz, akkor minden esetben újra kell buildelni és a `docker-compose up -d` parancsot hívni kell a docker-local-environment mappán belül