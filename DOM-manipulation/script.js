// your JavaScript file

/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */

// Exercise

const container = document.querySelector('#container');

const para = document.createElement('p');
//content.classList.add('content');
para.textContent = 'Hey I’m red!';
para.style.cssText = 'color: red; background: white;';
container.appendChild(para);

const hdr = document.createElement('h3');
hdr.textContent = 'I’m a blue h3!';
hdr.style.cssText = 'color: blue;';
container.appendChild(hdr);

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute('style', 'background: pink; border: black;');
// container.appendChild(content);

const hdr1 = document.createElement('h1');
hdr1.textContent = 'I’m in a div';
content.appendChild(hdr1);

const p1 = document.createElement('p');
p1.textContent = 'ME TOO!';
content.appendChild(p1);

container.appendChild(content);