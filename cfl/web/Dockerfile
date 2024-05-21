FROM tomcat:9.0.89-jre8

RUN rm -rf /usr/local/tomcat/webapps/ROOT
ADD ./ROOT /usr/local/tomcat/webapps/ROOT

ADD ./formbuilder /usr/local/tomcat/webapps/formbuilder

VOLUME /usr/local/tomcat/.OpenMRS

COPY openmrs.war  /usr/local/tomcat/webapps/openmrs.war

# Copy OMRS 3.x frontend
COPY frontend/dist /opt/openmrs-frontend

COPY modules /opt/openmrs-modules
COPY owa /opt/openmrs-owa
COPY cfl-modules /opt/cfl-modules

COPY setenv.sh /usr/local/tomcat/bin/setenv.sh

COPY wait-for-it.sh /usr/local/tomcat/wait-for-it.sh
COPY startup.sh /usr/local/tomcat/startup.sh

COPY ./config/tomcat /usr/local/tomcat/conf

RUN chmod +x /usr/local/tomcat/wait-for-it.sh
RUN chmod +x /usr/local/tomcat/startup.sh

# For documentation purpose only
COPY openmrs-distro.properties /root/openmrs-distro.properties
COPY Dockerfile /root/Dockerfile

CMD ["/usr/local/tomcat/startup.sh"]
