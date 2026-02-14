const status = document.getElementById('status');
const searchInput = document.getElementById('search');
const results = document.getElementById('results');
const resnum = document.getElementById('resnum');
const afterresults = document.getElementById('afterresults');
const resnuml = document.getElementById('resnuml');
const desctext = document.getElementById('desctext');

const params = new URLSearchParams(location.search);
let Description = "";
let module = null;
let renderEntry = null;
let numbermaker = null;
let rankEntries = null;
let currentlang = "lyk";

///dictionary loading
let DICT = [{
    "name": "search a word...",
    "defs": [
      {
        "def": ""
      }
    ]
  }]; 

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", async () => {
    const name = button.dataset.dict;
    document.querySelectorAll("button").forEach(b => b.classList.remove("checked"));
    button.classList.add("checked");
    status.textContent = "loading dictionary...";
    currentlang = name;
    localStorage.setItem("lastLang", name);
    params.set('lang', name);
    history.replaceState(null, '', '?' + params);
    await loadDictionary(name);
    searchInput.disabled = true;
    status.textContent = "";
    searchInput.disabled = false;
    desctext.textContent = Description
    runSearch();
  });
});

async function loadDictionary(name) {
  if (DICT) {
    DICT = null; // allow GC
  }

  switch (name) {
    case "toaq":
     module = await import("./toaq.js");
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;
    case "lyk":
      module = (await import("./lyk.js"));
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;/*
    case "gsp":
      module = (await import("./gsp.js"));
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;*/
    case "xex":
      module = (await import("./xex.js"));
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;
    case "ith4":
      module = (await import("./ith4.js"));
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;
    case "eberban":
      module = (await import("./eberban.js"));
      DICT = module.DICT;
      Description = module.desc;
      renderEntry = module.renderEntry;
      numbermaker = module.numbermaker;
      rankEntries = module.rankEntries;
      break;
  }

  return DICT;
}

///actual logic begin

numbermaker = (n) => ""

renderEntry = (entry) => {
  return `
    <dl class="entry">
      <dt>
        <a href="?q=${entry.name}" class="wordbox"><b>${entry.name}</b></a>
    </dl>`;
}
rankEntries = (n, a)=> n;

/*function sd(array) {          //for score debug
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}*/


function runSearch() {

  const q = searchInput.value.trim().toLowerCase();
  const data = DICT;

  const matches = rankEntries(data, q).slice(0, 100);
  const len = rankEntries(data, q).length;
  resnum.textContent = `found ${len} result(s)`;
  resnuml.innerHTML = numbermaker(len);
  results.innerHTML = matches.map(renderEntry).join('');
  afterresults.textContent = `${len>100?"˙˙˙":""}`;
}


searchInput.placeholder = `search...`;
searchInput.disabled = false;
results.innerHTML = '';
resnum.textContent = '';
runSearch();





searchInput.addEventListener('input', () => {
  history.replaceState(null, '', '?' + params);
  runSearch();
});

window.addEventListener('DOMContentLoaded', () => {
   
  const params = new URLSearchParams(location.search);

  searchInput.placeholder = `search...`;
  searchInput.disabled = false;

  const q = params.get('q');
  const lang = params.get('lang');
  if (q) {
    searchInput.value = q;
    runSearch();
  }
  if (lang) {
    currentlang = lang;
    runSearch();
  }
  if(!lang){currentlang=localStorage.getItem("selectedTool");
    if (!currentlang) status.textContent = "please choose a language"}
  loadDictionary(lang);
});
