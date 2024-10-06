FROM ubuntu:latest
EXPOSE 8081

RUN apt-get update && apt install -y python3
WORKDIR /app
COPY . /app
CMD [ "python3", "-m", "http.server", "8081" ]
