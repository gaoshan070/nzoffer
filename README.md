# offer-111

> web app

## Overview

- This project uses [Feathers](http://feathersjs.com) for the back-end. An open source Node.js web framework for building modern real-time applications.
- React for the front-end.
- The database is MongoDB v4 within a container.
- The deployment is using [Dokku](http://dokku.viewdocs.io/dokku/), an open source DIY PaaS, it will combine nginx + mongodb + your code, then swap the online container and offline container when doing the deployment, super easy and cool.

## Folder structure

- root: is the code for back-end
- client: is the code for front-end

## For the first time user

1. Prepare the private key:
   - You need to ask me for the private key in order to `SSH` to the server. I turned off the username/password login for safety.
2. Prepare the code:
   - `git clone` the GitHub repo, ask me for permission
3. Prepare local repo, add offer111 server to your `git remote` to prepare the CD step.
   - `git remote add offer111 dokku@47.95.212.110:offer111`

## How to deploy

- Just `npm run deploy`
- Then your changes will be pushed into the server
- Finally, it will run `npm run start`, which will use `pm2` under the hood for your back-end code.

> So, in short, you just write the code, then `git push offer111 master`, but if you check the `deploy` script in package.json, it's more than that, it will build the front-end locally and swap the server folder and then push everything, the reason is aliyun is bloody slow in terms of accessing the foreign network which we developers all know why...

> Before deploying, you have to follow the (first time user) user to setup the password.

It will do more than that, but basically, you can look into the `Dockerfile` for a glance.
