#!/usr/bin/env node
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
import inquirer from 'inquirer';

const createProject = async (message:string) => {
  const filePath = path.join(__dirname, `../templates/${message}`);
  const destinationPath = path.resolve(`./test`);
  
  await fs.mkdirpSync(destinationPath);
  await fs.copySync(filePath, `${destinationPath}/${message}`);
  console.log(chalk.cyan('DONE'));
};

(async () => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'file',
      message: 'this is a question',
      choices: [
        { name: 'PostgreSQL', value: 'postgresql-server' },
        { name: 'MongoDB', value: 'api' },
      ]
    }
  ]);
  
  await createProject(answer.file);
})();
