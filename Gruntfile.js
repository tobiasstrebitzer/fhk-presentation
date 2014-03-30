module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        watch: {
            md: {
                files: ['documents/**/*.md'],
                tasks: ['exec:md'],
                options: {
                  livereload: true
                }
            },
            less: {
                files: ['less/**/*.less'],
                tasks: 'less:app'
            }
        },
        less: {
            app: {
                options: {
                    paths: ["stylesheets"]
                },
                files: {
                    "stylesheets/presentation.css": "less/presentation.less"
                }
            }
        },
        exec: {
            md: {
                command: "cat template/before.html documents/* template/after.html > presentation.html"
            }
        },
        connect: {
            md: {
                options: {
                    open: 'http://localhost:8000/presentation.html',
                    port: 8000,
                    base: '.'
                }
            }         
        }
     });

     grunt.registerTask('default', ['exec:md', 'less', 'connect:md', 'watch']);
    
};
