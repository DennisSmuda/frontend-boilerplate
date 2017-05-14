#!/usr/bin/env node

const prog = require('caporal');
const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

/**
 * CLI Command
 * - g <name>
 *  Generates pug template and view script
 */
prog
  .version('0.1.0')
  .command('g', 'generate view')
  .help('Generates pug template and BarbaView object')
  .argument('<name>', 'Name of new View')
  .action((args, options, logger) => {

    // Naming Variables
    const name = args.name;
    const uName = capitalizeFirstLetter(args.name);
    const objName = uName + 'View';

    log(chalk.yellow('----------------------------'));
    log(chalk.underline.green(`Generating ${objName}`))

    // Generate Barba View
    fs.writeFile(`src/js/views/${name}.js`, `// Imports
import { BaseView } from 'barba.js';
import $ from 'jquery';

/**
 * ${uName} Page BarbaView
 */
const ${objName} = BaseView.extend({
  namespace: '${name}',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
      console.log("Enter ${uName} View");
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

export default ${objName};
    `);

    log(chalk.yellow(` → src/js/views/${name}.js`))


    fs.writeFile(`src/templates/${name}.pug`, `
doctype html
html(lang="en")
  include base/head.pug
  // Body
  body
    include blocks/header.pug

    main#barba-wrapper.offset
      div.barba-container(data-namespace='${name}')
        h1 ${objName}

    include blocks/footer.pug
    `);

    log(chalk.yellow(` → src/templates/${name}.pug`))

  });

prog.parse(process.argv);


pugTemplate = `
doctype html
html(lang="en")
  include base/head.pug
  // Body
  body
    include blocks/header.pug

    main#barba-wrapper.offset
      div.barba-container(data-namespace='${name}')
        h1 ${objName}

    include blocks/footer.pug
`;

// SO: http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}