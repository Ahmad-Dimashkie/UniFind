import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently Asked Questions</h2>
            <p className='text-center mb-5'>Here are some of the common questions we get from students and parents about finding universities in Lebanon through UniFind.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How can I find the best university for my chosen major?</Accordion.Header>
                    <Accordion.Body>
                        You can use our personalized filtering options to search for universities based on your chosen major, tuition fees, campus location, and more. This helps you find the best match for your academic goals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Are there options for financial aid and scholarships?</Accordion.Header>
                    <Accordion.Body>
                        Yes, UniFind provides information about available scholarships and financial aid options for each university. You can filter universities based on the availability of scholarships and other financial support.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What kind of extracurricular activities are offered?</Accordion.Header>
                    <Accordion.Body>
                        Each university listed on UniFind includes details about their extracurricular activities, including clubs, societies, and sports. This helps you choose a university that offers activities aligning with your interests.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How can I contact a mentor from a specific university?</Accordion.Header>
                    <Accordion.Body>
                        Our mentorship program allows current university students to volunteer their time and expertise. You can find contact information for mentors who can provide insights and advice about their respective universities.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
