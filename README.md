# js-dq


## dependency

[serverside php framework : laravel5](http://laravel.com/)

[css framework : bootstrap](http://getbootstrap.com/)

[js animation library : velocity](https://github.com/julianshapiro/velocity)

[js HTTP client library : jquery](https://github.com/jquery/jquery)


## setup app

setup laravel app server


```
cd frontend
composer install
```

```
sudo npm install -g gulp
```

```
npm install
```

```
gulp
```



## Database setup

```
DROP DATABASE IF EXISTS jsdq; CREATE DATABASE IF NOT EXISTS jsdq DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
```

In addition, you need the "jsdq" user to have full access to this database:

```
GRANT ALL PRIVILEGES ON jsdq.* TO 'jsdq'@'localhost' IDENTIFIED BY 'jsdq' WITH GRANT OPTION; FLUSH PRIVILEGES;
```

With these settings, you won't need to modify the database.php configuration file.

After completing these steps, run the migration jobs, that fill the database:

```
cd frontend
```

```
php artisan migrate
```


## flux setup

```
cd frontend/public/flux
```

install module

```
npm install
```

start script(see package.json)

```
npm start
```








