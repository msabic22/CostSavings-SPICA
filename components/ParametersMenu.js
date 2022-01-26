import React from 'react'
import { Container } from 'react-bootstrap'
import { ENERGY_PARAM_NAMES, HOTEL_PARAM_NAMES } from '../utils/loads'
import ParameterInput from './ParameterInput'

const ParametersMenu = ({ parameters, setParameters }) => {
    return (
        <Container>
            <h3 className="text-secondary  my-3">Energy and consumption</h3>
            {Object.values(ENERGY_PARAM_NAMES).map((p) => (
                <ParameterInput
                    key={p}
                    id={p}
                    parameters={parameters}
                    setParameters={setParameters}
                ></ParameterInput>
            ))}
            <h3 className="text-secondary my-3">Hotel</h3>
            {Object.values(HOTEL_PARAM_NAMES).map((p) => (
                <ParameterInput
                    key={p}
                    id={p}
                    parameters={parameters}
                    setParameters={setParameters}
                ></ParameterInput>
            ))}
        </Container>
    )
}
export default ParametersMenu
