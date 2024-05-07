# RedPers 📰
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Voorpagina en Detailpagina van artikel

## Inhoudsopgave 

* [Beschrijving](https://github.com/Jason2426/server-side-rendering-server-side-website/blob/main/README.md#beschrijving-)

* [Kenmerken](https://github.com/Jason2426/server-side-rendering-server-side-website/edit/main/README.md#kenmerken-gebruikte-technieken-)

* [Bronnen](https://github.com/Jason2426/server-side-rendering-server-side-website/blob/main/README.md#bronnen-)

## Beschrijving ❔
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

De website is gemaakt aan de hand van de bestaande huisstijl van Redpers met zelf toegevoegde twists en tweaks. Op de pagina voorpagina kun je de laatst gepubliceerde artikelen zien en als je er op klikt lezen op mobiel, tablet of laptop.

In deze sprint lag de focus op het het verbeteren van de performance door het toepassen van verschillende aangeboden principes. 

### [Live Link 🔗](https://weak-lime-hatchling-cape.cyclic.app/)

> Preview Voorpagina
<img width="1512" alt="Screenshot 2024-03-13 at 17 37 56" src="https://github.com/Jason2426/the-web-is-for-everyone-interactive-functionality/assets/143999883/c91285a0-3cef-4eb8-b90d-107f1c32deaa">

***

## Kenmerken en gebruikte technieken 
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
* 💻 HTML, CSS, Node, Javascript, EJS en Express.
* Progessive Enhancement, Mobile first en Feature Detection '@Supports rule' met 'fallback styles' voor toegankelijkheid verschillende browsers
* Toegankelijk voor meerdere apparaten
* DRY, gebruik van custom properties en URL variables
* View transitions 


**Wat is progressive enhancement**

Progressive Enhancement is een manier voor het bouwen en ontwerpen van een website of functie op een website. Deze methode houd in dat je je website of functie eerst toegankelijk maakt voor oudere browsers of voor browsers die bepaalde elementen niet ondersteunen. Vervolgens kun je geavanceerdere functies toevoegen voor de andere / betere browsers. Dit zorgt ervoor dat je de website toegankelijk maakt voor een groter aantal gebruikers. 

**Hoe ik PE heb toegepast**

Mobile first is een goed voorbeeld van PE, ik heb de website eerst ontworpen en gemaakt voor mobiel en daarna de rest van devices waaronder tablet en desktop. Tijdens het schrijven van de HTML en CSS heb ik ook de @Supports rule en fallback styles toegepast. Dit zorgt voor een betere gebruikerservaring, omdat oudere browsers nog steeds een bruikbare versie van de website zullen zien. Hiermee laat ik zien dat ik rekening houd met alle gebruikers die verschillende devices en browsers gebruiken. Daarnaast resulteert het werken van mobile first ook in efficientere code en snellere laadtijden wat uiteindelijk goed is voor gebruikers op alle devices.

Daarnaast heb ik ook PE toegepast voor het ontwerpen en bouwen van de Link kopieer knop, eerst heb ik de core HTML en Javascript geschreven daarna pas verschillende lagen met CSS enhancements toegevoegd die worden gesupport in wat nieuwere browsers. 

***

## Bronnen 📚

* [RedPers API](https://redpers.nl/wp-json/wp/v2/posts)
  > API met alle posts van Redpers 
* [JSON Pathfinder](https://jsonpathfinder.com/)
  > JSON Pathfinder maakt specifieke data zoeken in API makkelijker
* [Wordpress JSON](https://developer.wordpress.org/rest-api/)
  > WP JSON alle info voor het werken met een wordpress API
* [Alle bronnen die ik heb gebruikt voor deze sprint 10](https://github.com/Jason2426/user-experience-enhanced-website/wiki/Bronnen-%F0%9F%94%97)
 > MDN documentatie en meer

***

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
