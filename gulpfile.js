var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

	//ini dimana assetsPath dari project kamu
	elixir.config.assetsPath = "public/assets/";

	//ini folder js kamu ada dimana
	elixir.config.js.folder = "";

	//ini folder css kamu ada dimana
	elixir.config.css.folder = "";

	//public path kamu ada dmn, defaulny laravel 5 adalah public
	elixir.config.publicPath = "public";

    //minify script js yang kita pakai
	mix.scripts([
        "vendor/jquery/jquery.min.js",
        "vendor/bootstrap/js/bootstrap.min.js",
        "vendor/jquery/jquery.easing.min.js",
        "js/new-age.min.js"
    ],'public/build/min.js');

    mix.styles([
        "vendor/bootstrap/css/bootstrap.min.css",
        "vendor/font-awesome/css/font-awesome.min.css",
        "vendor/simple-line-icons/css/simple-line-icons.css",
        "vendor/device-mockups/device-mockups.min.css",
        "css/new-age.min.css"
    ],'public/build/min.css');

    mix.version([
        'build/min.js',
        'build/min.css'
    ]);

    mix.copy('public/assets/vendor/font-awesome/fonts', 'public/build/fonts');
    mix.copy('public/assets/vendor/bootstrap/fonts', 'public/build/fonts');
    mix.copy('public/assets/vendor/simple-line-icons/fonts', 'public/build/fonts');
    mix.copy('public/assets/vendor/device-mockups/iphone_6_plus', 'public/build/build/iphone_6_plus');
    mix.copy('public/assets/img', 'public/build/img');

});