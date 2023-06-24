Made by a group of students working at [Polytech Nice Sophia](https://polytech.univ-cotedazur.fr/)
@marcusaasjensen @rodriguezarthur @ChloeVandenbrulle

# FLOPPA WEB - School Project (EN)

## Important Site Usage Notes

To access the caregiver section, you need to enter a basic PIN code that can be modified in the next screen.
The secret code is "0000".

## Healthchecks used in each service:

The healthchecks used are located in the back-end and front-end services in the docker-compose.yml.
They are used to verify if the back-end and front-end are still responsive by calling the curl command.

For the back-end healthcheck, the command is:
   "curl -f http://localhost:9428/api/status | grep 'ok' || exit 1"
   Here, we use the URL http://localhost:9428/api/status because the healthcheck is called from inside the service.
   api/status returns "ok" if everything is fine in the container.

Similarly, for the front-end healthcheck:
   "curl -f http://localhost:4200 || exit 1"
   We use the URL http://localhost:4200 for the same reason as the back-end.
   This command checks if the front-end link is functioning properly.

## Users in the services:

For both the back-end and front-end, the user is the one indicated in the Dockerfile.
For the back-end service, the user is 'node'.
For the front-end service, the user is 'nginx'.

## Explanation of accessible services and URLs/ports:

- Back-end: Access the back-end using the domain 'localhost' and port 8000.
- Front-end: Access the front-end using the same domain 'localhost' and port 8080.

Indeed, ports 8000 and 8080 are the ports we can access from outside the containers. Inside the containers, the ports are 9428 for the back-end and 4200 for the front-end, but we don't have access to these ports from outside the containers.

## Docker Launches:

- docker-compose: Run the run.sh file that contains the command to launch the compose.

- tests: Modify the 'environment' value in front-end/src/environments because the Docker is not working.
The tests use ports 4200 for the front-end and 9428 for the back-end. Therefore, the environment URL should be:
   "http://localhost:9428/api"
You also need to launch the front-end with the command: "npm run start", and the back-end with the command: "npm run dev".
Finally, run the command: "npm run test:e2e" to execute the tests.

--

# FLOPPA WEB - Projet PS6 (FR)

## Notes d'utilisation du site importante

Pour accéder à la partie soignante, il faut saisir un code PIN de base qui sera modifiable dans l'écran suivant.
Le code secret est "0000".

## Healthchecks utilisées dans chaque service :

Les healthchecks utilisés sont situés dans les services back-end et front-end dans le docker-compose.yml.
Ils servent à vérifier si le back-end et le front-end répondent toujours en appelant la commande curl.

Pour le healthcheck du back-end, on appelle la commande :  
&ensp;&ensp;&ensp;&ensp;```"curl -f http://localhost:9428/api/status | grep 'ok' || exit 1"```  
    on utilise ici l'url http://localhost:9428/api/status car on appelle le healthcheck depuis l'interieur du service.
    api/status renvoie "ok" si tout va bien dans le conteneur.

De même pour le healthcheck du front-end :  
&ensp;&ensp;&ensp;&ensp;```"curl -f http://localhost:4200 || exit 1"```  
    on utilise l'url http://localhost:4200 pour la même raison que pour le back-end.
    Cette commande vérifie que le lien du front-end fonctionne bien.

## Les utilisateurs dans les services :

Pour le back-end comme pour le front-end, l'utilisateur est celui indiqué dans le Dockerfile.  
Pour le service du back-end, l'utilisateur est donc node.   
Pour le service du front-end, il s'agit de nginx.

## Une explication sur les services accessibles et les urls/ports :

- Back-end : on accède au back-end avec le domaine localhost et le port 8000
- Front-end : on accède au front-end avec le domaine localhost également et le port 8080.

En effet les ports 8000 et 8080 sont les ports auxquels nous avons accès depuis l'extérieur des conteneurs. A l'intérieur des conteneurs, les ports sont 9428 pour le back-end et 4200 pour le front-end mais nous n'avons donc pas accès à ces ports depuis l'extérieur des conteneurs.

## Lancements des dockers :

- docker-compose : lancer le run.sh qui contient la commande pour lancer le compose.

- tests : modifier la valeur environment dans front-end/src/environments car le docker ne fonctionne pas.  
Les tests utilisent les ports 4200 pour le front-end et 9428 pour le back-end. Il faut donc que l'url de l'environment soit :  
&ensp;&ensp;&ensp;&ensp;```"http://localhost:9428/api"```  
Il faut également lancer le front-end avec la commande : ```npm run start``` et le back-end avec la commande : ```npm run dev```.  
Enfin, il faut lancer la commande : ```npm run test:e2e``` pour faire tourner les tests
