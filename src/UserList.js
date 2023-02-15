const UserList = ({ user }) => {
    return (
        <div className="App">
            < div className="container" >
            {user.map((el) =>

                
                    <div className="card">
                        <img src="https://e7.pngegg.com/pngimages/710/126/png-clipart-man-and-woman-illustration-icon-design-user-icon-men-and-women-users-child-women-accessories-thumbnail.png" alt="Person" class="card__image" />
                        <div className="card__name">
                            <h6>{el.name}</h6>
                            <h6>{el.username}</h6>
                        </div>
                       

                    </div>
                 )}
            </div>
        </div>
    )



}

export default UserList




