
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.ts',
    plugins: [
      resolve(),
      typescript({tsconfig:'./tsconfig.json'}),
      terser(),
    ],
    output: [
      {
        file: 'dist/low.es.js',
        format: 'es',
        name: 'LOW',
      },
      {
        file: 'dist/low.iife.js',
        format: 'iife',
        name: 'LOW',
      },
      {
        file: 'dist/low.umd.js',
        format: 'umd',
        name: 'LOW',
      },
    ],
  },
];