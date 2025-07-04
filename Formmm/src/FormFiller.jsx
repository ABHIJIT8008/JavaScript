import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormFiller.css';
const FormFiller = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      fullName: '',
      dob: '',
      gender: '',
      institutionalEmail: '',
      personalEmail: '',
      mobileNumber: '',
      currentAddress: '',
      permanentAddress: '',
      parentName: '',
      parentContact: '',
      course: '',
      branch: '',
      yearOfStudy: '',
      rollNumber: '',
      tenthBoard: '',
      tenthYear: '',
      tenthPercentage: '',
      twelfthBoard: '',
      twelfthYear: '',
      twelfthPercentage: '',
      currentCGPA: '',
      skills: '',
      projects: '',
      internships: '',
      resumeLink: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      
      // Navigate to confirmation page with form data
      navigate('/confirmation', { state: { formData } });
    };
  
  
    return (
      <div className="app-container">
        <header className="form-header">
          <h1>Student Profile Form</h1>
          <p>Please fill in your details accurately</p>
        </header>
  
        <form onSubmit={handleSubmit} className="student-form">
          {/* Personal Information Section */}
          <fieldset className="form-section">
            <legend>Personal Information</legend>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth*</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="gender">Gender*</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="institutionalEmail">Institutional Email*</label>
              <input
                type="email"
                id="institutionalEmail"
                name="institutionalEmail"
                value={formData.institutionalEmail}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="personalEmail">Personal Email</label>
              <input
                type="email"
                id="personalEmail"
                name="personalEmail"
                value={formData.personalEmail}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number*</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
  
          {/* Address Information Section */}
          <fieldset className="form-section">
            <legend>Address Information</legend>
            
            <div className="form-group">
              <label htmlFor="currentAddress">Current Address/Hostel Address*</label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="permanentAddress">Permanent Address*</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
  
          {/* Parent/Guardian Information Section */}
          <fieldset className="form-section">
            <legend>Parent/Guardian Information</legend>
            
            <div className="form-group">
              <label htmlFor="parentName">Parent/Guardian Name*</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="parentContact">Parent/Guardian Contact Number*</label>
              <input
                type="tel"
                id="parentContact"
                name="parentContact"
                value={formData.parentContact}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
  
          {/* Academic Information Section */}
          <fieldset className="form-section">
            <legend>Academic Information</legend>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="course">Course/Degree*</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="B.A">B.A</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="Other">Other</option>
                </select>
              </div>
  
              <div className="form-group">
                <label htmlFor="branch">Branch/Department*</label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study*</label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Final Year">Final Year</option>
                </select>
              </div>
  
              <div className="form-group">
                <label htmlFor="rollNumber">Roll Number*</label>
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </fieldset>
  
          {/* Educational Background Section */}
          <fieldset className="form-section">
            <legend>Educational Background</legend>
            
            <div className="subsection">
              <h3>10th Grade Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tenthBoard">Board*</label>
                  <input
                    type="text"
                    id="tenthBoard"
                    name="tenthBoard"
                    value={formData.tenthBoard}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="tenthYear">Year of Passing*</label>
                  <input
                    type="number"
                    id="tenthYear"
                    name="tenthYear"
                    min="1900"
                    max="2099"
                    value={formData.tenthYear}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="tenthPercentage">Percentage/CGPA*</label>
                  <input
                    type="text"
                    id="tenthPercentage"
                    name="tenthPercentage"
                    value={formData.tenthPercentage}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
  
            <div className="subsection">
              <h3>12th Grade Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="twelfthBoard">Board*</label>
                  <input
                    type="text"
                    id="twelfthBoard"
                    name="twelfthBoard"
                    value={formData.twelfthBoard}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="twelfthYear">Year of Passing*</label>
                  <input
                    type="number"
                    id="twelfthYear"
                    name="twelfthYear"
                    min="1900"
                    max="2099"
                    value={formData.twelfthYear}
                    onChange={handleChange}
                    required
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="twelfthPercentage">Percentage/CGPA*</label>
                  <input
                    type="text"
                    id="twelfthPercentage"
                    name="twelfthPercentage"
                    value={formData.twelfthPercentage}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="currentCGPA">Current CGPA/Semester-wise Marks</label>
              <textarea
                id="currentCGPA"
                name="currentCGPA"
                value={formData.currentCGPA}
                onChange={handleChange}
                placeholder="Enter your current CGPA or semester-wise marks details"
              />
            </div>
          </fieldset>
  
          {/* Skills and Experience Section */}
          <fieldset className="form-section">
            <legend>Skills and Experience</legend>
            
            <div className="form-group">
              <label htmlFor="skills">Skills (Technical & Soft Skills)*</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="List your skills separated by commas"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="projects">Projects Undertaken (Title & Tech Used)</label>
              <textarea
                id="projects"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                placeholder="List your projects with technologies used"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="internships">Internship/Work Experience (if any)</label>
              <textarea
                id="internships"
                name="internships"
                value={formData.internships}
                onChange={handleChange}
                placeholder="Describe your work experience"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="resumeLink">Resume/CV Upload or Link</label>
              <input
                type="text"
                id="resumeLink"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="Paste a link to your resume or upload option would be implemented in backend"
              />
            </div>
          </fieldset>
  
          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit Profile</button>
            <button type="reset" className="reset-btn">Reset Form</button>
          </div>
        </form>
      </div>
    );
}

export default FormFiller
