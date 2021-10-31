const inputStart = document.querySelector('#nasc');
const inputEnd = document.querySelector('#atual');
const button = document.querySelector('button');
const span = document.querySelector('h1 > span');

function calculateDateDiff () {
    let nasc = inputStart.value;
    let atual = inputEnd.value;

    nasc = new Date(nasc);
    atual = new Date(atual);

    let diffInTime = Math.abs(atual - nasc);
    let timeInOneYear = 1000 * 60 * 60 * 24 * 365;
    let diffInFullYears = diffInTime / timeInOneYear;

    return diffInFullYears;
    
   
}
button.addEventListener('click', () => {
    const diffInFullYears = calculateDateDiff();
    span.innerHTML = (Math.round(diffInFullYears));
    console.log(Math.round(diffInFullYears));
    if (diffInFullYears <= 8){
        window.alert('Você é uma criança!')
    }else if (diffInFullYears <= 14){
        window.alert('Você é adolescente!')
    }else if (diffInFullYears <=29){
        window.alert('Você é jovem!')
    }else if (diffInFullYears <=65){
        window.alert('Você é adulto!')
    }else if (diffInFullYears >= 65){
        window.alert('Você é velho/idoso!')
    }else{

    }
    
})
