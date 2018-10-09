# My College Pal
##### KJSCE Hackathon 2018, 4th Rank
> College Activity Manager

![](https://img.shields.io/badge/Stack-MERN-red.svg)

One to two paragraph statement about your product and what it does.

![whiteboard](/docs/images/whiteboard.png)
![google assistant](/docs/images/google-assistant.png)

## Build instructions

#### Install all the packages:

1. In the root of the backend project
2. In the root of the /dashboard/ folder.

Using either `npm i` or ` yarn `.

#### Set up a mongodb database, then add URL to `.env` file

The project separates databases from source code. So specify your database in a `.env` file.

A `sample.env` and a sample database has been provided. You can rename the file to `.env` and run the program.

#### Run both the servers.

In both the root and /dashboard/, execute using the start script.
`npm start` or `yarn start`.

To build the webpack, `npm run build` or `yarn build`.

## Technology Stack

1. MongoDB for database, Mongoose for ORM.
2. ExpressJS for server library.
3. ReactJS for frontend, using some 3rd party modules as well as [Creative Tim Material UI Dashboard](https://www.creative-tim.com/product/material-dashboard-react) for template.
4. NodeJS for environment.
5. DialogFlow for Google Assistant Actions.

## Developer

> Team 42, Steins;Gate

The project was made by one person in a 24 hour hackathon. You can read about my experience on my blog:

Vikrant Gajria – [www.vikrant.ga](https://www.vikrant.ga/) – gajriavikrant@gmail.com

Distributed under the AGPLv3 license. See ``LICENSE`` for more information.

[https://github.com/vixrant](https://github.com/vixrant/)

## Contributing

1. Fork it (<https://github.com/vixrant/kjsce-hackathon-2018/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics