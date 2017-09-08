FROM node:8.4.0

RUN useradd -ms /bin/bash admin

USER admin

WORKDIR /home/admin
