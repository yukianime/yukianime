$(document).ready(function() {
    // Array de nombres de los animes disponibles en tu sitio
    var animes = [
        "Naruto",
        "One Piece",
        "Attack on Titan",
        "Majo no Tabitabi",
        "Gakkou Gurashi",
         // Agregamos "Majo no Tabitabi"
        // Agrega más nombres de animes aquí
    ];

    $('#searchInput').on('input', function() {
        var searchText = $(this).val().toLowerCase();
        var searchResults = $('#searchResults');
        searchResults.empty();

        if (searchText.length === 0) {
            searchResults.hide();
            return;
        }

        var matchedAnimes = animes.filter(function(anime) {
            return anime.toLowerCase().includes(searchText);
        });

        if (matchedAnimes.length > 0) {
            searchResults.show();
        } else {
            searchResults.hide();
        }

        matchedAnimes.forEach(function(animes) {
            var link = $('<a>').addClass('dropdown-item').attr('href', '#').text(animes);
            link.on('click', function() {
                // Redirigir al usuario al anime seleccionado
                var formattedAnimeName = animes.toLowerCase().replace(/\s/g, '-');
                window.location.href = 'animes/' + encodeURIComponent(formattedAnimeName) + '.html';
            });
            searchResults.append(link);
        });
    });
});
