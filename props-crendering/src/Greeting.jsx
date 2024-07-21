/**
 * Exercise 1: Greeting Component
Objective: Create a Greeting component that takes a name prop and displays a personalized greeting.

Instructions:

Create a Greeting component in a new file.
The component should accept a name prop.
Render a message like "Hello, [name]!".
Use this component in your App component with different names.

 */
import PropTypes from 'prop-types'

function Greeting(props) {
    return(
        <div>
            <h2> Hello {props.name}! </h2>
        </div>
    )
}

Greeting.propTypes = {
    name: PropTypes.string
}

export default Greeting