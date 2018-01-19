module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		libraryName: 'ui5lab.wl.pdf',
		dir: {
			src: "src",
			test: 'test',
			dist: "dist"
		},
	
		openui5_theme: {
			theme: {
				files: [
					{
						expand: true,
						cwd: '<%= dir.src %>',
						src: '**/themes/*/library.source.less',
						dest: '<%= dir.dist %>/resources'
					}
				],
				options: {
					rootPaths: [
						'<%= dir.src %>'
					],
					library: {
						name: '<%= libraryName %>'
					}
				}
			}
		},

		openui5_preload: {
			library: {
				options: {
					resources: '<%= dir.src %>',
					dest: '<%= dir.dist %>/resources'
				},
				libraries: true
			}
		},

		clean: {
			dist: '<%= dir.dist %>/'
		},

		copy: {
			dist: {
				files: [ {
					expand: true,
					cwd: '<%= dir.src %>',
					src: [
						'**'
					],
					dest: '<%= dir.dist %>/resources'
				}, {
					expand: true,
					cwd: '<%= dir.test %>',
					src: [
						'**'
					],
					dest: '<%= dir.dist %>/test-resources'
				} ]
			}
		}
	});

	// grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	// grunt.registerTask('default', [
	// 	'clean:dist',
	// 	'build'
	// ]);
	// grunt.config.merge(config);
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-openui5');
	// // Linting task
	// //grunt.registerTask('lint', ['eslint']);
	// // Build task
	grunt.registerTask('default', ['clean','openui5_theme', 'openui5_preload', 'copy']);
	
};