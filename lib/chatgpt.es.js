/**
 * name: ai-prompt-testing
 * version: v1.0.6
 * description: chatgpt prompt for website testing
 * author: Terry Cai
 * homepage: https://github.com/icai/ai-prompt-testing#readme
 */
var u = {
  en: {
    title: "generate testing",
    prompt: "Based on the link {url}, generate a test with 4 multiple-choice questions, 3 short-answer questions, and 3 true/false questions, and include answers after the questions.",
    copy: "Content copied, please go to chatgpt website",
    tip: "Click to generate the testing prompt, double click to switch language"
  },
  zh: {
    title: "生成测试题",
    prompt: "基于链接{url}，生成一份测试题，选择题4题，问答题3题，判断题3题，并在问题之后附上答案",
    copy: "内容已复制，请前往 chatgpt 网站",
    tip: "点击生成测试题提示，双击切换语言"
  },
  ja: {
    title: "テストを生成する",
    prompt: "リンク{url}を基に、4つの選択問題、3つの短答え問題、3つの真偽問題を含むテストを生成し、問題の後に答えを含めます。",
    copy: "コンテンツがコピーされました。chatgptウェブサイトに移動してください",
    tip: "テストのプロンプトを生成するにはクリックし、言語を切り替えるにはダブルクリックします"
  },
  ko: {
    title: "테스트 생성",
    prompt: "링크 {url}을 기반으로 4 개의 객관식 문제, 3 개의 단답식 문제, 3 개의 참거짓 문제를 포함하는 테스트를 생성하고 문제 뒤에 답을 포함합니다.",
    copy: "콘텐츠가 복사되었습니다. chatgpt 웹 사이트로 이동하십시오",
    tip: "테스트 프롬프트를 생성하려면 클릭하고 언어를 전환하려면 두 번 클릭하십시오"
  },
  fr: {
    title: "Générer un test",
    prompt: "Sur la base du lien {url}, générer un test avec 4 questions à choix multiples, 3 questions à réponse courte et 3 questions vrai/faux, et inclure les réponses après les questions.",
    copy: "Contenu copié, veuillez vous rendre sur le site web chatgpt",
    tip: "Cliquez pour générer le test, double-cliquez pour changer de langue"
  },
  es: {
    title: "Generar prueba",
    prompt: "Basado en el enlace {url}, generar una prueba con 4 preguntas de opción múltiple, 3 preguntas de respuesta corta y 3 preguntas de verdadero/falso, e incluir respuestas después de las preguntas.",
    copy: "Contenido copiado, por favor vaya al sitio web de chatgpt",
    tip: "Haga clic para generar el aviso de prueba, haga doble clic para cambiar el idioma"
  },
  de: {
    title: "Test generieren",
    prompt: "Basierend auf dem Link {url} generieren Sie einen Test mit 4 Multiple-Choice-Fragen, 3 Kurzantwort-Fragen und 3 Wahr/Falsch-Fragen und fügen Sie die Antworten nach den Fragen ein.",
    copy: "Inhalt kopiert, bitte gehen Sie zur chatgpt Website",
    tip: "Klicken Sie, um den Test-Prompt zu generieren, doppelklicken Sie, um die Sprache zu wechseln"
  },
  ru: {
    title: "Создать тест",
    prompt: "На основе ссылки {url} сгенерировать тест с 4 вопросами с выбором ответа, 3 вопросами с кратким ответом и 3 вопросами с истинным/ложным утверждением, а также включить ответы после вопросов.",
    copy: "Содержимое скопировано, пожалуйста, перейдите на сайт chatgpt",
    tip: "Нажмите, чтобы сгенерировать приглашение к тестированию, дважды щелкните, чтобы изменить язык"
  },
  tr: {
    title: "Test oluştur",
    prompt: "Bağlantı {url} temel alınarak 4 çoktan seçmeli soru, 3 kısa cevap sorusu ve 3 doğru/yanlış sorusu içeren bir test oluşturun ve sorulardan sonra cevapları ekleyin.",
    copy: "İçerik kopyalandı, lütfen chatgpt web sitesine gidin",
    tip: "Testi oluşturmak için tıklayın, dil değiştirmek için çift tıklayın"
  },
  in: {
    title: "Membuat tes",
    prompt: "Berdasarkan tautan {url}, buat tes dengan 4 pertanyaan pilihan ganda, 3 pertanyaan jawaban singkat, dan 3 pertanyaan benar/salah, dan sertakan jawaban setelah pertanyaan.",
    copy: "Konten disalin, silakan pergi ke situs web chatgpt",
    tip: "Klik untuk menghasilkan tes, klik dua kali untuk mengubah bahasa"
  },
  ua: {
    title: "Створити тест",
    prompt: "На основі посилання {url} створити тест з 4 питань з вибором відповіді, 3 питаннями з короткою відповіддю та 3 питаннями із правильним/неправильним твердженням, а також включити відповіді після питань.",
    copy: "Вміст скопійовано, будь ласка, перейдіть на сайт chatgpt",
    tip: "Натисніть, щоб створити запрошення до тестування, двічі клацніть, щоб змінити мову"
  }
};
const f = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2406 2406"><path d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z" fill="#74aa9c"/><path d="M1107.3 299.1c-198 0-373.9 127.3-435.2 315.3C544.8 640.6 434.9 720.2 370.5 833c-99.3 171.4-76.6 386.9 56.4 533.8-41.1 123.1-27 257.7 38.6 369.2 98.7 172 297.3 260.2 491.6 219.2 86.1 97 209.8 152.3 339.6 151.8 198 0 373.9-127.3 435.3-315.3 127.5-26.3 237.2-105.9 301-218.5 99.9-171.4 77.2-386.9-55.8-533.9v-.6c41.1-123.1 27-257.8-38.6-369.8-98.7-171.4-297.3-259.6-491-218.6-86.6-96.8-210.5-151.8-340.3-151.2zm0 117.5-.6.6c79.7 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.1 151.6-338.9 339-339.2zm434.2 141.9c121.6-.2 234 64.5 294.7 169.8 39.2 68.6 53.9 148.8 40.4 226.5-2.5-1.8-7.3-4.3-10.4-6.1l-360.4-208.2c-18.4-10.4-41-10.4-59.4 0L1024 984.2V805.4L1372.7 604c51.3-29.7 109.5-45.4 168.8-45.5zM650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l421.7 243-155.7 90L597.2 1355c-162-93.8-217.4-300.9-123.8-462.8C513.1 823.6 575.5 771 650 743.5zm807.9 106 348.8 200.8c162.5 93.7 217.6 300.6 123.8 462.8l.6.6c-39.8 68.6-102.4 121.2-176.5 148.2v-428c0-21.4-11-41-29.4-51.4l-422.3-243.7 155-89.3zM1201.7 997l177.8 102.8v205.1l-177.8 102.8-177.8-102.8v-205.1L1201.7 997zm279.5 161.6 155.1 89.4v402.2c0 187.3-152 339.2-339 339.2v-.6c-79.1 0-156.3-27.6-217-78.4 2.5-1.2 8-4.3 11-6.1l360.4-207.5c18.4-10.4 30-30 29.4-51.4l.1-486.8zM1380 1421.9v178.8l-348.8 200.8c-162.5 93.1-369.6 38-463.4-123.7h.6c-39.8-68-54-148.8-40.5-226.5 2.5 1.8 7.4 4.3 10.4 6.1l360.4 208.2c18.4 10.4 41 10.4 59.4 0l421.9-243.7z" fill="white"/></svg>';
var d = !1;
function g(a) {
  if (d)
    return;
  d = !0;
  var s = "https://chat.openai.com/?prompt={prompt}&from={from}", r = navigator.language.substr(0, 2), o = "";
  function l(i) {
    let e = o || r;
    return u[e] || (e = "en"), u[e][i];
  }
  function y() {
    const i = Object.keys(u), e = i.indexOf(o);
    return i[(e + 1) % i.length];
  }
  function h() {
    o = y(), document.getElementById("gen-btn").title = l("title");
  }
  if (window.atob && window.atob(a.config) !== location.origin)
    return;
  const n = document.createElement("a");
  n.id = "gen-btn", n.href = "javascript:;", n.title = l("title"), n.style = "position: fixed; bottom: 50%; right: 20px; z-index: 9999; width: 32px; height: 32px; border: none; cursor: pointer;", n.innerHTML = f, document.body.appendChild(n);
  let c;
  n.addEventListener("click", () => {
    clearTimeout(c), c = setTimeout(function() {
      const i = window.location.href, e = l("prompt").replace("{url}", i);
      navigator.clipboard.writeText(e);
      const t = document.createElement("div");
      t.id = "tooltip", t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "9999", t.style.bottom = "50%", t.style.right = "100px", t.style.backgroundColor = "#74aa9c", t.style.color = "white", t.style.padding = "10px", t.style.borderRadius = "5px", t.style.opacity = "0", t.style.transition = "opacity 0.3s", t.innerText = l("copy"), document.body.appendChild(t), t.style.display = "block", t.style.opacity = "1", t.onclick = () => {
        t.style.opacity = "0", setTimeout(() => {
          t.remove();
          const p = document.createElement("a");
          p.style.display = "none", p.href = s.replace("{from}", encodeURIComponent(i)).replace("{prompt}", encodeURIComponent(e)), p.target = "_blank", p.click();
        }, 300);
      };
    }, 200);
  }), n.addEventListener("dblclick", function() {
    clearTimeout(c), h();
  }), n.addEventListener("mouseover", function() {
    if (document.getElementById("tip"))
      return;
    const e = document.createElement("div");
    e.id = "tip", e.style.display = "none", e.style.position = "fixed", e.style.width = "200px", e.style.zIndex = "9999", e.style.top = n.offsetTop + "px", e.style.left = n.offsetLeft - 200 - 40 + "px", e.style.backgroundColor = "#74aa9c", e.style.color = "white", e.style.padding = "10px", e.style.borderRadius = "5px", e.style.opacity = "0", e.style.transition = "opacity 0.3s", e.innerText = l("tip"), document.body.appendChild(e), e.style.display = "block", e.style.opacity = "1";
  }), n.addEventListener("mouseleave", function() {
    const i = document.getElementById("tip");
    i.style.opacity = "0", setTimeout(() => {
      i.remove();
    }, 300);
  });
}
function m(a) {
  const s = {};
  for (let r = 0; r < a.length; r++) {
    const o = a[r];
    s[o[0]] = o[1];
  }
  return s;
}
function b() {
  if (window.onload = function() {
    const a = m(window._chatData);
    g(a);
  }, document.readyState === "complete") {
    const a = m(window._chatData);
    g(a);
  }
}
b();
export {
  b as gotoTesting
};
