const icons = document.querySelector('.icons');


document.querySelector('.fa-circle-xmark').style.display = 'none';
icons.addEventListener('click',()=>{
	
	if(document.querySelector('.navlinks').style.top === '-100vh'){
		document.querySelector('.fa-circle-xmark').style.display = 'inline-block';
		document.querySelector('.fa-bars').style.display = 'none';
		document.querySelector('.navlinks').style.top = '0';
	}else{
		document.querySelector('.fa-bars').style.display = 'inline-block';
    document.querySelector('.fa-circle-xmark').style.display = 'none';
		document.querySelector('.navlinks').style.top = '-100vh';
	}
	
})