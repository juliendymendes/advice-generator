const API_URL = 'https://api.adviceslip.com/advice'

async function generateNewAdvice(){
	const adviceIdElement = document.getElementById('advice-id')
	const adviceElement = document.getElementById('advice')

	const loadingIndicatorElement = document.querySelector('.loading-indicator')
	loadingIndicatorElement.style.display = 'block'
	const advice = await getAdvice() 
	loadingIndicatorElement.style.display = 'none'
	
	adviceIdElement.innerText = advice.slip.id
	adviceElement.innerText = advice.slip.advice
}

async function getAdvice(){
	try{
		const response = await fetch(API_URL)
		if(response.status === 200){
			const data = await response.json()
			console.log(data);
			return data
		}else{
			throw Error('Something went wrong please try again.')
		}
	}
	catch(error){
		alert(error);
	}
	
}