import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import regsteredUsers from '../public/registeredUsers.json'
import { PAGE_NAMES } from '../utils/pageNames'

const LOGIN_FIELD_NAMES = {
    Email: 'Email',
    Password: 'Password',
}

const LOGIN_FIELDS = [
    {
        id: LOGIN_FIELD_NAMES.Email,
        type: 'Email',
        label: 'Email address',
        placeholder: 'Enter email',
    },

    {
        id: LOGIN_FIELD_NAMES.Password,
        type: 'password',
        label: 'Password',
        placeholder: 'Enter password',
    },
]

const Auth = () => {
    const router = useRouter()
    const [values, setValues] = useState({
        [LOGIN_FIELD_NAMES.Email]: '',
        [LOGIN_FIELD_NAMES.Password]: '',
    })

    const changeHandler = (e) => {
        e.preventDefault()
        const value = e.target.value
        const id = e.target.id
        setValues((p) => ({ ...p, [id]: value }))
    }

    const verifyUser = (email, password) => {
        return (
            regsteredUsers.filter(
                (u) => u.Email === email && u.Password === password,
            ).length === 1
        )
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const userVerified = verifyUser(
            values[LOGIN_FIELD_NAMES.Email],
            values[LOGIN_FIELD_NAMES.Password],
        )

        if (userVerified) {
            router.push(PAGE_NAMES.index)
        } else {
            alert(`
            Email : dev@a.a
            Pass  : dev

            Email : hotel@a.a
            Pass  : hotel

            Email : guest@a.a
            Pass  : guest
            `)
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col
                    xs={{ offset: 1, span: 10 }}
                    md={{ offset: 3, span: 6 }}
                    xl={{ offset: 4, span: 4 }}
                    className="border rounded p-3 p-sm-4 h-100 bg-light"
                >
                    <Form onSubmit={submitHandler}>
                        {LOGIN_FIELDS.map((f) => (
                            <Form.Group key={f.id} className="mb-3">
                                <Form.Label>{f.label}</Form.Label>
                                <Form.Control
                                    id={f.id}
                                    type={f.type}
                                    placeholder={f.placeholder}
                                    value={values[f.id]}
                                    onChange={changeHandler}
                                />
                            </Form.Group>
                        ))}

                        <div className="d-grid gap-3">
                            <Button
                                variant="primary"
                                type="submit"
                                className="mt-5"
                            >
                                Log in
                            </Button>

                            <Button
                                variant="link"
                                onClick={() =>
                                    alert('Functionality coming soon.')
                                }
                            >
                                You don&apos;t have an account yet?
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth
