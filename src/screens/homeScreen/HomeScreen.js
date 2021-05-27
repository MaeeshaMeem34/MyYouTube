import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryBar from '../../components/CatagoriesBar/CategoryBar'
import Video from '../../components/Videos/Video'

const HomeScreen = () => {
    return (
        <Container>
            <CategoryBar />
            <Row>
                {
                    [...new Array(20)].map(()=>( 
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>
            
        </Container>
    )
}

export default HomeScreen
