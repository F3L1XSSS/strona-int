import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

//assets
import zd1 from "../Assets/zd1.jpg";
import zd2 from "../Assets/zd2.jpg";
import zd3 from "../Assets/zd3.jpg";
import zd4 from "../Assets/zd4.jpg";
import zd5 from "../Assets/zd5.jpg";


export default class Home extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={zd1}
                        alt="zd1"
                    />
                    <Carousel.Caption>
                        <h1>TROPIC 2TW</h1>
                        <h4>ulepszona wersja opryskiwaczado sadu i roślin jagodowych</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={zd2}
                        alt="zd2"
                    />
                    <Carousel.Caption>
                        <h1>TROPIC 2TW</h1>
                        <h4>opryskiwacz do sadui roślin jagodowych</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={zd3}
                        alt="zd3"
                    />
                    <Carousel.Caption>
                        <h1>TROPIC 2TW</h1>
                        <h4>z hydraulicznym mechanizmemskładania i rozkładania</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={zd4}
                        alt="zd4"
                    />
                    <Carousel.Caption>
                        <h1>TROPIC 2TW</h1>
                        <h4>opryskiwacz z regulacją wysokości, szerokości,z nadmuchem powietrza z cieczą</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={zd5}
                        alt="zd5"
                    />
                    <Carousel.Caption>
                        <h1>TROPIC 2TW</h1>
                        <h4>opryskiwacz do truskawek, selerów, porów,ogórków,marchwi i innych warzyw</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}