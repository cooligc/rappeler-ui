from node as base
MAINTAINER cooligc(contact@sitakant.info)
WORKDIR /opt/ui
RUN mkdir -p /opt/ui
COPY . .
RUN cd /opt/ui
RUN npm i
RUN npm install @angular/cli@1.7.1
RUN npm angular-build

from nginx
COPY --from=base /opt/ui/dist /usr/share/nginx/html