
const chalk = require('chalk');
const valid = require('validator');
const yargs = require('yargs');
//const name =require('./util');
const fileOperations = require('./notes');

yargs.version('1.1.0');
console.log(yargs.argv);

//create add command 
yargs.command({
    command: 'add',
    describe: 'Add Operation',
    builder:{
        title:{
            describe:"add title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"add Body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        const note={
            title:argv.title,
            body:argv.body
        }
        fileOperations.addNote(note);
        //fileOperations.loadData();
    }
})

//create remove command
yargs.command({
    command: "remove",
    description: "Reomve Operation",
    builder:{
        removenote:{
            describe:"remove note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        fileOperations.deleteNote(argv.removenote);
     //   console.log('remove command');
    }
})

//create list command
yargs.command({
    command: "list",
    description: "list notes Operation",
    handler() {
        console.log('list command');
        fileOperations.listNotes();
    }
})

//create read command
yargs.command({
    command: "read",
    description: "read notes Operation",
    builder:{
        readN:{
            describe:"read note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        console.log('read command');
        fileOperations.readNote(argv.readN);
    }
})

yargs.parse();
//console.log(process.argv);
//const operation =process.argv[2];
//console.log(process.argv[2]);
// const operation =process.argv[2];
// if(operation == 'add'){
// fileOperations.addNote;
// }
// else if(operation == 'remove'){
// fileOperations.deleteNote;
// }
// else if(operation =='read'){
// const readData=fileOperations.readNote;
// console.log(chalk.green(readData));

// }
// else{
//     console.log(chalk.red.bgBlack('invalid operator'));
// }

//////////////////////////////////////////////////////
//const data = fileReading();

// const fs =require('fs');

// fs.appendFile('test.txt', "hi man try thishhhhh",()=>{
// console.log('done');
// });

// console.log(name.firstName);
// console.log(name.lastName);
// console.log(data);
// console.log(valid.isEmail('kkkkk@hh.com'));
// console.log(chalk.green.bgRed.bold('Sucesss'));