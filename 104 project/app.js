var salon={
    name:"Pampered Pets",
    telephone:"555-555-555",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
      
          
}   
    var counter=0;
    class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    this.id=counter++;
                }
            }
  

/*console.log(`${salon.name} opens from ${salon.hour.open} to ${salon.hour.close}.`)*/

function displayInfo(){
document.getElementById("footer-site").innerHTML=`
<p>${salon.name}</p>
<p>${salon.address.street}, ${salon.address.number} telephone number: ${salon.telephone}
<p>The salon is open from ${salon.hour.open} to ${salon.hour.close}</p>
`;
}



/*document.write(`There are ${salon.pets.length} pets in the salon`);


for(var i=0;i<salon.pets.length;i++){
  document.write(`<p>Pet Name: ${salon.pets[i].name}</p>`)
}*/



function register(){
//create the vars and store the values from the inputs
var nameInput = document.getElementById("petName").value;
var ageInput = document.getElementById("petAge").value;
var genderInput = document.getElementById("petGender").value;
var breedInput = document.getElementById("petBreed").value;
var serviceInput = document.getElementById("petService").value;
var ownerNameInput = document.getElementById("ownerName").value;
var contactPhoneInput = document.getElementById("contactPhone").value;
if(nameInput!="" && contactPhoneInput!=""){
//console.log(nameInput, ageInput, genderInput, breedInput, serviceInput, ownerNameInput, contactPhoneInput);
//create the object
var thePet = new Pet(nameInput, ageInput, genderInput, breedInput, serviceInput, ownerNameInput, contactPhoneInput);
//push the object 
salon.pets.push(thePet);
console.log(salon.pets);
//display the object 
clearInputs();
displayPets();
var alertElement=document.getElementById("alert"); alertElement.classList.remove("hide");
setTimeout(function(){
    alertElement.classList.add("hide");},2000);
}else{
    alert("Add the required information!");
}

}

function clearInputs(){
document.getElementById("petName").value=" ";
document.getElementById("petAge").value=" ";
document.getElementById("petGender").value=" ";
document.getElementById("petBreed").value=" ";
document.getElementById("petService").value=" ";
document.getElementById("ownerName").value=" ";
document.getElementById("contactPhone").value=" ";


}
function displayPets(){
    var tmp='';
    for (var i=0;i<salon.pets.length;i++){
     tmp+=`
      <tr id="${salon.pets[i].id}">
      <td> ${salon.pets[i].name}</td>
      <td> ${salon.pets[i].age}</td>
      <td> ${salon.pets[i].gender}</td>
      <td> ${salon.pets[i].breed}</td>
      <td> ${salon.pets[i].service}</td>
      <td> ${salon.pets[i].ownerName}</td>
      <td> ${salon.pets[i].contactPhone}</td>
      <td><button onclick="deletePet(${salon.pets[i].id});" class="delete-btn">🗑️</button></td>
      </tr>`;

    }
    document.getElementById('table-pets').innerHTML=tmp;
}

function deletePet(petID){
    console.log("Delete pet"+petID);
    //travel the pet's array
    for(var i=0;i<salon.pets.length;i++){
        if(petID==salon.pets[i].id){
            indexDelete=i;
            break;
            
        }
    }
    salon.pets.splice(indexDelete,1);
    //find the pet id
    //remove from the array
    //removed from the html 
    document.getElementById(petID).remove();
}
function searchPet(){
    var searchString=document.getElementById
    ('searchPet').value;
    for(var i=0;i<salon.pets.length;i++){
        if(searchString==salon.pets[i].name){
            var row = salon.pets[i].id;
            document.getElementById(row).classList.add('highlight');

}
    }
}






function init(){
    const scooby=new Pet("Scooby",60,"Male","Dane","Full Service",
    "Shaggy","555-555-555" );
    console.log(scooby);

    const Benny=new Pet("Benny",30,"Male","Yorkie","Full Service",
    "Justine","123-555-555" );
    console.log(Benny);

    const Kayla=new Pet("Kayla",40,"Female","Husky","Full Service",
    "Steph","123-555-555" );

    const Roscoe=new Pet("Roscoe",30,"Male", "Pitbull","Trim nails","Kevin", "755-755-755");

    console.log(Kayla);
    salon.pets.push(scooby);
    salon.pets.push(Benny);
    salon.pets.push(Kayla);
    salon.pets.push(Roscoe);
    displayPets();
    displayInfo();
    
}
window.onload=init;




