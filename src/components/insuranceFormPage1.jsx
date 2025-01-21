import React from 'react';

const FormPage1 = () => {
  return (
    <div className='insurancefrompage1-div'>
      <div className='insurancefrompage1-div1'>
        <h3>Choose your needs</h3>
        <p>How much insurance cover you are looking for ?...</p>
      </div>
      <div>
        <ul>
          <li><p>Basic Sum Assured</p>
          <input type="text"  placeholder='Type here' required/>
          </li>
          <li>
          <p>Premium Paying Term</p>
          <input type="text"  placeholder='Type here' required/>
          </li>
        </ul>
      </div>
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>
    </div>
  );
};

export default FormPage1;
