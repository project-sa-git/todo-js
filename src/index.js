import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成("div"タグを生成する)
  const div = document.createElement("div");
  div.className = "list-row" // コンソールで<div class="list-row"></div>

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; // コンソールで<li>dddd</li>

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リストに追加（画面の要素を書き換える）
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
