//When we visit the site cards will not be Visible 
document.getElementById('output').style.visibility='hidden';

document.getElementById('lbsInput').addEventListener('input',function(e){
    //When input event is invoked in the input box then Cards will be visible     
    document.getElementById('output').style.visibility='visible';

    let lbs = e.target.value;
    // console.log(lbs);
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;

})