FROM node:20-bullseye-slim

# Install deps
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git curl bash ca-certificates build-essential python3 pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable \
    && corepack prepare pnpm@latest --activate || true
# Use the pre-existing "node" user
USER node
WORKDIR /workspace


ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
