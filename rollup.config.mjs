// import typescript from "@rollup/plugin-typescript";
// import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import minify from "@rollup/plugin-terser";

export default {
  input: "dist/src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    // typescript(),
    // minify(),
    commonjs(),
    nodeResolve(),
    // terser({ ecma: 5 }),
    // babel({
    //   babelHelpers: "bundled",
    //   exclude: "node_modules/**",
    //   include: ["src/**/*"],
    // }),
  ],
};
