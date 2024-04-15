# 18_JS_practise
 2024前期JavaScript演習リポジトリ

## オブジェクトとクラス

- 4月15日（月）
クラスの定義と、コンストラクタ　インスタンス化

``js
<script>
        // オブジェクトの定義
        const parson = {
            // プロパティ
            name: "", //""は空文字といってデータが何もない文字列を意味しています。
            age: 0, // メソッド
            information: function () {
                return "名前：" + this.name + "\n年齢：" + this.age;
            },
        };

        // プロパティの値を代入
        parson.name = "山田太郎";
        parson.age = 18;

        // 情報の開示
        const info = parson.information();
        console.log(info);

        const dict = { apple: "りんご", banana: "バナナ", orange: "オレンジ" };

        console.log(dict.apple);
        console.log(dict["apple"]);//ブランケット記法の場合は、文字列で

        //内容を変更する
        dict.apple = "林檎";
        console.log(dict);

        //ぶどうを加える
        dict.grepe = "ぶどう";//無いキーを設定するとあたら新しく加わる
        console.log(dict);

        //オブジェクトの要素を削除する
        delete dict.orange;
        console.log(dict);

    </script>
    ``