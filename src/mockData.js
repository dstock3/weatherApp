//onecall
const mockData = `{
    "lat": 34.0901,
    "lon": -118.4065,
    "timezone": "America/Los_Angeles",
    "timezone_offset": -25200,
    "current": {
        "dt": 1633886725,
        "sunrise": 1633874096,
        "sunset": 1633915546,
        "temp": 70.84,
        "feels_like": 70.03,
        "pressure": 1018,
        "humidity": 51,
        "dew_point": 51.84,
        "uvi": 2.52,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3,
        "wind_deg": 28,
        "wind_gust": 5.01,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    "minutely": [
        {
            "dt": 1633886760,
            "precipitation": 0
        },
        {
            "dt": 1633886820,
            "precipitation": 0
        },
        {
            "dt": 1633886880,
            "precipitation": 0
        },
        {
            "dt": 1633886940,
            "precipitation": 0
        },
        {
            "dt": 1633887000,
            "precipitation": 0
        },
        {
            "dt": 1633887060,
            "precipitation": 0
        },
        {
            "dt": 1633887120,
            "precipitation": 0
        },
        {
            "dt": 1633887180,
            "precipitation": 0
        },
        {
            "dt": 1633887240,
            "precipitation": 0
        },
        {
            "dt": 1633887300,
            "precipitation": 0
        },
        {
            "dt": 1633887360,
            "precipitation": 0
        },
        {
            "dt": 1633887420,
            "precipitation": 0
        },
        {
            "dt": 1633887480,
            "precipitation": 0
        },
        {
            "dt": 1633887540,
            "precipitation": 0
        },
        {
            "dt": 1633887600,
            "precipitation": 0
        },
        {
            "dt": 1633887660,
            "precipitation": 0
        },
        {
            "dt": 1633887720,
            "precipitation": 0
        },
        {
            "dt": 1633887780,
            "precipitation": 0
        },
        {
            "dt": 1633887840,
            "precipitation": 0
        },
        {
            "dt": 1633887900,
            "precipitation": 0
        },
        {
            "dt": 1633887960,
            "precipitation": 0
        },
        {
            "dt": 1633888020,
            "precipitation": 0
        },
        {
            "dt": 1633888080,
            "precipitation": 0
        },
        {
            "dt": 1633888140,
            "precipitation": 0
        },
        {
            "dt": 1633888200,
            "precipitation": 0
        },
        {
            "dt": 1633888260,
            "precipitation": 0
        },
        {
            "dt": 1633888320,
            "precipitation": 0
        },
        {
            "dt": 1633888380,
            "precipitation": 0
        },
        {
            "dt": 1633888440,
            "precipitation": 0
        },
        {
            "dt": 1633888500,
            "precipitation": 0
        },
        {
            "dt": 1633888560,
            "precipitation": 0
        },
        {
            "dt": 1633888620,
            "precipitation": 0
        },
        {
            "dt": 1633888680,
            "precipitation": 0
        },
        {
            "dt": 1633888740,
            "precipitation": 0
        },
        {
            "dt": 1633888800,
            "precipitation": 0
        },
        {
            "dt": 1633888860,
            "precipitation": 0
        },
        {
            "dt": 1633888920,
            "precipitation": 0
        },
        {
            "dt": 1633888980,
            "precipitation": 0
        },
        {
            "dt": 1633889040,
            "precipitation": 0
        },
        {
            "dt": 1633889100,
            "precipitation": 0
        },
        {
            "dt": 1633889160,
            "precipitation": 0
        },
        {
            "dt": 1633889220,
            "precipitation": 0
        },
        {
            "dt": 1633889280,
            "precipitation": 0
        },
        {
            "dt": 1633889340,
            "precipitation": 0
        },
        {
            "dt": 1633889400,
            "precipitation": 0
        },
        {
            "dt": 1633889460,
            "precipitation": 0
        },
        {
            "dt": 1633889520,
            "precipitation": 0
        },
        {
            "dt": 1633889580,
            "precipitation": 0
        },
        {
            "dt": 1633889640,
            "precipitation": 0
        },
        {
            "dt": 1633889700,
            "precipitation": 0
        },
        {
            "dt": 1633889760,
            "precipitation": 0
        },
        {
            "dt": 1633889820,
            "precipitation": 0
        },
        {
            "dt": 1633889880,
            "precipitation": 0
        },
        {
            "dt": 1633889940,
            "precipitation": 0
        },
        {
            "dt": 1633890000,
            "precipitation": 0
        },
        {
            "dt": 1633890060,
            "precipitation": 0
        },
        {
            "dt": 1633890120,
            "precipitation": 0
        },
        {
            "dt": 1633890180,
            "precipitation": 0
        },
        {
            "dt": 1633890240,
            "precipitation": 0
        },
        {
            "dt": 1633890300,
            "precipitation": 0
        },
        {
            "dt": 1633890360,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1633885200,
            "temp": 70.84,
            "feels_like": 70.03,
            "pressure": 1018,
            "humidity": 51,
            "dew_point": 51.84,
            "uvi": 2.52,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.23,
            "wind_deg": 24,
            "wind_gust": 3.04,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633888800,
            "temp": 71.44,
            "feels_like": 70.45,
            "pressure": 1018,
            "humidity": 46,
            "dew_point": 49.6,
            "uvi": 4.3,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.43,
            "wind_deg": 180,
            "wind_gust": 2.19,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633892400,
            "temp": 72.82,
            "feels_like": 71.69,
            "pressure": 1017,
            "humidity": 40,
            "dew_point": 47.12,
            "uvi": 5.74,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 4.05,
            "wind_deg": 200,
            "wind_gust": 2.57,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633896000,
            "temp": 74.53,
            "feels_like": 73.29,
            "pressure": 1016,
            "humidity": 34,
            "dew_point": 44.35,
            "uvi": 6.21,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 6.11,
            "wind_deg": 209,
            "wind_gust": 3.98,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633899600,
            "temp": 76.05,
            "feels_like": 74.71,
            "pressure": 1015,
            "humidity": 29,
            "dew_point": 41.52,
            "uvi": 5.52,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 7.67,
            "wind_deg": 214,
            "wind_gust": 5.79,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633903200,
            "temp": 76.23,
            "feels_like": 74.82,
            "pressure": 1013,
            "humidity": 27,
            "dew_point": 36.28,
            "uvi": 3.96,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 8.25,
            "wind_deg": 221,
            "wind_gust": 7.05,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633906800,
            "temp": 75.33,
            "feels_like": 73.92,
            "pressure": 1012,
            "humidity": 29,
            "dew_point": 37.8,
            "uvi": 2.19,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 8.7,
            "wind_deg": 229,
            "wind_gust": 8.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633910400,
            "temp": 74.53,
            "feels_like": 73.09,
            "pressure": 1012,
            "humidity": 30,
            "dew_point": 38.39,
            "uvi": 0.81,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 8.63,
            "wind_deg": 237,
            "wind_gust": 9.51,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633914000,
            "temp": 72.55,
            "feels_like": 71.01,
            "pressure": 1012,
            "humidity": 32,
            "dew_point": 39.33,
            "uvi": 0.15,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 8.03,
            "wind_deg": 246,
            "wind_gust": 9.75,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633917600,
            "temp": 70.39,
            "feels_like": 68.77,
            "pressure": 1012,
            "humidity": 35,
            "dew_point": 40.03,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 6.98,
            "wind_deg": 259,
            "wind_gust": 9.17,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633921200,
            "temp": 69.62,
            "feels_like": 67.98,
            "pressure": 1012,
            "humidity": 36,
            "dew_point": 39.74,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.83,
            "wind_deg": 268,
            "wind_gust": 6.62,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633924800,
            "temp": 68.77,
            "feels_like": 67.08,
            "pressure": 1012,
            "humidity": 37,
            "dew_point": 39.92,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.2,
            "wind_deg": 252,
            "wind_gust": 4.5,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633928400,
            "temp": 67.8,
            "feels_like": 66.11,
            "pressure": 1012,
            "humidity": 39,
            "dew_point": 40.82,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.46,
            "wind_deg": 207,
            "wind_gust": 3.42,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633932000,
            "temp": 66.81,
            "feels_like": 65.21,
            "pressure": 1012,
            "humidity": 43,
            "dew_point": 42.12,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.39,
            "wind_deg": 182,
            "wind_gust": 3.42,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633935600,
            "temp": 65.93,
            "feels_like": 64.44,
            "pressure": 1012,
            "humidity": 47,
            "dew_point": 43.59,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.84,
            "wind_deg": 156,
            "wind_gust": 3.94,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633939200,
            "temp": 64.96,
            "feels_like": 63.59,
            "pressure": 1011,
            "humidity": 52,
            "dew_point": 45.48,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.58,
            "wind_deg": 151,
            "wind_gust": 4.74,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633942800,
            "temp": 64.17,
            "feels_like": 62.91,
            "pressure": 1011,
            "humidity": 56,
            "dew_point": 46.98,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.58,
            "wind_deg": 141,
            "wind_gust": 4.79,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633946400,
            "temp": 63.48,
            "feels_like": 62.31,
            "pressure": 1010,
            "humidity": 59,
            "dew_point": 47.95,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.89,
            "wind_deg": 127,
            "wind_gust": 5.46,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633950000,
            "temp": 63,
            "feels_like": 61.92,
            "pressure": 1010,
            "humidity": 62,
            "dew_point": 48.6,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 4.05,
            "wind_deg": 125,
            "wind_gust": 5.88,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633953600,
            "temp": 62.37,
            "feels_like": 61.36,
            "pressure": 1010,
            "humidity": 65,
            "dew_point": 49.39,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.05,
            "wind_deg": 122,
            "wind_gust": 6.13,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633957200,
            "temp": 61.88,
            "feels_like": 60.93,
            "pressure": 1009,
            "humidity": 67,
            "dew_point": 49.95,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.78,
            "wind_deg": 121,
            "wind_gust": 5.84,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633960800,
            "temp": 61.38,
            "feels_like": 60.46,
            "pressure": 1009,
            "humidity": 69,
            "dew_point": 50.4,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.51,
            "wind_deg": 118,
            "wind_gust": 5.97,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633964400,
            "temp": 62.4,
            "feels_like": 61.48,
            "pressure": 1009,
            "humidity": 67,
            "dew_point": 50.85,
            "uvi": 0.21,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 4.52,
            "wind_deg": 115,
            "wind_gust": 7.23,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633968000,
            "temp": 64.33,
            "feels_like": 63.37,
            "pressure": 1009,
            "humidity": 62,
            "dew_point": 50.38,
            "uvi": 0.9,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 6.2,
            "wind_deg": 124,
            "wind_gust": 7.94,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633971600,
            "temp": 65.98,
            "feels_like": 65.01,
            "pressure": 1008,
            "humidity": 58,
            "dew_point": 50.2,
            "uvi": 2.19,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 7.67,
            "wind_deg": 135,
            "wind_gust": 8.16,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633975200,
            "temp": 67.35,
            "feels_like": 66.42,
            "pressure": 1007,
            "humidity": 56,
            "dew_point": 50.38,
            "uvi": 3.73,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 7.31,
            "wind_deg": 148,
            "wind_gust": 6.89,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633978800,
            "temp": 68.77,
            "feels_like": 67.84,
            "pressure": 1007,
            "humidity": 53,
            "dew_point": 50.14,
            "uvi": 4.96,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 7.02,
            "wind_deg": 163,
            "wind_gust": 5.82,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633982400,
            "temp": 69.55,
            "feels_like": 68.59,
            "pressure": 1005,
            "humidity": 51,
            "dew_point": 49.73,
            "uvi": 5.36,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 7.11,
            "wind_deg": 197,
            "wind_gust": 7.23,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633986000,
            "temp": 69.78,
            "feels_like": 68.81,
            "pressure": 1004,
            "humidity": 50,
            "dew_point": 49.1,
            "uvi": 4.77,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 9.8,
            "wind_deg": 229,
            "wind_gust": 10.98,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633989600,
            "temp": 70.36,
            "feels_like": 69.12,
            "pressure": 1003,
            "humidity": 43,
            "dew_point": 45.05,
            "uvi": 3.43,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 10.29,
            "wind_deg": 253,
            "wind_gust": 12.91,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633993200,
            "temp": 70.29,
            "feels_like": 68.47,
            "pressure": 1003,
            "humidity": 31,
            "dew_point": 35.76,
            "uvi": 1.9,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 7.74,
            "wind_deg": 317,
            "wind_gust": 14.32,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1633996800,
            "temp": 71.01,
            "feels_like": 68.61,
            "pressure": 1003,
            "humidity": 17,
            "dew_point": 22.66,
            "uvi": 0.71,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 17.47,
            "wind_deg": 360,
            "wind_gust": 19.8,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634000400,
            "temp": 68.97,
            "feels_like": 66.24,
            "pressure": 1003,
            "humidity": 14,
            "dew_point": 16.65,
            "uvi": 0.13,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 18.66,
            "wind_deg": 6,
            "wind_gust": 23.91,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634004000,
            "temp": 66.36,
            "feels_like": 63.41,
            "pressure": 1005,
            "humidity": 15,
            "dew_point": 15.66,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 19.22,
            "wind_deg": 2,
            "wind_gust": 25.46,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634007600,
            "temp": 64.81,
            "feels_like": 61.79,
            "pressure": 1006,
            "humidity": 17,
            "dew_point": 17.17,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 19.64,
            "wind_deg": 3,
            "wind_gust": 27.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634011200,
            "temp": 64.2,
            "feels_like": 61.07,
            "pressure": 1007,
            "humidity": 16,
            "dew_point": 16.2,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 20.8,
            "wind_deg": 358,
            "wind_gust": 30.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634014800,
            "temp": 63.59,
            "feels_like": 60.4,
            "pressure": 1007,
            "humidity": 16,
            "dew_point": 15.71,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 19.33,
            "wind_deg": 356,
            "wind_gust": 28.05,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634018400,
            "temp": 62.73,
            "feels_like": 59.5,
            "pressure": 1007,
            "humidity": 17,
            "dew_point": 15.73,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 16.4,
            "wind_deg": 360,
            "wind_gust": 23.91,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634022000,
            "temp": 61.92,
            "feels_like": 58.66,
            "pressure": 1008,
            "humidity": 18,
            "dew_point": 15.89,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 12.91,
            "wind_deg": 354,
            "wind_gust": 19.64,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634025600,
            "temp": 61.34,
            "feels_like": 57.97,
            "pressure": 1008,
            "humidity": 17,
            "dew_point": 14.27,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 12.21,
            "wind_deg": 1,
            "wind_gust": 18.1,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634029200,
            "temp": 60.53,
            "feels_like": 57.04,
            "pressure": 1008,
            "humidity": 16,
            "dew_point": 13.69,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 14.54,
            "wind_deg": 6,
            "wind_gust": 21.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634032800,
            "temp": 58.98,
            "feels_like": 55.42,
            "pressure": 1008,
            "humidity": 18,
            "dew_point": 14.05,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 17.58,
            "wind_deg": 8,
            "wind_gust": 24.65,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634036400,
            "temp": 57.85,
            "feels_like": 54.18,
            "pressure": 1009,
            "humidity": 18,
            "dew_point": 14.23,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 17.34,
            "wind_deg": 9,
            "wind_gust": 24.56,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634040000,
            "temp": 57.09,
            "feels_like": 53.4,
            "pressure": 1010,
            "humidity": 19,
            "dew_point": 14,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 17.2,
            "wind_deg": 8,
            "wind_gust": 23.67,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634043600,
            "temp": 56.5,
            "feels_like": 52.74,
            "pressure": 1010,
            "humidity": 19,
            "dew_point": 14,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 15.99,
            "wind_deg": 5,
            "wind_gust": 22.12,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634047200,
            "temp": 56.07,
            "feels_like": 52.3,
            "pressure": 1011,
            "humidity": 20,
            "dew_point": 14.4,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 16.51,
            "wind_deg": 2,
            "wind_gust": 22.01,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634050800,
            "temp": 57.38,
            "feels_like": 53.71,
            "pressure": 1012,
            "humidity": 19,
            "dew_point": 14.54,
            "uvi": 0.21,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 15.97,
            "wind_deg": 356,
            "wind_gust": 22.39,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1634054400,
            "temp": 60.22,
            "feels_like": 56.75,
            "pressure": 1012,
            "humidity": 17,
            "dew_point": 13.46,
            "uvi": 0.95,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 17.05,
            "wind_deg": 356,
            "wind_gust": 21.5,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
        {
            "dt": 1633892400,
            "sunrise": 1633874096,
            "sunset": 1633915546,
            "moonrise": 1633891680,
            "moonset": 1633927620,
            "moon_phase": 0.16,
            "temp": {
                "day": 72.82,
                "min": 63.48,
                "max": 76.23,
                "night": 66.81,
                "eve": 72.55,
                "morn": 64.8
            },
            "feels_like": {
                "day": 71.69,
                "night": 65.21,
                "eve": 71.01,
                "morn": 63
            },
            "pressure": 1017,
            "humidity": 40,
            "dew_point": 47.12,
            "wind_speed": 8.7,
            "wind_deg": 229,
            "wind_gust": 9.75,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 6.21
        },
        {
            "dt": 1633978800,
            "sunrise": 1633960542,
            "sunset": 1634001869,
            "moonrise": 1633982160,
            "moonset": 1634017440,
            "moon_phase": 0.2,
            "temp": {
                "day": 68.77,
                "min": 61.38,
                "max": 71.01,
                "night": 62.73,
                "eve": 68.97,
                "morn": 61.88
            },
            "feels_like": {
                "day": 67.84,
                "night": 59.5,
                "eve": 66.24,
                "morn": 60.93
            },
            "pressure": 1007,
            "humidity": 53,
            "dew_point": 50.14,
            "wind_speed": 20.8,
            "wind_deg": 358,
            "wind_gust": 30.71,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 5.36
        },
        {
            "dt": 1634065200,
            "sunrise": 1634046989,
            "sunset": 1634088191,
            "moonrise": 1634072280,
            "moonset": 1634107620,
            "moon_phase": 0.25,
            "temp": {
                "day": 66.83,
                "min": 56.07,
                "max": 71.15,
                "night": 62.2,
                "eve": 67.64,
                "morn": 56.5
            },
            "feels_like": {
                "day": 63.82,
                "night": 59.07,
                "eve": 64.99,
                "morn": 52.74
            },
            "pressure": 1012,
            "humidity": 13,
            "dew_point": 12.15,
            "wind_speed": 17.58,
            "wind_deg": 8,
            "wind_gust": 24.65,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 5.85
        },
        {
            "dt": 1634151600,
            "sunrise": 1634133436,
            "sunset": 1634174515,
            "moonrise": 1634161800,
            "moonset": 0,
            "moon_phase": 0.27,
            "temp": {
                "day": 68.18,
                "min": 59.67,
                "max": 71.04,
                "night": 63.36,
                "eve": 69.22,
                "morn": 59.67
            },
            "feels_like": {
                "day": 65.41,
                "night": 60.75,
                "eve": 66.88,
                "morn": 56.23
            },
            "pressure": 1014,
            "humidity": 15,
            "dew_point": 17.4,
            "wind_speed": 7.9,
            "wind_deg": 230,
            "wind_gust": 7.09,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 5.63
        },
        {
            "dt": 1634238000,
            "sunrise": 1634219884,
            "sunset": 1634260839,
            "moonrise": 1634250900,
            "moonset": 1634197980,
            "moon_phase": 0.31,
            "temp": {
                "day": 71.56,
                "min": 61.07,
                "max": 76.19,
                "night": 67.57,
                "eve": 73.76,
                "morn": 61.07
            },
            "feels_like": {
                "day": 69.22,
                "night": 65.34,
                "eve": 71.87,
                "morn": 58.33
            },
            "pressure": 1014,
            "humidity": 17,
            "dew_point": 22.59,
            "wind_speed": 5.39,
            "wind_deg": 245,
            "wind_gust": 10.69,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 6
        },
        {
            "dt": 1634324400,
            "sunrise": 1634306332,
            "sunset": 1634347165,
            "moonrise": 1634339520,
            "moonset": 1634288340,
            "moon_phase": 0.34,
            "temp": {
                "day": 76.96,
                "min": 65.32,
                "max": 81.57,
                "night": 71.04,
                "eve": 78.46,
                "morn": 65.32
            },
            "feels_like": {
                "day": 75.02,
                "night": 68.79,
                "eve": 76.89,
                "morn": 62.49
            },
            "pressure": 1017,
            "humidity": 14,
            "dew_point": 22.3,
            "wind_speed": 5.84,
            "wind_deg": 4,
            "wind_gust": 9.84,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 6
        },
        {
            "dt": 1634410800,
            "sunrise": 1634392780,
            "sunset": 1634433491,
            "moonrise": 1634427840,
            "moonset": 1634378580,
            "moon_phase": 0.38,
            "temp": {
                "day": 79.02,
                "min": 67.75,
                "max": 81.19,
                "night": 70.38,
                "eve": 77.81,
                "morn": 67.75
            },
            "feels_like": {
                "day": 79.02,
                "night": 68.34,
                "eve": 76.23,
                "morn": 65.03
            },
            "pressure": 1016,
            "humidity": 11,
            "dew_point": 17.33,
            "wind_speed": 7.36,
            "wind_deg": 231,
            "wind_gust": 8.59,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 6
        },
        {
            "dt": 1634497200,
            "sunrise": 1634479229,
            "sunset": 1634519817,
            "moonrise": 1634516040,
            "moonset": 1634468700,
            "moon_phase": 0.41,
            "temp": {
                "day": 74.75,
                "min": 66.87,
                "max": 76.95,
                "night": 67.82,
                "eve": 74.68,
                "morn": 66.87
            },
            "feels_like": {
                "day": 72.95,
                "night": 66,
                "eve": 73.11,
                "morn": 64.62
            },
            "pressure": 1015,
            "humidity": 22,
            "dew_point": 31.44,
            "wind_speed": 7.2,
            "wind_deg": 226,
            "wind_gust": 7.56,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0,
            "uvi": 6
        }
    ]
}`

export { mockData }