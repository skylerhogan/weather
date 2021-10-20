const currentDayForecast = data => [
    {
        name: 'predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed/1.609),
        unit: 'mph',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round((data.max_temp * 1.8)+32),
        unit: '°F',
    },
    {
        name: 'min temp',
        value: Math.round((data.min_temp * 1.8)+32),
        unit: '°F',
    },
];

export default currentDayForecast;
