import React from 'react'
import { Col, Row, Form, InputGroup, FormControl } from 'react-bootstrap'
import { ENERGY_PARAM_NAMES, HOTEL_PARAM_NAMES } from '../utils/loads'

export const parametersInputData = {
    [ENERGY_PARAM_NAMES.electricity]: {
        label: 'Energy Cost',
        defaultValue: 0.66,
        step: 0.01,
        unit: 'kn/kWh',
    },
    [ENERGY_PARAM_NAMES.tvWattage]: {
        label: 'TV Wattage',
        defaultValue: 300,
        step: 10,
        unit: 'W',
    },
    [ENERGY_PARAM_NAMES.acWattage]: {
        label: 'AC Wattage',
        defaultValue: 3000,
        step: 100,
        unit: 'W',
    },
    [ENERGY_PARAM_NAMES.lightWattage]: {
        label: 'Light Wattage',
        defaultValue: 8,
        step: 1,
        unit: 'W',
    },
    [HOTEL_PARAM_NAMES.roomCount]: {
        label: 'Room Count',
        defaultValue: 1,
        step: 1,
    },
    [HOTEL_PARAM_NAMES.durationPerirod]: {
        label: 'Duration Period',
        defaultValue: 12,
        step: 1,
        unit: 'months',
    },
}

const ParameterInput = ({ id, parameters, setParameters }) => {
    const onChangeHandler = (e) => {
        e.preventDefault()
        const value = e.currentTarget.value
        setParameters((p) => ({ ...p, [id]: value }))
    }

    return (
        <Row>
            <Form.Label column="sm" xs={6}>
                {parametersInputData[id].label}
            </Form.Label>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <FormControl
                        id={id}
                        size="sm"
                        type="number"
                        step={parametersInputData[id].step}
                        placeholder={parametersInputData[id].placeholder}
                        onChange={onChangeHandler}
                        value={parameters[id]}
                    />
                    {parametersInputData[id].unit && (
                        <InputGroup.Text id={'inputGroup' + id}>
                            {parametersInputData[id].unit}
                        </InputGroup.Text>
                    )}
                </InputGroup>
            </Col>
        </Row>
    )
}

export default ParameterInput
