# What is cypress and features
Cypress ia a Javascript based testing tool that is executed within browsers.
  Snapshots - In each test, when we hover over the command, we can visually see the ste wise execution
  Automatic waiting time - Tests do not fail immediatley. It waits for a particulat amount of time when an element is not found.
     The timeout is 4 secinds by default but can be changed in the cypress config file
  Multiple browser testing - The tests can be run in Edge, Chrome, electron
  Debugging - Ability to use the dev tools when the tests execute

# Where it can and cannot be used
Used for testing the application as we build it

Not used for exploratory or performance testing or when we need to do cross browser testing
Not used when we need to test in multiple browser/tabs

# Installation and libraries
npm install cypress
Assertion libraries used - Mocha, Chai

# Cypress configuration file
Configuration options for the tests
update default timeout for e2e, component tests

# Fixtures
Test data for your spec file that you can use to validate various scenarios
Consume the fixture in your spec like cy.fixture('login') login is the name of my fixture here and use data within login to modify testing data

# Custom commands
Write your own commands in cypress to perform certain repetetive actions
Cypress.Commands.add('command name', options)
options can be call back and do what we want when this command is executed
How to execute this command ? - Simply cy.commandName()

