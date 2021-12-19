import "./styles.css";

let addbtn = document.getElementById("add-button");
addbtn.addEventListener("click", () => onClickAdd());
const onClickAdd = () => {
  let inputtext = document.getElementById("add-input");
  const text = inputtext.value;

  inputtext.value = "";
  createIncompleteList(text);
};

const onClickComp = (target) => {
  const text = target.firstElementChild.innerText;
  createCompleteList(text);

  document.getElementById("incomplete-area_ul").removeChild(target);
};

const onClickDelete = (target) => {
  document.getElementById("incomplete-area_ul").removeChild(target);
};
const onClickBack = (target) => {
  const text = target.firstElementChild.innerText;
  createIncompleteList(text);

  document.getElementById("complete-area_ul").removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = text;

  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    onClickComp(compBtn.parentNode);
  });

  const delBtn = document.createElement("button");
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    onClickDelete(delBtn.parentNode);
  });

  li.appendChild(span);
  li.appendChild(compBtn);
  li.appendChild(delBtn);

  document.getElementById("incomplete-area_ul").appendChild(li);
};

const createCompleteList = (text) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = text;

  const backBtn = document.createElement("button");
  backBtn.innerText = "戻す";
  backBtn.addEventListener("click", () => {
    onClickBack(backBtn.parentNode);
  });

  li.appendChild(span);
  li.appendChild(backBtn);

  document.getElementById("complete-area_ul").appendChild(li);
};
