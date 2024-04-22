

import { Chiikawa } from "./class.js";




//複数なので配列を準備

//挿入するエリア
const container = document.querySelector(".contents");

//インスタンス化
//配列の順番を表す数字を「添字」またの名を「index」


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
