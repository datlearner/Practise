/**
 * 
Exercise 2: User Status Component
Objective: Create a UserStatus component that displays whether a user is logged in or not based on a prop.

Instructions:

Create a UserStatus component in a new file.
The component should accept an isLoggedIn prop.
If isLoggedIn is true, display "Welcome back!".
If isLoggedIn is false, display "Please log in.".
Use this component in your App component and toggle the isLoggedIn prop.
*/

import PropTypes from 'prop-types'

function UserStatus(props){
    return(
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn){
            return <h2>Welcome</h2>
        }

    )
}


export default UserStatus