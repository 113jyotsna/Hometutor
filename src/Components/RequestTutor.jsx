import React, { useState } from 'react';
import './RequestTutor.css'; // Import the CSS file for styling
import { 
  Button, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  OutlinedInput, 
  Select, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  TextField, 
  Checkbox, 
  Link 
} from '@mui/material';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

// List of subjects for dropdown
const subjects = [
  'Computer Science',
  'Biology',
  'Mathematics',
  'Economics',
  'English',
];

const RequestTutor = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [tutoringPlace, setTutoringPlace] = useState('');
  const [details, setDetails] = useState('');
  const [allowSharing, setAllowSharing] = useState(false);

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setTutoringPlace(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleAllowSharingChange = (event) => {
    setAllowSharing(event.target.checked);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Subject:', selectedSubject);
    console.log('Tutoring Place:', tutoringPlace);
    console.log('Details:', details);
    console.log('Allow Sharing:', allowSharing);
  };

  return (
    <div>
      <Navbar/>
    <div className="request-tutor-container">
      <div className="form-container">
        <div className="header-box">
          <h1>Request a Tutor</h1>
          <p>Submit your learning requirements and find tutors in your locality</p>
        </div>
        <div className="signup-link">
          <p>If you are a teacher and want to provide part-time tuition please <Link href="/signup">click here to sign up</Link></p>
        </div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="subject-select-label">What do you want to learn</InputLabel>
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={selectedSubject}
            onChange={handleSubjectChange}
            input={<OutlinedInput label="What do you want to learn" />}
          >
            {subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="tuition-place-box">
          <div className="tuition-place-header">
            <p>Tuition Place</p>
          </div>
          <FormControl component="fieldset" margin="normal">
            <RadioGroup
              aria-labelledby="tuition-place-label"
              name="tuition-place"
              value={tutoringPlace}
              onChange={handlePlaceChange}
            >
              <FormControlLabel
                value="At tutor's place"
                control={<Radio />}
                label="At tutor's place"
              />
              <FormControlLabel
                value="At my place"
                control={<Radio />}
                label="At my place"
              />
              <FormControlLabel
                value="Online"
                control={<Radio />}
                label="Online"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <TextField
          fullWidth
          margin="normal"
          label="Tuition Details (optional)"
          multiline
          rows={4}
          variant="outlined"
          value={details}
          onChange={handleDetailsChange}
          placeholder="Enter your requirement in brief (Ex: Wanted a Lady Math tutor for 8th Std ICSE Girl Student for 2 days a week)"
        />
        <br/><br/><br/>
        <FormControlLabel
          control={<Checkbox checked={allowSharing} onChange={handleAllowSharingChange} />}
          label="I allow TutorTracker to share my requirement details with other tutors."
        />
  <br/>
        {/* Use the NavLink component for navigation */}
        <Link href="/requestatutor2" underline="none" style={{ width: '100%' }}>
        <Button
          sx={{
            width: '100%', // Make the button fill the width of the container
            height: 56,
            fontSize: 20,
            backgroundColor: '#009688',
            color: 'white',
            '&:hover': { backgroundColor: '#00796b' },
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Link>

        <div className="login-link">
          <p>If you are an existing student <Link href="/login2">Login Here</Link></p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RequestTutor;
