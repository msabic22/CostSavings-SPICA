import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { data, processedData } from '../utils/generateData'
import { LOADS } from '../utils/loads'

const Data = () => {
    return (
        <div>
            <Container>
                <h1>Sample Data</h1>
                <h3 className="text-secondary">Single room, one month</h3>

                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Card</th>
                            {LOADS.map((load) => (
                                <th key={load}>{load}</th>
                            ))}
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            {LOADS.map((load) => (
                                <td key={load} className="text-danger">
                                    {processedData[load].hours.toFixed(1) +
                                        ' hours'}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr key={d.index}>
                                <td>{d.date.dateDisplay}</td>
                                <td>{d.date.timeDisplay}</td>
                                <td>{d.card ? 'Inserted' : 'Removed'}</td>
                                {LOADS.map((load) => (
                                    <td key={load}>
                                        {d.loads[load] ? 'On' : 'Off'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Data
