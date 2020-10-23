## default export は使わない

### 理由

https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/

1. const で定義した変数の export を 1 行で簡潔に書ける。
2. 弊社のアプリケーションだと 1 ファイルで複数項目を export することが多い。変数の export は一律 named export に定めるほうがルールの単純さで優れている。
