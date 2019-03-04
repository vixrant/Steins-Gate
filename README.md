# My College Pal
##### KJSCE Hackathon 2018, 4th Rank
> College Activity Manager

A dashboard for curating all the activities happening in the college.

![MERN](https://img.shields.io/badge/stack-MERN-red.svg?logo=javascript&style=flat-square)
[![HitCount](http://hits.dwyl.io/vixrant/kjsce-hackathon-18.svg)](http://hits.dwyl.io/vixrant/kjsce-hackathon-18)

![whiteboard](/docs/images/whiteboard.png) ![google assistant](/docs/images/google-assistant.png)

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

> Vikrant Gajria – [www.vikrant.ga](https://www.vikrant.ga/) – gajriavikrant@gmail.com
> [https://github.com/vixrant](https://github.com/vixrant/)

## Contributing

1. Fork it (<https://github.com/vixrant/kjsce-hackathon-18/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Failures

> As with all my hackathon projects, I include a [FAILURES.md](/FAILURES.md)
> which includes all the obstacles that I encountered while developing this project.
> This project was successful. 
> But that doesn't mean I ignore the small mistakes that I made along the way.

-----------
APGLv3 LICENSE
-----------

> Copyright (C) 2018, 2019 Vikrant Gajria
>
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU Affero General Public License as published
> by the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
> This program is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
> GNU Affero General Public License for more details.
>
> You should have received a copy of the GNU Affero General Public License
> along with this program.  If not, see <https://www.gnu.org/licenses/>.
