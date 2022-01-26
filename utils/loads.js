export const LOAD_NAMES = {
    TV: 'TV',
    AC: 'AC',
    Light: 'Light',
}

export const ENERGY_PARAM_NAMES = {
    electricity: 'Electricity',
    tvWattage: 'TV Wattage',
    acWattage: 'AC Wattage',
    lightWattage: 'light Wattage',
}

export const HOTEL_PARAM_NAMES = {
    roomCount: 'Room Count',
    durationPerirod: 'Duration Period',
}

export const LOADS = [LOAD_NAMES.TV, LOAD_NAMES.AC, LOAD_NAMES.Light]

export const LOAD_WATTAGE = {
    [LOAD_NAMES.TV]: { value: 30, displayValue: '30 W' },
    [LOAD_NAMES.AC]: { value: 30, displayValue: '30 W' },
    [LOAD_NAMES.LIGHT]: { value: 30, displayValue: '30 W' },
}
