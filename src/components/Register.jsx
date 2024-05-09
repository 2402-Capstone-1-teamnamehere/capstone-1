import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({BASE_API_URL, token, setToken}) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`${BASE_API_URL}/users`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email,
  //         username,
  //         password,
  //         name:{
  //           firstname,
  //           lastname
  //         },
  //         address:{
  //           city,
  //           street,
  //           number,
  //           zipcode
  //         },
  //         phone
  //       })
  //     })
  //     const result = await response.json();
  //     setToken(result);
  //     console.log(result);
  //   } catch(error) {console.log(error)}

    return (
      <>
        <h2 id="h2A">Demo Registration Form</h2>

        <form className="form">
          <label>
            Username <br/>
            <input type="text" size={30} value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Password <br/>
            <input type="text" size={30} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Email <br/>
            <input type="text" size={30} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <br/>
          <label>
            First Name <br/>
            <input type="text" size={30} value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Last Name <br/>
            <input type="text" size={30} value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Primary Phone <br/>
            <input type="tel" size={30} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </label>
          <br/><br/><br/>
          <p id="address">ADDRESS</p>
          <br/>
          <label>
            Street <br/>
            <input type="text" size={30} value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Unit # <br/>
            <input type="text" size={30} value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
          </label>
          <br/>
          <label>
            City <br/>
            <input type="text" size={30} value={city} onChange={(e)=>{setCity(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Zipcode <br/>
            <input type="text" size={30} value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}}/>
          </label>
          <br/>
          <label>
            State <br/>
            <input type="text" size={30} value={state} onChange={(e)=>{setState(e.target.value)}}/>
          </label>
          <br/> <br/>
          <button onClick={()=>navigate("/profile")} className="logRegButton">Submit</button>
        </form>
      </>
    )
  }


export default RegisterForm;