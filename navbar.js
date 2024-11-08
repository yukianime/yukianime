var Navbar = {
    view: function() {
        return m("nav.navbar.navbar-expand-lg.navbar-light.bg-custom-purple", [
            m("div.container-fluid", [
                m("a.navbar-brand", { href: "/index.html" }, "yukianime"),
                m("button.navbar-toggler", {
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation"
                }, m("span.navbar-toggler-icon")),
                m("div#navbarSupportedContent.collapse.navbar-collapse", [
                    m("ul.navbar-nav.me-auto.mb-2.mb-lg-0", [
                        m("li.nav-item.dropdown", [
                            m("a.nav-link.dropdown-toggle", {
                                href: "#",
                                role: "button",
                                "data-bs-toggle": "dropdown",
                                "aria-expanded": "false"
                            }, "Catálogo"),
                            m("ul.dropdown-menu", [
                                m("li", m("a.dropdown-item", { href: "#" }, "Lista completa")),
                                m("li", m("a.dropdown-item", { href: "#" }, "Géneros")),
                                m("li", m("a.dropdown-item", { href: "#" }, "Sugerencias"))
                            ])
                        ])
                    ]),
                    m("form.form-inline.my-2.my-lg-0", [
                        m("input.form-control.mr-sm-2.search-form", {
                            type: "search",
                            autocomplete: "off",
                            placeholder: "Buscar anime",
                            "aria-label": "Search",
                            id: "searchInput",
                            style: "border: none;"
                        }),
                        m("div#searchResults.dropdown-menu", { "aria-labelledby": "searchInput" })
                    ])
                ])
            ])
        ]);
    }
};
export default Navbar;