# Webpack

## 请简要解释 Webpack 是什么，它的主要作用是什么？

#### 类型：`架构`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** Webpack 是一个模块打包工具，它可以将各种类型的模块（如 JS、CSS、图片等）打包成一个或多个文件。主要作用包括处理模块间的依赖关系、优化资源加载、提高项目的可维护性和性能。

## Webpack 常用配置有哪些

#### 类型： `架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（12 分）

<details>

- **1：** **入口与出口**
  + **入口**：单入口 `entry: './src/index.js'`；多入口 `entry: { main: './src/main.js', vendor: './src/vendor.js' }`。
  + **出口**：`output: { path: path.resolve(__dirname, 'dist'), filename: '[name].[hash].js' }`。

- **4：** **Loader 及功能与示例**
  + 用于处理不同类型文件的转换器。它可以将非 JavaScript 文件（如 CSS、图片、TS 等）转换为 Webpack 能够处理的模块。
  + `style-loader`：将 CSS 以 `<style>` 标签形式插入到 HTML 的 `<head>` 中。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          // 先使用 css-loader 解析，再用 style-loader 插入
          use: ['style-loader', 'css-loader'] 
        }
      ]
    }
  };
  ```

  + `css-loader`：解析 CSS 文件中的 `@import` 和 `url()` 等语句，处理 CSS 模块之间的依赖关系。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          // 解析 CSS 文件
          use: 'css-loader' 
        }
      ]
    }
  };
  ```

  + `sass-loader`：将 Sass 或 SCSS 文件编译为 CSS 文件，需配合 `node-sass` 或 `dart-sass` 使用。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          // 按顺序依次使用 sass-loader、css-loader、style-loader 处理
          use: ['style-loader', 'css-loader', 'sass-loader'] 
        }
      ]
    }
  };
  ```

  + `less-loader`：把 Less 文件转换为普通的 CSS 文件。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/,
          // 处理 Less 文件
          use: ['style-loader', 'css-loader', 'less-loader'] 
        }
      ]
    }
  };
  ```

  + `postcss-loader`：使用 PostCSS 对 CSS 进行转换和优化，例如添加浏览器前缀、压缩 CSS 等。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    // 添加浏览器前缀
                    require('autoprefixer') 
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  };
  ```

  + `file-loader`：处理文件资源，将文件复制到输出目录，并返回文件的公共 URL，适用于图片、字体等。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          // 处理图片文件
          use: 'file-loader' 
        }
      ]
    }
  };
  ```

  + `url-loader`：功能与 `file-loader` 类似，但当文件大小小于指定阈值时，会将文件转换为 Data URL 嵌入到代码中，减少 HTTP 请求。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              // 小于 8192 字节转换为 Data URL
              limit: 8192 
            }
          }
        }
      ]
    }
  };
  ```

  + `svg-url-loader`：专门处理 SVG 文件，可将 SVG 转换为 Data URL 或使用 `file-loader` 处理。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          // 处理 SVG 文件
          use: 'svg-url-loader' 
        }
      ]
    }
  };
  ```

  + `babel-loader`：结合 Babel 将 ES6+ 代码转换为向后兼容的 JavaScript 代码，确保在旧浏览器中正常运行。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
  ```

  + `ts-loader`：将 TypeScript 文件编译为 JavaScript 文件，配合 TypeScript 项目使用。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.ts$/,
          // 处理 TypeScript 文件
          use: 'ts-loader' 
        }
      ]
    }
  };
  ```

  + `markdown-loader`：将 Markdown 文件转换为 HTML 字符串，方便在项目中使用 Markdown 内容。

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.md$/,
          // 处理 Markdown 文件
          use: 'markdown-loader' 
        }
      ]
    }
  };
  ```

- **4：** **插件及功能与示例**
  + 用于在 Webpack 构建过程的优化和扩展，如代码压缩、生成 HTML 文件、分割代码等。
  + `HtmlWebpackPlugin`：自动生成 HTML 文件，并将打包后的 JavaScript 和 CSS 文件自动插入到 HTML 中，可使用模板文件。

  ```javascript
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        // 指定 HTML 模板文件
        template: './src/index.html' 
      })
    ]
  };
  ```

  + `MiniCssExtractPlugin`：将 CSS 提取到单独的文件中，避免将 CSS 内联到 JavaScript 中，提高页面加载性能。

  ```javascript
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // 提取 CSS 到单独文件
            MiniCssExtractPlugin.loader, 
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  };
  ```

  + `OptimizeCssAssetsPlugin`：压缩和优化 CSS 文件，去除多余的空格、注释等。

  ```javascript
  const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  module.exports = {
    plugins: [
      // 压缩优化 CSS
      new OptimizeCssAssetsPlugin() 
    ]
  };
  ```

  + `TerserPlugin`：在生产模式下默认使用，用于压缩 JavaScript 代码，减小文件体积。

  ```javascript
  const TerserPlugin = require('terser-webpack-plugin');
  module.exports = {
    optimization: {
      minimizer: [
        // 压缩 JavaScript 代码
        new TerserPlugin() 
      ]
    }
  };
  ```

  + `SplitChunksPlugin`（Webpack 4 及以后）：提取公共模块，实现代码分割，减少重复打包。

  ```javascript
  module.exports = {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };
  ```

  + `HardSourceWebpackPlugin`：为模块提供中间缓存，加快二次构建速度。

  ```javascript
  const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
  module.exports = {
    plugins: [
      // 启用模块缓存
      new HardSourceWebpackPlugin() 
    ]
  };
  ```

  + `DefinePlugin`：定义全局常量，可在代码中使用，常用于区分开发和生产环境。

  ```javascript
  const webpack = require('webpack');
  module.exports = {
    plugins: [
      new webpack.DefinePlugin({
        // 定义全局常量
        'process.env.NODE_ENV': JSON.stringify('production') 
      })
    ]
  };
  ```

  + `HotModuleReplacementPlugin`：开启热更新功能，在开发过程中修改代码后只更新修改的模块，无需重新加载整个页面。

  ```javascript
  const webpack = require('webpack');
  module.exports = {
    devServer: {
      hot: true
    },
    plugins: [
      // 开启热更新
      new webpack.HotModuleReplacementPlugin() 
    ]
  };
  ```

  + `CleanWebpackPlugin`：在每次构建前清理输出目录，避免旧文件残留。

  ```javascript
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  module.exports = {
    plugins: [
      // 清理输出目录
      new CleanWebpackPlugin() 
    ]
  };
  ```

  + `WebpackBundleAnalyzerPlugin`：生成打包文件的可视化报告，帮助分析各个模块的大小和依赖关系，便于优化打包结果。

  ```javascript
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  module.exports = {
    plugins: [
      // 生成打包分析报告
      new BundleAnalyzerPlugin() 
    ]
  };
  ```

- **1：** **模式**
  + `development`：开启调试特性，如生成 Source Map、不进行代码压缩等，方便开发调试。
  + `production`：自动开启代码压缩、Tree Shaking 等优化，减小打包文件体积，提高生产环境性能。

- **2：** **开发服务器**
  + **热更新**：`devServer: { hot: true }`，结合 `webpack.HotModuleReplacementPlugin` 实现模块热替换。
  + **代理**：`devServer: { proxy: { '/api': { target: 'http://backend.example.com' } } }`，解决开发环境中的跨域问题。

</details>

## Webpack 是如何处理模块打包的？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** **模块解析**
  + Webpack 从配置的入口文件开始，通过静态分析代码中的导入语句（如 `import`、`require`）来识别模块之间的依赖关系。例如，当遇到 `import './module.js'` 时，Webpack 会将 `module.js` 标记为当前模块的依赖。
  + 对于不同类型的模块，Webpack 会根据配置的 `resolve` 规则来确定模块的查找路径和文件扩展名。比如，设置 `extensions: ['.js', '.json']` 后，在查找模块时会自动尝试添加这些扩展名。

- **1：** **Loader 处理**
  + 在解析模块的过程中，Webpack 会根据 `module.rules` 配置的规则，使用相应的 loader 对模块进行处理。例如，对于 CSS 文件，会使用 `css-loader` 解析其中的 `@import` 和 `url()` 语句，再使用 `style-loader` 将 CSS 注入到 DOM 中。
  + loader 是按照从右到左（或从下到上）的顺序依次执行的。例如 `use: ['style-loader', 'css-loader']`，会先执行 `css-loader`，再执行 `style-loader`。

- **1：** **依赖图构建**
  + Webpack 通过递归地解析所有模块及其依赖，构建出一个完整的依赖图（Dependency Graph）。这个图记录了所有模块之间的依赖关系和顺序。
  + 依赖图中的每个节点代表一个模块，边代表模块之间的依赖关系。Webpack 会根据这个图来确定模块的打包顺序和方式。

- **1：** **代码生成与打包**
  + Webpack 根据依赖图将所有模块的代码合并和打包成一个或多个文件。在这个过程中，Webpack 会对代码进行优化，如去除未使用的代码（Tree Shaking）、压缩代码等。
  + 对于不同的入口文件，Webpack 会生成对应的打包文件。例如，配置了多个入口 `entry: { app: './src/app.js', admin: './src/admin.js' }`，会生成 `app.bundle.js` 和 `admin.bundle.js` 等文件。

- **1：** **插件机制**
  + Webpack 在整个打包过程中提供了丰富的钩子（Hook），插件可以在这些钩子上注册自己的逻辑，从而在不同的阶段执行特定的任务。
  + 例如，`HtmlWebpackPlugin` 会在打包完成后生成 HTML 文件，并将打包后的 JavaScript 和 CSS 文件插入到 HTML 中；`MiniCssExtractPlugin` 会在打包过程中提取 CSS 到单独的文件中。

</details>

## 为什么 Webpack 需要配置多个入口文件

#### 类型：`架构`

#### 级别：`W3`、`W4`

#### 解答（5 分）

<details>

- **1：** **多页面应用（MPA）开发**
  + 在多页面应用中，不同页面可能有不同的功能和依赖。例如，一个电商网站有首页、商品列表页、商品详情页、购物车页等。每个页面都有自己独立的 JavaScript 和 CSS 代码。通过配置多个入口文件，可以将不同页面的代码分别打包，避免所有页面加载相同的代码，减少不必要的资源加载，提高页面加载速度。
  + 示例配置：

  ```javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
      entry: {
          home: './src/pages/home/index.js',
          productList: './src/pages/productList/index.js',
          productDetail: './src/pages/productDetail/index.js',
          cart: './src/pages/cart/index.js'
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].bundle.js'
      }
  };
  ```

- **1：** **分离公共代码和业务代码**
  + 对于大型项目，可能会有一些公共的库和工具函数，如 React、Vue、lodash 等。将这些公共代码和业务代码分离，可以提高代码的可维护性和复用性。同时，公共代码可以被多个页面共享，浏览器可以缓存这些公共代码，减少重复加载。
  + 示例配置：

  ```javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
      entry: {
          vendors: ['react', 'react-dom', 'lodash'],
          app: './src/index.js'
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].bundle.js'
      }
  };
  ```

- **1：** **开发和生产环境分离**
  + 在开发和生产环境中，可能需要不同的配置和代码。例如，在开发环境中需要开启热更新、调试工具等，而在生产环境中需要进行代码压缩、优化等。通过配置多个入口文件，可以分别为开发和生产环境打包不同的代码。
  + 示例配置：

  ```javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
      entry: {
          development: './src/development.js',
          production: './src/production.js'
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].bundle.js'
      }
  };
  ```

- **1：** **按需加载不同功能模块**
  + 对于一些复杂的单页面应用，可能会有一些功能模块不是所有用户都会用到的。例如，一个社交网站的视频编辑功能，只有部分用户会使用。可以将这些功能模块配置为独立的入口文件，当用户需要使用这些功能时，再动态加载相应的代码，提高应用的性能和响应速度。
  + 示例配置：

  ```javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
      entry: {
          main: './src/main.js',
          videoEditor: './src/videoEditor.js'
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].bundle.js'
      }
  };
  ```

- **1：** **多语言支持**
  + 对于支持多语言的应用，不同语言的文本和资源可能需要分别打包。通过配置多个入口文件，可以为每种语言生成独立的打包文件，根据用户的语言设置加载相应的资源。
  + 示例配置：

  ```javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
      entry: {
          en: './src/locales/en.js',
          zh: './src/locales/zh.js'
      },
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: '[name].bundle.js'
      }
  };
  ```

</details>

## 如何配置 Webpack 实现图片的压缩和优化？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **2：** **安装依赖**
要对图片进行处理和压缩，需要安装 `file-loader`、`url-loader` 和 `image-webpack-loader` 这几个 loader，使用以下命令安装：

```bash
npm install file-loader url-loader image-webpack-loader --save-dev
```

- **1：** **`file-loader` 配置**
`file-loader` 用于处理图片文件，将其复制到输出目录并返回公共 URL。

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  // 匹配图片文件的扩展名
                  test: /\.(png|jpg|jpeg|gif)$/i,
                  use: [
                      {
                          // 使用 file-loader 处理匹配到的图片文件
                          loader: 'file-loader',
                          options: { 
                              // 输出的文件名保持原文件名和扩展名
                              name: '[name].[ext]', 
                              // 图片输出到 dist 目录下的 images 文件夹中
                              outputPath: 'images/' 
                          }
                      }
                  ]
              }
          ]
      }
  };
  ```

- **1：** **结合 `url-loader`**
`url-loader` 可以根据文件大小决定是将图片转换为 Data URL 还是使用 `file-loader` 处理。

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  // 匹配图片文件的扩展名
                  test: /\.(png|jpg|jpeg|gif)$/i,
                  use: [
                      {
                          // 使用 url-loader 处理图片文件
                          loader: 'url-loader',
                          options: { 
                              // 小于 8KB 的图片转换为 Data URL
                              limit: 8192, 
                              // 输出的文件名保持原文件名和扩展名
                              name: '[name].[ext]', 
                              // 图片输出到 dist 目录下的 images 文件夹中
                              outputPath: 'images/' 
                          }
                      }
                  ]
              }
          ]
      }
  };
  ```

- **1：** **添加 `image-webpack-loader` 压缩**
`image-webpack-loader` 用于对图片进行压缩优化，可与 `url-loader` 结合使用。

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  // 匹配图片文件的扩展名
                  test: /\.(png|jpg|jpeg|gif)$/i,
                  use: [
                      {
                          // 先使用 url-loader 处理图片
                          loader: 'url-loader',
                          options: { 
                              // 小于 8KB 的图片转换为 Data URL
                              limit: 8192, 
                              // 输出的文件名保持原文件名和扩展名
                              name: '[name].[ext]', 
                              // 图片输出到 dist 目录下的 images 文件夹中
                              outputPath: 'images/' 
                          }
                      },
                      {
                          // 再使用 image-webpack-loader 对图片进行压缩
                          loader: 'image-webpack-loader',
                          options: {
                              // 对 JPEG 图片进行渐进式压缩，质量设为 65
                              mozjpeg: { progressive: true, quality: 65 },
                              // 禁用 optipng 压缩
                              optipng: { enabled: false },
                              // PNG 图片质量范围 0.65 - 0.90，压缩速度设为 4
                              pngquant: { quality: [0.65, 0.90], speed: 4 },
                              // GIF 图片不使用隔行扫描
                              gifsicle: { interlaced: false },
                              // WebP 图片质量设为 75
                              webp: { quality: 75 }
                          }
                      }
                  ]
              }
          ]
      }
  };
  ```

</details>

## 描述一下在 Webpack 中如何实现代码分割（Code Splitting）

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 可以通过以下几种方式实现代码分割：
  + 多入口配置：在 `entry` 中配置多个入口文件，Webpack 会根据入口文件进行分割。
  + 动态导入（Dynamic Imports）：使用 `import()` 语法动态加载模块，Webpack 会自动将动态导入的模块分割成单独的文件。
- **1：** 动态导入示例：

```javascript
// 动态导入模块
button.addEventListener('click', async () => {
  const { add } = await import('./math.js');
  console.log(add(1, 2));
});
```

## Webpack 中的热更新（Hot Module Replacement）是什么，如何配置？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 热更新（Hot Module Replacement，简称 HMR）是指在开发过程中，当修改某个模块时，Webpack 会只更新该模块，而不是重新加载整个页面，从而提高开发效率。
- **1：** 配置步骤：
  + 安装 `webpack-dev-server`。
  + 在 Webpack 配置文件中开启 HMR：

```javascript
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true // 开启 HMR
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 使用 HMR 插件
  ]
};
```

## 如何在 Webpack 中配置环境变量？

#### 类型：`架构`  

#### 级别：`W3`、`W4` 、`W5`、`W6`

#### 解答（5 分）

- **1：** **DefinePlugin 核心配置**  

  ```javascript
  // webpack.config.js
  const { DefinePlugin } = require('webpack');
  module.exports = {
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // 必配：环境标识
        'API_URL': JSON.stringify('https://api.example.com'), // 自定义变量（需字符串化）
      }),
    ],
  };
  ```

