/**
 * GET /
 * Home page.
 */

exports.index = (req, res) => {
  res.render('index.hbs', {
    title: 'Music Amaze - Home',
    header: 'Music Amaze'
  });
}

exports.error = (req, res) => {
  res.render('404.hbs', {
    title: 'Error',
    header: 'Music Amaze'
  });
}
