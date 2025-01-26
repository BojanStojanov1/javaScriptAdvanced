$(document).ready(function () {
    $("#fetchImages").click(function () {
        // AJAX call using jQuery
        $.ajax({
            url: "https://dog.ceo/api/breed/hound/images",
            method: "GET",
            success: function (response) {
                // Clear previous images
                const imagesContainer = $("#imagesContainer");
                imagesContainer.empty();

                // Append each image from the response
                $.each(response.message, function (index, imageUrl) {
                    $("<img>")
                        .attr("src", imageUrl)
                        .attr("alt", "Hound Image")
                        .appendTo(imagesContainer);
                });
            },
            error: function () {
                alert("Failed to fetch dog images. Please try again later.");
            }
        });
    });
});