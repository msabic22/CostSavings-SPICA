import moment from 'moment'
import {
    addMinutes,
    calculateSavedTime,
    formatHoursOver24,
} from './dateTimeHelpers'
import { LOADS } from './loads'

let entryIndex = 0

const startDate = new Date(2022, 0, 1, 0, 0, 1)
const endDate = new Date(2022, 1, 0, 0, 0, 0)
let currentDate = startDate

const cardStart = false
let cardCurrent = cardStart

let data = []

const randBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
while (currentDate < endDate) {
    currentDate = addMinutes(currentDate, randBetween(3 * 60, 6 * 60))
    let newData = {
        index: (entryIndex += 1),
        card: cardCurrent,
        loads: {},
        date: {
            date: moment(currentDate),
            dateTimeDisplay: moment(currentDate).format('DD.MM.YYYY. HH:mm'),
            dateDisplay: moment(currentDate).format('DD.MM.YYYY.'),
            timeDisplay: moment(currentDate).format('HH:mm'),
        },
    }
    LOADS.map(
        (loadName) => (newData.loads[loadName] = Boolean(randBetween(0, 1))),
    )
    data.push(newData)
    cardCurrent = !cardCurrent
}

let processedData = {}

LOADS.map((loadName) => {
    const savedTime = calculateSavedTime(data, loadName)
    processedData[loadName] = {
        hours: savedTime,
        hoursDisplay: formatHoursOver24(savedTime),
    }
})
export { data, processedData }
