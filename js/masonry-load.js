// Initialize Masonry after images have loaded
var grid = document.querySelector('.grid');
imagesLoaded(grid, function () {
    var msnry = new Masonry(grid, {
        itemSelector: 'a',
        columnWidth: 'a',
        percentPosition: true,
        gutter: 5 // Consistent gap between items
    });
    grid.classList.add('ready'); // Add class to show the grid
});
