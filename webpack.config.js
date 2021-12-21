const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = argv.mode === 'development'

  const fileName = (ext) => isProd ?
  `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'favicon.svg'),
            to: path.resolve(__dirname, 'dist')
          }
        ]
      })
    ]

    if (isDev) {
      base.push(new ESLintPlugin())
    }

    return base
  }

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        './index.tsx'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: fileName('js'),
      chunkFilename: fileName('js'),
      clean: true
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendors',
            enforce: true,
            chunks: 'all'
          }
        }
      }
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      watchFiles: './',
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.m?tsx$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        }
      ]
    }
  }
}
