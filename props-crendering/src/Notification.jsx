/**
 * Exercise 4: Notification Component
    Objective: Create a Notification component that shows different messages based on props.

    Instructions:

    Create a Notification component in a new file.
    The component should accept a type prop which can be either "success" or "error".
    If type is "success", display a success message.
    If type is "error", display an error message.
    Use this component in your App component to display both types of notifications.

 */
import PropTypes from 'prop-types';

function Notification(props){
    return(
        props.name ? 'Success' : 'error'
    );
}


Notification.propTypes = {
    name: PropTypes.bool
}

export default Notification