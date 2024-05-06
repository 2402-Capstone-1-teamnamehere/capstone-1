import { useState } from 'react';

const RegisterForm = ({BASE_API_URL, token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/users`, {
        method: "POST",
        body:JSON.stringify({
          email,
          username,
          password,
          name:{
            firstname,
            lastname
          },
          address:{
            city,
            street,
            number,
            zipcode
          },
          phone
        })
      })
      const result = await response.json();
      setToken(result);
      console.log(result);
    } catch(error) {console.log(error)}

    return (
      <>
        <h2>Demo Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Username <br/>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Password <br/>
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label>
          <label>
            Email <br/>
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label>
            First Name <br/>
            <input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
          </label>
          <label>
            Last Name <br/>
            <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
          </label>
          <p id="address">ADDRESS</p>
          <br/>
          <label>
            City <br/>
            <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
          </label>
          <label>
            Street <br/>
            <input type="text" value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
          </label>
          <label>
            Number <br/>
            <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
          </label>
          <label>
            Zipcode <br/>
            <input type="text" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}}/>
          </label>
          <label>
            Primary Phone <br/>
            <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </label>
          <br/> <br/>
          <button>Submit</button>
        </form>
      </>
    )
  }
}

export default RegisterForm;