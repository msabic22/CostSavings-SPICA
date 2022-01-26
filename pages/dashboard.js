import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { parametersInputData } from '../components/ParameterInput'
import ParametersMenu from '../components/ParametersMenu'
import SavingsMenu from '../components/SavingsMenu'
import { ENERGY_PARAM_NAMES, HOTEL_PARAM_NAMES } from '../utils/loads'

const Dashboard = () => {
    const [parameters, setParameters] = useState({
        [ENERGY_PARAM_NAMES.electricity]:
            parametersInputData[ENERGY_PARAM_NAMES.electricity].defaultValue,

        [ENERGY_PARAM_NAMES.tvWattage]:
            parametersInputData[ENERGY_PARAM_NAMES.tvWattage].defaultValue,

        [ENERGY_PARAM_NAMES.acWattage]:
            parametersInputData[ENERGY_PARAM_NAMES.acWattage].defaultValue,

        [ENERGY_PARAM_NAMES.lightWattage]:
            parametersInputData[ENERGY_PARAM_NAMES.lightWattage].defaultValue,

        [HOTEL_PARAM_NAMES.roomCount]:
            parametersInputData[HOTEL_PARAM_NAMES.roomCount].defaultValue,

        [HOTEL_PARAM_NAMES.durationPerirod]:
            parametersInputData[HOTEL_PARAM_NAMES.durationPerirod].defaultValue,
    })

    return (
        <div>
            <Container>
                <h1>Dashboard</h1>
                <Row className="mt-5">
                    <Col lg={7} className="mb-4">
                        <div className="border rounded p-3 pb-5 h-100">
                            <h2>Savings</h2>
                            <div className="mt-4">
                                <SavingsMenu parameters={parameters} />
                            </div>
                        </div>
                    </Col>
                    <Col className="mb-4">
                        <div className="border rounded p-3 pb-5 h-100 bg-light">
                            <h2>Parameters</h2>
                            <div className="mt-4">
                                <ParametersMenu
                                    parameters={parameters}
                                    setParameters={setParameters}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
