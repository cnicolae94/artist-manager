# artist-manager
## Specifications

[Componente + punctaje]
- [x] Cel puțin 2 entități dintre care una părinte și una copil stocate într-o bază relațională, accesate printr-un ORM -10% 
- [x] Operații expuse asupra entităților printr-o interfață REST - 25%
- [x] Front-end SPA cu React.js (sau Angular 2.0) - 25%
- [ ] Integrare cu un serviciu extern - opțional

[Stil și calitatea codului] - 20%
- [x] Aplicație reală, coerentă din punct de vedere al logicii de business
- [x] Codul trebuie să fie bine organizat, numele variabilelor trebuie să fie sugestive (și trebuie să se utilizeze un standard de numire oricare ar fi el e.g. camel case), codul trebuie să fie indentat pentru a fi ușor citibil
- [x] Aplicațiile care nu funționeaza nu primesc punctaj. Se poate însă demonsta doar funcționarea back-end-ului sau a front-end-ului 
- [ ] Opțional: test coverage
- [x] Opțional: comments în cod 

[Punctaj din oficiu] - 10%

Nota student: video-ul de prezentare este sau va fi incarcat si el pe github - in cazul in care exista probleme, puteti sa il vedeti si pe youtube, aici: https://youtu.be/HG3-bd05IWc
Pentru orice intrebari, curiozitati va rog sa ma contactati pe email-ul universitar.


# Instructions and considerations

To start, you can browse the Album to see all the artists currently in the database.

On the Album page you can see the paintings for each artist, add a painting for them, update the data or delete an artist with just a click of a button.

You can add a new artist by going to the '/create' page and filling out the form.

You can search any painting or artist by name by using the '/search' page.

In this project, we've covered most, if not all of the CRUD operations.

The website has been created using npx create-react app, react-router-dom bootstrap-react library for front end, node.js, sequelize with a postgres backend by Claudia Nicolae (An 3 Suplimentar).
