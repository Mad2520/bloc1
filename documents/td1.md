Questions TD 1 :

1-différence entre GET et Post : on utilise GET pour obtenir des données, et POST pour transmettre des données, même s'il est parfaitement possible d'envoyer des données avec GET et d'en recevoir avec POST.

    Méthodes GET et POST La méthode GET en HTTP est utilisée pour récupérer des ressources du serveur. Par exemple, si l'on envoie une requête GET à l'URL http://monapi.com/produits?categorie=electronique, les paramètres (ici, categorie=electronique) sont inclus directement dans l'URL. Les données échangées dans ce cas sont visibles et limitées par la taille de l'URL. La requête ressemble à GET /produits?categorie=electronique HTTP/1.1, et la réponse pourrait contenir une liste de produits sous format JSON. En revanche, la méthode POST est utilisée pour envoyer des données au serveur, par exemple lors de la soumission d'un formulaire. Dans ce cas, les données sont envoyées dans le corps de la requête. Si l'URL est http://monapi.com/produits/ajouter, le client enverra les données du produit sous forme JSON dans le corps de la requête, comme : { "nom": "Smartphone", "prix": 299.99 }

La requête POST se présente comme POST /produits/ajouter HTTP/1.1, et la réponse pourrait être une confirmation de l'ajout du produit.

    Comparaison des méthodes GET et POST

Voici une comparaison des méthodes GET et POST :

Visibilité des données : Dans une requête GET, les données sont visibles dans l'URL, ce qui peut poser des problèmes de sécurité si elles contiennent des informations sensibles. En POST, les données sont incluses dans le corps de la requête, donc moins exposées. Limitation de taille : GET est limité par la longueur maximale d'une URL, généralement autour de 2048 caractères, tandis que POST n'a pas de limite théorique pour la quantité de données. Sécurité : GET est moins sécurisé car les données apparaissent dans l'URL, potentiellement stockées dans l'historique du navigateur. POST est plus sécurisé pour l'envoi de données sensibles, bien que l'usage de HTTPS soit recommandé pour les deux méthodes. Utilisation : GET est couramment utilisé pour récupérer des informations sans provoquer de changement sur le serveur. POST est utilisé pour envoyer des données ou modifier des ressources. Cache : Les requêtes GET peuvent être mises en cache par les navigateurs ou les serveurs, tandis que POST ne l'est généralement pas.

    HTTP est un protocole extensible

Le protocole HTTP est extensible car il permet l'ajout de nouvelles fonctionnalités tout en restant compatible avec les anciennes versions. Par exemple, de nouvelles méthodes comme PATCH ou OPTIONS ont été ajoutées sans altérer le fonctionnement des méthodes existantes comme GET et POST. De même, des en-têtes personnalisés peuvent être utilisés pour transmettre des informations spécifiques sans avoir besoin de changer le protocole de base. Cette extensibilité permet à HTTP de s’adapter à l’évolution des technologies web. Par exemple, de nouveaux types de contenu, comme le JSON ou XML, sont pris en charge grâce à des en-têtes comme Content-Type.

    HTTP est un protocole sans état

HTTP est qualifié de protocole "sans état" parce que chaque requête est indépendante et ne conserve pas d'information d'une requête à l'autre. Cela signifie que le serveur ne se souvient pas des interactions précédentes avec un client. Ainsi, à chaque requête, le client doit fournir toutes les informations nécessaires. Cette caractéristique a des conséquences pour la navigation web. Les serveurs ne peuvent pas, par défaut, suivre les utilisateurs ou maintenir une session d'un point à un autre. Pour cela, des mécanismes comme les cookies ou les sessions sont utilisés pour maintenir un état entre les requêtes. Un avantage de cette approche sans état est la simplification du serveur, ce qui améliore la scalabilité (facilité d’augmenter les capacités).

    Décomposition d'une URL