- **2：** **dotenv-webpack 多环境**  
  1. 安装：`npm i dotenv-webpack -D`  
  2. 创建 `.env` 文件：  

      ```env
      # .env.development（开发）
      NODE_ENV=development  
      API_URL=https://dev.api.com  
      ```  

  3. 配置：  

      ```javascript
        const Dotenv = require('dotenv-webpack');

        module.exports = {
          plugins: [
            new Dotenv({
              path: `.env.${process.env.NODE_ENV}`, // 根据当前环境加载对应文件
              safe: true, // 启用 .env.example 作为默认值（需提前创建）
              systemvars: true // 允许访问系统环境变量（如 PATH）
            })
          ]
        };
      ```

  4. 脚本激活环境：

      ```json
      // package.json
      {
        "scripts": {
          "dev": "NODE_ENV=development webpack", // 加载 .env.development
          "build": "NODE_ENV=production webpack" // 加载 .env.production（需手动创建）
        }
      }
      ```

- **1：** **代码中动态使用**  

  ```javascript
  // 环境区分逻辑
  if (process.env.NODE_ENV === 'development') {
    console.log('开发模式日志'); // 生产环境自动删除（Tree Shaking）
  }
  // 动态API
  fetch(`${process.env.API_URL}/user`); // 开发/生产环境不同地址
  ```

- **1：** **避坑清单**  
  所有变量必须 `JSON.stringify`（否则报错）  
  敏感变量走 CI/CD（如 GitHub Secrets，勿存 `.env`）

