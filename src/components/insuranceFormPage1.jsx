import React from 'react';

const FormPage1 = () => {
  return (
    <div>
      <div className="Insuranceform-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
      </div>
      <div className="Insuranceform-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" />
      </div>
      <p className='pagecount'>“Start Your Journey to Protection Today!”
      “It’s easy, quick, and tailored for you-Start your protection journey now”</p>
    </div>
  );
};

export default FormPage1;
