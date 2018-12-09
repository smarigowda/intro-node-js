const path = require('path');

module.exports = function () {

    return {
      files: [
        'exercises/**/*.js',
        'package.json', // <--
        '!exercises/**/test.js'
        ],
 
      tests: ['exercises/**/test.js'],
 
      env: {
        type: 'node',
        runner: 'node'
      },
 
      testFramework: 'jest',

    //   setup: function (wallaby) { 
        //   process.env.NODE_PATH += require('path').delimiter + require('path').join(wallaby.localProjectDir, 'core', 'node_modules');
    //     const jestConfig = require('./package.json').jest;
    //     // for example:
    //     // jestConfig.globals = { "__DEV__": true };
    //     // Object.keys(jestConfig.moduleNameMapper).forEach(k => (jestConfig.moduleNameMapper[k] = jestConfig.moduleNameMapper[k].replace('<rootDir>', wallaby.localProjectDir)))
    //     wallaby.testFramework.configure(jestConfig);
    //   }
    };
  };