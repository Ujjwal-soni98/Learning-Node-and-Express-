import chalk from 'chalk';
import validator from 'validator';
console.log(chalk.magenta.bold("Hi there, npm learner!!"));

const res = validator.isEmail("ujjwal@ujjwal.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));