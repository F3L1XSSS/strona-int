import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import { Container, Form, Button } from "react-bootstrap";


export default class Kontakt extends Component{
    render(){
        return(
            <>
            <div className="page-title">
                <h4 className="text-center">Dane kontaktowe</h4>
                <h5 className="text-left m-4" >Radoń Stanisław</h5>
                <p className="text-left m-4 top-5">Ul. Harcerska 2<br/>
                                             27-600 Sandomierz<br/>
                                             POLSKA<br/>
                                             tel.: 507-137-012<br/>
                                             e-mail: opryskiwacz.tropic@onet.pl</p>
                                             

            <Container>
                <h2 className="text-center">Kontakt z nami</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Twój email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Sprawdzic mi"/>
                    </Form.Group>
                    <Button className="text-center m-3" variant="dark" type="submit">Wyslać</Button>
                </Form>
            </Container>
            </div>
            </>
        )
    }
}