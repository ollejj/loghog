const { readFileSync, writeFileSync, existsSync } = require('fs');

let loghog = (options) => {

    this.options = {
        filePath: options?.path
    };

    this.event = '';
    this.currentFileData = '';

    return async (req, res, next) => {
        this.event = `${new Date().toLocaleString()} -> ${req.method}: ${req.originalUrl} \n`;

        if (this.options.filePath) {
            if (existsSync(this.options.filePath)) {
                this.currentFileData = readFileSync(this.options.filePath);
            }
            this.currentFileData += this.event;
            writeFileSync(this.options.filePath, this.currentFileData);
            console.log(`Event logged to ${this.options.filePath}`);
        } else {
            console.log(this.event);
        }

        next();
    }
}

module.exports = loghog;