## Webpack 中的 Tree Shaking 是什么，如何开启？

#### 类型：`架构`  

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 是什么  
  + **Tree Shaking** 是通过**静态分析 ES Module 导入导出语句**，移除未被使用代码的优化（类似“摇树去枯叶”）。  
  + **核心依赖**：ES Module 静态结构（`import/export` 编译时确定），无法用于 CommonJS。

- **1：** 核心作用  
  + **减体积**：剔除死代码（如未调用的函数、未使用的变量），典型场景：lodash 按需引入体积减少 90%+。  
  + **提性能**：减少浏览器下载/执行的代码量，提升首屏加载速度。

- **1：** 配置与说明  

  | 步骤 | 配置代码 | 说明 |
  |---|---|---|
  | **前提**            | 使用 ES Module（`import/export`）                      | CommonJS 动态语法（`require`）不支持 Tree Shaking                   |
  | **生产模式默认**    | `mode: 'production'`                                   | 自动启用 Tree Shaking + Terser 压缩（无需额外配置）                 |
  | **显式配置**        | ```javascript<br>optimization: {<br>  treeShaking: true<br>}<br>``` | 开发模式如需开启（不推荐，影响构建速度）                             |
  | **标记副作用**      | `package.json` 声明：<br>`"sideEffects": false`          | 全局无副作用（适用于纯 ESM 库），或精细保留：`["*.css", "./src/utils/side-effect.js"]` |

- **1：** 完整示例（生产模式）  

```javascript
// webpack.config.js
module.exports = {
  mode: 'production', // 关键：自动开启 Tree Shaking
  entry: './src/index.js',
  output: { filename: 'bundle.[contenthash].js' }
};

// src/math.js（ES Module）
export const add = (a, b) => a + b; // 被引用，保留
export const subtract = (a, b) => a - b; // 未引用，被摇树移除

// src/index.js
import { add } from './math.js'; // 仅引入 add
console.log(add(1, 2));
```

- **1：** 注意事项  
  + **必查项**：打包后代码搜索未引用的函数名（如 `subtract`），确认是否被删除。  
  + **样式文件**：CSS 需在 `sideEffects` 中声明（否则可能被误删）。  
  + **动态导入**：`import('./module.js')` 单独打包，不影响主包 Tree Shaking。  
  + **开发模式**：无需开启（`mode: 'development'` 下默认关闭，因压缩会拖慢构建）。

## 如何在 Webpack 中处理字体文件？

#### 类型：`架构`

#### 级别：`W2`、`W3`、`W5`、`W6`

#### 解答（2 分）

- **1：** 可以使用 `file-loader` 或 `url-loader` 来处理字体文件。
- **1：** 配置示例：

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
};
```

## Webpack 中的 Source Map 是什么，有什么作用，如何配置？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：**  是什么
  + **Source Map** 是一个映射文件，记录**打包后代码**与**原始源代码**的对应关系（如行列号、变量名）。

- **1：**  作用
  + 类似“代码翻译器”，让浏览器调试工具能定位到原始代码并保留变量原名（即使代码被压缩、合并或转换，如：变量名压缩为`a`、`b`）。

- **1：**  如何配置？

通过 `devtool` 配置，支持多种模式（开发/生产差异化）：

| 模式 | 速度 | 精准度 | 适用场景 | 特点 |
|---|---|---|---|---|
| `eval-cheap-module`      | ★★★★★| 行映射（无列） | 本地开发（默认推荐）   | `eval()` 包裹模块，构建速度快；`cheap`：仅映射行号（忽略列），进一步提升速度；`module`：支持 loader 处理后的源代码（如 Babel 转换的 JS）|
| `inline-cheap-module`    | ★★★★☆| 行映射（嵌入） | 无需独立文件的场景     | 文件结构简单；`cheap`：仅映射行号，构建速度快 |
| `source-map`             | ★★☆☆☆| 行列全映射     | 生产环境（需服务器配合）| 生成独立 `.map` 文件，浏览器自动加载（需服务器配置 `Access-Control-Allow-Origin`）|
| `hidden-source-map`      | ★★☆☆☆| 行列全映射     | 生产环境（不上传浏览器）| 安全，生成 `.map` 但不自动关联（需手动上传到错误监控平台，避免暴露源码）|

- **1：**  参考示例

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: process.env.NODE_ENV === 'development' 
    ? 'eval-cheap-module-source-map' // 开发环境快
    : 'source-map', // 生产环境准
  // 其他配置...
};
```

- **1：**  注意事项
  + 生产环境建议关闭 `source-map` 或配合 CDN 加密，避免源码泄露。  
  + 若使用 `webpack-dev-server`，默认已开启 `inline-source-map`，可通过 `devServer.devtool` 覆盖。  

