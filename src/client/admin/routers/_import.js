// module.exports = file => () => import('views/' + file + '.jsx')

module.exports = file => require('views/' + file + '.jsx')