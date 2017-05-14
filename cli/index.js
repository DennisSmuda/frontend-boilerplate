#!/usr/bin/env node

const prog = require('caporal');
const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

// Templates (parameterized Boilerplate Code)
const pugTemplate = require('./templates/pug');
const viewTemplate = require('./templates/view');

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

    // Print Message
    log(chalk.yellow('----------------------------'));
    log(chalk.underline.green(`Generating ${objName}`))

    // Generate Barba View
    viewStr = viewTemplate.make(name, uName, objName);
    fs.writeFile(`src/js/views/${name}.js`, viewStr);
    log(chalk.yellow(` → src/js/views/${name}.js`))

    // Generate pug template
    pugStr = pugTemplate.make(name, uName, objName);
    fs.writeFile(`src/templates/${name}.pug`, pugStr);
    log(chalk.yellow(` → src/templates/${name}.pug`))

  });

prog.parse(process.argv);


// SO: http://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}