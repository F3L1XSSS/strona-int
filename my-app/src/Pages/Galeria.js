import React, { Component } from "react";
import { Card, CardGroup, Container, Button, CardImg, NavLink, Nav } from "react-bootstrap";
import { Route, Routes, Router } from "react-router-dom";
//assets
import zd1 from "../Assets/zd1.jpg";
import zd2 from "../Assets/zd2.jpg";
import zf1 from "../Assets/zf1.jpg";
import z10 from "../Assets/Galer1/z10.jpg";
//videos
import video1 from "../Assets/tropikvid.mp4"

//strony
import Galary1 from "../Components/Header";

export default class Galeria extends Component{
    render(){
        return(
            <>
                <div className="page-title">
                <div>
                <Container>
                    <h1 className="text-center">GALERIA WYBIERZ OPRYSKIWACZ</h1>
                    <CardGroup>
                        <Card bg="light" border="dark">
                            <Card.Img 
                            variant="top" 
                            src={zd1}
                            />
                            <Card.Body className="text-center">
                                <Card.Title>TROPIC 2TW</Card.Title>
                                <Card.Text>
                                opryskiwacz do sadu roślin jagodowych wersja II
                                </Card.Text>
                                <Button href="/galary2" variant="dark">Galeria</Button>
                                </Card.Body>
                        </Card>
                        <Card bg="light" border="dark">
                            <Card.Img 
                            variant="bottom" 
                            src={zd2}
                            />
                            <Card.Body className="text-center">
                                <Card.Title>TROPIC 2TW</Card.Title>
                                <Card.Text>
                                opryskiwacz do sadu i roślin jagodowych
                                </Card.Text>
                                <Button href="/galary3" variant="dark">Galeria</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light" border="dark">
                            <Card.Img 
                            variant="top" 
                            src={zf1}
                            height="203"
                            />
                            <Card.Body className="text-center">
                                <Card.Title>TROPIC 2TW</Card.Title>
                                <Card.Text>
                                opryskiwacz do truskawek i warzyw
                                </Card.Text>
                                <Button href="/galary1" variant="dark">Galeria</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
                </div>
                <div className="text-center">
                    <video src={video1} controls="controls" poster={z10} width="800px" height="500px" border="dark" />
                </div>
                </div>
            </>
        )
    }
}