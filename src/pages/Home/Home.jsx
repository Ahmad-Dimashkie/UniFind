import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import AUBlogo from '../../utils/images/aublogo.png';
import LAUlogo from '../../utils/images/laulogo.jpg';
import BAUlogo from '../../utils/images/baulogo.jpg';

const universities = [
    {
        id: 1,
        img: [AUBlogo],
        name: 'American University of Beirut',
        description: 'The American University of Beirut (AUB) offers a diverse range of programs and state-of-the-art facilities. Known for its strong emphasis on research and academic excellence, AUB is located in the heart of Beirut, providing students with a vibrant and dynamic campus life.'
    },
    {
        id: 2,
        img: [LAUlogo],
        name: 'Lebanese American University',
        description: 'The Lebanese American University (LAU) is renowned for its innovative research programs and inclusive campus environment. With a strong focus on student development and community engagement, LAU offers a rich academic experience in both its Beirut and Byblos campuses.'
    },
    {
        id: 3,
        img: [BAUlogo],
        name: 'Beirut Arab University',
        description: 'Beirut Arab University (BAU) is recognized for its affordable tuition fees and diverse extracurricular activities. Located in Beirut, BAU provides a supportive learning environment with a variety of programs designed to cater to the academic and personal growth of its students.'
    }
];


function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>UniFind</h1>
                <p>Find your dream university in Lebanon with all the essential information you need at your fingertips. Explore programs, compare tuition fees, and get insights into campus life.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/search">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Start Your Search</button>
                    </Link>
                    <Link to="/colleges">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>View All</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 Start Your Journey</h2>
                        <p>Discover the top universities in Lebanon and find the perfect fit for your academic and personal growth.</p>
                        <Link to="/search">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Featured Universities</h2>
                <div className='row g-4'>
                    {universities.map((uni) => (
                        <div key={uni.id} className='col-md-6 col-lg-4'>
                            <Link to={`/colleges/${uni.id}`} className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={uni.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{uni.name}</Card.Title>
                                        <Card.Text>{uni.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/Colleges">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>View All Universities</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;