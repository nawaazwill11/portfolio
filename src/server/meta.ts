export default {
    portfolio: {
        title: 'Interactive Portfolio - Nawaaz Kortiwala',
        meta: [
            {
                name: "description",
                content: "Nawaaz Kortiwala: A MERN Stack Dev",
            },
            {
                property: "og:site_name",
                content:"Nawaaz Kortiwala's Web Portal",
            },
            {
                property: "og:url",
                content: 'https://nawaaz.dev/portfolio',
            },
            {
                property: "og:title",
                content: "Interactive Portfolio - Nawaaz Kortiwala",
            },
            {
                property: "og:description",
                content: "An Interactive Porfolio Page To Portay Nawaaz Kortiwala's Skillset, Experience, and Work",
            },
            {
                property: "og:image",
                content: 'https://nawaaz.dev/static/img/me3.jpg',
            },
            {
                property: "og:image:type",
                content: 'image/jpeg',
            },
            {
                property: "og:type",
                content: "website"
            }
        ],
        link: [],
        pre_script: [],
        post_script: [
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
                crossorigin: "anonymous"
            },
            {
                src: `/static/js/scripts.js`
            }
        ],
        script_with_content: [],
    }
}