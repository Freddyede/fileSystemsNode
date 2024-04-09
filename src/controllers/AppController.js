const FileSystems = require('../services/FileSystems');

const index = (_req, res) => {
    try {
        const fileSystemService = new FileSystems('./src');
        fileSystemService.readFilesInDirectory();
    } catch (error) {
        console.log(error);
    }
    return res.send('Hello World!');
};

module.exports = { index };