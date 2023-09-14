const form = document.querySelector("#locationForm");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchterm = form.elements.pincode.value;
    const res = await axios.get(`https://api.postalpincode.in/pincode/${searchterm}`);
    console.log(res.data[0].PostOffice[0])
    postoffice(res.data[0].PostOffice)
})

/*const fillrestform = (details)=>{
    document.getElementById('state').innerHTML=details.PostOffice[0].State;
    document.getElementById('district').innerHTML=details.PostOffice[0].District;
    document.getElementById('city').innerHTML=details.PostOffice[0].Block;
}*/

const postoffice = (input)=>{
    for(let result of input){
        /*const pst = document.createElement("PST");
        pst.src = result.Block;
        document.body.append(pst);*/
        console.log(result.Name)
    }
}