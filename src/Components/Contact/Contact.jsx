import React from 'react';
import './Contact.css';
import communitypic from '../../assets/community.webp'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d87a1b53-bc65-4181-9bd8-515924de5403");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully......Mohit will get notified about it Thank You !!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className='c-h1'>Make Connections and Get in Touch</h1>
        <h4 className='c-h4'> Please make sure that this info will be sent to <span className='s-m'>Mohit Rajput</span> after clicking submit!!!</h4>
        <img src={communitypic} alt="" className='c-pic'/>
        <form className='contact-form' onSubmit={onSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="Enter your first name" required />
          </div>
          <div className='form-group'>
            <label>Surname</label>
            <input type="text" name="surname" placeholder="Enter your surname" required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className='form-group'>
            <label>
              <input type="checkbox" name="robot_check" required /> I am not a robot
            </label>
          </div>
          <div className='form-group'>
            <label>
              <input type="checkbox" name="terms_conditions" required /> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <span className='send-text'>{result}</span>
      </div>
    </div>
  );
}

export default Contact;

