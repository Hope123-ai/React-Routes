import { useState,useEffect } from "react";


function ListUser(){
    const [users,setUser] = useState([])
    useEffect(() => {
        fetch (`https://reqres.in/api/users?page=2`)
        .then(response=>response.json())
        .then((response)=>{
            console.log(response)
           setUser(response.data)
        })
    }, [])

    function goToUser(id){
        window.location.href="/#/user"+"/"+ id

    }
    return(
        <div>
            {
                users.map(item=>{
                    return (
                        <div className="list-user" onClick={(e)=>goToUser(item.id)}>
                            <img src={item.avatar}></img>
                            <div className="list-info">
                            <div>{item.email} </div>
                            <div>{item.first_name} </div>
                            <div>{item.last_name} </div>
                            </div>
                            </div>
                    )

                })
            }
        </div>
    )
}





export default ListUser;