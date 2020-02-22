const chalk = require('chalk')

const blueMsg = (header,msg) =>  {
    console.log(header, chalk.blue(msg));
}

const greenMsg = (header,msg) =>  {
    console.log(header, chalk.green(msg));
}

const redMsg = (header,msg) => {
    console.log(header, chalk.red(msg));
}

module.exports = {
    blueMsg,
    greenMsg,
    redMsg: redMsg
}