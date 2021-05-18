import data from './app.js';
 let row = document.querySelector('.row')
 let search = document.getElementById('search') 
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let dropdownMenu = document.getElementById('dropdown')

dropdownMenu.addEventListener('click',(e)=>{
  console.log(e.target.innerHTML);
  const filteredData = data.filter(el=>{
      return el.name.toLocaleLowerCase().includes(e.target.innerHTML.toLowerCase())
  })
  laodData(filteredData,row)
})
 
search.addEventListener('keyup', ()=>{
    console.log(search.value);
       const filteredData = data.filter(el=>{
        return el.name.toLowerCase().includes(search.value.toLowerCase())
       })
       laodData(filteredData,row)
    });
   nextBtn.addEventListener('click',()=>{
       current_page++
       laodData(data,row)
   });
   prevBtn.addEventListener('click',()=>{
    current_page--
    laodData(data,row)
});     

    let current_page = 0;
    let rows = 6;

function laodData(array, wrapper){
    let html =``

    let start = current_page*rows;
    let end = start+rows;
    let paginate = array.slice(start, end)
    paginate.forEach(el =>{
        html +=`
        <div class="col-lg-4 col-md-6 col-sm-12 my-1">
           <div class="card" style="width: 18rem;">
           <img class="imagess" src="${el.image}" alt="Card image cap">
           <div class="card-body">
               <h5 class="card-title">${el.name}</h5>
               <p class="card-text">${el.description}</p>
               <div class="mb-4>
               <i class=" ${el.rating >= 1 ? "fas fa-star" : el.rating >= 0.5 && el.rating < 1 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               <i class=" ${el.rating >= 2 ? "fas fa-star" : el.rating >= 1.5 && el.rating < 2 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               <i class=" ${el.rating >= 3 ? "fas fa-star" : el.rating >= 2.5 && el.rating < 3 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               <i class=" ${el.rating >= 4 ? "fas fa-star" : el.rating >= 3.5 && el.rating < 4 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               <i class=" ${el.rating >= 5 ? "fas fa-star" : el.rating >= 4.5 && el.rating < 5 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               <i class=" ${el.rating >= 5 ? "fas fa-star" : el.rating >= 4.5 && el.rating < 5 ? "fas fa-star-half-alt" : "far fa-star"}"></i>
               </div>
               <a href="#" class="btn btn-primary ${el.countInStock === 0 ? 'disabled' : ''}">Go somewhere</a>
           </div>
       </div> 
   </div>`
   wrapper.innerHTML = html
    })
   
}


laodData(data, row)
 

