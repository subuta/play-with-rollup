import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',
  external: [
    'react'
  ],
  output: [
    {
      file: 'distLib/bundle.es.js',
      format: 'es'
    },
    {
      file: 'distLib/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'distLib/bundle.umd.js',
      name: 'library',
      format: 'umd',
      globals: {
        'react': 'React'
      }
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}