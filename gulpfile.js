// instanciando módulos
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// Tarefas para compilar e minificar os arquivos da pasta scss e enviar para a pasta (css) que ficará dentro da pasta dist.
gulp.task('mini', function() {
    return gulp.src('scss/*.scss')
    .pipe(concat('./scss'))
    .pipe(rename('dist.min.scss'))
	.pipe(minifycss())    
	.pipe(gulp.dest('./dist/css'));
});
// Tarefa para Minificar o html da pasta source e enviar para dist.
gulp.task('scripts', function() {
    return gulp.src('source/index.html')
    .pipe(minifycss())
    .pipe(rename('index.min.html'))    
	.pipe(gulp.dest('./dist'));
});
// Todos os arquivos da pasta source deve conter um watch para monitorar alterações (salvar o arquivo)
e invocar suas respectivas tarefas.
gulp.task('background', function() {
    gulp.watch('./source/*.', ['scripts']);
});
