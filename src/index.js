import i18nlang from "./i18n";
import chatgptsvg from "./chatgpt.svg?raw";

var __chatinit = false;

function createBtn(opt) {
  if (__chatinit) {
    return;
  }
  __chatinit = true;
  var chatgpturl = "https://chat.openai.com/?prompt={prompt}&from={from}";
  var browserLang = navigator.language.substr(0, 2);
  var switchlang = "";
  function i18n(key) {
    let swlang = switchlang || browserLang;
    if (!i18nlang[swlang]) {
      swlang = "en";
    }
    return i18nlang[swlang][key];
  }

  function nextlang() {
    // loop i18nlang
    const langs = Object.keys(i18nlang);
    const index = langs.indexOf(switchlang);
    return langs[(index + 1) % langs.length];
  }

  function setLanguage() {
    switchlang = nextlang();
    document.getElementById("gen-btn").title = i18n("title");
  }
  // if fromOrgin
  if (window.atob && window.atob(opt.config) !== location.origin) {
    return;
  }
  // 创建按钮元素
  const btn = document.createElement("a");
  btn.id = "gen-btn";
  btn.href = "javascript:;";
  // btn tooltip
  btn.title = i18n("title");
  btn.style =
    "position: fixed; bottom: 50%; right: 20px; z-index: 9999; width: 32px; height: 32px; border: none; cursor: pointer;";
  btn.innerHTML = chatgptsvg;
  // 将按钮和提示内容添加到页面中
  document.body.appendChild(btn);
  // 为按钮绑定点击事件
  let clickTimer;
  btn.addEventListener("click", () => {
    clearTimeout(clickTimer)
    clickTimer = setTimeout(function () {
      // 获取当前网页地址
      const url = window.location.href;
      // 生成文本内容
      const text = i18n("prompt").replace("{url}", url);
      // 将文本内容复制到剪贴板
      navigator.clipboard.writeText(text);
      // 创建提示内容元素
      const tooltip = document.createElement("div");
      tooltip.id = "tooltip";
      tooltip.style.display = "none";
      tooltip.style.position = "fixed";
      tooltip.style.zIndex = "9999";
      tooltip.style.bottom = "50%";
      tooltip.style.right = "100px";
      tooltip.style.backgroundColor = "#74aa9c";
      tooltip.style.color = "white";
      tooltip.style.padding = "10px";
      tooltip.style.borderRadius = "5px";
      tooltip.style.opacity = "0";
      tooltip.style.transition = "opacity 0.3s";

      tooltip.innerText = i18n("copy");
      document.body.appendChild(tooltip);
      // 显示提示内容并淡入
      tooltip.style.display = "block";
      tooltip.style.opacity = "1";
      // 2 秒后淡出并移除提示内容
      tooltip.onclick = () => {
        tooltip.style.opacity = "0";
        // use a tag to create a new tab to open the url
        setTimeout(() => {
          tooltip.remove();
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = chatgpturl
            .replace("{from}", encodeURIComponent(url))
            .replace("{prompt}", encodeURIComponent(text));
          a.target = "_blank";
          a.click();
        }, 300);
      };
    }, 200);
  });

  btn.addEventListener("dblclick", function () {
    clearTimeout(clickTimer);
    setLanguage();
  });

  // btn hover show tip on the btn left, hover out hide tip
  btn.addEventListener("mouseover", function () {
    const htip = document.getElementById("tip");
    if (htip) {
      return;
    }
    const tip = document.createElement("div");
    tip.id = "tip";
    tip.style.display = "none";
    tip.style.position = "fixed";
    tip.style.width = "200px";
    tip.style.zIndex = "9999";
    // tip position based btn offset
    tip.style.top = btn.offsetTop + "px";
    tip.style.left = btn.offsetLeft - 200 - 40 + "px";
    tip.style.backgroundColor = "#74aa9c";
    tip.style.color = "white";
    tip.style.padding = "10px";
    tip.style.borderRadius = "5px";
    tip.style.opacity = "0";
    tip.style.transition = "opacity 0.3s";

    tip.innerText = i18n("tip");
    document.body.appendChild(tip);
    tip.style.display = "block";
    tip.style.opacity = "1";
  });
  btn.addEventListener("mouseleave", function () {
    const tip = document.getElementById("tip");
    tip.style.opacity = "0";
    setTimeout(() => {
      tip.remove();
    }, 300);
  });
}

// serilize data
function serialize(data) {
  const option = {};
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    option[item[0]] = item[1];
  }
  return option;
}

export function gotoTesting() {
  window.onload = function () {
    const option = serialize(window._chatData);
    createBtn(option);
  };
  // if the page is loaded
  if (document.readyState === "complete") {
    const option = serialize(window._chatData);
    createBtn(option);
  }
}

gotoTesting();
