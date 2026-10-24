"use strict";
// Libreta de Hierro: app de una persona. La página que lo carga define SOLO (clave de PROGRAMAS) y <base href="../">.
document.body.insertAdjacentHTML("afterbegin", `
<header class="wrap top">
  <div class="brand">
    <h1>Libreta de <span>${PROGRAMAS[SOLO].titulo}</span></h1>
    <button class="icon-btn" id="btnCfg" aria-label="Ajustes del temporizador y copia de seguridad"></button>
  </div>
  <div class="row2">
    <p class="label" id="perfilInfo" style="margin:0"></p>
    <div class="seg planseg" id="planes" role="group" aria-label="Días por semana"></div>
  </div>
</header>

<nav class="days" aria-label="Sesiones">
  <div class="wrap daylist" id="dias"></div>
</nav>

<main class="wrap">
  <section class="intro" id="intro"></section>
  <section class="list" id="lista"></section>
  <section class="finish" id="finish"></section>
  <p class="foot">Tus datos se guardan en este navegador. Haz una copia en Ajustes de vez en cuando.<br>
    Exercise data by <a href="https://repdb.co" target="_blank" rel="noopener">RepDB (repdb.co)</a> · Vídeos de YouTube de sus autores · No es consejo médico.</p>
</main>

<div class="timer" id="timer" data-state="idle" data-phase="">
  <div class="bar" id="tbar"></div>
  <div class="tin">
    <div class="tinfo">
      <div class="tphase" id="tphase">Temporizador</div>
      <div class="ttime" id="ttime" aria-live="off">0:00</div>
    </div>
    <button class="tb idleonly" id="tQuick">Descanso</button>
    <button class="tb idleonly" id="tWork">Trabajo</button>
    <button class="tb runonly" id="tMinus" aria-label="Quitar 15 segundos">−15</button>
    <button class="tb runonly main" id="tPause" aria-label="Pausar"></button>
    <button class="tb runonly" id="tPlus" aria-label="Añadir 15 segundos">+15</button>
    <button class="tb runonly" id="tStop" aria-label="Parar"></button>
    <button class="tb" id="tCfg" aria-label="Configurar temporizador"></button>
  </div>
</div>

<dialog id="dlgVideo"><div class="dhead"><h3 id="vTitle">Vídeo</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="vBody"></div></dialog>
<dialog id="dlgHist"><div class="dhead"><h3 id="hTitle">Progreso</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="hBody"></div></dialog>
<dialog id="dlgCfg"><div class="dhead"><h3>Ajustes</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="cBody"></div></dialog>
<div class="toast" id="toast" role="status"></div>

`);

const I = {
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1"/><rect x="14" y="4.5" width="4" height="15" rx="1"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/></svg>'
};

const $ = (s, el = document) => el.querySelector(s);
const KEY = "libreta-hierro-v1";
const num = v => { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : null; };
const fmt = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const fmtKg = n => (Math.round(n * 100) / 100).toString().replace(".", ",");
const hoy = () => new Date().toISOString().slice(0, 10);
const fechaCorta = iso => new Date(iso + "T12:00").toLocaleDateString("es-ES", { day: "numeric", month: "short" });

function defaults() {
  return { perfil: "estetica", plan: {}, dia: {}, swaps: {}, draft: {}, intv: {}, extra: {}, hist: {},
    cfg: { sonido: true, vibrar: true, auto: true, trabajo: 40, descanso: 90 } };
}
function load() {
  try { const d = JSON.parse(localStorage.getItem(KEY)); if (d) { const b = defaults(); return { ...b, ...d, cfg: { ...b.cfg, ...d.cfg } }; } } catch (e) {}
  return defaults();
}
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast("No se pudo guardar: el navegador bloquea el almacenamiento"); } }

S.perfil = SOLO;
const BRAND = "Libreta de " + PROGRAMAS[SOLO].titulo;

/* ---------- current selection ---------- */
function cur() {
  const P = PROGRAMAS[S.perfil];
  const pk = P.planes[S.plan[S.perfil]] ? S.plan[S.perfil] : P.defecto;
  const plan = P.planes[pk];
  const di = Math.min(S.dia[S.perfil + pk] || 0, plan.dias.length - 1);
  return { P, pk, plan, di, dia: plan.dias[di], dk: S.perfil + "|" + pk + "|" + di };
}
const exOf = (c, i) => EX[S.swaps[c.dk + "|" + i] || c.dia.ejercicios[i].id];
const idOf = (c, i) => S.swaps[c.dk + "|" + i] || c.dia.ejercicios[i].id;
const histOf = id => ((S.hist[S.perfil] || {})[id] || []);
const tipoOf = (item, ex) => item.tipo || ex.tipo || "reps";

