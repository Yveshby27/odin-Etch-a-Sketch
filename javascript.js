let setSizeButton=document.querySelector('button');
let warning=document.querySelector('.warning');

function makeGrid(size)
{
    let container=document.querySelector('.grid-container');
    let squares=container.querySelectorAll('div');
    squares.forEach(div=>div.remove());//resets the grid in case there was already an existing one
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;
for(let i=0;i<size*size;i++)
{
let square=document.createElement('div');
square.addEventListener('mouseover',()=>
{
    square.style.backgroundColor='black';//squares become black when hovered 
})
container.appendChild(square);
}
}

function changeSize(size)
{
   setSizeButton.addEventListener('click',()=>
   {
    if(size>=0 && size<=100)
    {
        makeGrid(size);
        warning.textContent='';
    }
    else 
    warning.textContent='Enter a size between 0 and 100';
});
}
