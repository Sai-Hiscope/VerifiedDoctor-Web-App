import React from 'react';

import InsuranceImage from "../assets/Images/insurancePage/img2.jpg"

const FormPage1 = () => {
  return (
    <div className='insurancefrompage1-div'>
      <div className='insurancefrompage1-div1'>
        <h3>Choose your needs</h3>
        <p>How much insurance cover you are looking for ?...</p>
      </div>
      <ul className='insurancefromPage1-ul'>
      <div className='insurancefrompage1-div2'>
        <ul>
          <li> <h4>Basic Sum Assured <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Premium Paying Term <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          <a href="">What is Premium Paying Term?</a>
          </li>
        </ul>
      </div>
      <div className='insurancefrompage1-div3'>
        <ul>
          <li>
          <h4>Under NACH? <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          <a href="">What is NACH?</a>
          </li>
          <li>
          <h4>Date of Commencement <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Policy Term <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <h4>Preferred Mode <p>*</p></h4>
          <input type="text"  placeholder='Type here' required/>
          <a href="">What is Preferred Mode?</a>
          </li>
        </ul>
      </div>
      </ul>
      <div className='insurancefrompage1-div4'>
        <img src={InsuranceImage} alt="InsuranceImage" />
      </div>
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>
    </div>
  );
};

export default FormPage1;
