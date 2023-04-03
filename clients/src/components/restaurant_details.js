import { useEffect, useState } from "react";
import axios from "axios";


function RestaurantDetails({userId}) {
  console.log(userId)
  const[userDetails,setUserDetails]=useState([])

  useEffect(() => {
    axios.get(`https://challenge-8bmq.onrender.com/restaurants/${userId}`).then((res) => {
      setUserDetails(res.data);
    });
  }, [userId]);

  console.log(userDetails)

  return ( 
    <main>
      <h2>{userDetails.address}</h2>
    </main>
   );
}

export default RestaurantDetails;