FROM oven/bun:latest
WORKDIR /app

# installing dependencies
COPY ./package.json /app/package.json
COPY ./bun.lockb /app/bun.lockb
RUN bun install

# copy and build project
COPY ./ /app/
RUN bun run build

CMD ["bun", "start"]