/* ---------- render ---------- */
function render() {
  const c = cur();
  document.documentElement.dataset.perfil = S.perfil;
  $("#perfilInfo").textContent = `${c.P.quien} · ${c.P.objetivo}`;
  $("#planes").innerHTML = Object.keys(c.P.planes).map(k =>
    `<button data-plan="${k}" aria-pressed="${k === c.pk}">${k} días</button>`).join("");

  $("#dias").innerHTML = c.plan.dias.map((d, i) => {
    const last = lastDone(S.perfil + "|" + c.pk + "|" + i);
    return `<button class="day" data-dia="${i}" aria-pressed="${i === c.di}">
      <span class="disc">${String.fromCharCode(65 + i)}</span>
      <span><span class="dname">${d.nombre}</span><br><span class="dsub">${last ? "Última: " + last : d.foco}</span></span></button>`;
  }).join("");

  const nEj = c.dia.ejercicios.length;
  const nSeries = c.dia.ejercicios.reduce((a, e) => a + (e.series || 0), 0);
  $("#intro").innerHTML = `
    <div><p class="label" style="margin:0 0 6px">Sesión ${String.fromCharCode(65 + c.di)} · ${c.pk} días por semana</p>
    <h2>${c.dia.nombre}</h2></div>
    <div class="meta">
      <span class="pill acc">${I.target}${c.dia.foco}</span>
      <span class="pill">${I.clock}~${c.dia.minutos} min</span>
      <span class="pill">${I.list}${nEj} ejercicios · ${nSeries} series</span>
    </div>
    <details class="guide"><summary>Cómo funciona este plan</summary><div class="gbody"><ul>${c.P.reglas.map(r => `<li>${r}</li>`).join("")}</ul></div></details>
    ${c.dia.calentamiento ? `<div class="warm"><div><b>Calentamiento · 5 min</b>${c.dia.calentamiento}</div></div>` : ""}`;

  $("#lista").innerHTML = pasos(c).map((p, k) => {
    const n = p.items.length, first = c.dia.ejercicios[p.items[0]];
    const tipo = p.g && p.g.startsWith("Circuito") ? "circ" : n > 1 ? "ss" : "";
    const titulo = tipo === "circ" ? `Circuito de ${n} ejercicios` : tipo === "ss" ? "Superserie: 2 ejercicios alternos"
      : tipoOf(first, EX[first.id]) === "cardio" ? "Cardio" : "Ejercicio";
    const como = tipo === "circ" ? `Haz 1 serie de cada uno seguido, descansa al terminar la vuelta y repite: ${first.series} vueltas.`
      : tipo === "ss" ? "Haz una serie del primero, pasa al segundo sin descansar, descansa y repite." : "";
    return `<section class="step ${tipo}">
      <header class="stephead"><span class="stepn">${k + 1}</span><div><h3>Paso ${k + 1} · ${titulo}</h3>${como ? `<p>${como}</p>` : ""}</div></header>
      <div class="stepcards">${p.items.map((i, j) => card(c, c.dia.ejercicios[i], i, n > 1 ? k + 1 + String.fromCharCode(65 + j) : String(k + 1))).join("")}</div>
    </section>`;
  }).join("");
  $("#finish").innerHTML = `<button class="btn block" id="btnFin">${I.check} Terminar y guardar sesión</button>`;
}

function lastDone(dk) {
  const d = (S.ultimas || {})[dk];
  if (!d) return "";
  const dias = Math.round((Date.now() - new Date(d + "T12:00")) / 864e5);
  return dias <= 0 ? "hoy" : dias === 1 ? "ayer" : "hace " + dias + " días";
}

function media(ex, big) {
  if (!ex.img || !ex.img.length) return `<div class="noimg"><div>${I.dumbbell}${ex.eq}</div></div>`;
  return `<img src="${ex.img[0]}" alt="${ex.n}: posición inicial" loading="lazy">` +
    (big && ex.img[1] ? `<img class="f2" src="${ex.img[1]}" alt="${ex.n}: posición final" loading="lazy">` : "");
}
const howTo = ex => `<ol>${(ex.pasos || []).map(t => `<li>${t}</li>`).join("")}</ol>` +
  (ex.tips && ex.tips.length ? `<p class="label" style="margin:10px 0 4px">Consejos</p><ul class="tiplist">${ex.tips.map(t => `<li>${t}</li>`).join("")}</ul>` : "");

