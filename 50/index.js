const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('Drag start has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
})
imgBox.addEventListener('dragend', (e) => {
    console.log('Drag end has been triggered');
    e.target.className = 'imgBox';

})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Drag over has been triggered');

    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Drag enter has been triggered');
       
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Drag leave has been triggered');
        
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}