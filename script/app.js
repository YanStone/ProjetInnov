const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('normal');
        }/*else {
            entry.target.classList.remove('normal');
        } */
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('normal07');
        }/*else {
            entry.target.classList.remove('normal');
        } */
    });
});




const topElements = document.querySelectorAll('.top');
topElements.forEach((el) => observer.observe(el));

const bottomElements = document.querySelectorAll('.b');
bottomElements.forEach((el) => observer.observe(el));

const bottom2Elements = document.querySelectorAll('.b2');
bottom2Elements.forEach((el) => observer2.observe(el));

