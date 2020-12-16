export function attachCustomHelpers(Handlebars) {
    const attributes = (item) => {
        return Object.entries(item).reduce((attr_str, attr) => (attr_str += ` ${attr[0]}="${attr[1]}"`), '')
    }

    Handlebars.registerHelper('link', function (item) {
        return `<link ${attributes(item)} />`
    })

    Handlebars.registerHelper('meta', function (item) {
        return `<meta ${attributes(item)} />`
    })

    Handlebars.registerHelper('script', function (item) {
        return `<script ${attributes(item)}></script>`
    })

    Handlebars.registerHelper('script_with_content', function (item) {
        return `<script ${attributes(item.attr)}>${item.content}</script>`
    })
}
