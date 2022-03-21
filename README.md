Hlavní požadavky na aplikaci:

-Implementovat buď SPA +  backend API nebo server side rendering aplikaci
-Klient i server kód v JavaScriptu, HTML5 a CSS3. Pokud chcete pro server využít jiný jazyk, je to po domluvě možné.
-Dodržet základní bezpečnostní pravidla - ochrana proti XSS, SQL injection atd.
-Vhodným způsobem využít  JavaScript také pro klienta - kontrola formuláře, interakce s uživatelem apod.
-Validní HTML a CSS
-Persitentní uložení dat na serveru

Cílem je vytvořit jednoduchý TODO list / seznam úkolů.

Aplikace musí umožnit úkol přidat, upravit, označit jako hotový, smazat kompletně a samozřejmě zobrazit samotný seznam aktuálních / hotových úkolů (CRUD operace).

Seznam úkolů musí být k dispozici ve formátech HTML a JSON. K vyřešení tohoto problému vám dobře poslouží právě MVC architektura, případně REST API, což si vysvětlime a ukážeme na přednášce.

Základem je  implementovat kompletní CRUD operace pro úkol a dále jednoduché ověření uživatelského přistupu. Aplikaci nesmí být možné použít anonymně pro zápis, maximálně pro čtení.

Nemusíte ale dělat kompletní správu uživatelů, několik napevno zapsaných v databázi pro testování je dostatečné. Také můžete použít OpenId a podobné služby.

Požadovaná funkčnost:

-zobrazení úkolů
-filtr splněných / nesplněných úkolů 
-možnost zobrazení výstupu ve formátech HTML a JSON - přepínání formátu parametrem v URL nebo dle vaší volby (zdokumentovat)
-json výstup je určený pro další aplikace, musí tedy mít správný content-type a být validní dle JSON pravidel
-administrace úkolů - přidání, úprava, smazání, označit jako hotový
-přihlášení uživatele, zabezpečení administrace úkolů před anonymním přístupem
-Další funkce jsou vítané, záleží jen na vašich schopnostech. Můžete například přidat více uživatelů a pro každého vytvořit extra seznam. Nebo přidat možnost úkolovat 
jiné uživatele. 

Pro realizaci projektu byl použit MERN stack.

- MongoDB - document database
- Express(.js) - Node.js web framework
- React(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server

Aplikace používá přihlašovací systém, uživatelská data jsou uložena v mongoDB.
Pro první přihlášení se musíte zaregistrovat. Pro každého uživatele se zobrazí vlastní seznam úkolů.
Aplikace má funkce (CRUD) a filtry pro práci se seznamem úkolů.
Hotová aplikace zveřejněna na heroku.

Odkaz na aplikaci [ToDoApp](https://todo-mern-tumash.herokuapp.com/login).
