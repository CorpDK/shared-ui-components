FROM node:18.15.0

SHELL ["bash", "-c"]

RUN apt update -y && apt upgrade -y && apt clean

RUN npm i -g @teambit/bvm
RUN bvm install

ADD docker-start.bash /
RUN chmod +x /docker-start.bash

WORKDIR /code

EXPOSE 3000

ENTRYPOINT ["bash", "/docker-start.bash"]
