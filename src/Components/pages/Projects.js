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
        m={6}
        s={12}
        >
    <Card
      actions={[
        <a key="1" href="https://kthendavid04.github.io/BC-Daily-Scheduler/">Click here to view the website!</a>
      ]}
      closeIcon={<Icon>Scheduler</Icon>}
      header={<CardTitle image="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80">Scheduler</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
     Scheduluer pulls local time and shows when you are behind,on time or ahead of schedule. 
    </Card>
  </Col>


  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://kthendavid04.github.io/BC-pwGen-JS/">Click here to view the website!</a>
      ]}
      closeIcon={<Icon>Password Generator</Icon>}
      header={<CardTitle image="https://images.unsplash.com/photo-1614064548237-096f735f344f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80">Password Generator</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      This project generates a unique secure password. 
    </Card>
  </Col>

  <Col
        m={6}
        s={12}
        >
    <Card
      actions={[
        <a key="1" href="https://the64man1.github.io/Gooberville-Foods/">Click here to view the website!</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80">API Group Project</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Gooverville-Foods utilizes 2 seperate API's to search for recipes.
    </Card>
  </Col>

  <Col
        m={6}
        s={12}
        >
    <Card
      actions={[
        <a key="1" href=" https://kthendavid04.github.io/Weather-BC/">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://images.unsplash.com/photo-1545193544-312983719627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">Weather Dashboard</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Utilizes an API to get local weather. 



    </Card>
  </Col>

  <Col
        m={6}
        s={12}
        >
    <Card
      actions={[
        <a key="1" href="https://whispering-river-42546.herokuapp.com/">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">MySQL DB Group Project #2</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      This is a website where you can post or purchase artwork. Utilizing MySQL as the database.
    </Card>
  </Col>
</Row>

)

export default Projects