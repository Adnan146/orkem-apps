import { async } from "regenerator-runtime";

const main = ()=>{
    let hporkem=[];
    
    const animalList = document.getElementById("orkem-list");
    // let hpanimal = [];
    // console.log(searchBar);

    // Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredorkem = hporkem.filter((orkem) => {
            return (
                orkem.first_name.toLowerCase().includes(searchString) || orkem.last_name.toLowerCase().includes(searchString)
            );
        });
        displayorkem(filteredorkem);
    });

    
    const loadorkem=async()=>{
        try{
           const res=await fetch('https://my-json-server.typicode.com/Adnan146/apps-orkem-api/orkem');
           hporkem=await res.json();
           displayorkem(hporkem);
           
        }catch (err){
            console.log(err);
        }
    };

    const displayorkem=(orkem)=>{
        const orkemList=document.querySelector("#orkem-list");
        orkemList.innerHTML="";
        orkem.forEach((item)=>{
            orkemList.innerHTML+=`
            <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 shadow">
            
                <img url="../src/${item.image}" class="card-img-top" >
                <div class="card-body text-center">
                <h5 class="card-title mb-0"><a href="${item.link}" target="_blank">${item.first_name}</a></h5>
                <div class="card-text text-black-50">(${item.last_name})</div>
                </div>
            </div>
            </div>`;
        });
        
    };
    loadorkem();
    
};
export default main;