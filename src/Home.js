import { useState, useEffect } from 'react';
import './App.css';
import { RegisterMedic } from './components/medic';
import { RegisterPatient } from './components/patient';
import { RegisterPharmacy } from './components/pharmacy';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home() {

  const [role, setRole]=useState('patient')

  const [patientContentVisible, setPatientContentVisible] = useState(false)
  const [medicContentVisible, setMedicContentVisible] = useState(false)
  const [pharmacyContentVisible, setPharmacyContentVisible] = useState(false)

  useEffect(() => {
    role === "patient"
      ? setPatientContentVisible(true)
      : setPatientContentVisible(false);
    role === "medic" ? setMedicContentVisible(true) : setMedicContentVisible(false);
    role === "pharmacy" ? setPharmacyContentVisible(true) : setPharmacyContentVisible(false);
  }, [role]);

  const handleOnChange=(e) =>{
    setRole(e.target.value)
  }
  const renderResult = () => {
    let result;
    role === "selectRegister"
      ? (result = "patient")
      : (result = role);
    return result;
  };

  return (

    <div className="App">
      <div>
        <h1> Register as a {renderResult()}</h1>
      </div>
      <div className='select'>
        <select className='button-29' value={role} onChange={handleOnChange}>
          <option value="patient">Patient</option>
          <option value="medic">Medic</option>
          <option value="pharmacy">Pharmacy</option>
        </select>
        <p className="goto">Already registed?<Link to="/login"> Click Here </Link></p>
      </div>
      {patientContentVisible && <RegisterPatient />}
      {medicContentVisible && <RegisterMedic />}
      {pharmacyContentVisible && <RegisterPharmacy></RegisterPharmacy>}

    </div>
    



  );
}

export default Home