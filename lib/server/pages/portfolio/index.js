"use strict";

const head = {
  title: 'Portfolio'
}; // <!-- CSS only -->
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>

Handlebars.registerHelper('link', function (item, options) {
  return `<link ${Object.entries(item).reduce((attr_str, attr) => attr_str += ` ${attr[0]}="${attr[1]}"`, '')} />`;
});
link_list = [{
  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
  rel: 'stylsheet',
  integrity: 'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1',
  crossorigin: 'anonymous'
}];
head_data = {
  meta: [{
    name: 'description',
    content: 'Baha Hamdulay Portfolio page'
  }],
  link: [{
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
    rel: 'stylsheet',
    integrity: 'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1',
    crossorigin: 'anonymous'
  }],
  pre_script: [{
    src: '/asset/porfolio.app.js'
  }],
  post_script: [{
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
    crossorigin: "anonymous"
  }]
};