const simpleHead = document.getElementById('simpleHeader');

const lname = document.getElementById('lname');

const userDetails = document.getElementById('userDetails');

userDetails.addEventListener('click', () => {
    simpleHead.textContent =  `Welcome ${lname.value}`;
});