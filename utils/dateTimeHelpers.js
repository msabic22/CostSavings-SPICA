import moment from 'moment'

export const addMinutes = (date, minutes) => {
    const newDate = new Date(date)
    newDate.setMinutes(newDate.getMinutes() + minutes)
    return newDate
}

export const diffInHours = (start, end) => {
    var duration = moment.duration(end.diff(start))
    var hours = duration.asHours()
    return hours
}

export const formatHoursOver24 = (hoursFloat) => {
    const hours = Math.floor(hoursFloat)
    const minutes = Math.round((hoursFloat - hours) * 60)
    return hours + ':' + minutes
}

export const calculateSavedTime = (data, loadName) => {
    let sum = 0
    data.map((d, i) => {
        if (data[i + 1] && !data.card && d.loads[loadName]) {
            sum = sum + diffInHours(d.date.date, data[i + 1].date.date)
        }
    })
    return sum
}
