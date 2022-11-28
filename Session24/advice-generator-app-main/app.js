function myFoo(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {outputHtml(data)});
    
    function outputHtml(d) {
      const myResult =d.slip.advice
      
      
      document.getElementById('advice').innerHTML = myResult
      document.getElementById('num').innerHTML = d.slip.id
      let button = document.querySelector(input)
      button.disabled = true;
      setTimeout(2000, button.disabled = false)
      }
  
    }
    myFoo()
    
   
  
    
  
          
      
    
 