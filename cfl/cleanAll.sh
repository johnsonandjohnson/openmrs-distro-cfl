#!/bin/bash
docker-compose -f docker-compose.build.yml -f docker-compose.run.yml -f docker-compose.db.yml down -v --remove-orphans
docker system prune -a --volumes --force
rm -r /root/.cfl-dev
