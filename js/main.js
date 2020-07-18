// Lightbox Options

lightbox.option({
    disableScrolling: true,
    showImageNumberLabel: false,
    wrapAround: true,
});

// Search Features

const captionArray = [];
const search = document.getElementById('search');
const galleryItem = document.querySelectorAll('.gallery a');
for (let i = 0; i < galleryItem.length; i ++) {
    let data = galleryItem[i].getAttribute('data-title').toLowerCase();
    captionArray.push(data);
}
search.addEventListener('keyup', () => {
    let value = search.value.toLowerCase();
    for (let i = 0; i < captionArray.length; i++) {
        if (captionArray[i].includes(value)) {
            galleryItem[i].style.display = 'block';
        } else {
            galleryItem[i].style.display = 'none';
        }
    }
});