// Consecutive exercises sharing a grupo prefix ("Superserie 1", "Circuito") form one step
function pasos(c) {
  const out = [];
  c.dia.ejercicios.forEach((item, i) => {
    const g = item.grupo ? item.grupo.split(" · ")[0] : null, last = out.at(-1);
    if (g && last && last.g === g) last.items.push(i); else out.push({ g, items: [i] });
  });
  return out;
}

function card(c, item, i, label) {
  const id = idOf(c, i), ex = EX[id], tipo = tipoOf(item, ex);
  const draft = (S.draft[c.dk] || {})[i] || {};
  const prev = histOf(id).at(-1);
  const sets = draft.sets || [];
  const nSets = Math.max(item.series || 1, sets.length);
  const allOk = sets.length >= (item.series || 1) && sets.slice(0, item.series).every(s => s && s.ok);

  let log = "";
  if (tipo === "cardio") {
    const iv = { ...(item.int || {}), ...(S.intv[c.dk + "|" + i] || {}) };
    log = `<div class="cardio">
      ${iv.rondas ? `<div class="intv">
        <label>Trabajo (s)<input type="number" inputmode="numeric" data-iv="trabajo" data-i="${i}" value="${iv.trabajo}"></label>
        <label>Suave (s)<input type="number" inputmode="numeric" data-iv="descanso" data-i="${i}" value="${iv.descanso}"></label>
        <label>Rondas<input type="number" inputmode="numeric" data-iv="rondas" data-i="${i}" value="${iv.rondas}"></label></div>` : ""}
      <div class="btnrow">
        ${iv.rondas ? `<button class="btn" data-intervalos="${i}">${I.play} Intervalos</button>` : ""}
        <button class="btn ${iv.rondas ? "ghost" : ""}" data-continuo="${i}">${I.play} Continuo ${item.minutos} min</button>
      </div>
      <div class="sethead"><span></span><span>Minutos</span><span>Nivel / km/h</span><span></span></div>
      ${setRow(i, 0, sets[0], prev && prev.sets[0], "min", "nivel")}
    </div>`;
  } else {
    const isT = tipo === "tiempo";
    log = `<div class="sets">
      <div class="sethead"><span>Serie</span><span>${isT ? "Kg extra" : "Kg"}</span><span>${isT ? "Segundos" : "Reps"}</span><span></span></div>
      ${Array.from({ length: nSets }, (_, s) => setRow(i, s, sets[s], prev && prev.sets[s], "kg", isT ? "seg" : "reps", isT ? item.segundos : 0)).join("")}
      <button class="addset" data-addset="${i}">+ Añadir serie</button>
    </div>`;
  }

  const restTxt = item.descanso >= 60 ? (item.descanso / 60).toString().replace(".", ",") + " min" : item.descanso + " s";
  const restCell = item.grupo && item.descanso <= 20 ? `<div><b>0 s</b><span>pasa al siguiente</span></div>` : `<div><b>${restTxt}</b><span>descanso</span></div>`;
  const presc = tipo === "cardio"
    ? `<div><b>${item.minutos}</b><span>minutos</span></div><div><b>${item.zona || "—"}</b><span>intensidad</span></div><div><b>${item.int ? item.int.rondas : 1}</b><span>${item.int ? "rondas" : "bloque"}</span></div>`
    : `<div><b>${item.series}</b><span>series</span></div><div><b>${tipo === "tiempo" ? item.segundos + "s" : item.reps}</b><span>${tipo === "tiempo" ? "por serie" : "reps"}</span></div>${restCell}`;

  const opts = [item.id, ...(item.alts || [])].filter(a => EX[a]);
  const tabs = opts.length < 2 ? "" : `<div class="opts"><span class="label">¿Máquina ocupada? Elige otra opción</span>
    <div class="tabs" role="tablist" aria-label="Opciones para el ejercicio ${label}">${opts.map((a, k) =>
      `<button role="tab" aria-selected="${a === id}" data-swap="${i}" data-to="${a}"><img src="${EX[a].img[0]}" alt=""><span><b>${EX[a].n}</b><small>${k ? "Opción " + (k + 1) : "Principal"}</small></span></button>`).join("")}
    </div></div>`;
  return `<article class="ex ${allOk ? "done" : ""}" id="ex-${i}" data-label="${label}">
    ${tabs}
    <div class="media">${media(ex, true)}
      <span class="eqtag">${ex.eq}</span>
      <button class="vbtn" data-video="${id}">${I.play} Vídeo</button>
    </div>
    <div class="body">
      <div class="exhead"><span class="num">${label}</span>
        <div><h3>${ex.n}</h3><p class="mus">${ex.m}</p></div>
        <button class="icon-btn" data-hist="${id}" aria-label="Ver progreso de ${ex.n}">${I.chart}</button></div>
      <div class="presc">${presc}</div>
      ${hint(item, ex, tipo, prev)}
      ${item.nota ? `<div class="hint note">${I.info}<span>${item.nota}</span></div>` : ""}
      <details class="tips"><summary>Cómo se hace</summary>${howTo(ex)}</details>
      ${log}
    </div></article>`;
}

