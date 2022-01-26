import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Container className="my-5 py-5">
                <h1 className="text-center">Savings Calculator - SPICA</h1>
                <Row className="mt-5">
                    <Col
                        xs={12}
                        sm={{ span: 10, offset: 1 }}
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 4, offset: 4 }}
                    >
                        <div className="d-grid gap-5">
                            <Button size="lg" href="/dashboard">
                                Dashboard
                            </Button>
                            <Button
                                size="lg"
                                variant="outline-primary"
                                href="/data"
                            >
                                Data
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
