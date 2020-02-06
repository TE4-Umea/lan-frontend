
# Lan organizer

## Installation

## Pre-requisites 
* PHP
* Mysql / SQLite / MariaDB
* Apache / Nginx
* Composer
* NPM

### Frontend:
* Clone the lan-frontend repository
* Run npm install
* npm run generate OR npm run dev.


### Backend
* Clone the lan-backend repository
* Run `~$ composer install`
* Run `~$ php artisan key:generate`
* Configure .env file.
* run `~$ php artisan Websockets:serve`
* If you want Websockets to be run as a background service, follow this [guide](https://docs.beyondco.de/laravel-websockets/1.0/basic-usage/starting.html#keeping-the-socket-server-running-with-supervisord)

## Setting up the database
* Configure .env file.
* Run php artisan passport:install
* Run php artisan migrate:fresh


## What is NTI LAN?
 
Lan-organizer is a PWA (Progressive Web App) designed to make organizing LAN parties simpler and more fun. Among the features includes event creation, registration, checkin and more. The app is designed for NTI Gymnasiet Umeå but can easily be reskinned to fit other event organizers.

The app was developed using VueJS and NUXT, and it uses Laravel for it's backend.















































 