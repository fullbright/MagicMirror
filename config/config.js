/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "192.168.1.0/24", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.0/24"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'France Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://www.mozilla.org/media/caldata/FrenchHolidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'New York',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: 'YOUR_OPENWEATHER_API_KEY'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'New York',
				locationID: '5128581',  //ID from http://www.openweathermap.org
				appid: 'YOUR_OPENWEATHER_API_KEY'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "http://www.lemonde.fr/rss/une.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
        {
            module: 'aiclient',
            position: 'middle_center' // This can be any of the regions.
        },
        {
            module: 'aiclientdebugger',
            position: 'bottom_right'
        },
        {
            module: 'MMM-Paris-RATP-PG',
            position: 'bottom_right',
            header: 'Connections',
            config: {
                name: "default value", //information
                maximumEntries: 2, //if the APIs sends several results for the incoming transport how many should be displayed
                updateInterval: 60000, //time in ms between pulling request for new times (update request)
                converToWaitingTime: true, // messages received from API can be 'hh:mm' in that case convert it in the waiting time 'x mn'
                maxLeterrsForDestination: 22, //will limit the length of the destination string
                concatenateArrivals: true, //if for a transport there is the same destination and several times, they will be displayed on one line
                showSecondsToNextUpdate: true, // display a countdown to the next update pull (should I wait for a refresh before going ?)
                showLastUpdateTime: false, //display the time when the last pulled occured (taste & color...)
                oldUpdateOpacity: 0.5, //when a displayed time age has reached a threshold their display turns darker (i.e. less reliable)
                oldThreshold: 0.1, //if (1+x) of the updateInterval has passed since the last refresh... then the oldUpdateOpacity is applied
                debug: false, //console.log more things to help debugging
                busStations: [ // the list of stations/directions to monitor (bus and RERs, probably works also for Subways)
 
                    {
                        type: 'bus', //'bus', 'rers'
                        line: 117, //28, 'B'
                        stations: 1358,
                        destination: 99,
                        'label': '117 Billotte',
                    },
                    {
                        type: 'bus',
                        line: 393,
                        stations: 8649,
                        destination: 73,
                    }
                ]
            }
        },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
