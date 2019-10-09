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

let pyd = document.querySelector('.content-destination');
    //5
    pyd.addEventListener('mouseover', (event) => {
        pyd.style.border = '5px dashed lightblue'; 
    })

window.addEventListener('resize', cb) 
    //6
    function cb() {
        alert('Window resized.');
    }

let btns = document.querySelectorAll('.btn');
Array.from(btns)    
    //7
    btns.forEach(btn => {
        btn.addEventListener('mouseout', (event) => {
        btn.style.backgroundColor = 'purple';
        event.currentTarget.preventDefault();
        })
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

