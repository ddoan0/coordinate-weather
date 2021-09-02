# Weather Web App
This project aims to pull information from gov weather api and displays it based on user provided input. *The latitude and longitude coordinates must be within the United States. Lines of latitude above the equator are positive, and lines of longitude west of the prime meridian are negative*

### Software Requirements
1. NodeJS
2. Web browser

### To Install and Run
Run `npm install` to install the dependencies

Run `npm run start` to start the application. It will start up on localhost:3000

Run `npm run test` to run the provided unit tests

### Using the app
Enter in coordinates into the latitude and longitude input fields and then press submit to get
the weather data for those particular coordinates.

### Future Improvements
1. Improve ui
2. Consider using react query or another querying library to fetch
3. More unit tests - for heat advisory and fahrenheit celsius conversion logic
4. Include additional fetch for international coordinates
5. Create N/S E/W toggle for user experience instead of positive and negative