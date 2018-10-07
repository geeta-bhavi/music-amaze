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

exports.getDev = (req, res) => {
  res.render('about/dev.hbs', {
    title: 'Music Amaze - About',
    header: 'Music Amaze'
  });
}
