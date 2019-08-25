import axios from 'axios';


export const register = newUser=>{
   
        return  axios.post('organisation/register',{
                    username:newUser.username, 
                    password:newUser.password,
                    name:newUser.name,
                    description:newUser.description,
                    zipcode:newUser.zipcode,
                    street_address:newUser.street_address,
                    city:newUser.city,
                    province:newUser.province,
                    country:newUser.country,  
                    email:newUser.email,
                    phonenumber:newUser.phonenumber
                })
                    .then(res=>{
                        console.log('Registered!')
                    })
        
}


export const login = user=>{
    return(
        axios.post('organisation/login',{ 
            password:user.password, 
            email:user.email,
        })
            .then(res=>{
                console.log(res);
                localStorage.setItem('usertoken', res.data)
                return res.data
            })
            .catch(err=>{
                console.log("Error: "+err)
            })
    )
}
