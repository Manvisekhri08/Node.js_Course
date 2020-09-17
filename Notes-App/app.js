const validator = require('validator')

const chalk = require('chalk')

const yarg = require('yargs')

const file = require('./notes')


// const get = file()

// const command = process.argv[2];

// console.log(get)

// console.log(validator.isEmail('jhg12@gmail.com'))

// console.log(validator.isURL("https://google.com"));

// console.log(chalk.red.underline.inverse.bgYellow("Hello World"))

// console.log(chalk.green("Hello", chalk.red.italic.bgGray("World")))

// //console.log(process.argv)

 //Customise yarg version
 yarg.version('1.1.0')

//Create add command
yarg.command({
    command: 'add',
    describe: 'Add a note!',
    builder: {
        title: {
            describe: 'Note title',
        demandOption: true,
            type: 'string'
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
      }
},
    handler:  (argv) => {
      file.addNote(argv.title, argv.body)
    }
})

//Create remove command
yarg.command({
    command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note tile',
      demandOption: true,
      type: 'string'
      }
    },
    handler: (argv) => {
        file.removeNote(argv.title)
    }
})

//Create list command
yarg.command({
  command: "list",
  describe: "List a note!",
  // builder: {
  //   title: {
  //     describe: 'Note title',
  //     demandOption: true,
  //     type: 'string'
  //   },
  //   body: {
  //     describe: 'Note body',
  //     demandOption: true,
  //     type: 'string'
  //   }
  // },
  handler: () => {
    file.listNode();
  },
});

//Create read command
yarg.command({
  command: "read",
  describe: "Read a note!",
  builder: {
    title: {
      describe: "Note Title!",
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    file.readNote(argv.title);
  },
});
 
yarg.parse();