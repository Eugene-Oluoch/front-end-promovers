/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import "../css/Booking-form.css";
import { useEffect, useState ,useContext} from "react";
import AuthContext from "./context/AuthContext";
import {useParams,useNavigate} from 'react-router-dom';
import axios from "axios";
 
const Book = ({onBook},props) => {

  let navigate = useNavigate()
  let {user}=useContext(AuthContext)
  const [loading, useLoading] = useState(false);
  const [id_user, setUser] = useState(0);
  const [currentLocation,setCurrentLocation]=useState('');
  const [newLocation,setNewLocation]=useState('');
  const [id_mover, setMover] = useState(0);
  const [movingDate, setMovingDate] = useState("");
  const [Package,setPackage]=useState('');
  const [packageDescription,setPackageDescription]=useState('')

  useEffect(()=>{
    setMover( parseInt(id));
  setUser(parseInt(user.user_id))

  })

  const onSubmit= (e) =>{
    e.preventDefault()
    if(!currentLocation || !newLocation || !id_mover || !Package || !movingDate || !packageDescription){
      alert('please ensure to fill all fields')
      return
    }
    
      axios
        .post("https://promovers.herokuapp.com/requests/new-request/", {
          currentLocation: currentLocation,
          newLocation: newLocation,
          id_mover: id_mover,
          movingDate: movingDate,
          Package: Package,
          packageDescription: packageDescription,
          id_user: id_user,
          is_pending:true
        })
         .then(res=>{
                console.log(res)
                useLoading(false)
                navigate("/userlogs")
                setCurrentLocation('');
                setNewLocation('');
                setMovingDate('');
                setPackage('');
                setPackageDescription('');

            }) 
        useLoading(true)
        .then((res) => console.log("posting data", res))
        .catch((err) => console.log(err));
       
  


  }
   const {id,name} = useParams();
  return (
    <>
      <div className="book">
        { loading ?
            <div className="spinner">
                {<ReactBootStrap.Spinner animation="border" variant="warning" />}
            </div>:''
            }

            
        <form action="" className="book-form" onSubmit={onSubmit}>
          <div className="book-form-title">
            <p>
              Book Your mover <br />
            </p>
          </div>
          <div className="currentLocation-input">
            <input
              type="text"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              name="currentLocation"
              id="currentLocation"
              placeholder="current location"
            />
          </div>
          <div className=" newLocation">
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              name="newLocation"
              id="newLocation"
              placeholder="New location"
            />
          </div>
          <div className="mover">
            <input
              type="text"
              name="mover"
              id="mover"
              placeholder="mover"
              value={name}
              // onChange={(e) =>setMover(e.target.value)}
            />
          </div>
          <div className="movingDate">
            <input
              type="date"
              value={movingDate}
              onChange={(e) => setMovingDate(e.target.value)}
              name="movingDate"
              id="movingDate"
              placeholder="Your moving date"
            />
          </div>
          <div className=" Package">
            <input
              type="text"
              value={Package}
              onChange={(e) => setPackage(e.target.value)}
              name="Package"
              id="Package"
              placeholder="What we are moving for you"
            />
          </div>
          <div className="packageDescription">
            <textarea
              name="packageDescription"
              id="packageDescription"
              cols="30"
              rows="8"
              placeholder="Describe your package"
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="Book">
            <button type="submit" value="book">
              Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Book ;
