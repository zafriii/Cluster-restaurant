import React , {useState} from 'react'
import './contact.css'

function Reservation() {

    const [name, setName] = useState('');
    
    const [email, setEmail] = useState('');
    
    const [phone, setPhone] = useState('');

    const [date, setDate] = useState('');

    const [time, setTime] = useState('');

    const [seats, setSeats] = useState(0);

    const [message, setMessage] = useState('');

    const [showThanks, setShowThanks] = useState(false);

    const handleChangeemail = (event) => {
        const inputValue = event.target.value;
        if (/^\S+@\S+\.\S+$/.test(inputValue)) {
          setEmail(inputValue);
        }
      };

    const handleChangenum = (event) => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
          setPhone(inputValue);
        }
      };

    const handleChangeseat = (event) => {
        const newValue = event.target.value < 0 ? 0 : event.target.value;
        setSeats(newValue);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        setShowThanks(true);

        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setSeats('');
        setMessage('');

        setTimeout(() => setShowThanks(false), 3000);
  

        
      };

  return (
    <>

      

    
    
    <div className="reservation">
    
            <h3>Reservations</h3>
            <p>Make your dates, family dates, occasions memorable with us</p>

     <div className="reservation-container">


     <form onSubmit={handleSubmit}  className="reserve-inputs"> 

                    
                        <label htmlFor="name">Name:</label>
                        <input type='text' id="name"  
                            placeholder='Enter your name...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="off"/>

                        <label htmlFor="email">Email:</label>
                        <input type='text' id="email"  
                            placeholder='Enter your email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            // onChange={handleChangeemail}
                            required
                            autoComplete="off"
                            />

                        <label htmlFor="phone">Phone Number:</label>
                        <input type='text' id="phone"  
                            placeholder='Enter your phone number...'
                            value={phone}
                            onChange={handleChangenum}
                            required
                            autoComplete="off"/>

                        <label htmlFor="date">Date:</label>
                        <input type='date' id="date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)} 
                            required
                            autoComplete="off"/>

                        <label htmlFor="time">Time:</label>
                        <input type='time' id="time" 
                            value={time}
                            onChange={(e) => setTime(e.target.value)} 
                            required
                            autoComplete="off"/>

                        <label htmlFor="seats">Seats:</label>
                        <input type='number' id="seats"  
                            placeholder='Enter number of seats...'
                            value={seats}
                            onChange={handleChangeseat}
                            required
                            autoComplete="off"/>

                        <label htmlFor="message">Occasion:</label>
                        <textarea id="message"
                            name="Message"
                            cols="30"
                            rows="5"
                            required
                            autoComplete="off"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>

                <input type="submit" value="Reserve" className='submit'/>


                {showThanks && (
                            <div className="thanks-popup">
                            <p>Thank you for your reservation!</p>
                            </div>
                        )}


    </form>


     </div>

    </div>


    
    
    </>
  )
}

export default Reservation