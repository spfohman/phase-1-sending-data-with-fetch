function submitData(name, email){
    const data = {

        name: name,
        email:email
    };
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data),
};
    
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
      
       let info = document.createElement('ul');
       info.innerHTML=`
        <li> ${object['id']}</li>
        <li> ${object['name']}</li>
        <li>${object['email']}</li>`
        document.querySelector('body').appendChild(info);
    })
    .catch(function(message){
        let msg = document.createElement('ul');
        msg.innerHTML=`
        <p>${message}</p>`
        document.querySelector('body').appendChild(msg);
        //alert("Bad Data!");
        //console.log(error.message);
    });

}