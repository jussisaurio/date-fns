// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import parseISO from './index.orig'
import parseISO2 from './index'
import moment from 'moment'

suite('toDate', function() {
  benchmark('date-fns', function() {
    parseISO('2014-10-25T13:46:20+07:00')
    parseISO('2014-10-25T13:46:20')
  })

  benchmark('date-fns optimized', function() {
    parseISO2('2014-10-25T13:46:20+07:00')
    parseISO2('2014-10-25T13:46:20')
  })

  benchmark('Moment.js', function() {
    moment('2014-10-25T13:46:20+07:00')
  })
})
