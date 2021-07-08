# covalent-typescript-wrapper

Covalent provides a unified API bringing visibility to billions of blockchain data points. To make using the API even easier we made this API wrapper. If you have any problem feel free to contact me k.n.nuankaew@gmail.com

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install once you first clone.

```bash
$ yarn or npm install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Environment (.env file)

```bash
COVALENT_HQ_API_KEY="covalent api key"
```

You can get free API key [here](https://www.covalenthq.com/platform/#/auth/register/)

```bash
HTTP_TIMEOUT=5000 #default api request timeout.
```

```bash
HTTP_MAX_REDIRECTS=1 #default request max redirect.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
