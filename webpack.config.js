const path = require('path');

module.exports = {
  mode: 'development', // Geliştirme modu
  entry: './src/index.ts', // Giriş dosyası
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript dosyalarını işleme
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Dosya uzantıları
  },
  output: {
    filename: 'bundle.js', // Çıktı dosyasının adı
    path: path.resolve(__dirname, 'dist'), // Çıktı yolu
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Statik dosyaların yolu
    compress: true, // Gzip sıkıştırma
    port: 9000, // Sunucu portu
  },
};
