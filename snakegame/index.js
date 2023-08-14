let head = document.createElement('div');
let food = document.createElement('div');
head.classList.add('head');
let containElement = document.querySelector('.contain');
containElement.appendChild(head);
food.classList.add('tail');
containElement.appendChild(food);

let tileSize=20;
let snakearr = {x:5,y:6};
let pixelX = snakearr.x * tileSize;
let pixelY = snakearr.y * tileSize;

// // Set the position of the "head" element
// head.style.left = pixelX + 'px';
// head.style.top = pixelY + 'px';