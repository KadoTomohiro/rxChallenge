# RxJS Challenge

Angular2 + RxJS5を試してみる。

## ツール/ライブラリ

* [angular-cli](https://github.com/angular/angular-cli)
* [angular2](https://github.com/angular/angular)
* [RxJS 5 (beta)](https://github.com/ReactiveX/RxJS)

## とりあえず動かす

[simple.ts](./src/app/components/simple.ts)

Rxのインポート。よくあるサンプルの`Rx.Observable.....`的に使うにはこれで良さそう。
````typescript
import * as Rx from 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
````
他にも書き方がありそう。Angular2のソースでは`Observable`オブジェクトを`new`してる？

やったこと

* 0から9までの連番(元データ)を配列に順次Push
* 元データから３の倍数だけフィルタして３倍した配列を一括で配列に渡す
* 元データの合計を求める