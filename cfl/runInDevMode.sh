#!/bin/bash
docker-compose -f docker-compose.run.yml -f docker-compose.db.yml stop
docker-compose -f docker-compose.build.yml -f docker-compose.run.yml  -f docker-compose.debug.yml -f docker-compose.db.yml up --build -d
sleep 10
curl -L http://localhost:8080/openmrs/ > /dev/null && notify-send -t 10000 -i face-surprise "Demo set up" "" &
docker-compose -f docker-compose.run.yml -f docker-compose.db.yml logs -f --tail 1000
