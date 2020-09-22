const geoCode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const address = process.argv[2]

const chalk = require('chalk')

if (!address) {
  console.log(chalk.bgRed("Please provide an address!"))
} else {
  geoCode(address, (error, { location, latitude, longitude }) => {
    if (error) {
      return console.log(error);
    }

    forecast(location, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(
        "The latitude of " +
          location +
          " is " +
          chalk.yellow(latitude)
      );
      console.log(
        "The longitude is " +
          location +
          " is " +
          chalk.yellow(longitude)
      );
      console.log(forecastdata);
    });
  });
}

// console.log(process.argv)