# Tarabalam site

## Run locally for development
- Create backend configuration file in `src/config/env/.local.json` with structure as below

```json
{
    "PORT": 3000,
    "baseUrl": "http://localhost:3000",
    "redis": {
      "host": "localhost",
      "port": 6379,
      "db": 0
    },
    "mysql": {
        "host": "mysql",
        "port": 3306,
        "database": "tarabalam",
        "username": "root",
        "password": ""
    },
    "jwt": {
        "issuer": "Tarabalam",
        "secret": "jwt_secret_key"
    },
    "google": {
        "clientID": "google_client_id",
        "clientSecret": "google_client_secret"
    },
    "facebook": {
        "clientID": "facebook_client_id",
        "clientSecret": "facebook_client_secret"
    },
    "mailer": {
        "from": "Admin <admin@tarabalam.com>",
        "transport": {
            "service": "SES",
            "auth": {
                "user": "ses_auth_user",
                "pass": "ses_sec_password"
            }
        }
    }
}
```

- Start the app (cd to backend folder) `grunt`
- Start cron job app in new terminal window `node cron.js`
- Open app at `http://localhost:3000`

## Deploy to remote server
- Install docker and docker-compose
- Create configuration file in `src/config/env/.deploy.json`, here is example content

```json
{
    "PORT": 3000,
    "NODE_ENV": "production",
    "baseUrl": "http://ec2-34-193-250-103.compute-1.amazonaws.com",
    "redis": {
      "host": "redis",
      "port": 6379,
      "db": 0
    },
    "mysql": {
        "host": "mysql",
        "port": 3306,
        "database": "tarabalam",
        "username": "tarabalam",
        "password": "tarabalam"
    },
    "jwt": {
        "issuer": "Tarabalam",
        "secret": "jwt_secret_key"
    },
    "google": {
        "clientID": "google_client_id",
        "clientSecret": "google_client_secret"
    },
    "facebook": {
        "clientID": "facebook_client_id",
        "clientSecret": "facebook_client_secret"
    },
    "mailer": {
        "from": "Admin <admin@tarabalam.com>",
        "transport": {
            "service": "SES",
            "auth": {
                "user": "ses_auth_user",
                "pass": "ses_sec_password"
            }
        }
    }
}
```

- Run and app using `docker-compose up -d`

## Notification
- There are 2 tables for the event notifications

```sql
CREATE TABLE events
(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    imageUrl VARCHAR(255),
    videoUrl VARCHAR(255),
    templateId INT(11),
    eventDay INT(11),
    eventMonth INT(11),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    CONSTRAINT events_ibfk_1 FOREIGN KEY (templateId) REFERENCES templates (id) ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX templateId ON events (templateId);

CREATE TABLE templates
(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    messageBody TEXT,
    messageTitle VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
```

- There is scheduled job that run every day at 8AM to send next day events to all users (users with USER role)

# Social Login

Currently we support Google and Facebook authentication and registration, please create each of them for 
tarabalam web app then update clientId and clientSecret to the config above

For more information please see these link:

- Google: https://developers.google.com/identity/sign-in/web/devconsole-project
- Facebook: https://developers.facebook.com/docs/apps/register

# Accessing mysql docker instance

Just issuing this command under the app folder:

```bash
docker-compose exec mysql mysql -u tarabalam -ptarabalam tarabalam
```

You will be prompted at mysql console.
