# webpack-starter

A webpack starter kit. Following along the tutorial from Traversy.
Created by lilKriT.

# Steps

- create /src and /dist
- create index.js in /dist
- create index.html in /dist (temporarily)
- add <script> in the html
- `npm init -y`
- `npm i -D webpack webpack-cli`
- add a build script `build: "webpack"` (you can add --mode)
- create webpack.config.js (like in example)
- add loaders
- example, `npm i -D sass style-loader css-loader sass-loader` (only if you use sass though)
- import the css file in index.js
- install html webpack plugin `npm i -D html-webpack-plugin`
- add it to the config
- create template html file
- for caching, add `[contenthash]` to the file name
- add `"dev": "webpack serve"` script (careful, it runs files from the memory)
- install webpack-dev-server `npm i -D webpack-dev-server`
- add webpack-dev-server config in webpack.config
- add `clean: true` to output
