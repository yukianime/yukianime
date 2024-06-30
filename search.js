$(document).ready(function() {
    var animes = [
        "Majo no Tabitabi",
        "Gakkou Gurashi",
        "Fousou no Frieren",
        "K-On!",
        "Oniichan wa Oshimai!",
        "Seiyuu Radio no Uraomote"
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

                var formattedAnimeName = animes.toLowerCase().replace(/\s/g, '-').replace(/!/g, '');
                window.location.href = '/animes/' + encodeURIComponent(formattedAnimeName) + '.html';
            });
            searchResults.append(link);
        });
    });
});
