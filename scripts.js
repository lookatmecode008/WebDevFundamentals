/*
const projBut = document.querySelector('#projBut')
const ExpBut = document.querySelector('#ExpBut')
const CertBut = document.querySelector('#CertBut')
const navConButtons = document.querySelectorAll('.js-button')
*/



renderSection()
//From Homepage
function renderSection(activeSect) {
    const Projects = document.querySelector('#Pro');
    const Experience = document.querySelector('#Exp');
    const Certificates = document.querySelector('#Cer');
    const Welcome = document.querySelector('#wel')
    const contentArray = [Projects, Experience, Certificates, Welcome]
    
//  array.forEach((function-parameter) => {function code})
    contentArray.forEach(contentArray => {contentArray.classList.remove ('active')}); //removes .active class from each item in the array

//collects the parameter to run unique code respective to the button pressed  
    if (activeSect === 'Pro') {
        contentArray[0].classList.add('active')}
    else if (activeSect === 'Exp'){
        contentArray[1].classList.add('active')}
    else if(activeSect === 'Cer'){
        contentArray[2].classList.add('active')}
    else{
        contentArray[3].classList.add('active')} //displays welcome card as a default
};

//From Quirks.html
function displaySection(buttonPressed){
    const Facts = document.querySelector('#f-facts');
    const Skills = document.querySelector('#skills');
    const Vices = document.querySelector('#vices');
    const Peeves = document.querySelector('#p-peeves');
    const quirksArray = [Facts , Skills, Vices, Peeves]

    quirksArray.forEach(quirksArray => {quirksArray.classList.remove('active')})

  if (buttonPressed === 'facts'){
      quirksArray[0].classList.add('active')
  }else if(buttonPressed === 'skills'){
      quirksArray[1].classList.add('active')
  }else if (buttonPressed === 'vices'){
      quirksArray[2].classList.add('active')
  }else if (buttonPressed === 'peeves'){
        quirksArray[3].classList.add('active')
  }
}


