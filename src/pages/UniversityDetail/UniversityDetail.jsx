import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logounifind.png';
import './UniversityDetail.css';

function UniversityDetail() {
  const { id } = useParams();  // Get the ID from the URL
  console.log(id);
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversityData = async () => {
      try {
        const response = await axios.get(`https://twum8afws8.execute-api.eu-west-2.amazonaws.com/prod/universityInfo/${id}`);
        setUniversity(response.data);
      } catch (error) {
        console.error('Error fetching university data:', error);
      }
    };

    fetchUniversityData();
  }, [id]);  // Dependency array includes ID, so it will refetch when the ID changes

  if (!university) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className='university-detail'>
      

      <header className='university-header' style={{ backgroundImage: `url(${university.background || logo})` }}>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>{university.UniversityName}</h1>
        </div>
      </header>

      <div className='container py-5'>
        <h2>About</h2>
        <p>{university.About || "No description available"}</p>

        <h2>Graduate Degrees</h2>
        <ul>
          {(university.GradCourses || []).map(degree => (
            <li key={degree}>{degree}</li>
          ))}
        </ul>

        <h2>Undergraduate Degrees</h2>
        <ul>
          {(university.UndergradCourses || []).map(degree => (
            <li key={degree}>{degree}</li>
          ))}
        </ul>

        <h2>Tuition</h2>
        <ul>
          <li><strong>Undergraduate:</strong> {university.UndergradCreditCost}$ per Credit</li>
          <li><strong>Graduate:</strong> {university.GradCreditCost}$ per Credit</li>
        </ul>



        <h2>Ranking</h2>
        <ul>
          <li>#{university.Ranking_Lebanon} in Lebanon</li>
          <li>#{university.Ranking_QS} worldwide</li>
        </ul>
          
        <h2>Research</h2>
        <p>{university.Research ? "Offered" : "Not offered"}</p>

        <h2>Acceptance Rate</h2>
        <p>{university.AcceptanceRate}%</p>

        <h2>Language Taught</h2>
        <p>{university.LanguageTaught || "No information available"}</p>

        <h2>Financial Aid</h2>
        <p>{university.FinancialAid ? "Need-Based Financial Aid" : "Not available"}</p>

        <h2>Accessibility Services</h2>
        <p>{university.AccessibilityServices ? "Available" : "Not available"}</p>

        <h2>Scholarship Listings</h2>
        <ul>
          {(university.ScholarshipListings || []).map(scholarship => (
            <li key={scholarship}>{scholarship}</li>
          ))}
        </ul>

        <h2>Public/Carpooling Transportation</h2>
        <p>{university["Public/Carpooling_Services"] ? "Available" : "Not available"}</p>

        <h2>Extracurricular Activities</h2>
        <ul>
          {(university.ExtracurricularActivities || []).map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default UniversityDetail;