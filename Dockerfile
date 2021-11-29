FROM python:3.8-alpine3.14

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./app /app/

RUN apk add --no-cache postgresql-libs \
    && apk add --no-cache --virtual .build-deps zlib-dev jpeg-dev gcc musl-dev postgresql-dev \
    && pip install --upgrade pip \
    && pip install -r app/requirements.txt \
    && git submodule init \
    && git submodule update

ENV FLASK_APP '/app/main.py'

WORKDIR /app/
