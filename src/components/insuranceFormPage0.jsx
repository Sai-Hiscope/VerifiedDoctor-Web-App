import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
         
        <label htmlFor="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='svg-logo'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l293.1 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1l-91.4 0zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>  
        Full Name:
        <p>*</p>
        </label>
        
        <input type="text" id="name" name="name" placeholder='Enter Full Name' required/>
      </div>
      </li>
      <li className='DOB-age-li'>
      <div className='DOB-div'>
        <label htmlFor="DOB"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='svg-logo'><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
         Date Of Birth: <p>*</p></label>
        <input type="date" id="DOB" name="DOB"/>
      </div>
      </li>
      <li>
      <div>
        <label htmlFor="income"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-logo'><path d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"/></svg> 
        Annual Income: <p>*</p></label>
        <input type="number" id="income" name="income" placeholder='Enter Income'/>
      </div>
      </li>
      <li>
      <div>
        <label htmlFor="Address"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='svg-logo'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        Residential Address: <p>*</p></label>
        <textarea name="Address" id="Address" placeholder='Enter Address.....'></textarea>
      </div>
      </li>
        </ul>
        <ul className="Insuranceform-group1">
          <li>
            <div>
              <label htmlFor="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-logo'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
               Email ID: <p>*</p></label>
              <input type="email" id='email' placeholder='Enter Email..'  required/>
            </div>
          </li>
          <li >
            <div>
              <label htmlFor="mobilenumber"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg-logo'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
               Mobile Number: <p>*</p></label>
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
        <label htmlFor="Address"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='svg-logo'><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
        Rural Address: <p>*</p></label>
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
