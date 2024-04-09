const Systems = require('./Systems');
class FileSystems extends Systems {
    constructor(directory) {
        super(directory);
    }
    readFilesInDirectory = () => {
        const directory = this.readDir();
        directory.then(dir =>
            dir.map((files) => {
                this.readFile(this.directory + '/' + files);
            })
        );
    };
}

module.exports = FileSystems;