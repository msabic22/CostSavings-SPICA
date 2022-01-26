import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/SavingsOverview.module.css'
import { processedData } from '../utils/generateData'
import {
    ENERGY_PARAM_NAMES,
    HOTEL_PARAM_NAMES,
    LOADS,
    LOAD_NAMES,
} from '../utils/loads'
import { PERIOD_NAMES, UNIT_NAMES } from './SavingsMenu'

export const loadNameToParamName = (load) => {
    switch (load) {
        case LOAD_NAMES.TV:
            return ENERGY_PARAM_NAMES.tvWattage
        case LOAD_NAMES.AC:
            return ENERGY_PARAM_NAMES.acWattage
        case LOAD_NAMES.Light:
            return ENERGY_PARAM_NAMES.lightWattage
    }
}

const SavingsOverview = ({ parameters, unit, period }) => {
    const roomsMultiplier = parameters[HOTEL_PARAM_NAMES.roomCount]
    let periodMultiplier = 1
    switch (period) {
        case PERIOD_NAMES.Daily:
            periodMultiplier = 1 / 30
            break
        case PERIOD_NAMES.Weekly:
            periodMultiplier = 7 / 30
            break
        case PERIOD_NAMES.Monthly:
            periodMultiplier = 1
            break
        case PERIOD_NAMES.Yearly:
            periodMultiplier = 12
            break
        case PERIOD_NAMES.Period:
            periodMultiplier = parameters[HOTEL_PARAM_NAMES.durationPerirod]
            break
    }

    const loadSavings = {}

    LOADS.map((load) => {
        const hours = processedData[load].hours
        const wattage = parameters[loadNameToParamName(load)]
        const kilowattHours = (hours * wattage) / 1000
        const price = kilowattHours * parameters[ENERGY_PARAM_NAMES.electricity]
        const value =
            unit === UNIT_NAMES.hours
                ? hours
                : unit === UNIT_NAMES.hrk
                ? price
                : unit === UNIT_NAMES.kw
                ? kilowattHours
                : ''
        loadSavings[load] = value * periodMultiplier * roomsMultiplier
    })

    return (
        <Container className="py-4">
            {LOADS.map((load) => {
                return (
                    <Row key={load}>
                        <Col
                            xs={{ offset: 2, span: 4 }}
                            lg={{ offset: 2, span: 5 }}
                        >
                            <p>{load}</p>
                        </Col>
                        <Col>{loadSavings[load].toFixed(0) + ' ' + unit}</Col>
                    </Row>
                )
            })}
            <Row
                className={`${styles.totalSavings} ${
                    unit === UNIT_NAMES.hours ? 'invisible' : ''
                }`}
            >
                <Col xs={{ offset: 2, span: 4 }} lg={{ offset: 2, span: 5 }}>
                    <p>Total</p>
                </Col>
                <Col>
                    {Number(
                        Object.values(loadSavings).reduce((a, b) => a + b),
                    ).toFixed(0) +
                        ' ' +
                        unit}
                </Col>
            </Row>
        </Container>
    )
}

export default SavingsOverview
