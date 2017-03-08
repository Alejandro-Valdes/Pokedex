# POKEDEX



## Primary objective

*Create a responsive SPA featuring a Pokédex* that will help the Pokémon trainers to know the information about the Pokémon creatures found in the Kanto region.

## Secondary objectives 

The secondary objectives of this challenge are:

*Create a client side web application using Angular.js, one of the major JavaScript MV* frameworks.
*Apply the Test Driven Development process.
*Understand and follow the best practices used for large-scale JavaScript application development.
*Understand and query RESTful APIs from a client side
application.
*Understand and apply the base DevOps process required for web developers to complete their tasks and effectively communicate with DevOps resources.

## Workstation

* Node.js
* Git
* Yeoman, Bower and Gulp
* Karma, Jasmine and Protractor
* Sublime
* Google Chrome


## Requirements

Gather all the challenge requirements here.

- [ ] Use Angular.js as JavaScript Client MV*
- [x] Use Less preprocessor to create the CSS
- [x] Use Yeoman to create the application scaffold
- [x] Use Gulp as JavaScript task runner
- [x] Use Bower for dependency management
- [ ] Use Bootstrap 3.x.x as a UI Framework (WARNING: It’s not allow to use Angular Materials, Angular UI, Bootstrap UI or any other UI framework that has built-in directives)
- [x] Use Git and GitHub for version control
- [ ] Use Object-Oriented JavaScript (ECMAScript 5.1 standard. See ECMA-262)
- [ ] Create at least once the following components:
	- [x] Directives
	- [x] Controllers
	- [ ] Services
	- [x] Modules
	- [ ] Scope
	- [x] Filter
- [ ] Test code via Unit Testing
- [ ] All tests must pass (no failures)
- [ ] Have a 40% code coverage, at least.
- [ ] Test end-to-end functionality (user stories) with Protractor
	- [ ] All tests must pass (no failures)
- [ ] Use the Pokéapi v2 public API to obtain the information about the Pokémon: http://pokeapi.co
- [ ] The web application and data should be available offline
- [ ] Use Local Storage for:
	- [ ] Battle Box
	- [ ] Caught list

## Highlights

Coming soon.

## Installation

Compile the styles using sass:

    sass app/sass/main.scss app/styles/app.css

Next, create a local pokedex data with the command (it takes a while):

    node src/pokeapi.local.js

Run the application with node:

    node src/server.js
