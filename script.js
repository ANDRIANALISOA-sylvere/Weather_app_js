async function envoyer()
{
    var input=document.getElementById("inputcity").value;
    var city=document.getElementById("city");
    var degre=document.getElementById("degre");
    var img=document.getElementById("img");
    var error=document.getElementById("error");
    var description=document.getElementById("description");
    if (input!=='') {
        await fetch(`http://api.weatherstack.com/current?access_key=b2aea06412db4e1b549f480d34df0b09&query=${input}`)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            city.innerHTML=data.location.name;
            degre.innerHTML=data.current.temperature+" °C";
            img.src=data.current.weather_icons;
            description.innerHTML=data.current.weather_descriptions;
        })
        .catch(err=> {
            error.innerHTML=err;
            error.classList.add("alert");
            error.classList.add("alert-danger");
        });
    }else
    {
        alert("Compléter le champ par le nom de la ville");
    }
}