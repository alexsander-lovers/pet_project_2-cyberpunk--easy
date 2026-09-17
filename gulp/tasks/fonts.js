// import fonter from 'gulp-fonter-fix'; // Или оставьте ваш 'gulp-fonter', если не хотите менять пакет
// import ttf2woff2 from 'gulp-ttf2woff2';



// export const ttfToWoff2 = () => {
//   return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
//     .pipe(app.plugins.plumber(
//       app.plugins.notify.onError({
//         title: 'FONTS',
//         message: 'Error: <%= error.message %>'
//       })
//     ))
//     // Шаг 1: Генерируем ТОЛЬКО .woff и складываем в dist
//     .pipe(fonter({
//       formats: ['woff']
//     }))
//     .pipe(app.gulp.dest(`${app.path.build.fonts}`))

//     // Шаг 2: Снова берем исходные .ttf файлы для создания .woff2
//     .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
//     .pipe(ttf2woff2())
//     .pipe(app.gulp.dest(`${app.path.build.fonts}`));
// };
