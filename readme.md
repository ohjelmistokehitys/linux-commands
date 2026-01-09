# Linux-komennot

Tämä repositorio sisältää tehtäviä Linux-komentoihin perehtymiseksi. Komennot ovat yhteensopivia useimpien Linux/Unix-versioiden kanssa, joten yhteensopivuusongelmia **ei pitäisi** ilmentyä. Myös Windows yhdessä [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install):n kanssa toimii hyvin, mutta PowerShell ja cmd eivät riitä tähän tehtävään. Vaihtoehtoisesti voit käyttää [GitHub Codespaces](https://github.com/features/codespaces) -ympäristöä tai [Docker](https://www.docker.com/)-konttia, josta kerrotaan lisää alempana.

> [!WARNING]
> Ole varovainen käyttäessäsi komentoriviä. Väärät tai virheellisesti käytetyt komennot voivat aiheuttaa korjaamatonta vahinkoa tiedostoille tai järjestelmälle. Älä kopioi ja suorita eri lähteistä mahdollisesti löytämiäsi komentoja ilman, että olet varma siitä, mitä ne tekevät. Jos olet epävarma, kysy neuvoa kurssin keskustelukanavilla. Codespaces-ympäristö, erillinen virtuaalikone tai Docker-kontti voivat auttaa eristämään harjoitukset omasta käyttöjärjestelmästäsi ja muista tiedostoistasi.


## GitHub classroom ja automaattinen arviointi

Tehtävät arvostellaan käyttäen [GitHub classroom](https://classroom.github.com/) -palvelua, joka suorittaa komentosi, ja tarkastaa ja pisteyttää niiden tulokset automaattisesti. Taustalla GitHub classroom hyödyntää [GitHub actions](https://github.com/features/actions) -nimistä jatkuvan integroinnin palvelua. Voit tarvittaessa yrittää tehtäviä monta kertaa. Tee tällöin uusi commit, ja vie muutokset uudelleen GitHubiin.


## Harjoitusten kloonaaminen

Kun olet hyväksynyt tehtävän GitHub classroomissa ja saanut repositoriosta henkilökohtaisen kopion, kloonaa se itsellesi `git clone` -komennolla. Siirry sen jälkeen komentorivillä klonattuun hakemistoon (esim. `cd repositorion-nimi`).

Kloonatessasi repositoriota varmista, että Git-osoitteen lopussa on oma GitHub-käyttäjänimesi. Jos käyttäjänimesi puuttuu osoitteesta, kyseessä ei ole henkilökohtainen kopiosi tehtävästä. Tarkasta tässä tapauksessa kurssin ohjeet tehtävän hyväksymiseksi.


## Docker (suositeltu 🪄)

Mikäli sinulla on Docker asennettuna, voit käynnistää tehtävää varten uuden Ubuntu-kontin ja ratkaista tehtävät kontin sisällä. Suorita komentorivillä seuraava komento tämän tehtävän juurihakemistossa (sama hakemisto, jossa tämä tiedosto sijaitsee):

```sh
docker compose run ubuntu
```

[Docker compose -työkalu](https://docs.docker.com/compose/) lukee [docker-compose.yml-asetustiedoston](./docker-compose.yml) ja käynnistää sen määritysten mukaisesti uuden Ubuntu-kontin. Tämä tehtävähakemisto liitetään kontin sisälle `/app`-hakemistoon, joten voit muokata samoja tiedostoja joko omassa käyttöjärjestelmässäsi tai kontin sisällä, ja muutokset näkyvät molemmissa. Voit poistua lopuksi kontista `exit`-komennolla. Kontin sisälle liitettyyn `/app`-tehtävähakemistoon tehdyt muutokset kuitenkin säilyvät, vaikka kontti poistetaan.

Mikäli käytät yllä mainittua `run`-komentoa, löydät tarkemman kuvauksen sen toiminnasta [docker-compose.yml](./docker-compose.yml)-tiedostosta. Tämä komento luo jokaisella suorituskerralla uuden kontin. Mikäli haluat palata aiemmin luotuun konttiin, voit käyttää `docker ps --all`-komentoa löytääksesi kontin id:n, ja sen jälkeen käynnistää kontin uudelleen `docker start --attach --interactive <kontin_id>`-komennolla. Vaihtoehtoisesti voit poistaa kontin automaattisesti sulkemisen jälkeen lisäämällä `docker compose run`-komentoon lipun `--rm`:

```sh
# listaa kaikki kontit, myös pysäytetyt
docker ps --all

# käynnistää aiemmin luodun kontin uudelleen ja liittää sen terminaaliin
docker start --attach --interactive KONTIN_ID

# käynnistää uuden kontin ja poistaa sen sulkemisen jälkeen
docker compose run --rm ubuntu
```

## Vastausten lähettäminen

Kun olet saanut osan tai kaikki tehtävistä ratkaistua ja commitoinut vastauksesi, lähetä ratkaisut arvioitavaksi `git push`-komennolla. Git push käynnistää automaattisesti workflow:n, joka testaa kaikki komentosi ja antaa niistä joko hyväksytyn tai hylätyn tuloksen.

Kun GitHub Actions on saanut koodisi suoritettua, näet tuloksen GitHub-repositoriosi [Actions-välilehdellä](../../actions/workflows/classroom.yml). Arvioinnin valmistumiseen kuluu tyypillisesti pari minuuttia.

Klikkaamalla yllä olevan linkin takaa viimeisintä "GitHub Classroom Workflow" -suoritusta, saat tarkemmat tiedot tehtävän arvioinnista. Sivun alaosassa näkyy saamasi pisteet. Klikkaamalla "Autograding"-otsikkoa pääset katsomaan tarkemmin arvioinnissa suoritetut vaiheet ja niiden tulokset.


## Tehtävät

Kussakin tehtävässä on tarkoituksena suorittaa jokin tietty komento tai komentosarja. Suoritettu komento tulee lisätä sitä vastaavaan `.sh`-päätteiseen tiedostoon. Suosittelemme ensin kokeilemaan komentoja suoraan komentoriviltä, ja kun komento toimii, kopioimaan sen vastaavaan tiedostoon. Lisää skripteihin tekemäsi muutokset versionhallintaan `git add` ja `git commit` -komennoilla.

Tarvittavia komentoja ei ole koottu kurssin puolesta valmiiksi oppimateriaaliksi, vaan sinun tulee itse selvittää, mitä komentoja kussakin tapauksessa vaaditaan. Käytä apunasi hakukoneita ja tutoriaaleja. Voit myös kysyä apua kurssin keskustelukanavilta, mikäli jokin osa tehtävästä on epäselvä tai kohtaat ongelmia.

Tehtäviä arvioitaessa komennot suoritetaan suoraan tiedostoista, joten sinun kannattaa varmistaa ratkaisujesi toimivuus myös suorittamalla ne tiedostoista, esim. `./01_hello_world.sh`. Huomaa, että skriptit suoritetaan arvioitaessa tämän repositorion juuressa, eli hakemistossa, jossa tämä readme.md-tiedosto sijaitsee. Varmista siis, että skriptisi eivät oleta työhakemistoksi muita hakemistoja.


### Hello world

Tämä on lämmittelytehtävä, jossa riittää, että suoritat valmiiksi annetun komennon ja teet yhden muutoksen `01_hello_world.sh`-tiedostoon. Varmista, että saat sen suoritettua onnistuneesti ennen kuin siirryt eteenpäin.

1. **Echo**

    Voit tulostaa tekstiä komentorivillä `echo`-komennolla. Kokeile kirjoittaa komentoriville `echo 'Hello world!'`.
    
    Avaa sen jälkeen tekstieditorilla oheinen [`01_hello_world.sh`-tiedosto](./01_hello_world.sh) ja seuraa siinä esitettyjä ohjeita. Kun olet valmis, tallenna tiedosto ja kokeile sen suorittamista komentoriviltä `./01_hello_world.sh`. Kun tiedoston suorittaminen tulostaa ruudulle tekstin `Hello world!`, voit siirtyä eteenpäin seuraavaan tehtävään.


### Hakemistot

Seuraavilla osioilla perehdytään hakemistoihin ja tiedostoihin liittyviin peruskäskyihin Linuxissa.

2. **Nykyinen polku**

    Kirjoita komento, joka tulostaa nykyisen hakemiston polun, esim. `/home/me/linux-commands-me` tai `/app`.

    Lisää käyttämäsi komento `02_print_working_directory.sh`-tiedostoon. Varmista, että komento toimii yhä suoritettaessa tiedostoa komentoriviltä: `./02_print_working_directory.sh`.

3. **Nykyisen hakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** nykyisen hakemiston sisältämät tiedostot ja alihakemistot ns. "pitkässä muodossa". Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat esim. seuraavassa muodossa:

    ```
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 .
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 ..
    -rwxr-xr-x  1 me me   19 Jan 10 08:14 01_hello_world.sh
    -rwxr-xr-x  1 me me    4 Jan 10 08:14 02_print_working_directory.sh
    ...
    ```

    Lisää käyttämäsi komento `03_list_directory.sh`-tiedostoon ja varmista sen toimivuus suorittamalla se.

4. **Logihakemiston listaus**

    Tämän repositorion sisällä on hakemisto nimeltä [**"log"**](./log/). Kirjoita komento, joka listaa kaikki kyseisen alihakemiston sisältämät tiedostot ja hakemistot pitkässä muodossa. Muotoilun tulee olla sama kuin edellisessä kohdassa.

    Lisää käyttämäsi komento `04_list_log_directory.sh`-tiedostoon.

5. **Ylähakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** nykyisen hakemiston ylähakemiston (parent directory) sisältämät tiedostot ja alihakemistot pitkässä muodossa. Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat kuten edellisissä kohdissa.

    Lisää käyttämäsi komento `05_list_parent_directory.sh`-tiedostoon.

6. **Kotihakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** käyttäjän kotihakemiston sisältämät tiedostot ja alihakemistot pitkässä muodossa. Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat kuten edellisissä kohdissa.

    Lisää käyttämäsi komento `06_list_home_directory.sh`-tiedostoon.

### Tiedostojen ja muuttujien tulostaminen

Seuraavat kohdat perehdyttävät tiedostojen ja ympäristömuuttujien tulostamiseen komentorivillä.

7. **Tiedoston sisältö**

    Kirjoita komento, joka tulostaa ruudulle [log/auth.log](log/auth.log)-tiedoston sisällön.

    Lisää käyttämäsi komento `07_cat_auth_log.sh`-tiedostoon.


8. **Monen tiedoston sisältö**

    Kirjoita komento, joka tulostaa ruudulle samalla kertaa sekä [log/auth.log](log/auth.log)-tiedoston että [log/access.log](log/access.log)-tiedoston sisällöt.

    Lisää käyttämäsi komento `08_cat_two_files.sh`-tiedostoon.


9. **Ympäristömuuttuja**

    Kirjoita komento, joka tulostaa ruudulle [`PATH`-nimisen ympäristömuuttujan arvon](https://en.wikipedia.org/wiki/PATH_(variable)). Muuttuja sisältää tyypillisesti pitkän merkkijonon kaksoispisteellä erotelluista hakemistoista, kuten `/bin:/usr/bin:/usr/local/bin`.

    Lisää käyttämäsi komento `09_echo_path.sh`-tiedostoon.


### Tiedoston ja hakemiston luominen

Uusien tiedostojen ja hakemistojen luominen onnistuu komentoriviltä useilla eri komennoilla. Seuraavissa kohdissa perehdytään näihin peruskäskyihin.

10. **Luo hakemisto**

    Kirjoita komento, joka luo uuden hakemiston nimeltä `documents`. Luodun hakemiston tulee näkyä nykyisen hakemiston listauksessa.

    Lisää käyttämäsi komento `10_create_directory.sh`-tiedostoon. Kokeile suorittaa komento ja tarkista, että se luo hakemiston. Hakemiston luonti epäonnistuu, jos samanniminen hakemisto on jo olemassa, joten voit tarvittaessa poistaa aiemmin luodun tyhjän hakemiston.

    💡 Git ei oletuksena pidä kirjaa tyhjistä hakemistoista. Luotu hakemisto näkyy esimerkiksi `ls`-komennolla, mutta se ei näy `git status`-komennolla. Jos haluat hakemiston versionhallintaan, siihen tulee luoda esimerkiksi tyhjä tiedosto (seuraava tehtävä).


11. **Luo tiedosto**

    Git ei oletuksena pidä kirjaa tyhjistä hakemistoista. Jotta `documents`-hakemisto saadaan lisättyä versionhallintaan, siihen tulee luoda tiedosto.

    Kirjoita komento, joka lisää äsken luomaasi `documents`-hakemistoon tyhjän tiedoston nimeltä `.gitkeep`. Lue tarvittaessa lisätietoja keskustelusta ["What are the differences between .gitignore and .gitkeep?"](https://stackoverflow.com/a/7229996)

    Lisää tiedoston luomiseksi käyttämäsi komento `11_create_gitkeep.sh`-tiedostoon. Älä luo tässä tehtävässä hakemistoa uudelleen, vaan hyödynnä edellisen skriptin valmiiksi luomaa hakemistoa.

    💡 Nyt kun `documents` ei ole enää tyhjä, lisää myös se versionhallintaan.


### Tiedostoon kirjoittaminen

Tiedostoon kirjoittaminen onnistuu komentoriviltä useilla eri komennoilla. Seuraavissa kohdissa perehdytään näihin peruskäskyihin.

12. **Tiedostoon lisääminen**

    Gitissä on käytössä erityinen [.gitignore-tiedosto](https://git-scm.com/docs/gitignore), johon voidaan lisätä lista sellaisista tiedostoista ja hakemistoista, joita ei haluta mukaan versionhallintaan. Tyypillisiä esimerkkejä ovat käännetyt ohjelmatiedostot ja riippuvuushakemistot, kuten `node_modules`, tai ympäristökontaisia asetuksia sisältävät tiedostot, kuten `.env`.

    Kirjoita komento, joka lisää rivin `node_modules` nykyisen `.gitignore`-tiedoston loppuun. Huomaa, että **komentosi ei saa korvata tiedoston nykyistä sisältöä**, vaan sen tulee lisätä uusi rivi nykyisten perään. Mikäli vahingossa muutat tiedoston alkuperäistä sisältöä, voit palauttaa sen takaisin `git restore` -komennolla: `git restore .gitignore`.

    Lisää käyttämäsi komento `12_ignore_node_modules.sh`-tiedostoon.

    💡 Commitoi myös muutettu `.gitignore`-tiedosto.

13. **Tiedoston poistaminen**

    Kirjoita komento, joka poistaa tiedoston `log/error.log`. Jos haluat testata tiedoston poistamista monta kertaa, voit palauttaa tiedoston takaisin Gitin historiasta `git restore` -komennolla: `git restore log/error.log`.

    Lisää käyttämäsi komento `13_remove_file.sh`-tiedostoon.

    💡 Tiedoston poistaminen paikallisesti ei poista sitä automaattisesti versionhallinnasta. Jos haluat, voit poistaa tiedoston myös versionhallinnasta [`git rm`-komennolla](https://git-scm.com/docs/git-rm).


### Ohjaus ja putkittaminen

Eri komentojen tekemiä tulosteita ohjataan usein tiedostoihin tai toisten komentojen syötteiksi. Seuraavissa kohdissa perehdytään näihin peruskäskyihin.

14. **Tiedostoon ohjaus**

    Kirjoita komento, joka tulostaa kerralla kaikkien `log`-alihakemistossa olevien `.log`-päätteisten tiedostojen sisällöt, ja ohjaa ne uuteen tiedostoon `log/all.txt`.

    Lisää käyttämäsi komento `14_cat_to_file.sh`-tiedostoon.

    💡 `all.txt` on mainittuna .gitignore-tiedostossa, joten se ei näy `git status` -komennolla eikä päädy versionhallintaan.

15. **Putkittaminen (piping)**

    Putkittamisen avulla (piping) voit välittää ensimmäisen ohjelman tulosteen toisen ohjelman syötteeksi. Kirjoita yhdistelmä komentoja, jotka näyttävät **20 ensimmäistä riviä** head-komennon ohjeesta. Koko ohjeen saat näkyviin komennolla `man head`, ja tuota ohjetta lukemalla saat selville, miten tiedoston alusta voidaan näyttää vain osa. 
    
    Suorita siis ensin komento, joka tulostaa ohjeen. Putkita saamasi tuloste `head`-komennolle siten, että tulosteesta näytetään vain 20 ensimmäistä riviä.

    Lisää käyttämäsi komento `15_head.sh`-tiedostoon.

    💡 Mikäli törmäät virheeseen "This system has been minimized...", asenna ensin `man`-työkalu seuraavilla komennoilla: `unminimize` ja `apt install man-db`.


### CURL ja base64

Pakettien asentaminen, HTTP-pyyntöjen tekeminen ja base64-koodauksen purku ovat hyödyllisiä taitoja komentorivillä työskennellessä. Seuraavissa kohdissa perehdytään näihin peruskäskyihin.

16. **Paketin asentaminen**

    Asenna itsellesi [`curl`-työkalu](https://en.wikipedia.org/wiki/CURL), jonka avulla voit tehdä esimerkiksi HTTP-pyyntöjä kätevästi komentoriviltä. Suosittelemme käyttämään asennuksessa käyttöjärjestelmäsi pakettienhallintatyökalua, kuten [`apt` (Advanced Packaging Tool)](https://ubuntu.com/server/docs/package-management). 

    Lisää käyttämäsi asennuskomento `16_install.sh`-tiedostoon. Jos käyttöjärjestelmässäsi on curl-työkalu jo asennettuna, kirjoita tiedostoon komento, jolla voit tarkastaa sen version, esim. `curl --version`.

    💡 Jos törmäät ongelmaan "E: Unable to locate package curl", löydät selityksen ongelmasta sekä ohjeet sen korjaamiseksi [tästä StackOverflow-keskustelusta](https://stackoverflow.com/a/27273543).

17. **Curl**

    Hyödynnä juuri asentamaasi `curl`-komentoa, ja tee HTTP-pyyntö, jolla haet JSON-muotoisen listauksen esimerkkipostauksista osoitteesta https://jsonplaceholder.typicode.com/posts. ["JSONPlaceholder is a simple fake REST API for testing and prototyping."](https://github.com/typicode/jsonplaceholder)

    Lisää käyttämäsi komento `17_curl.sh`-tiedostoon. Komennon `./17_curl.sh` tulee tulostaa JSON-rakenne ruudulle, eikä esimerkiksi tallentaa sitä tiedostoon.

18. **Base 64**

    Tiedostossa [secret.txt](./secret.txt) on salainen tarina, joka on tallennettu [base64-muodossa](https://en.wikipedia.org/wiki/Base64). Tutustu [`base64`-komentoon](https://www.google.com/search?q=base64+decode+file+in+linux) ja dekoodaa tiedoston sisältö luettavaan muotoon.

    Lisää käyttämäsi komento `18_base64.sh`-tiedostoon. Komennon `./18_base64.sh` tulee tulostaa selkokielinen teksti ruudulle, eikä esimerkiksi tallentaa sitä tiedostoon.


### Prosessit

Seuraavissa kohdissa tutustutaan prosessien hallintaan Linuxissa. Prosessi on käynnissä oleva ohjelma, ja Linuxissa on useita työkaluja prosessien tarkasteluun ja hallintaan. Seuraavat kohdat perustuvat ["Viewing and Monitoring Processes in Linux" (Uubuntu.com)](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) -tutoriaaliin, johon perehtyminen on välttämätöntä tehtävän suorittamiseksi.

Koska omalla koneellasi on eri prosessit käynnissä kuin tutoriaalissa ja arviointikoneessa, riittää, että perehdyt tutoriaalin esimerkkeihin ja tallennat komennot skripteihin. Voit kokeilla komentoja omassa ympäristössäsi, mutta niiden ei tarvitse tuottaa samoja tuloksia kuin tutoriaalissa.

19. **Prosessien listaaminen**

    Perehdy [Ubuntun tutoriaaliin](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) prosessien tietojen listaamisen osalta. Seuraa tutoriaalin esimerkkejä ja kokeile mahdollisuuksien mukaan soveltaa niitä omassa ympäristössäsi.

    Lisää tutoriaalissa esitetty komento `sshd`-prosessin tietojen katsomiseksi `19_processes.sh`-tiedostoon. Omalla koneellasi vastaavaa prosessia ei todennäköisesti ole käynnissä, joten riittää, että perehdyt komentoon tutoriaalin perusteella.

20. **Prosessin lopettaminen**

    Jatka [samaan tutoriaaliin](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) perehtymistä prosessien lopettamisen osalta. Seuraa ohjeita ja kokeile harkintasi mukaan soveltaa niitä omassa ympäristössäsi.

    Lisää tutoriaalissa esitetty komento prosessin `3003` lopettamiseksi `20_end_process.sh`-tiedostoon. Huomaa, että sinun ei tarvitse todellisuudessa lopettaa prosessia omalla koneellasi, vaan riittää, että tallennat komennon tiedostoon. Halutessasi voit tallentaa rivin kommenttina (`#`), jotta et vahingossa lopeta prosessia.


## Tehtävän lähettäminen

Kun olet suorittanut tehtävän kokonaan tai osittain, varmista, että olet lisännyt kaikki tarvittavat muutokset versionhallintaan `git status`- ja `git add`-komennoilla. Tee tämän jälkeen commit ja push. Tarkasta GitHub -repositoriosi Actions-välilehdeltä, että ratkaisemasi tehtävät on arvioitu onnistuneesti. Mikäli jokin kohta ei ole onnistunut, voit korjata sen ja lähettää korjauksen uudelleen. Muista myös kysyä apua ja vinkkejä kurssin keskustelukanavilta, jos jokin on epäselvää tai kohtaat ongelmia.


## Lisenssit ja tekijänoikeudet

Tiedosto `log/auth.log` on lainattu Digital Oceanin artikkelista ["How To Monitor System Authentication Logs on Ubuntu"](https://www.digitalocean.com/community/tutorials/how-to-monitor-system-authentication-logs-on-ubuntu) ja se on lisensoitu [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä. Muut lokitiedostot, Docker compose -tiedosto sekä [salainen viesti](./secret.txt) on luotu [ChatGPT:n](https://chatgpt.com/) avustuksella.

Tämän tehtävän on luonut Teemu Havulinna ja se on lisensoitu [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä.
