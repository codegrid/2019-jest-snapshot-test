const fs = require('fs');
const Handlebars = require('handlebars');

const generateHtml01 = () => {
  const source = fs.readFileSync('./source/01.html', 'utf8');
  const template = Handlebars.compile(source);
  const context = {title: "My New Post", body: "This is my first post!"};
  return template(context);
};

module.exports = generateHtml01;
