import {Container, Row, Col} from "react-bootstrap";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Container>
                <Row>
                    <h1>Portfolio</h1>
                </Row>
                <Row className="portfolio-row">
                    <Col className="portfolio-col">
                        <div>Column 1</div>
                    </Col>
                    <Col className="portfolio-col">
                        <div>Column 2</div>
                    </Col>
                    <Col className="portfolio-col">
                        <div>Column 3</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Portfolio