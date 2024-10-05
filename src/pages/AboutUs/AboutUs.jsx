import React from 'react';
import './AboutUs.css';
import { Card } from 'react-bootstrap';
import NaderImg from '../../utils/images/NaderAlMasripicture.jpeg';
import HusseinCImg from '../../utils/images/husseinchamseddinepicture.jpeg';
import HusseinChImg from '../../utils/images/husseinchourpicture.jpeg';
import AhmadImg from '../../utils/images/ahmaddimashkiehpicture.jpeg';

const teamMembers = [
    {
        id: 1,
        img: NaderImg,
        name: 'Nader Al Masri',
        major: 'Computer and Communications Engineering',
    },
    {
        id: 2,
        img: HusseinCImg,
        name: 'Hussein Chamseddine',
        major: 'Computer and Communications Engineering',
    },
    {
        id: 3,
        img: HusseinChImg,
        name: 'Hussein Chour',
        major: 'Mechanical Engineering',
    },
    {
        id: 4,
        img: AhmadImg,
        name: 'Ahmad Dimashkieh',
        major: 'Computer and Communications Engineering',
    },
];

function AboutUs() {
  return (
    <div className='about-us-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>
                    We are a group of four students from the American University of Beirut, studying various fields of engineering. We are passionate about leveraging our skills to create innovative solutions.
                </p>
            </div>
        </header>

        <div className='container my-5'>
            <h2 className='text-center mb-4'>Meet the Team</h2>
            <div className="row g-4">
                {teamMembers.map((member) => (
                    <div key={member.id} className='col-md-6 col-lg-3'>
                        <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                            <Card.Img variant="top" src={member.img} />
                            <Card.Body className='p-md-4 d-flex flex-column align-items-center'>
                                <Card.Title className='fs-4 mb-2'>{member.name}</Card.Title>
                                <Card.Text className='text-center'>{member.major}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='container my-5'>
            <h2 className='text-center mb-4'>Our Background</h2>
            <p>
                We are all students in the School of Engineering at the American University of Beirut. Our team members are:
            </p>
            <ul>
                <li><strong>Nader Al Masri:</strong> Computer and Communications Engineering</li>
                <li><strong>Hussein Chamseddine:</strong> Computer and Communications Engineering</li>
                <li><strong>Hussein Chour:</strong> Mechanical Engineering</li>
                <li><strong>Ahmad Dimashkieh:</strong> Computer and Communications Engineering</li>
            </ul>
            <p>
                Our collective expertise spans across different engineering disciplines, allowing us to tackle complex problems and develop comprehensive solutions. We are committed to pushing the boundaries of innovation and excellence in our respective fields.
            </p>
        </div>
    </div>
  )
}

export default AboutUs;
