import PropsType from 'prop-types'

function AdminDashboard(props){
    return(
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}

AdminDashboard.propsType = {
    name: PropsType.string,
    age: PropsType.number,
    
}

export default AdminDashboard