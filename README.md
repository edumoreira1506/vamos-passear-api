# vamos-passear-api

## Dependencies

```
NodeJS >= 14.6.0
Yarn >= 1.22.4
Postgres >= 12
```

## Setup

Clone the project.
```console
$ git clone git@github.com:edumoreira1506/vamos-passear-api.git
$ cd vamos-passear-api
```

Copy the contents of the `.env.sample` to `.env` then change with the credentials of your local environment.

```console
$ cp .env.sample .env
```

Install all packages.
```console
$ yarn
```

Create database.
```console
$ yarn db:create
```

For run server local.
```console
$ yarn dev
```

## Database

For create just the database (without the tables).
```console
$ yarn db:create
```

For delete database.
```console
$ yarn db:drop
```

## Tests

For run tests.
```console
$ yarn test
```
