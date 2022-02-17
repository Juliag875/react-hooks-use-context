import React, {useState} from 'react';

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({children}){
  const [user, setUser] = useState(null)

  // const currentUser ={
  //   name:"Julia",
  //   interests: ["Coding", "Biking", "Words ending in 'ing'"],
  // } pass it to value
  return <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>

  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
}

export {UserContext, UserProvider};