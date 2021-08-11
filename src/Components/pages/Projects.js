import React from 'react'
import 'materialize-css';
import { Row, Col, Card, Icon, CardTitle} from 'react-materialize';
//import HeaderGold from '../images/header-gold.jpeg';
//import PwGen from '../images/pwGenerator.png';
// import Scheduler from '../images/Scheduler.png';
// import Weather from '../images/Scheduler.png';
// import ProjAPI from '../images/ProjAPI.png';

const Projects = () => (
  
    <Row>
      <Col
        m={3}
        s={6}
        >
    <Card
      actions={[
        <a key="1" href="www.yahoo.com">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>


  <Col
    m={3}
    s={6}
  >
    <Card
      actions={[
        <a key="1" href="www.yahoo.com">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>

  <Col
        m={3}
        s={6}
        >
    <Card
      actions={[
        <a key="1" href="www.yahoo.com">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>

  <Col
        m={3}
        s={6}
        >
    <Card
      actions={[
        <a key="1" href="www.yahoo.com">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>

  <Col
        m={3}
        s={6}
        >
    <Card
      actions={[
        <a key="1" href="www.yahoo.com">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>

)

export default Projects