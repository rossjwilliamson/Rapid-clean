

let mobileHeaderLinks = document.querySelector('#mobile-header-links');
let headerLinks = document.querySelector('#header-links');
let socialLinks = document.querySelector('#sociallinks');
let li = document.querySelectorAll('li');

mobileHeaderLinks.addEventListener('click',() => {
         
        
        


	   if (window.getComputedStyle(headerLinks).display === 'block') {
			 headerLinks.style.display = 'none';
			 
			
			
		}else{
			 headerLinks.style.display = 'block';
			
			 
		}


});


window.addEventListener('resize',()=> {

	if(window.innerWidth > 750){

		headerLinks.style.display = 'block';
		
	}else{
		headerLinks.style.display = 'none';

	}
})




li.forEach( (list)=>{

 
 list.addEventListener('click',() => {
  
  swal(list.innerHTML,"","success");


 });



});

























