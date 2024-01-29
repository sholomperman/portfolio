import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ProjectsData } from '../Projects/projectData';
import ProjectCards from '../Projects/ProjectCards';
import { Col } from "react-bootstrap";

function ProjectsPreview() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 style={{color: 'white', textWrap: 'wrap', padding: 24}}>Here are some of my<span className='purple'> project</span></h1>
    <Carousel style={{width: '80%', margin: '0 auto'}} activeIndex={index} onSelect={handleSelect}>
        {
          ProjectsData?.map((item, index)=>(
            <Carousel.Item>
              <Col key={item.id} md={4} className="project-card-preview">
                <ProjectCards 
                imgPath={item.imgPath}
                isBlog={item.isBlog}
                title={item.title}
                description={item.description}
                ghLink={item.ghLink}
                />
              </Col>
          </Carousel.Item>
          ))
        }
    </Carousel>
    </>
  );
}

export default ProjectsPreview;