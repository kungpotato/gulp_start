import {
  src, dest, watch,
} from 'gulp';
import babel from 'gulp-babel';
import run from 'gulp-run';
import GulpUglify from 'gulp-uglify';

const paths = {
  scripts: {
    src: 'src/**/*',
    dist: 'dist/',
  },
};

export const build = () => src(paths.scripts.src, { sourcemaps: true })
  .pipe(babel())
  .pipe(GulpUglify())
  .pipe(dest(paths.scripts.dist));

export const watchFile = () => {
  watch(paths.scripts.src, build);
};

export const dev = () => {
  run('yarn dev').exec()
    .pipe(dest(paths.scripts.dist));
};

exports.default = build;
