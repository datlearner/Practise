import PropType from 'prop-types'

function AdminDashboard(props){
    return(
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

AdminDashboard.propsType = {
    name: PropType.string,
    age: PropType.number,
    isStudent: PropType.bool
}

export default AdminDashboard