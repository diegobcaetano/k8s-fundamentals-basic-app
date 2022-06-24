# k8s-fundamentals-basic-app
___

### Description

This simple HTTP API was built for k8s training purposes. You can pratice:

#### Liveness and Readiness

For Liveness: `/health/live`

This endpoint returns a simple JSON and 200 status if the app is started.

For Readiness: `/health/ready`

This endpoint will return 500 status if the database (configured in the `config/db.js` file) is not available 
and 200 status if the connection with the database was established.

To configure the database you can use the following env vars:

| Variable                        | Description                                |
|---------------------------------|--------------------------------------------|
| `DB_HOST`                       | The address of the database                |
| `DB_USER`                       | The user to connect with the database      |
| `DB_PASSWORD`                   | The user password                          |
| `DB_ACQUIRE_CONNECTION_TIMEOUT` | The timeout for acquiring a new connection |
 | `DB_POOL_SIZE`                  | The max number of connections              |