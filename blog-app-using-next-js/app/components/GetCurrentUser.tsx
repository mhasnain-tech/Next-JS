

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";


export let userId = "";
const GetCurrentUser = () => {
try {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user);
      
      userId  = user.uid
    } else {
      // User is signed out
      // ...
    }
  });
} catch (error) {
  console.log(error.message);
  console.log(error.code);
  
}
useEffect(() => {
    GetCurrentUser()
    },[])
return (
<>
</>
)
  
}
console.log(userId);