function setRow(i, s, cur, prev, f1, f2, segs) {
  cur = cur || {};
  const p1 = prev && prev[f1] != null ? fmtKg(prev[f1]) : (f1 === "kg" ? "kg" : "");
  const p2 = prev && prev[f2] != null ? prev[f2] : (segs || "");
  const chk = segs ? `${I.play}<span class="sr">Iniciar ${segs} segundos</span>` : I.check;
  return `<div class="set ${cur.ok ? "ok" : ""}">
    <span class="sn">${f1 === "min" ? "" : s + 1}</span>
    <input id="i${i}s${s}a" data-i="${i}" data-s="${s}" data-f="${f1}" inputmode="decimal" value="${cur[f1] != null ? fmtKg(cur[f1]) : ""}" placeholder="${p1}" aria-label="${f1} serie ${s + 1}">
    <input id="i${i}s${s}b" data-i="${i}" data-s="${s}" data-f="${f2}" inputmode="decimal" value="${cur[f2] != null ? cur[f2] : ""}" placeholder="${p2}" aria-label="${f2} serie ${s + 1}">
    <button class="chk" data-chk="${i}" data-s="${s}" aria-label="Marcar serie ${s + 1} hecha">${cur.ok ? I.check : chk}</button>
  </div>`;
}

function hint(item, ex, tipo, prev) {
  if (tipo === "cardio") return item.consejo ? `<div class="hint">${I.target}<span>${item.consejo}</span></div>` : "";
  if (!prev) return `<div class="hint">${I.target}<span>Primera vez: elige un peso con el que acabes cada serie dejando 1-3 repeticiones en reserva.</span></div>`;
  const top = parseInt(String(item.reps).split("-").pop(), 10);
  const f = tipo === "tiempo" ? "seg" : "reps";
  const lim = tipo === "tiempo" ? item.segundos : top;
  const kgs = prev.sets.map(s => s.kg).filter(v => v != null);
  const maxKg = kgs.length ? Math.max(...kgs) : null;
  const todas = prev.sets.length >= item.series && prev.sets.every(s => s[f] != null && s[f] >= lim);
  const resumen = prev.sets.map(s => (s.kg != null ? fmtKg(s.kg) + "×" : "") + (s[f] ?? "-")).join(" · ");
  if (todas) {
    const paso = tipo === "tiempo" ? "añade 10-15 s o un poco de peso" : (ex.paso || 2.5) + " kg más" + (maxKg != null ? " (prueba " + fmtKg(maxKg + (ex.paso || 2.5)) + " kg)" : "");
    return `<div class="hint up">${I.up}<span><b>¡Sube!</b> La última vez (${resumen}) llegaste al tope en todas las series: ${paso}.</span></div>`;
  }
  return `<div class="hint">${I.target}<span>Última vez (${fechaCorta(prev.fecha)}): <b>${resumen}</b>. Objetivo: 1 repetición más en alguna serie.</span></div>`;
}

/* ---------- draft ops ---------- */
function setDraft(i, s, f, v) {
  const c = cur();
  const d = (S.draft[c.dk] ||= {});
  const e = (d[i] ||= { sets: [] });
  const r = (e.sets[s] ||= {});
  if (v === null || v === "") delete r[f]; else r[f] = v;
  save();
}

