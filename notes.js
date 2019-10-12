const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    console.log(chalk.blue('Your Notes'));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green(note.title));
    });
}
//add to note.json
const addToNote = (noteMessgae) => {
    let notes = loadNotes();
    let dublicatedNotes = [];
    dublicatedNotes = notes.filter(function (note) {
        return note.title == noteMessgae.title;
    })
    if (dublicatedNotes.length > 0) {
        console.log('dublicated note');
    }
    else {
        notes.push(noteMessgae);
        saveNote(notes);
    }
}
//read note.json
const readNote = (sNote)=> {
    
    const notes=loadNotes();
    const readNote=notes.find((note)=>{
        return note.title == sNote;
    });
    if(note){
    console.log(chalk.green(JSON.stringify(readNote.title)));
    console.log((JSON.stringify(readNote.body)));
    }
    else{
        console.log('not found');
    }
    // const data = fs.readFileSync('note.txt');
    // return data;

}
//delete note
const deleteNote = (noteDeleted) => {
    const data = loadNotes();
    var dataPassed = data.filter((elem) => {
        console.log(elem);
        return elem.title != noteDeleted;
    })
    console.log(JSON.stringify(dataPassed));
    // console.log(chalk.green(noteDeleted));
    if (dataPassed.length < data.length) {
        saveNote(dataPassed);
        console.log('deleted');
    }
    else {
        console.log('not found');
    }
}
//save note
const saveNote = (noteObj) => {
    const notePushed = JSON.stringify(noteObj);
    fs.writeFileSync('note.json', notePushed);
}
//load notes
const loadNotes = () => {
    try {
        let data;
        const loadData = fs.readFileSync('note.json', { encoding: 'utf-8' });
        data = JSON.parse(loadData);
        return data;
    }
    catch (err) {
        return [];
    }
}

module.exports = {
    addNote: addToNote,
    deleteNote: deleteNote,
    listNotes:listNotes,
    readNote:readNote
};
