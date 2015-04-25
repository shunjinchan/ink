module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: 'dist',
        },

        sass: {
            dist: {
                options: {      
                    style: 'expanded'
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss',
                }
            }
            // dist2: {
            //     options: {
            //         style: 'expanded'
            //     },
            //     files: {
            //         'dist/css/pcgames.css': 'sass/pcgames.scss',
            //     }
            // }
        },

        autoprefixer: {
            options: {
                diff: false,
                browsers: ['last 30 versions']
            },

            // prefix the specified file 
            single_file: {
                options: {
                    // Target-specific options go here. 
                },
                src: 'dist/css/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.css'
            },

            // prefix all files
            multiple_files: {
                expand: true,
                src: ['dist/css/*.css', 'dist/css/*.css']
            }
        },

        copy: {
            image: {
                expand: true,
                cwd: 'image/',
                src: ['**/*'],
                dest: 'dist/image/'
            },
            js: {
                expand: true,
                cwd: 'js/',
                src: ['**/*.js'],
                dest: 'dist/js/'
            },
            fonts: {
                expand: true,
                src: 'fonts/*',
                dest: 'dist/'
            }
        },

        concat: {
            options: {

            },
            // 合并 bootstrap js 脚本
            bootstrap: {
                src: [
                    'dist/js/bootstrap-transition.js',
                    'dist/js/bootstrap-tab.js',
                    'dist/js/bootstrap-tooltip.js',
                    'dist/js/bootstrap-dropdown.js',
                    'dist/js/bootstrap-modal.js',
                    'dist/js/bootstrap-popover.js',
                    'dist/js/bootstrap-carousel.js'
                ],
                dest: 'dist/js/bootstrap.js'
            }
        },

        sprite: {
            all: {
                src: 'img/**/*.{png,jpg,jpeg}',
                dest: 'dist/img/sprites/spritesheet.png',
                destCss: 'dist/css/ext/sprites.css',
                padding: 10
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'dist/image/', // 图片 copy 到目标目录之后再压缩
                    src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 image 目录下所有 png/jpg/jpeg/gif 图片
                    dest: 'dist/image/' // 优化后的图片保存位置
                }]
            }
        },

        cssmin: {
            // minify: {
            //     expand: true,
            //     cwd: 'dist/css/',
            //     src: ['**/*.css'],
            //     dest: 'dist/css/'
            // },
            options: {
                compatibility: 'ie8',
                advanced: true // 为 true，css hack 不会被删除
            },
            minifyCore: {
                src: 'dist/css/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        },

        uglify: {
            options: {
                preserveComments: 'some'
            },
            core: {
                src: 'dist/js/bootstrap.js',
                dest: 'dist/js/bootstrap.min.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    'sass/**/*.scss'
                ],
                tasks: ['sass', 'autoprefixer']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'autoprefixer', 'copy', 'concat', 'imagemin', 'cssmin', 'uglify']);

};
