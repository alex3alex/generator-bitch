import {test, assert} from 'yeoman-generator';

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  const packageJSON = require(`${process.env.PWD}/package.json`);
  const generator = `${process.env.PWD}/${packageJSON.main}`;

  it('jade, sass', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'ejs',
      preprocessor: 'sass',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('jade, less', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'jade',
      preprocessor: 'less',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('jade, stylus', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'jade',
      preprocessor: 'stylus',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('ejs, sass', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'ejs',
      preprocessor: 'sass',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('ejs, less', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'ejs',
      preprocessor: 'less',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('ejs, stylus', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'ejs',
      preprocessor: 'stylus',
      appFramework: 'none',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test'
        'sources/scripts',
      ]);

      assert.noFile([
        'karma.js',
        'sources/angular',
        'tasks/templates.js',
      ]);

      done();
    }
  });

  it('angular and uiRouter', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'jade',
      preprocessor: 'sass',
      appFramework: 'angular',
      frameworkModules: [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
      ],
      angularRoute: 'uiRouter',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/templates.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test',
        'sources/angular',
        'karma.js',
      ]);
      done();
    }
  });

  it('angular and ngRoute', done => {
    let prompts = {
      appName: 'lorem',
      viewEngine: 'jade',
      preprocessor: 'sass',
      appFramework: 'angular',
      frameworkModules: [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
      ],
      angularRoute: 'ngRoute',
    };

    test
      .run(generator)
      .withPrompts(prompts)
      .on('end', assertion);

    function assertion() {
      assert.file([
        'README.md',
        '.babelrc',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        'README.md',
        'sources',
        'bower.json',
        'gulpfile.babel.js',
        'tasks/default.js',
        'tasks/gulp.config.js',
        'tasks/lint.js',
        'tasks/browser-sync.js',
        'tasks/scripts.js',
        'tasks/sprite-images.js',
        'tasks/styles.js',
        'tasks/vendorCSS.js',
        'tasks/vendorJS.js',
        'tasks/views.js',
        'tasks/templates.js',
        'tasks/watch.js',
        'package.json',
        'public',
        // 'test',
        'sources/angular',
        'karma.js',
      ]);
      done();
    }
  });
}
