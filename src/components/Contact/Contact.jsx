import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import emailicon from '../../assets/emailicon.png'
import phoneicon from '../../assets/phoneicon.png'
import addressicon from '../../assets/addressicon.png'
import nextarrow from '../../assets/right-arrow_271228.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b18c266c-7c35-4c46-bdca-da7a8dba6187");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contactcol">
        <h3>Send us a message <img src={msgicon} alt="" /></h3>
        <p>Feel Free to reach out through contact from or find our 
            contact information below. Your feedback and suggestions
            are important to us as we strive to provide exceptional 
            services to out Customers.
            <ul>
                <li> <img src={emailicon} alt="" />contact@pastrolpipes.com</li>
                <li> <img src={phoneicon} alt="" />+91 9822360999</li>
                <li><img src={addressicon} alt="" />50 gurukul nivas,Bidar<br/>
                KA 411019 India</li>
            </ul>
        </p>
      </div>
    <div className="contactcol">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name'placeholder='Enter Your name'
            required ></input>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>write your requirements</label>
            <textarea type="message" name='message' rows='5' placeholder='Enter your message'required></textarea> 
            <button type='submit' className='btn btndarkbtn'>Submit now <img src={nextarrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact
