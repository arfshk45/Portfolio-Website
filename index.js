const titles =['Designer','Programmer',"Developer"]
const title = document.querySelector('.bunty span a');
const year = document.querySelector('.year');
yearsIn =  new Date().getFullYear()

year.textContent =yearsIn;
let i=0;
title.textContent = titles[i];
const currentTitle = titles[i];  // Update the text content
    title.style.animation =`move 1.3s steps(${currentTitle.length}) infinite alternate, cursor 0.8s steps(1) infinite`
i=1
setInterval(() => {
    title.textContent = titles[i];
    const currentTitle = titles[i];  // Update the text content
    title.style.animation =`move 1.3s steps(${currentTitle.length}) infinite alternate, cursor 0.8s steps(1) infinite`
    i = (i + 1) % titles.length;    // Increment `i` and reset it to 0 when it reaches the end
}, 2600);
const cloudright = document.querySelector('.cloud-right');
const cloudleft = document.querySelector('.cloud-left');
let iright = 100;
let ileft = 0;
let directionRight = -1;  
let directionLeft = 1;

function animate() {
    // Move the right cloud
    if (iright >= 0 && iright <= 100) {
        cloudright.style.left = `${iright}%`;
        iright += directionRight;
    }
    
    // Reverse direction when right cloud hits boundaries
    if (iright <= 0 || iright >= 100) {
        directionRight *= -1;
    }
    
    // Move the left cloud
    if (ileft >= 0 && ileft <= 100) {
        cloudleft.style.left = `${ileft}%`;
        ileft += directionLeft;
    }
    
    // Reverse direction when left cloud hits boundaries
    if (ileft >= 100 || ileft <= 0) {
        directionLeft *= -1;
    }
    
    requestAnimationFrame(animate);
}

animate();
