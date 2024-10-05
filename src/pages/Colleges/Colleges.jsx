// src/pages/Colleges/Colleges.jsx
import React from 'react';
import './Colleges.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AUBlogo from '../../utils/images/aublogo.jpg';
import LAUlogo from '../../utils/images/laulogo.jpg';
import BAUlogo from '../../utils/images/baulogo.jpg';
import USJLogo from '../../utils/images/usjlogo.jpg';
import NDUlogo from '../../utils/images/ndulogo.jpg';
import AUSTlogo from '../../utils/images/AUSTlogo.jpg';
import LIUlogo from '../../utils/images/LIUlogo.jpg';
import USEKlogo from '../../utils/images/USEKlogo.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const universities = [
    {
        id: 1,
        img: AUBlogo,
        title: 'American University of Beirut',
        description: 'The American University of Beirut (AUB) offers a diverse range of programs and state-of-the-art facilities. Known for its strong emphasis on research and academic excellence, AUB is located in the heart of Beirut, providing students with a vibrant and dynamic campus life.'
    },
    {
        id: 2,
        img: LAUlogo,
        title: 'Lebanese American University',
        description: 'The Lebanese American University (LAU) is renowned for its innovative research programs and inclusive campus environment. With a strong focus on student development and community engagement, LAU offers a rich academic experience in both its Beirut and Byblos campuses.'
    },
    {
        id: 3,
        img: BAUlogo,
        title: 'Beirut Arab University',
        description: 'Beirut Arab University (BAU) is recognized for its affordable tuition fees and diverse extracurricular activities. Located in Beirut, BAU provides a supportive learning environment with a variety of programs designed to cater to the academic and personal growth of its students.'
    },
    {
        id: 4,
        img: USJLogo,
        title: 'University Saint Joseph',
        description: 'The University Saint Joseph (USJ) is a leading institution in Lebanon, offering a wide range of programs in various fields. With a focus on academic excellence and community engagement, USJ provides students with a supportive learning environment and opportunities for personal growth.'
    },
    {
        id: 5,
        img: NDUlogo,
        title: 'Notre Dame University',
        description: 'Notre Dame University (NDU) is known for its strong academic programs and commitment to student success. With a focus on research and innovation, NDU offers a vibrant campus life and a supportive community for students to thrive in their academic pursuits.'
    },
    {
        id: 6,
        img: AUSTlogo,
        title: 'American University of Science and Technology',
        description: 'The American University of Science and Technology (AUST) is a leading institution in Lebanon, offering a diverse range of programs in various fields. With a focus on academic excellence and research, AUST provides students with a supportive learning environment and opportunities for personal growth.'
    },
    {
        id: 7,
        img: LIUlogo,
        title: 'Lebanese International University',
        description: 'The Lebanese International University (LIU) is known for its innovative programs and commitment to student success. With a focus on research and academic excellence, LIU offers a vibrant campus life and a supportive community for students to thrive in their academic pursuits.'
    },
    {
        id: 8,
        img: USEKlogo,
        title: 'Université Saint-Esprit de Kaslik',
        description: 'The Université Saint-Esprit de Kaslik (USEK) is a leading institution in Lebanon, offering a wide range of programs in various fields. With a focus on academic excellence and community engagement, USEK provides students with a supportive learning environment and opportunities for personal growth.'
    },
];

function Colleges() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
              <h1 className='text-center fw-semibold'>Explore Top Universities in Lebanon</h1>
              <p className='text-center w-75 mb-5'>Discover a variety of universities across Lebanon. Find detailed information about programs, campus life, facilities, and more to help you make the best choice for your academic future.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {universities.map((university) => (
                    <div key={university.id} className='col-lg-6'>
                        <Link to={`/colleges/${university.id}`}>
                          <Card className='text-white shadow scale-hover-effect h-100'>
                              <Card.Img src={university.img} />
                              <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                  <Card.Title className='fs-1 text-danger'>{university.title}</Card.Title>
                                  <Card.Text className='text-center'>{university.description}</Card.Text>
                              </Card.ImgOverlay>
                          </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Colleges;
