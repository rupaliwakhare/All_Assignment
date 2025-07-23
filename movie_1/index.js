
let api_kay = " c2f0ba64";
let api = "http://www.omdbapi.com/?i=tt3896198&apikey=c2f0ba64"

// url = "https://www.omdbapi.com/?i=tt3896198&apikey=c2f0ba64";


const moviedata = async()=> {
    let res = await fetch (api);
    let data = await res.json();
    // console.log(data);
    console.log(input.value);
    

   display()
    
}
moviedata()


const display = ()=>{
    let tital = document.createElement("h2")
    let img = document.createElement("img")
   
    
}



