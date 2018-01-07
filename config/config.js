/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8090,
	ipWhitelist: ["127.0.0.1", "192.168.1.0/24", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.0/24"],

	language: 'fr',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			//position: "top_bar"
			position: "top_left"
		},
		{
			module: 'clock',
			//position: 'top_left'
			//position: 'bottom_center',
			position: 'center',
            config: { 
                displayType: 'both',
                analogSize: '400px',
                analogFace: 'simple',
                secondsColor: '#C0C0C0',
                timezone: 'Europe/Paris',
                timeFormat: 24
            }
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
            position: 'lower_third',
            //position: 'bottom_center',
            config: {
                compliments: {
                    anytime: [ 
                        "Tu es justifié par le sacrifice de Jésus",
                        "Le Seigneur ne t'abandonnera JAMAIS !",
                        "Toutes les promesses de Dieu sont oui et AMEN en Jésus.",
                        "Il n'y a plus de condamnation pour toi."
                    ],
                    morning: [
                        "Mais moi, je crie vers toi, Seigneur, le matin, ma prière est déjà devant toi.",
                        "Quel bonheur d’annoncer dès le matin ton amour et ta fidélité pendant la nuit,"
                    ],
                    afternoon: [
                        "Jésus est le même hier, aujourd'hui et Eternellement",
                        "En tout temps, ta parole sera dans ma bouche."
                    ],
                    evening: [
                        "Compte les bienfaits de Dieu, pour cette journée.",
                        "Le soir ... le Seigneur Dieu se promène dans le jardin."
                    ]
                }
            },
		},
		{
			module: 'currentweather',
			position: 'top_right',
			//position: 'bottom_center',
			config: {
				location: 'Créteil',
				locationID: '3022530',  //ID from http://www.openweathermap.org
				appid: '6a9023c321ab9382b1182786c6ce7ec8'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Créteil',
				locationID: '3022530',  //ID from http://www.openweathermap.org
				appid: '6a9023c321ab9382b1182786c6ce7ec8'
			}
		},
        {
            module: 'MMM-DailyBibleVerse',
            position: 'bottom_bar',
            config: {
                version: 'LSG'
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
					},
                    {
                        title: "Evangeliques.info",
                        url: "http://www.evangeliques.info/rss.xml"
                    },
                    {
                        title: "Actualite Chretienne",
                        url: "https://actualitechretienne.wordpress.com/feed/"
                    },
                    {
                        title: "Top Famille",
                        url: "http://feeds.topchretien.com/TopFamille?x=1"
                    },
				],
				showSourceTitle: true,
				showPublishDate: true,
                showDescription: false,
                animationSpeed: 5000
			}
		},/*
		{
			module: 'MMM-Globe',
			position: 'center',
			config: {
				style: 'geoColor',
				imageSize: 600,
				ownImagePath: '',
				updateInterval: 10*60*1000
			}
		},*/
        {
            module: 'MMM-FreeBox-Monitor',
            position: 'top_left',   // This can be any of the regions. Best results in left or right regions.
            config: {
                mirrorName: "My Magic Mirror",
                ip: "http://192.168.1.254"
                // See 'Configuration options' for more information.
            }
        },
        {
            module: 'aiclient',
            position: 'bottom_center' // This can be any of the regions.
        },
        {
            module: 'aiclientdebugger',
            position: 'bottom_right'
        },
        {
            module: 'MMM-Paris-RATP-PG',
            position: 'top_left',
            //position: 'bottom_right',
            //position: 'bottom_center',
            header: 'Connections',
            config: {
                name: "default value", //information
                maximumEntries: 2, //if the APIs sends several results for the incoming transport how many should be displayed
                updateInterval: 60000, //time in ms between pulling request for new times (update request)
                converToWaitingTime: true, // messages received from API can be 'hh:mm' in that case convert it in the waiting time 'x mn'
                //maxLeterrsForDestination: 22, //will limit the length of the destination string
                concatenateArrivals: true, //if for a transport there is the same destination and several times, they will be displayed on one line
                showSecondsToNextUpdate: true, // display a countdown to the next update pull (should I wait for a refresh before going ?)
                showLastUpdateTime: false, //display the time when the last pulled occured (taste & color...)
                oldUpdateOpacity: 0.5, //when a displayed time age has reached a threshold their display turns darker (i.e. less reliable)
                oldThreshold: 0.1, //if (1+x) of the updateInterval has passed since the last refresh... then the oldUpdateOpacity is applied
                debug: false, //console.log more things to help debugging
                busStations: [ // the list of stations/directions to monitor (bus and RERs, probably works also for Subways)
 
                    {
                        'api': 'v3', 
                        'type': 'bus', //'bus', 'rers'
                        'line': 117, //[117, 'bus'], //28, 'B'
                        'stations': 'billotte+falkirk',
                        'destination': 'A', //99,
                        'label': '117 Billotte',
                    },
                    {
                        api: 'v3',
                        type: 'bus',
                        line: 393,
                        stations: 'faculte+des+sports', //8649,
                        destination: 'A', //73,
                    }
                ]
            }
        }/*,
        {
            module: 'MMM-Carousel',
            config : { 
                position: 'bottom_bar',
                mode: 'positional',
                bottom_center: {enabled: true, ignoreModules: [], overrideTransitionInterval: 10000 },
                top_center: {enabled: true, ignoreModules: [], overrideTransitionInterval: 10000 }
            }
        }*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
