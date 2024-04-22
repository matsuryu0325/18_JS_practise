

import { Chiikawa } from "./class.js";





//複数なので配列を準備

//挿入するエリア
const container = document.querySelector(".contents");

//インスタンス化
//配列の順番を表す数字を「添字」またの名を「index」
for (let i = 0; i < chiikawas.length; i++) {
    chiikawaContents.push(new Chiikawa(chiikawas[i].story, chiikawas[i].title, chiikawas[i].image, chiikawas[i].id));
    //メソッドの呼び出し
    //console.log(chiikawaContents[i].createMarkup());//dl...dt...dd
    container.insertAdjacentHTML("beforeend", chiikawaContents[i].createMarkup());
}

const chiikawaContents = [];
chiikawas.forEach((chiikawa) => {
    const instance = new Chiikawa(chiikawa.story, chiikawa.title, chiikawa.image, chiikawa.id);
    chiikawaContents.push(instance);
});

//DOMに追加
chiikawaContents.forEach((chiikawa) => {
    container.insertAdjacentHTML("beforeend", chiikawa.createMarkup());
});

console.log(chiikawaContents);
