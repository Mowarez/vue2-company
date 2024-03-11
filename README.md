# vue2 webpack project with Federation Module

### használat:

1. készítesz egy buildet:
docker build -t company-image . 

2. én magam a docker-local-environment docker-compose fájlába beletettem a következőt:
remote-app:
    image: company-image
    hostname: sr-remote-app
    ports:
      - 8080:8080
    networks:
      static-network:
        ipv4_address: 172.30.128.57
ezzel azt is eléred, hogy az Aurora contineren belülről is tudsz majd rá hivatkozni az IP címmel.


Ha ezen a repón bármit változtatsz, akkor a újra buildelni, majd egy docker-compose up -d -vel frissíteni kell.