import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../../components/CatagoriesBar/CategoryBar";
import GoToTop from "../../components/ScrollToTopButton";
import Video from "../../components/Videos/Video";
import { useDispatch } from 'react-redux'
import { getPopularVideos } from "../../Redux/actions/videos.action";

const HomeScreen = () => {

   const dispatch = useDispatch()

   useEffect(()=>{
     dispatch(getPopularVideos())

   },[dispatch])
  return (
    <Container>
      <CategoryBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>

      <div
        className="scrollButton"
        style={{ padding: "30px", position: "absolute", right: "0px" }}
      >
        <GoToTop />
      </div>
    </Container>
  );
};

export default HomeScreen;
