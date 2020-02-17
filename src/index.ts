#!/usr/bin/env node
const message:string = 'Hello';
const person:string = 'Ozzy';

function greeting(person: string, message: string) {
  console.log(`${message} ${person}!`);
}

greeting(person, message);
