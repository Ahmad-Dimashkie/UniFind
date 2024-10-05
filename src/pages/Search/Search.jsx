import React, { useState } from 'react';
import axios from 'axios';
import './search.css';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';


function Search() {
  const [criteria, setCriteria] = useState({
    AcceptanceRate: '',
    AccessibilityServices: '',
    GradCreditCost: '',
    UndergradCreditCost: '',
    FinancialAid: '',
    LanguageTaught: '',
    Location: '',
    PublicCarpoolingServices: '',
    Ranking_Lebanon: '',
    Ranking_QS: '',
    Research: '',
  });

  const [results, setResults] = useState([]); // State to hold the search results

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    
    // Create a payload by only including non-empty criteria
    const payload = {};
    if (criteria.AcceptanceRate) payload.AcceptanceRate = Number(criteria.AcceptanceRate);
    if (criteria.AccessibilityServices) payload.AccessibilityServices = criteria.AccessibilityServices === 'true';
    if (criteria.GradCreditCost) payload.GradCreditCost = Number(criteria.GradCreditCost);
    if (criteria.UndergradCreditCost) payload.UndergradCreditCost = Number(criteria.UndergradCreditCost);
    if (criteria.FinancialAid) payload.FinancialAid = criteria.FinancialAid === 'true';
    if (criteria.LanguageTaught) payload.LanguageTaught = criteria.LanguageTaught;
    if (criteria.Location) payload.Location = criteria.Location;
    if (criteria.PublicCarpoolingServices) payload["Public/Carpooling_Services"] = criteria.PublicCarpoolingServices === 'true';
    if (criteria.Ranking_Lebanon) payload.Ranking_Lebanon = Number(criteria.Ranking_Lebanon);
    if (criteria.Ranking_QS) payload.Ranking_QS = Number(criteria.Ranking_QS);
    if (criteria.Research) payload.Research = criteria.Research === 'true';

    console.log('Search Payload:', payload);

    try {
      const response = await axios.post('https://twum8afws8.execute-api.eu-west-2.amazonaws.com/prod/filterInput', payload);
      setResults(response.data); // Update results with the response from the API
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <header className="search-header">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Search Universities</h1>
        </div>
      </header>

      <div className="search-page container py-5">
        <Form onSubmit={handleSearch} className="mb-4">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Acceptance Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="AcceptanceRate"
                  placeholder="Enter minimum acceptance rate"
                  value={criteria.AcceptanceRate}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Graduate Credit Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="GradCreditCost"
                  placeholder="Enter maximum graduate credit cost"
                  value={criteria.GradCreditCost}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Undergraduate Credit Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="UndergradCreditCost"
                  placeholder="Enter maximum undergraduate credit cost"
                  value={criteria.UndergradCreditCost}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Select
                  name="Location"
                  value={criteria.Location}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="Beirut">Beirut</option>
                  <option value="Byblos">Byblos</option>
                  <option value="Debbieh">Debbieh</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ranking in Lebanon</Form.Label>
                <Form.Control
                  type="number"
                  name="Ranking_Lebanon"
                  placeholder="Enter maximum ranking in Lebanon"
                  value={criteria.Ranking_Lebanon}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ranking QS</Form.Label>
                <Form.Control
                  type="number"
                  name="Ranking_QS"
                  placeholder="Enter maximum QS ranking"
                  value={criteria.Ranking_QS}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Accessibility Services</Form.Label>
                <Form.Select
                  name="AccessibilityServices"
                  value={criteria.AccessibilityServices}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Financial Aid</Form.Label>
                <Form.Select
                  name="FinancialAid"
                  value={criteria.FinancialAid}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Language Taught</Form.Label>
                <Form.Select
                  name="LanguageTaught"
                  value={criteria.LanguageTaught}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Arabic">Arabic</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Public/Carpooling Services</Form.Label>
                <Form.Select
                  name="PublicCarpoolingServices"
                  value={criteria.PublicCarpoolingServices}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Research</Form.Label>
                <Form.Select
                  name="Research"
                  value={criteria.Research}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-danger">
            Search
          </Button>
        </Form>

        <div className="search-results">
          <h3 className="text-center">Search Results</h3>
          {results.length === 0 ? (
            <p>No universities found matching your criteria.</p>
          ) : (
            results.map((university, index) => (
              <Card className="mt-4" key={index}>
               
                <Card.Body>
                  <Card.Title>{university}</Card.Title>
                  <Card.Text>
                    {/* Add more details or a brief description if necessary */}
                  </Card.Text>
                </Card.Body>
              
              </Card>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Search;
