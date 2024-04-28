import '../assets/css/sign_up.css';
import { Link } from 'react-router-dom';



const SignUp = () => {
  return (
    <div id="app">
      <div className="form-wrapper">
        <section className="container">
          <form action="#" className="form">
            <label><center><h2 className='register'>Registration Form</h2></center></label>
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" required />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="text" placeholder="Enter email address" required />
            </div>
            <div className="column">
              <div className="input-box">
                <label>Phone Number</label>
                <input type="number" placeholder="Enter phone number" required />
              </div>
              <div className="input-box">
                <label>Birth Date</label>
                <input type="date" placeholder="Enter birth date" required />
              </div>
            </div>
            <div className="gender-box">
              <h3>Gender</h3>
              <div className="gender-option">
                <div className="gender">
                  <input type="radio" id="check-male" name="gender" checked />
                  <label htmlFor="check-male">male</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-female" name="gender" />
                  <label htmlFor="check-female">Female</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-other" name="gender" />
                  <label htmlFor="check-other">prefer not to say</label>
                </div>
              </div>
              <button>Submit</button>
            </div>
          </form>
          <div className='login-link'>
            <p>
              Already an User ? <Link to="/login">Login</Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
