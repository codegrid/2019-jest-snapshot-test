const generateHtml01 = require('./generateHtml01');

test('generate html', () => {
  expect(generateHtml01()).toMatchSnapshot();
});