function finish() {
  const c = cur();
  const d = S.draft[c.dk] || {};
  let n = 0, prs = [];
  const f = hoy();
  c.dia.ejercicios.forEach((item, i) => {
    const sets = ((d[i] || {}).sets || []).filter(s => s && Object.keys(s).some(k => k !== "ok" && s[k] != null));
    if (!sets.length) return;
    const id = idOf(c, i);
    const h = ((S.hist[S.perfil] ||= {})[id] ||= []);
    const oldMax = Math.max(0, ...h.flatMap(x => x.sets.map(s => s.kg || 0)));
    const newMax = Math.max(0, ...sets.map(s => s.kg || 0));
    if (h.length && newMax > oldMax) prs.push(EX[id].n);
    const clean = sets.map(({ ok, ...rest }) => rest);
    if (h.length && h.at(-1).fecha === f) h[h.length - 1] = { fecha: f, sets: clean }; else h.push({ fecha: f, sets: clean });
    n += sets.length;
  });
  if (!n) { toast("Apunta al menos una serie antes de guardar"); return; }
  delete S.draft[c.dk];
  (S.ultimas ||= {})[c.dk] = f;
  S.dia[S.perfil + c.pk] = (c.di + 1) % c.plan.dias.length;
  save();
  render();
  scrollTo({ top: 0, behavior: "smooth" });
  toast(`Sesión guardada · ${n} series` + (prs.length ? ` · Récord en ${prs.join(", ")}` : "") + ". Siguiente: sesión " + String.fromCharCode(65 + S.dia[S.perfil + c.pk]));
}

/* ---------- timer ---------- */
const T = { phases: [], i: 0, endAt: 0, left: 0, total: 0, paused: false, id: 0, lastLeft: -1, lock: null };
let actx;
function unlockAudio() {
  try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); } catch (e) {}
}
function beep(freq, dur, vol = .35) {
  if (!S.cfg.sonido || !actx) return;
  try {
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
    o.type = "sine"; o.frequency.value = freq; o.connect(g); g.connect(actx.destination);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
    o.start(t); o.stop(t + dur);
  } catch (e) {}
}
function buzz(p) { if (S.cfg.vibrar && navigator.vibrate) navigator.vibrate(p); }
async function wake(on) {
  try {
    if (on && !T.lock && navigator.wakeLock) { T.lock = await navigator.wakeLock.request("screen"); T.lock.addEventListener("release", () => T.lock = null); }
    if (!on && T.lock) { await T.lock.release(); T.lock = null; }
  } catch (e) {}
}
function startTimer(phases) {
  phases = phases.filter(p => p.s > 0);
  if (!phases.length) return;
  unlockAudio();
  T.phases = phases; T.i = 0; beginPhase(); wake(true);
}
function beginPhase() {
  const p = T.phases[T.i];
  T.total = p.s; T.endAt = Date.now() + p.s * 1000; T.paused = false; T.lastLeft = -1;
  $("#timer").dataset.state = "run"; $("#timer").dataset.phase = p.tipo;
  clearInterval(T.id); T.id = setInterval(tick, 200); tick();
}
function tick() {
  if (T.paused) return;
  const ms = T.endAt - Date.now(), left = Math.ceil(ms / 1000);
  const p = T.phases[T.i];
  if (left !== T.lastLeft) {
    T.lastLeft = left;
    if (left <= 3 && left > 0) beep(660, .09);
    const extra = T.phases.length > 2 ? ` · ${Math.floor(T.i / 2) + 1}/${Math.ceil(T.phases.length / 2)}` : "";
    $("#tphase").textContent = p.label + extra;
    $("#ttime").textContent = fmt(Math.max(0, left));
    document.title = (left > 0 ? fmt(left) + " · " : "") + BRAND;
  }
  $("#tbar").style.width = Math.max(0, Math.min(100, 100 * (1 - ms / (T.total * 1000)))) + "%";
  if (ms <= 0) {
    beep(p.tipo === "trabajo" ? 520 : 990, .4); buzz([250, 120, 250]);
    const t = $("#timer"); t.classList.remove("flash"); void t.offsetWidth; t.classList.add("flash");
    T.i++;
    if (T.i < T.phases.length) beginPhase(); else stopTimer(true);
  }
}
function stopTimer(done) {
  clearInterval(T.id); T.phases = []; wake(false);
  const t = $("#timer"); t.dataset.state = "idle"; t.dataset.phase = "";
  $("#tbar").style.width = "0";
  $("#tphase").textContent = done ? "¡Tiempo! A por la siguiente" : "Temporizador";
  $("#ttime").textContent = fmt(S.cfg.descanso);
  document.title = BRAND;
}
function togglePause() {
  if (!T.phases.length) return;
  if (T.paused) { T.endAt = Date.now() + T.left; T.paused = false; }
  else { T.left = T.endAt - Date.now(); T.paused = true; }
  $("#tPause").innerHTML = T.paused ? I.play : I.pause;
  $("#tphase").textContent = T.paused ? "En pausa" : T.phases[T.i].label;
}
function shift(sec) {
  if (!T.phases.length) return;
  if (T.paused) T.left = Math.max(1000, T.left + sec * 1000);
  else { T.endAt = Math.max(Date.now() + 1000, T.endAt + sec * 1000); T.total = Math.max(T.total + sec, 1); }
  T.lastLeft = -1; tick();
}
const rest = (s, label = "Descanso") => ({ tipo: "descanso", s, label });
const work = (s, label = "Trabajo") => ({ tipo: "trabajo", s, label });

