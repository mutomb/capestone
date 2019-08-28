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
                localStorage.setItem('usertoken', res.data)
                return res.data
            })
            .catch(err=>{
                console.log("Error: "+err)
            })
    )
}

export const getEvents= email=>{
    return( 
        axios.post('eventDetails/',{
            owner: email
        })
            .then(res=>{
                return res.data
            })
            .catch(err=>{
                console.log('Error: anme '+err)
            })
    )

}
export const addEvent=event=>{
    return(
        axios.post('eventDetails/add',{
            owner:event.owner,
            title:event.title,
            when:event.when,
            where:event.where,
            what: event.what
        })
        .then(res=>{
            console.log(`${event.title} event uploaded`);
            return res;
        })
        .catch(err=>{
            console.log(err)
            return err;
        })
    )
}
export const getPosts= email=>{
    return( 
        axios.post('postDetails/',{
            owner: email
        })
            .then(res=>{
                return res.data
            })
            .catch(err=>{
                console.log('Error: anme '+err)
            })
    )

}
export const addPost=post=>{
    return(
        axios.post('postDetails/add',{
            owner:post.owner,
            title:post.title,
            what: post.what
        })
        .then(res=>{
            console.log(`${post.title} post uploaded`);
            return res;
        })
        .catch(err=>{
            console.log(err)
            return err;
        })
    )
}

export const updateOrganisation=organisation=>{
    
    return axios.post('organisation/update',{
            username:organisation.username, 
            password:organisation.password,
            name:organisation.name,
            description:organisation.description,
            zipcode:organisation.zipcode,
            street_address:organisation.street_address,
            city:organisation.city,
            province:organisation.province,
            country:organisation.country,  
            email:organisation.email,
            phonenumber:organisation.phonenumber  
        })
            .then(res=>console.log(res))     
}

export const uploadProfilePicture=(imageFormObj)=>{
   return  axios.post(`http://localhost:5000/image/uploadmulter`, imageFormObj)
                .then((data) => {
                    if (data.data.success) {
                        return data.data;
                    }
                    else{
                        return false;
                    }
                })
                .catch((err) => {
                    alert("Error while uploading image using multer"+err);
                }); 
} 
export const getProfilePicture=(email)=>{
    return  axios.post(`http://localhost:5000/image/${email}`)
                .then((data) => {
                    return data.data;           
                })
                .catch((err) => {
                    alert("Upload profile picture"+err);
                }); 
}


export const uploadEventPicture=(imageFormObj)=>{
    return  axios.post(`http://localhost:5000/eventimage/add`, imageFormObj)
                 .then((data) => {
                    console.log(data)
                     if (data.data.success) {
                         return data.data;
                     }
                     else{
                         return false;
                     }
                 })
                 .catch((err) => {
                     console.log('not worked')
                     alert("Error while uploading image using multer"+err);
                 }); 
 }

 export const uploadPostPicture=(imageFormObj)=>{
    return  axios.post(`http://localhost:5000/postimage/add`, imageFormObj)
                 .then((data) => {
                    console.log(data)
                     if (data.data.success) {
                         return data.data;
                     }
                     else{
                         return false;
                     }
                 })
                 .catch((err) => {
                     console.log('not worked')
                     alert("Error while uploading image using multer"+err);
                 }); 
 }