# Description
Run CFL Distribution.

The distribution project consists of docker compose configuration files and resources which make up a CFL distribution
 (OpenMRS Web Application, modules and other).

The project contains **.env.example** file which contains the configuration of an environment, the committed version
 configures CFL distribution to run on your local docker, where both application and database docker containers are
  running. 

The CFL distribution forgoes usage of database dump, in favor of 'initial startup'. 
The 'initial startup' is the first start of an application, during which empty database has tables created and initial
 data loaded in. This approach removes a burden of synchronizing DB dump with initial data of the CfL application, 
 at the expense of the longer initial startup.

## Requirements
  - Docker engine
  - Docker compose

## Development

The project provides utility script to start OpenMRS application docker container together with MySQL container.

Run script:
```runInDevMode.sh```

The docker compose configuration files, should stay unchanged - with an exception of docker image versioning.
 
**Increment proper version number in docker-compose.run.yml and docker-compose.build.yml when you make any
 change in this project**

## Production

Review AWS considerations and Serving CfL over HTTP below.

Build CFL distribution image using ``docker-compose.build.yml``.

```
sudo docker-compose -f docker-compose.build.yml build web
```

Save CFL distribution image into archive. 

```
sudo docker save openmrscorecfl:X.Y.Z | gzip > openmrscorecfl_X.Y.Z.tar.gz
```
Where X.Y.Z is the version number from `docker-compose.run.yml` web image name's suffix.

Distribute the created image together with ``docker-compose.run.yml`` file. 
The ``.env`` file has to be created during the installation, each environment has individual configuration.

### Run production

Configure ``.env`` accordingly to the production environment.

| Property              | Value                  | Description 
| --------------------- | -----------------------| ----------- 
| INITIAL_STARTUP       | true or false          | Whether the next startup should create the database tables and load the initial data. **This must be true only for a first startup on given DB.**
| TOMCAT_PORT           | port number, eg.: 80   | Specifies a TPC port under which docker should expose CfL web application.
| DB_HOST               | URL                    | Specifies connection URL for database. Leave a default `db` for dev mode.
| DB_USERNAME           | DB username            | Specifies user that OpenMRS will use to connect to database.
| DB_PASSWORD           | DB password            | Specifies password that OpenMRS will use to connect to database.
| MYSQL_DEV_PORT        | port number, eg.: 3306 | If started in dev mode, specifies a TPC port under which docker should expose database.
| TOMCAT_DEV_PORT       | port number, eg.: 8080 | When Debugging is enabled, specifies a TPC port under which docker should expose CfL web application.
| TOMCAT_DEV_DEBUG_PORT | port number, eg 1044   | When Debugging is enabled, specifies a TPC port under which docker should expose Java debug port of CfL web application.
| DB_ROOT_PASSWORD      | DB root password       | If started in dev mode, specifies `root` user password for the created database.

Load CFL distribution image.

```
sudo docker load < openmrscorecfl_X.Y.Z.tar.gz
```

Verify docker-compose.run.yml configuration. The services/web/image section should refer to the same version as the image
 file above. 
 The version in docker-compose.run.yml may differ if there was a file left from previous deployments.

Run docker-compose.run.yml configuration

```
sudo docker-compose -f docker-compose.run.yml up -d web
```

Inspect logs

```
sudo docker logs -f --tail 500 cfl_web_1
```

### AWS considerations

When running Connect for Life in AWS environments, you must ensure that RDS database has `log_bin_trust_function_creators
` parameter (in database server's parameter group) set to **1**. 
This is required to load database functions used in the Connect for Life.

The `openmrs` schema and user used by OpenMRS, must be pre-created before Connect for Life startup. 
The schema must created with **UTF8** character set and **utf8_general_ci** collation.

### Serving CfL over HTTP

The Connect for Life is by default configured to be hidden by a proxy or firewall which exposes CFL over HTTPS.
To make Connect for Life work over regular HTTP, for connection other then from localhost, you need to modify `cfl/web
/config/tomcat/web.xml` file. 
Remove `cookie-config` element from the `session-config`.

#### Default config
```
    <session-config>
        <session-timeout>30</session-timeout>
        <cookie-config>
            <http-only>true</http-only>
            <secure>true</secure>
        </cookie-config>
    </session-config>
```

#### HTTP config

```
    <session-config>
        <session-timeout>30</session-timeout>
    </session-config>
```
