
import React, { useState, useEffect } from "react";




function App() {
  // Function to handle button click
  const handleButtonClick = () => {
    alert('Login/Sign Up Button Clicked!');
  };



   // Define state for country, state, and search input
    const [country, setCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);
  
    // States for India and USA
    const states = {
      india: [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
        "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
      ],
      usa: [
        "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina",
        "Michigan", "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee",
        "Indiana", "Missouri", "Maryland", "Wisconsin"
      ]
    };
  
    // List of doctor types
    const doctorTypes = [
      "Dentist", "Cardiologist", "Dermatologist", "Pediatrician", "Orthopedic", "General Physician", 
      "ENT Specialist", "Gynecologist", "Urologist", "Neurologist", "Psychiatrist", "Oncologist", "Gastroenterologist"
    ];
  
    // Update state dropdown based on selected country
    const updateStates = (e) => {
      setCountry(e.target.value);
      setSelectedState('');
    };
  
    // Filter doctor types based on search query
    const handleSearchChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
  
      // Filter doctor types based on query
      if (query) {
        const filtered = doctorTypes.filter(doctor =>
          doctor.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredDoctors(filtered);
      } else {
        setFilteredDoctors([]);
      }
    };
  
    // Select doctor type from suggestions
    const selectDoctorType = (doctor) => {
      setSearchQuery(doctor);
      setFilteredDoctors([]); // Hide suggestions after selection
    };


    const slidesData = [
      {
        title: "Cardiologist",
        img: "C:\Users\beese\OneDrive\Desktop\reactVDR\src\assets\Cardiologist.jpeg",
        description: "Expert Care for a Healthier Heart",
      },
      {
        title: "Gynaecologist",
        img: "",
        description: "Women's health, expert care",
      },
      {
        title: "Dentist",
        img: "https://via.placeholder.com/800x400?text=Image+3",
        description: "Strong Teeth, Bright Smiles, Happy Life",
      },
      {
        title: "Gastroenterologist",
        img: "https://via.placeholder.com/800x400?text=Image+4",
        description: "Digestive health, better comfort",
      },
      {
        title: "Orthopedist",
        img: "https://via.placeholder.com/800x400?text=Image+5",
        description: "Stronger bones, better mobility",
      },
      {
        title: "Diagnostics",
        img: "https://via.placeholder.com/800x400?text=Image+6",
        description: "Precise tests, accurate results.",
      },
      {
        title: "Dermatologist",
        img: "https://via.placeholder.com/800x400?text=Image+7",
        description: "Healthy skin, glowing confidence",
      },
      {
        title: "General Physician",
        img: "https://via.placeholder.com/800x400?text=Image+8",
        description: "Comprehensive care, healthy living",
      },
      {
        title: "Neurologist",
        img: "https://via.placeholder.com/800x400?text=Image+9",
        description: "Your brain, our priority",
      },
      {
        title: "Physiotherapist",
        img: "https://via.placeholder.com/800x400?text=Image+10",
        description: "Restoring movement, improving life",
      },
      {
        title: "Pediatrician",
        img: "https://via.placeholder.com/800x400?text=Image+11",
        description: "Caring for children's wellness",
      },
      {
        title: "Pulmonologist",
        img: "https://via.placeholder.com/800x400?text=Image+12",
        description: "Breathing easy, health restored",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 4;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < slidesData.length - slidesToShow ? prevIndex + 1 : 0
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : slidesData.length - slidesToShow
      );
    };
  
    // Auto-slide functionality
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3 seconds interval
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);
  
    useEffect(() => {
      const handleResize = () => setCurrentIndex(0);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    // doctoropinio

    const [activeSlides, setActiveSlides] = useState('doctor');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const doctorSlides = [
    'Detailed medical explanation about health care.',
    'Expert advice on how to maintain a healthy lifestyle.',
    'Tips on managing chronic conditions effectively.'
  ];

  const patientSlides = [
    'Real-life experience with the treatment process.',
    'How the treatment helped improve my quality of life.',
    'Personal journey with the doctors and staff.'
  ];

  const slides = activeSlides === 'doctor' ? doctorSlides : patientSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides]);

  const showSlides = (type) => {
    setActiveSlides(type);
    setCurrentSlideIndex(0); // Reset to the first slide when switching
  };

  return (
    <>
     {/* HEADER PART */}
    <>
  
    <div className="App">
      <header className="header">
        <div className="header-container">
          {/* Logo Section (Left Side) */}
          <div className="logo">
            <img
              src="logo.png" // Replace with your actual logo path
              alt="logo"
              width="100"
              height="100"
            />
          </div>

          {/* Navigation Bar (Center) */}
          <nav className="navbar">
            <ul>
              <li><a href="#home">Find a Doctor</a></li>
              <li><a href="#about">Verify a Doctor</a></li>
              <li><a href="#services">SOS</a></li>
              <li><a href="#blog">Home Delivery Medicines</a></li>
              <li><a href="#contact">Micro Insurance</a></li>
              <li><a href="#contact">Regular Insurance</a></li>
            </ul>
          </nav>

          {/* Login/Signup Button (Right Side) */}
          <div className="auth-buttons">
            <button className="login-btn" onClick={handleButtonClick}>
              Login/Sign Up
            </button>
          </div>
        </div>
        
      </header>
    </div>

    </>


    
    {/* padding part */}
    <>
    <div className="moving-text-container">
      <p className="moving-text">
        With our Verified Doctor app, your health is always within reach.
      </p>
    </div>
    </>


    {/* Dropdown Part */}


      <>
  <div>
      {/* Dropdown for country and state */}
      <div className="dropdown-container">
        <div className="input-container">
          <select id="country" value={country} onChange={updateStates}>
            <option value="">Location</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
        </div>

        <select id="state" value={selectedState} disabled={!country}>
          <option value="">Select a state</option>
          {country && states[country].map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* Search input for doctor types */}
      <div className="search-container2">
        <div className="search-icon"></div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search doctors, clinics, hospitals, etc."
          autoComplete="off"
        />
        {filteredDoctors.length > 0 && (
          <div id="dropdown" className="dropdown">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => selectDoctorType(doctor)}
              >
                {doctor}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Heading */}
      <div className="h1">
        <h1>Get Expert Medical Care Online or In-Clinic for Any Health Need</h1>
      </div>
    </div>
</>


{/* DropSlider */}

<>
<div className="slider">
      <div className="slides-container">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            gridTemplateColumns: `repeat(${slidesData.length}, 1fr)`,
          }}
        >
          {slidesData.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="text-above">{slide.title}</div>
              <img src={slide.img} alt={slide.title} />
              <div className="text-below">{slide.description}</div>
              <div className="buttons">
                <button className="blue-button">Online</button>
                <button className="pink-button">Clinic</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nav-buttons">
        <button onClick={prevSlide} disabled={currentIndex === 0}>
          &#10094; 
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === slidesData.length - slidesToShow}
        >
           &#10095;
        </button>
      </div>
    </div>
    </>


