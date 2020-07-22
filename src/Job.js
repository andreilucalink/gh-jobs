import React, {useState} from "react";
import { Card, Badge, Collapse } from "react-bootstrap";
import './global.css';


function Job({ job }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Card className="m-3 job-card">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title className="job-title">
              {job.title}
              <br/>
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mt-3 mb-1">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge /* variant="dark" */ className="mr-2 dk-bg">{job.type}</Badge>
            <Badge /* variant="dark" */ className="dk-bg">{job.location}</Badge>
            <a href="http://example.com" className='apply-link'>Click to apply!</a>
          </div>
          <img className="d-none d-md-block" height="30" alt={job.company} src={job.company_logo}/>
        </div>
        <Card.Text className="mt-2">
            <button className="details-button" onClick={() => setisOpen(!isOpen)}>
              {isOpen ? 'Hide Details' : 'View Details'}
            </button>
        </Card.Text>
        <Collapse in={isOpen}>
          <div className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta exercitationem cumque quisquam eaque officia obcaecati, a, ducimus, quasi blanditiis nostrum dolor magni iusto vitae? Fugiat dolor placeat nihil veniam, corporis maxime velit modi magnam harum tempore quo eius est provident necessitatibus rerum corrupti impedit rem, obcaecati commodi, voluptatum laborum suscipit? Saepe provident nulla esse tenetur dolores ipsa exercitationem, totam, voluptatum maxime dignissimos rem perferendis deserunt officiis asperiores eum vero! Enim, quibusdam iste asperiores dolore velit minima aliquid libero deleniti voluptatem illum repellendus sunt. Nemo odio vitae voluptas ipsam veritatis, dolorem ab corrupti soluta dolores magni, eligendi voluptates aliquam nostrum.
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Job;
