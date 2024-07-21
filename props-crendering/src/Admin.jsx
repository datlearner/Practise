import PropTypes from 'prop-types'

function AdminDashboard(props){
    return(
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

AdminDashboard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default AdminDashboard