## 如何在 Webpack 中使用 TypeScript？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 首先安装 `ts-loader` 和 `typescript`。
- **1：** 然后在 Webpack 配置文件中配置：

```javascript
module.exports = {
  resolve: {
    extensions: ['.ts', '.js'] // 解析文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
```

## 如何优化 Webpack 构建速度？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（8 分）

<details>

- **2分：缩小打包范围**  
  + **1分**：使用 `include`/`exclude` 限定 loader 处理文件范围  

    ```javascript
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, 'src'), // 只处理 src 目录
          exclude: /node_modules/
        }
      ]
    }
    ```

  + **1分**：配置 `resolve.alias` 减少路径解析耗时  

    ```javascript
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
    ```

- **2分：缓存优化**  
  + **1分**：启用持久化缓存（Webpack 5+ 内置）  

    ```javascript
    module.exports = {
      cache: {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename] // 配置文件变化时缓存失效
        }
      }
    };
    ```

  + **1分**：使用 `babel-loader` 的缓存  

    ```javascript
    {
      loader: 'babel-loader',
      options: { cacheDirectory: true }
    }
    ```

- **2分：多进程加速**  
  + **1分**：使用 `thread-loader` 并行处理模块  

    ```javascript
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['thread-loader', 'babel-loader']
        }
      ]
    }
    ```

  + **1分**：配置 `HappyPack` 分割任务  

    ```javascript
    const HappyPack = require('happypack');
    module.exports = {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: 'happypack/loader?id=js'
          }
        ]
      },
      plugins: [
        new HappyPack({
          id: 'js',
          threads: 4,
          loaders: ['babel-loader']
        })
      ]
    };
    ```

- **2分：构建优化**  
  + **1分**：使用 `DLLPlugin` 预编译依赖库  

    ```javascript
    // webpack.dll.config.js
    module.exports = {
      entry: {
        vendor: ['react', 'react-dom']
      },
      output: {
        filename: '[name].dll.js',
        library: '[name]_library'
      },
      plugins: [
        new webpack.DllPlugin({
          path: path.join(__dirname, 'dist', '[name]-manifest.json'),
          name: '[name]_library'
        })
      ]
    };
    ```

  + **1分**：启用 `splitChunks` 优化代码分割  

    ```javascript
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        automaticNameDelimiter: '~'
      }
    }
    ```

</details>

## Webpack 中的 DllPlugin 和 DllReferencePlugin 有什么作用，如何使用？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** `DllPlugin` 用于创建动态链接库（DLL），将一些不经常变化的模块（如第三方库）打包成一个单独的文件，减少每次构建的时间。`DllReferencePlugin` 用于在主构建中引用这些 DLL 文件。
- **1：** 使用步骤：
  + 配置 `DllPlugin` 创建 DLL 文件：

```javascript
// webpack.dll.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    vendors: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dist', '[name]-manifest.json')
    })
  ]
};
```

- 配置 `DllReferencePlugin` 引用 DLL 文件：

```javascript
// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  // 其他配置...
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'vendors-manifest.json')
    })
  ]
};
```

## 如何在 Webpack 中配置代理来解决跨域问题？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 在 `webpack-dev-server` 中配置代理。
- **1：** 示例如下：

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com', // 目标服务器地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
```

## Webpack 中的 Module Federation 是什么，有什么应用场景？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** Module Federation 是 Webpack 5 引入的一个新特性，它允许在不同的 Webpack 构建之间共享模块，实现模块的动态加载和远程调用。
- **1：** 应用场景包括微前端架构，不同团队开发的前端应用可以通过 Module Federation 共享组件和模块，提高开发效率和代码复用性。

## webpack 的热更新原理?

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 在编写未经过 webpack 打包的源代码后，Webpack Compile 将源代码和 HMR Runtime 一起编译成 bundle 文件，传输给 Bundle Server 静态资源服务器，
- **1：** 当某一个文件或者模块发生变化时，webpack 监听到文件变化对文件重新编译打包，编译生成唯一的hash 值，这个 hash 值用来作为下一次热更新的标识根据变化的内容生成两个补丁文件: manifest (包含了 hash 和 chundId ，用来说明变化的内容)和 chunk.js 模块。
- **1：** 由于 socket 服务器在 HMR Runtime 和 HMR Server 之间建立 websocket 链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的 hash 值，如下图的h 属性，作为下一次热更细的标识
- **1：** 在浏览器接受到这条消息之前，浏览器已经在上一次 socket 消息中已经记住了此时的 hash 标识这时候我们会创建一个 ajax 去服务端请求获取到变化内容的 manifest 文件mainfest 文件包含重新 build 生成的 hash 值，以及变化的模块，对应上图的 c 属性浏览器根据 manifest 文件获取模块变化的内容，从而触发 render 流程，实现局部模块更新。
![alt text](/public/images/image.png)

## webpack proxy是什么？怎么配置？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** webpack proxy，是 webpack 提供的代理服务，基本行为就是接收客户端发送的请求后转发给其他服务器，其目的是为了便于开发者在开发模式下解决跨域问题(浏览器安全策略限制)
- **1：** 配置如下：

```javascript
const path = require("path");
module.exports = {
  // ...
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "https://api.github.com",// 
      },
    },
    // ...
  },
};
```

## proxy是工作原理？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** proxy 工作原理实质上是利用 http-proxy-middleware 这个 http 代理中间件，实现请求转发给其他服务器

```javascript
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true
}));
app.listen(3000);
```

## webpack中的Loader如何编写？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（5 分）

- **5：** loader 的本质其本质为函数，函数中的 this 作为上下文会被 webpack 填充，因此我们不能将 loader 设为一个箭头函数。
函数接受一个参数，为 webpack 传递给 loader 的文件源内容函数中 this 是由 webpack 提供的对象，能够获取当前 loader 所需要的各种信息函数中有异步操作或同步操作，异步操作通过 this.callback 返回，返回值要求为 string 或者 Buffer。

```javascript
//导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source){
 const content = doSomeThing2JsString(source);
