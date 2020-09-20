const geoCode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const address = process.argv[2]

const chalk = require('chalk')

if (!address) {
  console.log(chalk.bgRed("Please provide an address!"))
} else {
  geoCode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.location, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(
        "The latitude of " +
          data.location +
          " is " +
          chalk.yellow(data.latitude)
      );
      console.log(
        "The longitude is " +
          data.location +
          " is " +
          chalk.yellow(data.longitude)
      );
      console.log(forecastdata);
    });
  });
}

// console.log(process.argv)