{/* doctoropinion */}
    <>
    <div className="body3">
      <div className="container3">
        {/* Option Buttons */}
        <div className="option-buttons3">
          <button onClick={() => showSlides('doctor')}>Doctor's Opinion</button>
          <button onClick={() => showSlides('patient')}>Patient's Opinion</button>
        </div>

        {/* Header Text */}
        <div className="header-text3">
          {activeSlides === 'doctor' ? 'Opinions from Our Doctors' : 'Opinions from Our Patients'}
        </div>

        {/* Slides */}
        <div className="slides-container3">
          <div className="slide3">{slides[currentSlideIndex]}</div>
        </div>
      </div>
    </div>
    {/* lastpart */}
    </>
    <div className="body4">
      <div className="container4">
        <div className="preview">

          {/* If the image is in the public folder, use relative path */}
          <img
            src="logo.png"
            height="400px"
            width="900px"
            alt="App Preview"
          />
        </div>
        <div className="info">
          <h2 className="title">Download VDr app</h2>
          <p className="description">
            Consult with India's top doctors via video on VDr app. Get 24/7 access to healthcare.
          </p>
          <div className="store-buttons">
            <div className="store-button">
              {/* Make sure to place the image in the public folder or import them directly */}
              <img
                src="logo.jpg"
                alt="Google Play"
                style={{ width: '30px', borderRadius: '20px' }}
              />
              <span>Play Store</span>
            </div>
            <div className="store-button">
              <img
                src="logo.png"
                alt="Apple App Store"
                style={{ width: '30px', borderRadius: '20px' }}
              />
              <span>App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <>

    </>
    {/* footerpart */}
    <>
    <div className="desktop-1">
      <div className="frame-6">
        <div className="footer">
        <div className="VDr-App">
            <div className="VDr-App2">VDr-App</div>
          </div> 
          <div className="about-us">
            <div className="about-us2">About Us</div>
          </div>
          <div className="blog">
            <div className="blog2">Blog</div>
          </div>
          <div className="careers">
            <div className="careers2">Careers</div>
          </div>
          <div className="press">
            <div className="press2">Press</div>
          </div>
          <div className="contact-us">
            <div className="contact-us2">Contact Us</div>
          </div>
          <div className="for-patient">
            <div className="for-patient2">For Patients</div>
          </div>
          <div className="search-for-doctors">
            <div className="search-for-doctors2">Search for Doctors</div>
          </div>
          <div className="search-for-clinics">
            <div className="search-for-clinics2">Search for Clinics</div>
          </div>
          <div className="search-for-hospitals">
            <div className="search-for-hospitals2">Search for Hospitals</div>
          </div>
          <div className="v-dr-plus">
            <div className="v-dr-plus2">VDr Plus</div>
          </div>
          <div className="read-health-articles">
            <div className="read-health-articles2">Read Health Articles</div>
          </div>
          <div className="read-about-medicines">
            <div className="read-about-medicines2">Read About Medicines</div>
          </div>
          <div className="v-dr-drive">
            <div className="v-dr-drive2">VDr Drive</div>
          </div>
          <div className="health-app">
            <div className="health-app2">Health App</div>
          </div>
          <div className="for-doctors">
            <div className="for-doctors2">For Doctors</div>
          </div>
          <div className="v-dr-profile">
            <div className="v-dr-profile2">VDr Profile</div>
          </div>
          <div className="for-clinics">
            <div className="for-clinics2">For Clinics</div>
          </div>
          <div className="v-dr-pro">
            <div className="v-dr-pro2">VDr Pro</div>
          </div>
          <div className="v-dr-reach">
            <div className="v-dr-reach2">VDr Reach</div>
          </div>
          <div className="ray-by-v-dr">
            <div className="ray-by-v-dr2">Ray by VDr</div>
          </div>
          <div className="ray-tab">
            <div className="ray-tab2">Ray Tab</div>
          </div>
          <div className="for-hospitals">
            <div className="for-hospitals2">For Hospitals</div>
          </div>
          <div className="insta-by-v-dr">
            <div className="insta-by-v-dr2">Insta by VDr</div>
          </div>
          <div className="qikwell-by-v-dr">
            <div className="qikwell-by-v-dr2">Qikwell by VDr</div>
          </div>
          <div className='vdrprofil'>
            VDr Profile
          </div>
          <div className="vdrreach"> VDr Reach</div>
          <div className="v-dr-drive3">
            <div className="v-dr-drive4">VDr Drive </div>
          </div>
          <div className="more">
            <div className="more2">More</div>
          </div>
          <div className="help">
            <div className="help2">Help</div>
          </div>
          <div className="developers">
            <div className="developers2">Developers</div>
          </div>
          <div className="privacy-policy">
            <div className="privacy-policy2">Privacy Policy</div>
          </div>
          <div className="TermsConditions">
          Terms & Conditions
          </div>
          <div className='PCSTC'>
          PCS T&C
          </div>
          <div className='HealthcareDirectory'>
          Healthcare Directory
          </div>
          <div className='VDrHealthWiki'>
          VDr Health Wiki
          </div>
          <img class="image" src="logo.png" />

        </div>
      </div>
    </div>
    </>
    </>
    
  );
}

export default App;
