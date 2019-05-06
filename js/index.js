// // Your code goes here

let header = document.querySelector('.main-navigation');
    //1
    header.addEventListener('click', (event) => {
        header.style.backgroundColor = 'cyan';
    })
    //2
    header.addEventListener('dblclick', (event) => {
        header.style.border = '5px solid pink';
    })

let btnDiv = document.querySelector('.content-pick');    
    //3
    btnDiv.addEventListener('mouseenter', (event) => {
        btnDiv.style.backgroundColor = 'salmon';
    })
    //4
    btnDiv.addEventListener('mouseleave', (event) => {
        btnDiv.style.backgroundColor = 'lightyellow';
    })

let pyd = document.querySelector('.content-destination')
    //5
    pyd.addEventListener('mouseover', (event) => {
        pyd.style.border = '5px dashed lightblue';
    })

    //6
    .addEventListener('resize', (event) => {
        
    })

let btns = document.querySelector('.btn');    
    //7
     btns.addEventListener('mouseout', (event) => {
        btns.style.backgroundColor = 'purple';
    })
    
    //8
    addEventListener('scroll', (event) => {

    })
    
    //9
    addEventListener('select', (event) => {

    })
    
    //10
    addEventListener('dblclick', (event) => {

    })
