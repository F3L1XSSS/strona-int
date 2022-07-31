import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Carousel, Container , Nav, NavLink, Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//assets
import st1 from "../Assets/Stanisaw.jpg";
import nagrody from "../Assets/12szt.jpg";

export default class Home extends Component{
    render(){
        return(
            <>
            <div className="text-center">
                <img src={nagrody} alt="..." width="100%" height="550px"/>
            </div>
            <div className="page-title">
                <Container>
                    <Row>
                        <Col md="9">
                        <div class="d-flex align-items-center m-2">
                            <div class="flex-shrink-0">
                                <img src={st1} alt="..." height="500px" width="500px" class="img-thumbnail"/>
                        </div>
                            <div class="flex-grow-1 ms-3">
                               <h3> Lorem Ipsum...</h3><br/>
                                <h3>Myzsl przewodnia...</h3><br/>
                                <h3>Jaka kolwiek informacja</h3>
                            </div>
                        </div>

                        </Col>
                    </Row>
                </Container>
            <div className="mb-2">
                <CarouselBox />
            </div>
            <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 Now"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title text-center">Lorem Iposum</h3>
                <h4 className="vertical-timeline-element-subtitle text-center">Aktualny patent</h4>
                    <p>
                        <NavLink href="/patent1"><h4 className="text-center" style={{ fontWeight: 'bold', color: 'black' }}>Zobaczyć patent</h4></NavLink>
                    </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title text-center">Lorem Iposum</h3>
            <h4 className="vertical-timeline-element-subtitle text-center">Patent 2</h4>
                <p>
                     <NavLink href="/patent2"><h4 className="text-center" style={{ fontWeight: 'bold', color: 'black'}}>Zobaczyć patent</h4></NavLink>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1980"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title text-center">Lorem Iposum</h3>
            <h4 className="vertical-timeline-element-subtitle text-center">Uzyskanie doktoratu</h4>
                <p>
                    <NavLink href="/info"><h4 className="text-center" style={{ fontWeight: 'bold', color: 'black'}}>Zobaczyć swiadectwo</h4></NavLink>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                date="Past"
                    />
                </VerticalTimeline>
            </div>
         </div>
            </>
        )
    }
}