/* ---------- dialogs ---------- */
function openVideo(id) {
  const ex = EX[id];
  $("#vTitle").textContent = ex.n;
  const q = encodeURIComponent((ex.yq || ex.n) + " técnica");
  $("#vBody").innerHTML = (ex.yt
    ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${ex.yt}?rel=0&playsinline=1" title="${ex.n}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
    : `<div class="media" style="border-radius:12px">${media(ex, true)}</div>`) +
    `<div class="tips">${howTo(ex)}</div>
     <a class="btn ghost" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Buscar más vídeos en YouTube</a>`;
  $("#dlgVideo").showModal();
}
function openHist(id) {
  const ex = EX[id], h = histOf(id);
  $("#hTitle").textContent = ex.n;
  if (!h.length) { $("#hBody").innerHTML = `<p class="empty">Aún no hay sesiones guardadas de este ejercicio. Apunta tus series y pulsa «Terminar y guardar sesión».</p>`; $("#dlgHist").showModal(); return; }
  const isCardio = ex.tipo === "cardio";
  const val = x => isCardio ? Math.max(0, ...x.sets.map(s => s.min || 0)) : Math.max(0, ...x.sets.map(s => s.kg || 0)) || Math.max(0, ...x.sets.map(s => s.reps || s.seg || 0));
  const pts = h.slice(-12).map(val), max = Math.max(...pts, 1), min = Math.min(...pts);
  const W = 320, H = 110, pad = 14;
  const lo = min === max ? 0 : min * .9;
  const xy = pts.map((v, k) => [pad + (pts.length === 1 ? (W - 2 * pad) / 2 : k * (W - 2 * pad) / (pts.length - 1)), H - pad - (v - lo) / (max - lo || 1) * (H - 2 * pad)]);
  const line = xy.map(p => p.join(",")).join(" ");
  const area = `${xy[0][0]},${H - pad} ${line} ${xy.at(-1)[0]},${H - pad}`;
  const unit = isCardio ? "min" : (Math.max(...h.flatMap(x => x.sets.map(s => s.kg || 0))) ? "kg" : "reps");
  $("#hBody").innerHTML = `
    <p class="label" style="margin:0">Mejor marca por sesión (${unit})</p>
    <svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Evolución">
      <line x1="${pad}" y1="${H - pad}" x2="${W - pad}" y2="${H - pad}" stroke="var(--line)"/>
      <polygon points="${area}" fill="var(--accent-soft)"/>
      <polyline points="${line}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
      ${xy.map((p, k) => `<circle cx="${p[0]}" cy="${p[1]}" r="${k === xy.length - 1 ? 4.5 : 3}" fill="var(--accent)"/>`).join("")}
    </svg>
    <div class="histlist">${h.slice().reverse().map(x => `<div class="hrow"><span>${fechaCorta(x.fecha)}</span><b>${x.sets.map(s =>
      isCardio ? `${s.min ?? "-"} min${s.nivel != null ? " · nivel " + s.nivel : ""}` : (s.kg != null ? fmtKg(s.kg) + " kg × " : "") + (s.reps ?? s.seg ?? "-") + (s.seg != null ? " s" : "")).join(" · ")}</b></div>`).join("")}</div>`;
  $("#dlgHist").showModal();
}
function openCfg() {
  const k = S.cfg;
  $("#cBody").innerHTML = `
    <div class="field"><label for="cfDesc">Descanso rápido (s)<small>Botón «Descanso» de la barra</small></label><input type="number" id="cfDesc" inputmode="numeric" value="${k.descanso}"></div>
    <div class="field"><label for="cfTrab">Trabajo rápido (s)<small>Botón «Trabajo» de la barra</small></label><input type="number" id="cfTrab" inputmode="numeric" value="${k.trabajo}"></div>
    <div class="field"><label for="cfAuto">Descanso automático<small>Al marcar una serie arranca su descanso</small></label><input type="checkbox" id="cfAuto" ${k.auto ? "checked" : ""}></div>
    <div class="field"><label for="cfSon">Sonido</label><input type="checkbox" id="cfSon" ${k.sonido ? "checked" : ""}></div>
    <div class="field"><label for="cfVib">Vibración<small>Solo en Android</small></label><input type="checkbox" id="cfVib" ${k.vibrar ? "checked" : ""}></div>
    <hr class="sep">
    <p class="label" style="margin:0">Copia de seguridad</p>
    <p class="empty" style="margin:0">El progreso vive en este navegador. Descarga una copia para pasarlo a otro móvil o por si borras los datos.</p>
    <div class="btnrow"><button class="btn ghost" id="cfExp">Descargar copia</button>
      <label class="btn ghost" for="cfImp" style="cursor:pointer">Cargar copia</label><input type="file" id="cfImp" accept="application/json,.json" hidden></div>
    <button class="btn ghost" id="cfReset" data-step="0">Borrar el progreso de ${PROGRAMAS[S.perfil].titulo}</button>`;
  $("#dlgCfg").showModal();
}

