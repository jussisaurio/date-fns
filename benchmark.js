var testsContext = require.context('./src/', true, /\/benchmarkku\.js$/)
testsContext.keys().forEach(testsContext)
