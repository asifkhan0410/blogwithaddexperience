import React, { useState } from 'react'
import { useHistory } from 'react-router';

function AddExperienceForm() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');

    const data= [title,role,company,skills,experience];
    function submitData(e){
        e.preventDefault();
        localStorage.setItem('experience', JSON.stringify(data))
        history.push('/');
    }
    console.log(data);
    return (
        <div className="addexperienceform">
            <h1>Share your Interview Experience</h1>
            <form onSubmit={submitData}>
            <label>
                Post Title*<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Interview for Front-End Developer at Google" />
            </label>
            <label>
                Role Interviewed for*<input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Front-End Developer" />
            </label>
            <label>
                Company Interviewed at<input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Google India"/>
            </label>
            <label>
                Required Skills<input type="text" value={skills} onChange={(e) => setSkills(e.target.value)}  placeholder="ReactJS, HTML, CSS"/>
            </label>
            <label>
                Interview Experience Details<textarea type="text" className='details' value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="- Interview process and format
- Questions asked and responses offered
- Any other relevant and helpful information" />
            </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    )
}

export default AddExperienceForm
