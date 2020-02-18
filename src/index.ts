#!/usr/bin/env node
import chalk from 'chalk';
import cp from 'child_process';
import createProject from './createProject';

(async () => {
  try {
    const projectName = process.argv[2];
  
    if (!projectName) {
      console.log(chalk.red('No project name was provided.'));
      return;
    }
  
    console.log(chalk.cyan(`Creating project in ${projectName}`));
    await createProject(projectName);
  
    console.log(chalk.cyan(`Installing packages...`));
    const packages = cp.spawn('npm', ['install'], { cwd: projectName, stdio: 'inherit' });
    
    packages.on('close', (code) => {
      if (code !== 0) {
        console.log(chalk.red(`Install process exited with code ${code}`));
      } else {
        console.log(chalk.green(`Project created in ${projectName}. Bye!`));
      }
    });
  } catch (e) {
    console.log(chalk.red(e));
    process.exit(1);
  }
})();
