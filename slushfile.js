/*
 * slush-oak
 * https://github.com/chrisroselli/slush-oak
 *
 * Copyright (c) 2016, Chris Roselli
 * Licensed under the MIT license.
 */

 'use strict';

 var gulp = require('gulp'),
     install = require('gulp-install'),
     conflict = require('gulp-conflict'),
     template = require('gulp-template'),
     rename = require('gulp-rename'),
     _ = require('underscore.string'),
     inquirer = require('inquirer'),
     path = require('path'),
     colors = require('colors');

function asciiArt() {
    console.log(' __      _____ _    ___ ___  __  __ ___   _____ ___     ___   _   _  __'.rainbow);
    console.log(' \\ \\    / / __| |  / __/ _ \\|  \\/  | __| |_   _/ _ \\   / _ \\ /_\\ | |/ /'.rainbow);
    console.log('  \\ \\/\\/ /| _|| |_| (_| (_) | |\\/| | _|    | || (_) | | (_) / _ \\| \' < '.rainbow);
    console.log('   \\_/\\_/ |___|____\\___\\___/|_|  |_|___|   |_| \\___/   \\___/_/ \\_\\_|\\_\\'.rainbow);
    console.log('                                                                                   ');
    console.log('Hello there! Are you ready to generate a custom Oak template?'.green);
    console.log('----------------------------------------------------------------------------------'.red);
     }
     asciiArt();

 gulp.task('default', function (done) {
     var prompts = [
       {
          type: 'confirm',
          name: 'colorReady',
          message: 'Ready to add primary colors?',
          default: true
       }, {
          name: 'primaryBrightColor',
          message: 'Paste primary bright color',
          default: '#d50208'
       }, {
          name: 'primaryDarkColor',
          message: 'Paste primary dark color',
          default: '#353535'
       }, {
          type: 'confirm',
          name: 'headerReady',
          message: 'Ready to add header content?',
          default: true
       }, {
          name: 'favicon',
          message: 'Paste favicon image link',
          default: '/core/images/universal/favicon/bs-favicon.ico'
       }, {
          name: 'logo',
          message: 'Paste logo image link'
       }, {
          name: 'serviceArea',
          message: 'Paste service area header text',
          default: 'Serving [territory], [major cities 3]'
       }, {
          type: 'confirm',
          name: 'mainReady',
          message: 'Ready to add main message content?',
          default: true
       }, {
          name: 'mainMessageImage',
          message: 'Paste main message image link'
       }, {
          name: 'mainMessageText',
          message: 'Paste main message text'
       }, {
          name: 'mainMessageSubtext',
          message: 'Paste main message subtext'
       }, {
          type: 'confirm',
          name: 'serviceReady',
          message: 'Ready to add service icons?',
          default: true
       }, {
          name: 'numberServices',
          message: 'How many service icons?'
       }, {
           type: 'checkbox',
           message: 'Select service icons',
           name: 'serviceIcons',
           choices: [
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/fsi.svg"), "service-link" => "/foundation-repair.html", "service-name" => "Foundation Repair", "service-desc" => "We\'ll find the right solution for your foundation problems." )',
               name: 'Foundation Supportworks'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/cs.svg"), "service-link" => "/crawl-space-repair.html", "service-name" => "Crawl Space Repair", "service-desc" => "We offer complete crawl space encapsulation &amp; repair services." )',
               name: 'Crawl Space'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/basement_waterproofing.svg"), "service-link" => "/basement-waterproofing.html", "service-name" => "Basement Waterproofing", "service-desc" => "We have the most effective solutions for wet basements." )',
               name: 'Basement Waterproofing'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/polylevel.svg"), "service-link" => "/concrete-lifting.html", "service-name" => "Concrete Leveling", "service-desc" => "Quickly &amp; effectively stabilize your sinking, settling concrete." )',
               name: 'Concrete Leveling'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/egress_windows.svg"), "service-link" => "/basement-waterproofing/products/egress-window.html", "service-name" => "Egress Windows", "service-desc" => "Enjoy a safer, brighter basement safe with our all-in-one system." )',
               name: 'Egress Windows'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/flood_damage.svg"), "service-link" => "/basement-waterproofing/basement-flooding/basement-water-damage.html", "service-name" => "Flood Damage", "service-desc" => "Steps to take when your basement experiences severe flooding." )',
               name: 'Flood Damage'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/insulation.svg"), "service-link" => "/insulation.html", "service-name" => "Insulation", "service-desc" => "Enjoy a more comfortable home and lower heating &amp; cooling costs." )',
               name: 'Insulation'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/mold.svg"), "service-link" => "/mold-removal.html", "service-name" => "Mold", "service-desc" => "Local experts for mold inspections, remediation &amp; removal." )',
               name: 'Mold'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/sump_pump.svg"), "service-link" => "/sump-pump.html", "service-name" => "Sump Pump", "service-desc" => "Sump pump system installation & backup pumps in [state]." )',
               name: 'Sump Pump'
             },
             {
               value: 'array( "service-img" => file_get_contents("http://b388022801b3244fdbae-c913073b3759fb31d6b728a919676eab.r15.cf1.rackcdn.com/v3/templates/icons/basement_finishing.svg"), "service-link" => "/basement-finishing.html", "service-name" => "Total Basement Finishing", "service-desc" => "Creating a beautiful, private space in your basement." )',
               name: 'Total Basement Finishing'
           },
           ],
       }, {
          type: 'confirm',
          name: 'chooseReady',
          message: 'Ready to add "Why Choose Us" content?',
          default: true
       }, {
           name: 'whyChooseTitle',
           message: 'Paste "Why Choose Us" title',
           default: 'Why Choose Us'
       }, {
           name: 'whyChooseOne',
           message: 'Paste first "Why Choose Us" list item',
           default: 'Transferable Lifetime Warranty for Basement Waterproofing Systems'
       }, {
           name: 'whyChooseTwo',
           message: 'Paste second "Why Choose Us" list item',
           default: 'Fast and effective installation of all our products and services'
       }, {
           name: 'whyChooseThree',
           message: 'Paste third "Why Choose Us" list item',
           default: 'Savings of Up to 50% Over Other Methods'
       }, {
           name: 'whyChooseFour',
           message: 'Paste fourth "Why Choose Us" list item',
           default: 'FREE Written Estimates'
       }, {
           name: 'youtube',
           message: 'Paste youtube video link (ex.TFFUg3I-mLY)',
       }, {
          type: 'confirm',
          name: 'credReady',
          message: 'Ready to add credibility links?',
          default: true
       }, {
           name: 'credImg1',
           message: 'Paste credibility image link 1',
       }, {
           name: 'credImg2',
           message: 'Paste credibility image link 2',
       }, {
           name: 'credImg3',
           message: 'Paste credibility image link 3',
       }, {
           name: 'credImg4',
           message: 'Paste credibility image link 4',
       }, {
          type: 'confirm',
          name: 'socialReady',
          message: 'Ready to add social media links?',
          default: true
       }, {
           name: 'facebook',
           message: 'Paste facebook social media link',
       }, {
           name: 'twitter',
           message: 'Paste twitter social media link',
       }, {
           name: 'google',
           message: 'Paste google+ social media link',
       }, {
           name: 'linkedin',
           message: 'Paste linkedin social media link',
       },
     ];

     //Ask
     inquirer.prompt(prompts,
         function(answers) {
             answers.appNameSlug = _.slugify(answers.appName);
             gulp.src(__dirname + '/templates/**')
                 .pipe(template(answers))
                 .pipe(rename(function(file) {
                     if (file.basename[0] === '_') {
                         file.basename = '.' + file.basename.slice(1);
                     }
                 }))
                 .pipe(conflict('./dest'))
                 .pipe(gulp.dest('./dest'))
                 .pipe(install())
                 .on('end', function() {
                     done();
                 });
         });
 });
