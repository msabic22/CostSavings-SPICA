import React, { useState } from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import SavingsOverview from './SavingsOverview'

export const PERIOD_NAMES = {
    Daily: 'Daily',
    Weekly: 'Weekly',
    Monthly: 'Monthly',
    Yearly: 'Yearly',
    Period: 'Period',
}
const timePeriodItems = [
    PERIOD_NAMES.Daily,
    PERIOD_NAMES.Weekly,
    PERIOD_NAMES.Monthly,
    PERIOD_NAMES.Yearly,
    PERIOD_NAMES.Period,
]
export const UNIT_NAMES = {
    hrk: 'HRK',
    kw: 'kWh',
    hours: 'hours',
}
const unitItems = [UNIT_NAMES.hrk, UNIT_NAMES.kw, UNIT_NAMES.hours]

const SavingsMenu = ({ parameters }) => {
    const [unit, setUnit] = useState(unitItems[2])
    return (
        <>
            <Tabs fill className="mb-3" defaultActiveKey={timePeriodItems[2]}>
                {timePeriodItems.map((t) => (
                    <Tab eventKey={t} title={t} key={t}>
                        <div>
                            <SavingsOverview
                                parameters={parameters}
                                period={t}
                                unit={unit}
                            />
                        </div>
                    </Tab>
                ))}
            </Tabs>
            <Container>
                <Row>
                    <Col sm={{ offset: 5 }}>
                        <Tabs
                            fill
                            variant="pills"
                            defaultActiveKey={unit}
                            onSelect={(e) => setUnit(e)}
                        >
                            {unitItems.map((t) => (
                                <Tab eventKey={t} title={t} key={t}></Tab>
                            ))}
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SavingsMenu