Prenons l'URL suivante : https://www.example.com:8080/articles/search?q=web#section. https:// : Le schéma ou protocole utilisé (ici HTTPS qui est une version sécurisée de HTTP). www.example.com : Le nom de domaine qui identifie le serveur hébergeant le site. :8080 : Le port de communication utilisé (8080 est un port alternatif pour HTTP, le port par défaut étant 80 pour HTTP et 443 pour HTTPS). /articles/search : Le chemin vers la ressource ou page spécifique sur le serveur. ?q=web : Les paramètres de la requête (query string) envoyés au serveur, ici une recherche pour le terme "web". #section : L’ancre (ou fragment), permettant de cibler une section particulière de la page.

    Familles de codes de statut HTTP

Les codes de statut HTTP sont classés en plusieurs familles : 1xx : Informations (la requête a été reçue et le traitement est en cours). Exemple : 100 Continue. 2xx : Succès (la requête a été correctement traitée). Exemple : 200 OK. 3xx : Redirection (des actions supplémentaires sont nécessaires pour finaliser la requête). Exemple : 301 Moved Permanently, indiquant que la ressource a été déplacée définitivement. 4xx : Erreur côté client (la requête est incorrecte). Exemple : 404 Not Found, signifiant que la ressource demandée n'a pas été trouvée. 5xx : Erreur côté serveur (le serveur n'a pas pu traiter une requête valide). Exemple : 500 Internal Server Error.

    Négociation de contenu HTTP

La négociation de contenu est le processus par lequel un client et un serveur s’accordent sur le format de la réponse HTTP. Cela se fait à l’aide des en-têtes HTTP, tels que : En-tête Accept : Le client peut spécifier les formats qu'il accepte, par exemple : Accept: application/json, text/html. En-tête Content-Type : Le serveur spécifie le format de la réponse, par exemple : Content-Type: application/json. Ainsi, si un client demande du contenu en JSON ou HTML, le serveur renverra le format qu'il est capable de fournir en fonction de la requête.

    Installation Apache & configuration d’un VirtualHost avec XAMPP

Pour installer XAMPP et configurer un VirtualHost sur votre poste local : Installation de XAMPP : Téléchargez XAMPP depuis le site officiel, puis installez-le. Démarrez Apache et MySQL : Utilisez le panneau de contrôle XAMPP pour démarrer les services Apache et MySQL. Configurer le VirtualHost : Ouvrez le fichier de configuration des VirtualHosts (httpd-vhosts.conf), qui se trouve dans C:/xampp/apache/conf/extra/httpd-vhosts.conf. Ajoutez-y la configuration suivante : <VirtualHost *:80> DocumentRoot "C:/xampp/htdocs/dev.local" ServerName dev.local

Modifier le fichier hosts : Ajoutez l'entrée 127.0.0.1 dev.local au fichier hosts dans C:/Windows/System32/drivers/etc/hosts pour lier le nom de domaine local à votre machine. Redémarrer Apache : Redémarrez le service Apache via le panneau de contrôle. Vous pourrez ensuite accéder à http://dev.local depuis votre navigateur.

    Requêtes CURL

Requête GET vers http://dev.local : Vous pouvez effectuer une requête GET simple avec la commande curl http://dev.local. Cela récupère le contenu de la page d'accueil du VirtualHost. Afficher l’entête de la réponse : Utilisez la commande curl -I http://dev.local pour afficher uniquement l'en-tête de la réponse. Cela renverra des informations comme le statut HTTP et le type de contenu. Requête GET vers une URL inexistante : En envoyant une requête GET vers une page qui n'existe pas, par exemple curl http://dev.local/notExisting, le serveur renverra une réponse 404. Déposer un fichier dans le dossier download : Si vous placez un fichier dans le dossier C:/xampp/htdocs/dev.local/download, vous pouvez ensuite le télécharger via CURL en utilisant curl http://dev.local/download/monfichier.txt -o fichier.txt.

    Les principaux en-têtes HTTP

Voici les principaux en-têtes HTTP et leur rôle : Host : Indique le nom de domaine du serveur auquel la requête est envoyée, par exemple : Host: www.example.com. User-Agent : Spécifie le type de client (navigateur ou logiciel) qui effectue la requête. Exemple : User-Agent: Mozilla/5.0. Accept : Indique les types de contenu que le client accepte. Exemple : Accept: text/html, application/json. Content-Type : Spécifie le type de contenu envoyé dans le corps de la requête. Exemple : `Content-Type
