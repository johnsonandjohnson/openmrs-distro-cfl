FROM tomcat:7-jre8

RUN rm -rf /usr/local/tomcat/webapps/ROOT
ADD ./ROOT /usr/local/tomcat/webapps/ROOT

VOLUME /usr/local/tomcat/.OpenMRS

COPY openmrs.war  /usr/local/tomcat/webapps/openmrs.war

COPY modules /opt/openmrs-modules
COPY owa /opt/openmrs-owa
COPY cfl-modules /opt/cfl-modules
# Copy OCL export ZIP
COPY ocl /opt/openmrs-ocl

COPY setenv.sh /usr/local/tomcat/bin/setenv.sh

COPY wait-for-it.sh /usr/local/tomcat/wait-for-it.sh
COPY startup.sh /usr/local/tomcat/startup.sh

RUN sed -i '/Connector port="8080"/a URIEncoding="UTF-8" relaxedPathChars="[]|" relaxedQueryChars="[]|{}^&#x5c;&#x60;&quot;&lt;&gt;"' /usr/local/tomcat/conf/server.xml

RUN chmod +x /usr/local/tomcat/wait-for-it.sh
RUN chmod +x /usr/local/tomcat/startup.sh

# For documentation purpose only
COPY openmrs-distro.properties /root/openmrs-distro.properties
COPY Dockerfile /root/Dockerfile

CMD ["/usr/local/tomcat/startup.sh"]