//如果 loader 配置了 options 对象，那么this.query将指向 options
const options = this.query;
// 可以用作解析其他模块路径的上下文
console.log('this.context');
/*
* this.callback 参数:
* error:Error |null，当 loader 出错时向外抛出一个 error
* content:String | Buffer，经过 loader 编译后需要导出的内容
* sourceMap:为方便调试生成的编译后内容的 source map* ast:本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST.进而省去重复生成 AST 的过程
*/
this.callback(null，content);//异步
return content;//同步
}
```

## webpack中的Plugin如何编写？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（5 分）

- **3：** 由于 webpack 基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件就可以在特定的阶段执行自己的插件任务  
webpack 编译会创建两个核心对象:
  + compiler:包含了 webpack 环境的所有的配置信息，包括 options，loader 和 plugin，和webpack 整个生命周期相关的钩子
  + compilation:作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 Compilation  将被创建
- **2：** 如果自己要实现 plugin ，也需要遵循一定的规范:
  + 插件必须是一个函数或者是一个包含 apply 方法的对象，这样才能访问 compiler 实例.
  + 传给每个插件的 compiler 和compilation 对象都是同一个引用，因此不建议修改
  + 异步的事件需要在插件处理完任务时调用回调函数通知 webpack 进入下一个流程，不然会卡住

```javascript
class MyPlugin {
  // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    //找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      // compilation: 当前打包构建流程的上下文
      console.log(compilation);
      // do something...
    });
  }
}
```

## 说说如何借助webpack来优化前端性能?

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

- **3：**
  + JS代码压缩  
  + CSS代码压缩  
  + Html文件代码压缩  
  + 文件大小压缩  
  + 图片压缩  
  + Tree Shaking  
  + 代码分离  
  + 内联 chunk

## 使用webpack开发时，你用过哪些可以提高效率的插件？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

- webpack-dashboard：可以更友好的展示相关打包信息。

- webpack-merge：提取公共配置，减少重复配置代码

- speed-measure-webpack-plugin：可以得知每个 loader 和 plugin 的执行耗时

- webpack-bundle-analyzer：可视化 webpack 输出文件的体积，方便找出问题所在

- HotModuleReplacementPlugin：模块热替换

## 文件监听原理

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

在发现源码发生变化时，自动重新构建出新的输出文件。

Webpack开启监听模式，有两种方式：

- 启动 webpack 命令时，带上 --watch 参数

- 在配置 webpack.config.js 中设置 watch:true

缺点：每次需要手动刷新浏览器

原理：轮询判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout 后再执行。

## 文件指纹是什么

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（1 分）

文件指纹是打包后输出的文件名的后缀。

- Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改

- Chunkhash：和 Webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值

- Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

## JS的文件指纹设置

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

文件指纹是打包后输出的文件名的后缀。

设置 output 的 filename，用 chunkhash。

```js

module.exports = {    
  entry: {        
    app: './scr/app.js',        
    search: './src/search.js'    
    },    
    output: {        
      filename: '[name][chunkhash:8].js',        
      path:__dirname + '/dist'    
}}

```

## CSS的文件指纹设置

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

设置 MiniCssExtractPlugin 的 filename，使用 contenthash。

```js

module.exports = {    
  entry: {        
    app: './scr/app.js',        
    search: './src/search.js'    },   
    output: {        
      filename: '[name][chunkhash:8].js',        
      path:__dirname + '/dist'    
    },    
    plugins:[        
        new MiniCssExtractPlugin({            
        filename: `[name][contenthash:8].css`        
      })    
  ]}
