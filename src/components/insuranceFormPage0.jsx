import React from 'react';


const FormPage0 = () => {
  return (
    <div>
      <div className='insurancefrompage0-div1'>
        <h3 >A Few Basic Details</h3>
        <p>Please provide the following details to proceed for a non obligation indicative quote</p>
      </div>
      <br />
      <form action="">
      <div className='Insuranceform0-group-div'>
        <ul className="Insuranceform-group">
          <li>
          <div >
        <label htmlFor="name">Full Name:</label>
        
        <input type="text" id="name" name="name" placeholder='Enter Full Name' required/>
      </div>
      </li>
      <li className='DOB-age-li'>
      <div className='DOB-div'>
        <label htmlFor="DOB">Date Of Birth:</label>
        <input type="date" id="DOB" name="DOB"/>
      </div>
      </li>
      <li>
      <div>
        <label htmlFor="income">Annual Income:</label>
        <input type="number" id="income" name="income" placeholder='Enter Income'/>
      </div>
      </li>
      <li>
      <div>
        <label htmlFor="Address">Residential Address:</label>
        <textarea name="Address" id="Address" placeholder='Enter Address.....'></textarea>
      </div>
      </li>
        </ul>
        <ul className="Insuranceform-group1">
          <li>
            <div>
              <label htmlFor="email">Email ID:</label>
              <input type="email" id='email' placeholder='Enter Email..'  required/>
            </div>
          </li>
          <li >
            <div>
              <label htmlFor="mobilenumber">Mobile Number:</label>
              <input type="tel" name="mobilenumber" id="mobilenumber" maxLength={10} minLength={10}  placeholder='0000000000' required/>
            </div>
          </li>
          <li className='gender-li'>
            <div>
              <label htmlFor="gender">Gender:</label>
              <li className='gender-input-li'><input type="radio" id='gender' name='gender'  required/>Male</li>
              <li className='gender-input-li'><input type="radio" id='gender' name='gender'  required/>Female</li>
            </div>
          </li>
          <li>
      <div>
        <label htmlFor="Address">Rural Address:</label>
        <textarea name="Address" id="Address" placeholder='Enter Address.....'></textarea>
      </div>
      </li>
        </ul>
      </div>
      <div className='insurance-page0-policy-div'>
          <h4>
          Are you taking policy for:
          </h4>
          <li><input type="radio" id='policy' name='policy' required/>    Yourself</li>
          <li><input type="radio" id='policy' name='policy' required/>     For your family member</li>
        </div>
        <div className='insurance-page0-check-div'>
          <li>
            <input type="checkbox" name="check" id="check"  required/>
            <p>"I confirm that the mobile number and email I provided are mine. By ticking this box, I authorize Verified Doctor  Application and its representatives to contact me via calls, WhatsApp, or email to verify the information I’ve provided. I understand that this may include contacting me even if I’m on the 'Do Not Call' list. I also consent to sharing my information with trusted third parties (like call centers or service partners) for processing this application."</p>
          </li>
          <li>
            <input type="checkbox" name='check' id='check' required />
            <p>"I choose to skip the suitability module, even though it is recommended."</p>
          </li>
        </div>
      </form>
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>
      
    </div>
  );
};

export default FormPage0;
