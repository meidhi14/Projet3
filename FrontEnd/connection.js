document.formLogin.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const user = {
        email: this.email.value,
        password: this.password.value
    };

    console.log("email",this.email.value)
    console.log("password",this.password.value)
    if(this.email.value == "" || this.password.value == ""){
        alert("un des champs est vide")
    }else{

  

    const res = await fetch('http://localhost:5678/api/users/login', {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const data = await res.json();

    sessionStorage.setItem('userId',data.userId);
    sessionStorage.setItem('token', data.token);
    if (data.token) {
       document.location.href="./index.html";
    } else {
        alert("Le mot de passe ou/et l'identifiant ne sont pas corrects");
    }
}
    
});