```

## 图片的文件指纹设置

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

设置file-loader的name，使用hash。

- ext 资源后缀名

- name 资源名称

- path 资源所在路径

- folder 资源所在文件夹

- base 资源相对于上下文路径

- hash 文件内容的 hash 值

- digest 文件内容的 digest 值

- content 文件内容的 base64 编码

- query url查询参数

- emoji 一个随机的指代文件内容的emoj

```js

const path = require('path');
module.exports = {    
  entry: './src/index.js',    
  output: {        
    filename:'bundle.js',        
    path:path.resolve(__dirname, 'dist')    
    },    
    module:{        
      rules:[{            
        test:/\.(png|svg|jpg|gif)$/,            
        use:[{                
          loader:'file-loader',                
          options:{                    
            name:'img/[name][hash:8].[ext]'                
        }            
      }]        
    }]    
  }}

```

## 是否写过Loader？简单描述一下编写loader的思路？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。

- Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用

- Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据

- 尽可能的异步化 Loader，如果计算量很小，同步也可以

- Loader 是无状态的，我们不应该在 Loader 中保留状态

- 使用 loader-utils 和 schema-utils 为我们提供的实用工具

- 加载本地 Loader 方法

Npm link

ResolveLoader

## 是否写过Plugin？简单描述一下编写Plugin的思路？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。

- compiler 暴露了和 Webpack 整个生命周期相关的钩子

- compilation 暴露了与模块和依赖有关的粒度更小的事件钩子

- 插件需要在其原型上绑定apply方法，才能访问 compiler 实例

- 传给每个插件的 compiler 和 - compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件

- 找出合适的事件点去完成想要的功能

emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)

watch-run 当依赖的文件发生变化时会触发

- 异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住

## 聊一聊Babel原理吧

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) Babel大概分为三大部分：

- 解析：将代码转换成 AST

  词法分析：将代码(字符串)分割为token流，即语法单元成的数组

  语法分析：分析token流(上面生成的数组)并生成 AST

- 转换：处理 AST，进行添加、更新或移除等操作

  Taro就是利用 babel 完成的小程序语法转换

- 生成：将处理后的 AST 转换成代码

## Babel如何配置？如何配置才能让babel支持最新es语法？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

Babel 是一个编译器，它主要用于将 ECMAScript 2015+ 代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

Babel 的配置文件通常是一个名为 babel.config.js 的 JavaScript 文件，它位于项目的根目录中。在这个文件中，你可以使用 Babel 的配置选项来指定如何转换你的代码。

要配置 Babel 以支持最新的 ECMAScript 语法，你可以使用 @babel/preset-env 预设。这个预设会根据你的目标环境自动选择需要的 Babel 插件和 polyfills，以支持最新的 ECMAScript 语法。

以下是一个基本的 babel.config.js 文件的示例，它使用 @babel/preset-env 预设来支持最新的 ECMAScript 语法：

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

## 为什么要用 Webpack

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

没用 webpack 之前有什么问题：

全局变量污染： 传统的 JavaScript 开发中，所有变量和函数默认都是全局的；

手动管理依赖顺序麻烦： 在script里引入外部 JS 难度随着项目体量越来越难；

手动进行性能优化繁琐： 如文件合并、压缩、减少 HTTP 请求，繁琐且易出错；

要确保代码在不同浏览器中的兼容性： 需要手动编写或引入 polyfills、babel 等第三方工具；

对于小型项目来说，这些问题不太明显。但随之项目规模逐渐增大，再去解决这些问题就很吃力，这个时候我们就需要一种工具来帮我们把这些机械性问题，自动化的解决掉，让开发者更加专注在业务层面。

## webpack 如何确定依赖引用顺序

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

依赖图的构建过程

入口点：Webpack 从配置的入口点entry开始，从入口文件开始解析。

递归解析：递归解析每个模块的依赖，找到所有被引用的模块。

构建依赖图：根据模块之间的依赖关系构建一个依赖图。

确定顺序：根据依赖图确定模块的引用顺序，确保被依赖的模块先于依赖它们的模块打包。

## SourceMap 原理

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

配置 devtool: 'source-map'后，

在编译过程中，会生成一个 .map 文件，一般用于代码调试和错误监控。

- 包含了源代码、编译后的代码、以及它们之间的映射关系。

- 编译后的文件通常会在文件末尾添加一个注释，指向 SourceMap文件的位置。

- 当在浏览器开发者工具调试时，浏览器会读取这行注释并加载对应的 SourceMap 文件

报错时，点击跳转。即使运行的是编译后的代码，也能够追溯到原始源代码的具体位置，而不是处理经过转换或压缩后的代码，从而提高了调试效率。