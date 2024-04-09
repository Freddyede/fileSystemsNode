const fs = require("node:fs");
const { readdir } = require("fs").promises;

class System {
    directory = null;
    constructor(directory) {
        this.directory = !this.verifyIsDirectory(directory) ? directory : null;
    }
    verifyIsDirectory = path => new RegExp('/[.]/').test(path);

    readDir = () => readdir(this.directory);
    readFile = (path) => fs.readFile(path, {encoding: 'utf-8', flag: 'r'}, (err, data) => console.log(data));
}

module.exports = System;