/* ---------- events ---------- */
document.addEventListener("pointerdown", unlockAudio, { once: true });
document.addEventListener("click", e => {
  const b = e.target.closest("button, [data-close]");
  if (!b) return;
  const d = b.dataset, c = cur();
  if (d.close !== undefined) return b.closest("dialog").close();
  if (d.plan) { S.plan[S.perfil] = d.plan; save(); render(); return; }
  if (d.dia) { S.dia[S.perfil + c.pk] = +d.dia; save(); render(); scrollTo({ top: 0 }); return; }
  if (d.video) return openVideo(d.video);
  if (d.hist) return openHist(d.hist);
  if (d.swap !== undefined) {
    const key = c.dk + "|" + d.swap;
    if (d.to === c.dia.ejercicios[+d.swap].id) delete S.swaps[key]; else S.swaps[key] = d.to;
    save();
    const el = document.getElementById("ex-" + d.swap);
    el.outerHTML = card(c, c.dia.ejercicios[+d.swap], +d.swap, el.dataset.label);
    document.querySelector(`#ex-${d.swap} [aria-selected="true"]`)?.scrollIntoView({ block: "nearest", inline: "nearest" });
    return;
  }
  if (d.addset !== undefined) {
    const i = +d.addset, e2 = ((S.draft[c.dk] ||= {})[i] ||= { sets: [] });
    e2.sets.length = Math.max(e2.sets.length, c.dia.ejercicios[i].series) + 1;
    for (let k = 0; k < e2.sets.length; k++) e2.sets[k] ||= {};
    save(); render(); return;
  }
  if (d.chk !== undefined) {
    const i = +d.chk, s = +d.s, item = c.dia.ejercicios[i], ex = exOf(c, i), tipo = tipoOf(item, ex);
    const row = b.closest(".set");
    const r = (((S.draft[c.dk] ||= {})[i] ||= { sets: [] }).sets[s] ||= {});
    const prev = histOf(idOf(c, i)).at(-1);
    if (!r.ok) {
      // empty fields take last session's value or the target, so one tap logs a set
      row.querySelectorAll("input").forEach(inp => {
        if (inp.value.trim() === "" && inp.placeholder && num(inp.placeholder) != null) { inp.value = inp.placeholder; r[inp.dataset.f] = num(inp.placeholder); }
      });
      if (tipo !== "cardio" && r.kg == null && r.reps == null && r.seg == null) toast("Apunta kg y reps para que la app pueda decirte cuándo subir");
    }
    r.ok = !r.ok; save();
    row.classList.toggle("ok", r.ok);
    b.innerHTML = r.ok ? I.check : (tipo === "tiempo" ? I.play : I.check);
    const sets = S.draft[c.dk][i].sets;
    b.closest(".ex").classList.toggle("done", sets.length >= item.series && sets.slice(0, item.series).every(x => x && x.ok));
    if (r.ok) {
      buzz(40);
      if (tipo === "tiempo") startTimer([work(item.segundos, ex.n), rest(item.descanso)]);
      else if (S.cfg.auto && item.descanso) startTimer([rest(item.descanso, "Descanso · " + ex.n)]);
      else if (S.cfg.auto && !item.descanso) toast("Superserie: pasa directo al siguiente ejercicio");
    }
    return;
  }
  if (d.intervalos !== undefined) {
    const i = +d.intervalos, item = c.dia.ejercicios[i];
    const iv = { ...item.int, ...(S.intv[c.dk + "|" + i] || {}) };
    const ph = [];
    for (let k = 0; k < iv.rondas; k++) { ph.push(work(iv.trabajo, "Fuerte")); ph.push(rest(iv.descanso, "Suave")); }
    return startTimer(ph);
  }
  if (d.continuo !== undefined) { const item = c.dia.ejercicios[+d.continuo]; return startTimer([work(item.minutos * 60, exOf(c, +d.continuo).n)]); }
  switch (b.id) {
    case "btnFin": return finish();
    case "btnCfg": case "tCfg": return openCfg();
    case "tQuick": return startTimer([rest(S.cfg.descanso)]);
    case "tWork": return startTimer([work(S.cfg.trabajo), rest(S.cfg.descanso)]);
    case "tPause": return togglePause();
    case "tPlus": return shift(15);
    case "tMinus": return shift(-15);
    case "tStop": return stopTimer(false);
    case "cfExp": {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], { type: "application/json" }));
      a.download = "libreta-hierro-" + hoy() + ".json"; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000); return;
    }
    case "cfReset":
      if (d.step === "0") { d.step = "1"; b.textContent = "Pulsa otra vez para borrarlo todo"; b.style.background = "var(--accent)"; b.style.color = "var(--accent-ink)"; return; }
      delete S.hist[S.perfil];
      Object.keys(S.draft).forEach(k => k.startsWith(S.perfil + "|") && delete S.draft[k]);
      save(); render(); $("#dlgCfg").close(); return toast("Progreso borrado");
  }
});
document.addEventListener("input", e => {
  const t = e.target, d = t.dataset;
  if (d.f) return setDraft(+d.i, +d.s, d.f, num(t.value));
  if (d.iv) { const c = cur(), k = c.dk + "|" + d.i; (S.intv[k] ||= {})[d.iv] = Math.max(1, num(t.value) || 1); return save(); }
  const k = S.cfg;
  if (t.id === "cfDesc") k.descanso = Math.max(5, num(t.value) || 90);
  if (t.id === "cfTrab") k.trabajo = Math.max(5, num(t.value) || 40);
  if (t.id === "cfAuto") k.auto = t.checked;
  if (t.id === "cfSon") k.sonido = t.checked;
  if (t.id === "cfVib") k.vibrar = t.checked;
  if (t.id.startsWith("cf")) { save(); if (!T.phases.length) $("#ttime").textContent = fmt(k.descanso); }
});
document.addEventListener("change", e => {
  if (e.target.id !== "cfImp" || !e.target.files[0]) return;
  e.target.files[0].text().then(txt => {
    const d = JSON.parse(txt);
    if (!d || typeof d !== "object" || !d.hist) throw 0;
    S = { ...defaults(), ...d, cfg: { ...defaults().cfg, ...d.cfg } }; save(); render(); $("#dlgCfg").close(); toast("Copia cargada");
  }).catch(() => toast("Ese archivo no es una copia válida"));
});
document.addEventListener("error", e => {
  const img = e.target;
  if (img.tagName === "IMG" && !img.dataset.failed) { img.dataset.failed = 1; img.style.display = "none"; }
}, true);
document.addEventListener("visibilitychange", () => { if (!document.hidden && T.phases.length) { wake(true); tick(); } });
document.querySelectorAll("dialog").forEach(dl => dl.addEventListener("click", e => { if (e.target === dl) dl.close(); }));
$("#dlgVideo").addEventListener("close", () => { $("#vBody").innerHTML = ""; });

let tt;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 3200); }

$("#btnCfg").innerHTML = I.gear; $("#tCfg").innerHTML = I.gear; $("#tPause").innerHTML = I.pause; $("#tStop").innerHTML = I.stop;
document.querySelectorAll("[data-close]").forEach(b => b.innerHTML = I.x);
$("#ttime").textContent = fmt(S.cfg.descanso);
render();
