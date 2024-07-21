
function AdminDashboard(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
            <p>isStudent: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}

export default AdminDashboard