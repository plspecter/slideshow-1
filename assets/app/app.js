$(document).ready(function () {
    console.log("ready");

    //locate the images you want to be in the slide show..
    //make them into an array to choose from
    var images = ["pictures/pickle1.jpg", "pictures/pickle2.jpg", "pictures/pickle3.jpg", "pictures/pickle4.gif"];

    // Variable showImage will hold the setInterval when we start the slideshow
    var showImage;

    //the count will keep track of which image we are on in the html
    var count = 0;

    //use jquery to run :startSlideshow" when we click the start button
    $(".start").click(startSlideshow);

    //and this will stop it
    $(".stop").click(stopSlideshow);

    //this function will replace display whenever image it's given
    //in the src attribute of the img tag
    function displayImage() {
        $("#image-holder").html("<img src=" + images[count] + " width='400px'>");

    }

    //when its time to flip to the next image
    function nextImage() {
        //Increments the count by 1 (changes the image)
        count++

        //show the loading gif in the image-holder div
        $("#image-holder").html("<img src='pictures/giphy.gif' width='200px' 'margin-left:auto' 'margin-right:auto' 'text-align:center'/>");

        //setTimeout to run the displayImage after 1 second
        setTimeout(displayImage, 1000)
        //                       1 second

        //if the count is the same as the length of the image array, reset the count to 0
        if (count === images.length) {
            count = 0;
        }

    }

    function startSlideshow() {
        //use showImage to hold the setInterval to run the nextImage
        //(showImage holds the seconds between each image)
        showImage = setInterval(nextImage, 2000);
    }

    function stopSlideshow() {
        //Clear interval stops the images from changing (animating)
        clearInterval(showImage);
    }

    displayImage();

})