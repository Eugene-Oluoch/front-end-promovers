/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import { AuthProvider } from './components/context/AuthContext'
import Nav from './components/nav/Nav';
import Home from './Home';
import Contact from './Contact'
import Service from "./Service";
import About from './components/About';
import axios from 'axios';


import Userlogs from './components/activity-logs-user/Userlogs';
import Moverlogs from './components/activity-logs-mover/Moverlogs';

import './App.css';
import Movers from './components/Movers';
import Book from './components/Book';
import Footer from './components/Footer';


import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

//AIzaSyAMNx-zK5ZTkXO5bkqgQABAerof4yWBlc0
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMNx-zK5ZTkXO5bkqgQABAerof4yWBlc0&libraries=places"></script>;

 
function App() {

const [bookings,setBookings]=useState([])

  // add booking
  const makeBooking= ()=>{
    axios.post("https://promovers.herokuapp.com/requests/new-request/", {
      // currentLocation,
      // newLocation,
      // id_mover,
      // movingDate,
      // Package,
      // packageDescription, 
      // id_user,
    }).then(res=>console.log('posting data',res)).catch(err=>console.log(err));
      // alert('hello')
    // const res = await fetch("https://promovers.herokuapp.com/requests/new-request/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(booking),
    //   }
    // );
    // const data = await res.json()
    //   console.log(data)
    // setBookings([...bookings,data]) 
  }
  const [movers, setMovers] = useState([]);

  useEffect(() =>{
    const getMovers = async () =>{
      const moversFromServer =await fetchMovers()
      setMovers(moversFromServer)
    }
    getMovers();
  },[bookings]);

  //fetch movers
  const fetchMovers = async (id) =>{
    const res = await fetch("https://promovers.herokuapp.com/movers/");
    const data = await res.json();
    return data;

   
  }

  return (
    <>


      <AuthProvider>    
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} onBook={makeBooking}></Route>
           <Route exact path="/service" element={<Service/>} />
          <Route path="/movers" element={ movers.length > 0 ?( <Movers movers={movers} />):('There are no registered movers yet/ the backend server is not running')}></Route>
           <Route exact path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user/logs" element={<Userlogs />}></Route>
          <Route path="/mover/logs" element={<Moverlogs />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user/logs" element={<Userlogs />}></Route>
          <Route path="/mover/logs" element={<Moverlogs />}></Route>
          <Route path="/movers/book/:name/:id" element={<AuthProvider><Book onBook={makeBooking} /></AuthProvider>}></Route>
        </Routes>
      </AuthProvider>

{/* 
      <Footer></Footer> */}

    </>
  );
}

 export default App


