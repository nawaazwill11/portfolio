export default {
    portfolio: {
        title: 'Interactive Portfolio - Baha Hamdulay',
        meta: [
            {
                name: "description",
                content: "Baha Hamdulay: A Condfident, Persuasive, Result Driven and Strategic Thinker",
            },
            {
                property: "og:site_name",
                content:"Baha Hamdulays's Web Portal",
            },
            {
                property: "og:url",
                content: 'https://bahahamdulay.com/portfolio',
            },
            {
                property: "og:title",
                content: "Interactive Portfolio - Baha Hamdulay",
            },
            {
                property: "og:description",
                content: "An interactive porfolio page to portay Baha Hamdulay's skillset, experience, and work.",
            },
            {
                property: "og:image",
                content: 'https://bahahamdulay.com/static/img/me.jpg',
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