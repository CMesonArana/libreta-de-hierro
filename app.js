"use strict";
// Libreta de Hierro: app de una persona. La página que lo carga define SOLO (clave de PROGRAMAS) y <base href="../">.
document.body.insertAdjacentHTML("afterbegin", `
<header class="wrap top">
  <div class="brand">
    <h1>Libreta de <span>${PROGRAMAS[SOLO].titulo}</span></h1>
    <div class="hbtns">
      <button class="icon-btn" id="btnReg" aria-label="Registro de sesiones"></button>
      <button class="icon-btn" id="btnCfg" aria-label="Ajustes y copia de seguridad"></button>
    </div>
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
  <div class="rail" id="trail"></div>
  <div class="tin">
    <div class="tinfo">
      <div class="tphase"><span id="tphase"></span><span id="tclock"></span></div>
      <div class="tname" id="tname"></div>
    </div>
    <div class="tbig"><span class="ttime" id="ttime" aria-live="off"></span><span class="tchip" id="tchip"></span></div>
    <div class="tbtns">
      <button class="tb main wide" id="tStart" data-empezar="-1"></button>
      <button class="tb main wide" id="tVolver">Volver a la sesión</button>
      <button class="tb" id="tBack" aria-label="Atrás: volver a la serie anterior"></button>
      <button class="tb" id="tMinus" aria-label="Quitar 15 segundos">−15</button>
      <button class="tb" id="tPause" aria-label="Pausar"></button>
      <button class="tb" id="tPlus" aria-label="Añadir 15 segundos">+15</button>
      <button class="tb main wide" id="tSkip">Saltar</button>
      <button class="tb main wide" id="tDone"></button>
      <button class="tb" id="tStop" aria-label="Parar"></button>
    </div>
  </div>
</div>

<dialog id="dlgVideo"><div class="dhead"><h3 id="vTitle">Vídeo</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="vBody"></div></dialog>
<dialog id="dlgHist"><div class="dhead"><h3 id="hTitle">Progreso</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="hBody"></div></dialog>
<dialog id="dlgCfg"><div class="dhead"><h3>Ajustes</h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="cBody"></div></dialog>
<dialog id="dlgFin"><div class="dhead"><h3 id="fTitle"></h3><button class="icon-btn" data-close aria-label="Cerrar"></button></div><div class="dbody" id="fBody"></div></dialog>
<div class="toast" id="toast" role="status"></div>

`);

const I = {
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1"/><rect x="14" y="4.5" width="4" height="15" rx="1"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 5v14l10-7zM16 5h3v14h-3z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5v14L9 12zM5 5h3v14H5z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14l2 2 4-4"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/></svg>'
};

const $ = (s, el = document) => el.querySelector(s);
const KEY = "libreta-hierro-v1";
const num = v => { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : null; };
const fmt = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const fmtKg = n => (Math.round(n * 100) / 100).toString().replace(".", ",");
const fmtSet = s => s.min != null ? `${s.min} min${s.nivel != null ? " · nivel " + s.nivel : ""}`
  : (s.kg != null ? fmtKg(s.kg) + " kg × " : "") + (s.reps ?? s.seg ?? "-") + (s.seg != null ? " s" : "");
const hoy = () => new Date().toISOString().slice(0, 10);
const fechaCorta = iso => new Date(iso + "T12:00").toLocaleDateString("es-ES", { day: "numeric", month: "short" });
const letra = i => String.fromCharCode(65 + i);

function defaults() {
  return { perfil: "estetica", plan: {}, dia: {}, swaps: {}, draft: {}, intv: {}, extra: {}, hist: {}, vivo: {}, registro: {},
    cfg: { sonido: true, vibrar: true, segRep: 4, prep: 10 } };
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
function ctx(dk) {
  const [perfil, pk, di] = dk.split("|"), P = PROGRAMAS[perfil], plan = P.planes[pk];
  return { P, pk, plan, di: +di, dia: plan.dias[+di], dk };
}
function cur() {
  const P = PROGRAMAS[S.perfil];
  const pk = P.planes[S.plan[S.perfil]] ? S.plan[S.perfil] : P.defecto;
  const plan = P.planes[pk];
  return ctx(S.perfil + "|" + pk + "|" + Math.min(S.dia[S.perfil + pk] || 0, plan.dias.length - 1));
}
const exOf = (c, i) => EX[S.swaps[c.dk + "|" + i] || c.dia.ejercicios[i].id];
const idOf = (c, i) => S.swaps[c.dk + "|" + i] || c.dia.ejercicios[i].id;
const histOf = id => ((S.hist[S.perfil] || {})[id] || []);
const tipoOf = (item, ex) => item.tipo || ex.tipo || "reps";

/* ---------- live session ---------- */
// The running session of this person: { dk, t (index into turnos), inicio, pausaMs, pausadoEn?, descansoHasta? }
const vivo = () => S.vivo[S.perfil] || null;
const transcurrido = L => Date.now() - L.inicio - L.pausaMs - (L.pausadoEn ? Date.now() - L.pausadoEn : 0);
function reanudar(L) { if (L.pausadoEn) { L.pausaMs += Date.now() - L.pausadoEn; delete L.pausadoEn; } }

// Consecutive exercises sharing a grupo prefix ("Superserie 1", "Circuito") form one step
function pasos(c) {
  const out = [];
  c.dia.ejercicios.forEach((item, i) => {
    const g = item.grupo ? item.grupo.split(" · ")[0] : null, last = out.at(-1);
    if (g && last && last.g === g) last.items.push(i); else out.push({ g, items: [i] });
  });
  return out;
}
// The session as an ordered list of sets: supersets and circuits alternate their exercises inside each round
function turnos(c) {
  const out = [], ser = i => c.dia.ejercicios[i].series || 1;
  pasos(c).forEach((p, k) => {
    const R = Math.max(...p.items.map(ser));
    for (let r = 0; r < R; r++) {
      const its = p.items.filter(i => ser(i) > r);
      its.forEach((i, n) => out.push({ k, r, R, i, fin: n === its.length - 1, circ: !!(p.g && p.g.startsWith("Circuito")),
        label: k + 1 + (p.items.length > 1 ? letra(p.items.indexOf(i)) : "") }));
    }
  });
  return out;
}
const hecho = (c, t) => !!((((S.draft[c.dk] || {})[t.i] || {}).sets || [])[t.r] || {}).ok;
// Inside a superset the first exercise has no rest; after the round, the step's longest rest
function descansoTras(c, t) {
  const d = i => c.dia.ejercicios[i].descanso || 0;
  if (t.fin) return Math.max(...pasos(c)[t.k].items.map(d));
  return d(t.i) > 20 ? d(t.i) : 0;
}
function objetivo(c, t) {
  const item = c.dia.ejercicios[t.i], tipo = tipoOf(item, exOf(c, t.i));
  if (tipo === "cardio") return [item.minutos + ":00", "min · " + (item.zona || "cardio")];
  if (tipo === "tiempo") return [fmt(item.segundos), "aguanta"];
  const kg = ((histOf(idOf(c, t.i)).at(-1) || {}).sets || [])[t.r];
  return [String(item.reps), "reps" + (kg && kg.kg != null ? ` · última vez ${fmtKg(kg.kg)} kg` : "")];
}

function iniciar(c, t) {
  S.vivo[S.perfil] = { dk: c.dk, t, inicio: Date.now(), pausaMs: 0 };
  unlockAudio(); wake(true);
}
function goto(c, t) {
  if (t < 0) return;
  const L = vivo();
  if (L && L.dk !== c.dk) return toast(`Ya tienes en curso la sesión ${letra(ctx(L.dk).di)}. Termínala o párala primero`);
  if (L) { L.t = t; reanudar(L); delete L.descansoHasta; } else iniciar(c, t);
  save(); stopTimer(); render(); enfocar(); empezarSerie(true);
}
// Set length for rep sets: top of the rep range × seconds per rep, rounded to 5 s
const tSerie = item => Math.max(15, Math.ceil(parseInt(String(item.reps).split("-").pop(), 10) * S.cfg.segRep / 5) * 5);
// The routine drives the clock: [get ready] → set → (completar) → rest → next set
function empezarSerie(prep) {
  const L = vivo();
  if (!L) return barra();
  // sets already logged elsewhere (the exercise timer) are skipped
  const c = ctx(L.dk), TT = turnos(c);
  while (TT[L.t] && hecho(c, TT[L.t])) L.t++;
  if (!TT[L.t]) L.t = Math.max(0, TT.findIndex(x => !hecho(c, x)));
  const t = TT[L.t];
  if (!t || hecho(c, t)) { save(); render(); return abrirFin(true); }
  const item = c.dia.ejercicios[t.i], ex = exOf(c, t.i), tipo = tipoOf(item, ex);
  const fases = tipo === "cardio" ? cardioFases(c, t.i)
    : [work(tipo === "tiempo" ? item.segundos : tSerie(item), tipo === "tiempo" ? "Aguanta" : `Serie · ${item.reps} reps`)];
  if (prep) fases.unshift({ tipo: "prep", s: S.cfg.prep, label: typeof prep === "string" ? prep : "Prepárate" });
  startTimer(fases, completar);
}
function atras() {
  const L = vivo(), c = ctx(L.dk), TT = turnos(c), k = Math.max(0, Math.min(L.t, TT.length) - 1);
  marcar(c, TT[k].i, TT[k].r, false);
  L.t = k; reanudar(L); delete L.descansoHasta;
  save(); stopTimer(); render(); enfocar(); empezarSerie(true);
}
function enfocar() {
  const L = vivo(), t = L && turnos(cur())[L.t];
  if (!t) return;
  const el = document.getElementById(`i${t.i}s${t.r}a`);
  (el ? el.closest(".set") : document.getElementById("ex-" + t.i))?.scrollIntoView({ behavior: "smooth", block: "center" });
}
function marcar(c, i, s, ok) {
  const tipo = tipoOf(c.dia.ejercicios[i], exOf(c, i));
  const r = (((S.draft[c.dk] ||= {})[i] ||= { sets: [] }).sets[s] ||= {});
  if (ok && !r.ok && c.dk === cur().dk) {
    // empty fields take last session's value, so one tap logs a set
    document.querySelectorAll(`#i${i}s${s}a, #i${i}s${s}b`).forEach(inp => {
      if (inp.value.trim() === "" && num(inp.placeholder) != null) r[inp.dataset.f] = num(inp.placeholder);
    });
    if (tipo !== "cardio" && r.kg == null && r.reps == null && r.seg == null) toast("Apunta kg y reps para que la app pueda decirte cuándo subir");
    buzz(40);
  }
  r.ok = ok;
  save();
}
function completar() {
  const L = vivo(), c = ctx(L.dk), TT = turnos(c), t = TT[L.t];
  if (!t) return abrirFin(true);
  reanudar(L);
  marcar(c, t.i, t.r, true);
  stopTimer();
  do L.t++; while (TT[L.t] && hecho(c, TT[L.t]));
  delete L.descansoHasta;
  // past the end with sets left over (you started mid-session): go back to the first one
  if (!TT[L.t]) { const k = TT.findIndex(x => !hecho(c, x)); if (k >= 0) { L.t = k; toast(`Te queda el paso ${TT[k].k + 1}`); } }
  if (!TT[L.t]) { save(); render(); return abrirFin(true); }
  const d = descansoTras(c, t);
  save(); render(); enfocar();
  if (d) { L.descansoHasta = Date.now() + d * 1000; save(); startTimer([rest(d)], () => empezarSerie(false)); }
  else empezarSerie("Cambia a " + TT[L.t].label);
}
function accion() {
  const L = vivo();
  if (!turnos(ctx(L.dk))[L.t]) return abrirFin(true);
  if (T.phases.length) return completar();
  reanudar(L); empezarSerie(true);
}
// Skip: end the current phase now and let the chain continue
function saltar() { if (T.paused) togglePause(); T.endAt = Date.now(); tick(); }
function cardioFases(c, i) {
  const item = c.dia.ejercicios[i], iv = { ...(item.int || {}), ...(S.intv[c.dk + "|" + i] || {}) };
  if (!iv.rondas) return [work(item.minutos * 60, exOf(c, i).n)];
  const ph = [];
  for (let k = 0; k < iv.rondas; k++) ph.push(work(iv.trabajo, "Fuerte"), suave(iv.descanso));
  return ph;
}
// Exercise timer: one exercise on its own, from any set to the last, with its own pause and stop.
// It never runs at the same time as the session clock: starting one pauses or stops the other.
const CT = { i: -1, dk: "", fases: [], k: 0, endAt: 0, left: 0, paused: false, id: 0, lastLeft: -1 };
function ctFases(c, i, desde) {
  const item = c.dia.ejercicios[i], ex = exOf(c, i), tipo = tipoOf(item, ex), R = item.series || 1;
  // alone, an exercise from a superset rests what the whole pair rests
  const d = Math.max(...pasos(c).find(p => p.items.includes(i)).items.map(j => c.dia.ejercicios[j].descanso || 0));
  const out = [];
  for (let k = desde; k < R; k++) {
    out.push({ ...work(tipo === "tiempo" ? item.segundos : tSerie(item), `Serie ${k + 1} de ${R}`), set: k });
    if (k < R - 1 && d) out.push({ ...rest(d, `Descanso · luego serie ${k + 2}`), set: k });
  }
  return out;
}
function ctStart(c, i, desde) {
  const L = vivo();
  if (L && !L.pausadoEn) { pausa(); toast("Sesión en pausa mientras usas el temporizador del ejercicio"); }
  else if (!L && T.phases.length) stopTimer();
  const prev = CT.i;
  Object.assign(CT, { i, dk: c.dk, fases: ctFases(c, i, desde), k: 0, paused: false });
  unlockAudio(); wake(true);
  if (prev >= 0 && prev !== i) rehacer(prev);
  ctBegin();
}
function ctBegin() {
  const p = CT.fases[CT.k];
  CT.endAt = Date.now() + p.s * 1000; CT.lastLeft = -1;
  tono(SON[p.tipo]); buzz(p.tipo === "trabajo" ? [200] : [80, 80, 80]);
  clearInterval(CT.id); CT.id = setInterval(ctTick, 200);
  rehacer(CT.i); ctTick();
}
function ctTick() {
  if (CT.paused || !CT.fases.length) return;
  const p = CT.fases[CT.k], ms = CT.endAt - Date.now(), left = Math.ceil(ms / 1000);
  if (left !== CT.lastLeft) {
    CT.lastLeft = left;
    if (left <= 3 && left > 0) tono(SON.tic, .08);
    const t = document.getElementById("ctt-" + CT.i); if (t) t.textContent = fmt(Math.max(0, left));
  }
  const b = document.getElementById("ctb-" + CT.i);
  if (b) b.style.width = Math.max(0, Math.min(100, 100 * (1 - ms / (p.s * 1000)))) + "%";
  if (ms > 0) return;
  const c = ctx(CT.dk), i = CT.i;
  if (p.tipo === "trabajo") marcar(c, i, p.set, true);
  if (++CT.k < CT.fases.length) return ctBegin();
  tono(SON.fin); buzz([250, 120, 250]); toast("Ejercicio terminado");
  ctStop();
}
function ctStop() {
  const i = CT.i;
  clearInterval(CT.id); Object.assign(CT, { i: -1, fases: [], paused: false });
  if (!vivo() && !T.phases.length) wake(false);
  rehacer(i);
}
function ctPausa() {
  if (CT.paused) CT.endAt = Date.now() + CT.left; else CT.left = CT.endAt - Date.now();
  CT.paused = !CT.paused; rehacer(CT.i);
}
function ctShift(sec) {
  if (CT.paused) CT.left = Math.max(1000, CT.left + sec * 1000);
  else CT.endAt = Math.max(Date.now() + 1000, CT.endAt + sec * 1000);
  CT.fases[CT.k].s = Math.max(1, CT.fases[CT.k].s + sec);
  CT.lastLeft = -1; rehacer(CT.i); ctTick();
}
// redraw one card in place (no scroll jump)
function rehacer(i) {
  const c = cur(), el = document.getElementById("ex-" + i);
  if (i >= 0 && el) el.outerHTML = card(c, c.dia.ejercicios[i], i, el.dataset.label);
}
function pausa() {
  const L = vivo();
  if (CT.fases.length && (L ? L.pausadoEn : T.paused)) ctStop();
  if (T.phases.length) togglePause();
  if (L) {
    if (L.pausadoEn) { reanudar(L); if (!T.phases.length) empezarSerie(true); } else L.pausadoEn = Date.now();
    save();
  }
  barra();
}
function volver() {
  const o = ctx(vivo().dk);
  S.plan[S.perfil] = o.pk; S.dia[S.perfil + o.pk] = o.di;
  save(); render(); enfocar();
}
function parar() {
  delete S.vivo[S.perfil];
  save(); stopTimer(); wake(false); render();
}

/* ---------- render ---------- */
let NOW = null, ENVIVO = false;
function render() {
  const c = cur(), L = vivo(), TT = turnos(c);
  ENVIVO = !!(L && L.dk === c.dk);
  const tNow = ENVIVO ? TT[L.t] : null;
  NOW = tNow ? { i: tNow.i, r: tNow.r } : null;
  document.documentElement.dataset.perfil = S.perfil;
  document.body.classList.toggle("envivo", ENVIVO);
  $("#perfilInfo").textContent = `${c.P.quien} · ${c.P.objetivo}`;
  $("#planes").innerHTML = Object.keys(c.P.planes).map(k =>
    `<button data-plan="${k}" aria-pressed="${k === c.pk}">${k} días</button>`).join("");

  $("#dias").innerHTML = c.plan.dias.map((d, i) => {
    const dk = S.perfil + "|" + c.pk + "|" + i, last = lastDone(dk);
    return `<button class="day" data-dia="${i}" aria-pressed="${i === c.di}">
      <span class="disc">${letra(i)}</span>
      <span><span class="dname">${d.nombre}</span><br><span class="dsub">${L && L.dk === dk ? "● En curso" : last ? "Última: " + last : d.foco}</span></span></button>`;
  }).join("");

  const nEj = c.dia.ejercicios.length;
  const nSeries = c.dia.ejercicios.reduce((a, e) => a + (e.series || 0), 0);
  $("#intro").innerHTML = `
    <div><p class="label" style="margin:0 0 6px">Sesión ${letra(c.di)} · ${c.pk} días por semana</p>
    <h2>${c.dia.nombre}</h2></div>
    <div class="meta">
      <span class="pill acc">${I.target}${c.dia.foco}</span>
      <span class="pill">${I.clock}~${c.dia.minutos} min</span>
      <span class="pill">${I.list}${nEj} ejercicios · ${nSeries} series</span>
    </div>
    ${L ? "" : `<button class="btn block go" data-empezar="-1">${I.play} Empezar sesión</button>`}
    <details class="guide"><summary>Cómo funciona este plan</summary><div class="gbody"><ul>${c.P.reglas.map(r => `<li>${r}</li>`).join("")}</ul></div></details>
    ${c.dia.calentamiento ? `<div class="warm"><div><b>Calentamiento · 5 min</b>${c.dia.calentamiento}</div></div>` : ""}`;

  $("#lista").innerHTML = pasos(c).map((p, k) => {
    const n = p.items.length, first = c.dia.ejercicios[p.items[0]];
    const tipo = p.g && p.g.startsWith("Circuito") ? "circ" : n > 1 ? "ss" : "";
    const titulo = tipo === "circ" ? `Circuito de ${n} ejercicios` : tipo === "ss" ? "Superserie: 2 ejercicios alternos"
      : tipoOf(first, EX[first.id]) === "cardio" ? "Cardio" : "Ejercicio";
    const como = tipo === "circ" ? `Haz 1 serie de cada uno seguido, descansa al terminar la vuelta y repite: ${first.series} vueltas.`
      : tipo === "ss" ? "Haz una serie del primero, pasa al segundo sin descansar, descansa y repite." : "";
    const tk = TT.filter(x => x.k === k), R = tk[0].R;
    const done = tk.every(x => hecho(c, x)), now = !!tNow && tNow.k === k;
    const estado = now ? `<span class="ahora">Estás aquí</span>`
      : done ? `<span class="okb">${I.check}Hecho</span>`
      : `<button class="stepgo" data-empezar="${k}">${I.play}Empezar</button>`;
    const rondas = R < 2 ? "" : `<div class="rondas" role="group" aria-label="${tipo === "circ" ? "Vuelta" : "Serie"} del paso ${k + 1}"><span class="label">${tipo === "circ" ? "Vuelta" : "Serie"}</span>${
      Array.from({ length: R }, (_, r) => {
        const ok = tk.filter(x => x.r === r).every(x => hecho(c, x)), nw = now && tNow.r === r;
        return `<button data-ronda="${k},${r}" class="${ok ? "ok" : ""}" aria-current="${nw ? "step" : "false"}" aria-label="${r + 1}${ok ? ", hecha" : ""}">${r + 1}</button>`;
      }).join("")}</div>`;
    return `<section class="step ${tipo} ${now ? "now" : ""} ${done ? "hecho" : ""}">
      <header class="stephead"><span class="stepn">${k + 1}</span><div class="sht"><h3>Paso ${k + 1} · ${titulo}</h3>${como ? `<p>${como}</p>` : ""}</div>${estado}</header>
      ${rondas}
      <div class="stepcards">${p.items.map((i, j) => card(c, c.dia.ejercicios[i], i, n > 1 ? k + 1 + letra(j) : String(k + 1))).join("")}</div>
    </section>`;
  }).join("");
  $("#finish").innerHTML = `<button class="btn block" id="btnFin">${I.check} Terminar y guardar sesión</button>`;
  barra();
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

function card(c, item, i, label) {
  const id = idOf(c, i), ex = EX[id], tipo = tipoOf(item, ex);
  const draft = (S.draft[c.dk] || {})[i] || {};
  const prev = histOf(id).at(-1);
  const sets = draft.sets || [];
  const nSets = Math.max(item.series || 1, sets.length);
  const allOk = sets.length >= (item.series || 1) && sets.slice(0, item.series).every(s => s && s.ok);
  const nowR = NOW && NOW.i === i ? NOW.r : -1;
  const mio = CT.fases.length > 0 && CT.i === i && CT.dk === c.dk, cp = mio && CT.fases[CT.k];
  const ctSet = cp && cp.tipo === "trabajo" ? cp.set : -1;

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
      ${setRow(i, 0, sets[0], prev && prev.sets[0], "min", "nivel", 0, nowR === 0)}
    </div>`;
  } else {
    const isT = tipo === "tiempo";
    log = `<div class="sets">
      <div class="sethead"><span>Serie</span><span>${isT ? "Kg extra" : "Kg"}</span><span>${isT ? "Segundos" : "Reps"}</span><span></span></div>
      ${Array.from({ length: nSets }, (_, s) => setRow(i, s, sets[s], prev && prev.sets[s], "kg", isT ? "seg" : "reps", isT ? item.segundos : 0, s === (ctSet >= 0 ? ctSet : nowR))).join("")}
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
      `<button role="tab" aria-selected="${a === id}" data-swap="${i}" data-to="${a}"><img src="${EX[a].img[0]}" alt=""><span><b>${EX[a].n}</b><small>${k ? EX[a].eq : "Principal"}</small></span></button>`).join("")}
    </div></div>`;
  // this exercise's own timer (cardio has its interval buttons instead)
  const R = item.series || 1, primera = Math.max(0, Array.from({ length: R }, (_, k) => k).findIndex(k => !(sets[k] && sets[k].ok)));
  const crono = tipo === "cardio" ? "" : `<div class="crono ${mio ? "on" : ""}" data-fase="${cp ? cp.tipo : ""}">
    <span class="label">${I.clock} Temporizador de este ejercicio</span>
    ${mio ? `<div class="ctrow">
        <div class="ctinfo"><span class="ctl">${CT.paused ? "En pausa · " : ""}${cp.label}</span><span class="ctt" id="ctt-${i}">${fmt((CT.paused ? CT.left : CT.endAt - Date.now()) / 1000)}</span></div>
        <div class="ctbtns"><button class="tb2" data-ctshift="-15" aria-label="Quitar 15 segundos">−15</button><button class="tb2 main" data-ctpausa aria-label="${CT.paused ? "Seguir" : "Pausar"}">${CT.paused ? I.play : I.pause}</button><button class="tb2" data-ctshift="15" aria-label="Añadir 15 segundos">+15</button><button class="tb2" data-ctstop aria-label="Parar el temporizador del ejercicio">${I.stop}</button></div>
      </div><div class="ctbar"><i id="ctb-${i}"></i></div>`
    : `<button class="btn ghost block" data-ct="${i},${primera}">${I.play} Empezar ${R > 1 ? `desde la serie ${primera + 1}` : "temporizador"}</button>`}
    ${R > 1 ? `<div class="rondas"><span class="label">${mio ? "Ir a la serie" : "Empezar en la serie"}</span>${Array.from({ length: R }, (_, k) =>
      `<button data-ct="${i},${k}" class="${sets[k] && sets[k].ok ? "ok" : ""}" aria-current="${cp && cp.set === k ? "step" : "false"}">${k + 1}</button>`).join("")}</div>` : ""}
  </div>`;
  const tag = nowR < 0 ? "" : `<div class="nowtag"><span class="ya">Ahora</span><span class="sig">Siguiente</span> · ${tipo === "cardio" ? "cardio" : `serie ${nowR + 1} de ${item.series}`}</div>`;
  return `<article class="ex ${allOk ? "done" : ""} ${nowR >= 0 ? "now" : ""}" id="ex-${i}" data-label="${label}">
    ${tag}
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
      ${crono}
      ${log}
    </div></article>`;
}

function setRow(i, s, cur, prev, f1, f2, segs, now) {
  cur = cur || {};
  const p1 = prev && prev[f1] != null ? fmtKg(prev[f1]) : (f1 === "kg" ? "kg" : "");
  const p2 = prev && prev[f2] != null ? prev[f2] : (segs || "");
  const chk = segs ? `${I.play}<span class="sr">Iniciar ${segs} segundos</span>` : I.check;
  const sn = f1 === "min" ? "" : s + 1;
  return `<div class="set ${cur.ok ? "ok" : ""} ${now ? "now" : ""}">
    ${ENVIVO && sn ? `<button class="sn" data-ir="${i},${s}" aria-label="Ir a la serie ${sn}">${sn}</button>` : `<span class="sn">${sn}</span>`}
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
  const c = cur(), L = vivo();
  const d = S.draft[c.dk] || {};
  let n = 0, vol = 0, prs = [];
  const f = hoy(), ej = [];
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
    vol += clean.reduce((a, s) => a + (s.kg || 0) * (s.reps || 0), 0);
    ej.push({ n: EX[id].n, s: clean.map(fmtSet).join(" · ") });
  });
  if (!n) { toast("Apunta al menos una serie antes de guardar"); return; }
  const aqui = L && L.dk === c.dk;
  (S.registro[S.perfil] ||= []).push({ fecha: f, sesion: letra(c.di), nombre: c.dia.nombre, pk: c.pk,
    min: aqui ? Math.max(1, Math.round(transcurrido(L) / 60000)) : null, series: n, vol: Math.round(vol), ej });
  if (aqui) delete S.vivo[S.perfil];
  delete S.draft[c.dk];
  (S.ultimas ||= {})[c.dk] = f;
  S.dia[S.perfil + c.pk] = (c.di + 1) % c.plan.dias.length;
  save();
  if ($("#dlgFin").open) $("#dlgFin").close();
  stopTimer(); if (aqui) wake(false);
  render();
  scrollTo({ top: 0, behavior: "smooth" });
  toast(`Sesión guardada · ${n} series` + (prs.length ? ` · Récord en ${prs.join(", ")}` : "") + ". Siguiente: sesión " + letra(S.dia[S.perfil + c.pk]));
}

/* ---------- timer ---------- */
const T = { phases: [], i: 0, endAt: 0, left: 0, total: 0, paused: false, id: 0, lastLeft: -1, lock: null, onEnd: null };
let actx;
function unlockAudio() {
  try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); } catch (e) {}
}
// Quiet sine notes with a soft attack (no clicks); each event has its own shape
const SON = { trabajo: [[660, .12], [990, .24]], descanso: [[880, .12], [587, .28]], suave: [[880, .12], [587, .28]],
  prep: [[740, .16]], tic: [[1046, .05]], fin: [[523, .12], [659, .12], [784, .34]] };
function tono(notas, vol = .14) {
  if (!S.cfg.sonido || !actx || !notas) return;
  try {
    let t = actx.currentTime;
    for (const [f, d] of notas) {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = "sine"; o.frequency.value = f; o.connect(g); g.connect(actx.destination);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.start(t); o.stop(t + d + .02); t += d * .9;
    }
  } catch (e) {}
}
function buzz(p) { if (S.cfg.vibrar && navigator.vibrate) navigator.vibrate(p); }
async function wake(on) {
  try {
    if (on && !T.lock && navigator.wakeLock) { T.lock = await navigator.wakeLock.request("screen"); T.lock.addEventListener("release", () => T.lock = null); }
    if (!on && T.lock) { await T.lock.release(); T.lock = null; }
  } catch (e) {}
}
function startTimer(phases, onEnd) {
  phases = phases.filter(p => p.s > 0);
  if (!phases.length) return;
  if (CT.fases.length) ctStop();
  unlockAudio();
  T.phases = phases; T.i = 0; T.onEnd = onEnd || null; beginPhase(); wake(true); barra();
}
function beginPhase() {
  const p = T.phases[T.i];
  T.total = p.s; T.endAt = Date.now() + p.s * 1000; T.paused = false; T.lastLeft = -1;
  $("#timer").dataset.state = "run"; $("#timer").dataset.phase = p.tipo;
  document.documentElement.dataset.fase = p.tipo;
  tono(SON[p.tipo]); buzz(p.tipo === "trabajo" ? [200] : p.tipo === "prep" ? [60] : [80, 80, 80]);
  clearInterval(T.id); T.id = setInterval(tick, 200); tick();
}
function tick() {
  if (T.paused) return;
  const ms = T.endAt - Date.now(), left = Math.ceil(ms / 1000);
  const p = T.phases[T.i];
  if (left !== T.lastLeft) {
    T.lastLeft = left;
    if (left <= 3 && left > 0) tono(SON.tic, .08);
    const extra = T.phases.length > 2 ? ` · ${Math.floor(T.i / 2) + 1}/${Math.ceil(T.phases.length / 2)}` : "";
    $("#tchip").textContent = p.label + extra;
    $("#ttime").textContent = fmt(Math.max(0, left));
    document.title = (left > 0 ? fmt(left) + " · " : "") + BRAND;
  }
  $("#tbar").style.width = Math.max(0, Math.min(100, 100 * (1 - ms / (T.total * 1000)))) + "%";
  if (ms <= 0) {
    const t = $("#timer"); t.classList.remove("flash"); void t.offsetWidth; t.classList.add("flash");
    T.i++;
    if (T.i < T.phases.length) { beginPhase(); barra(); return; }
    const f = T.onEnd;
    const L = vivo(); if (L && L.descansoHasta) { delete L.descansoHasta; save(); }
    stopTimer();
    if (f) f(); else { tono(SON.fin); buzz([250, 120, 250]); }
  }
}
function stopTimer() {
  clearInterval(T.id); T.phases = []; T.onEnd = null; T.paused = false;
  if (!vivo()) wake(false);
  delete document.documentElement.dataset.fase;
  $("#tbar").style.width = "0";
  document.title = BRAND;
  barra();
}
function togglePause() {
  if (T.paused) { T.endAt = Date.now() + T.left; T.paused = false; }
  else { T.left = T.endAt - Date.now(); T.paused = true; }
}
function shift(sec) {
  if (!T.phases.length) return;
  if (T.paused) T.left = Math.max(1000, T.left + sec * 1000);
  else { T.endAt = Math.max(Date.now() + 1000, T.endAt + sec * 1000); T.total = Math.max(T.total + sec, 1); }
  T.lastLeft = -1; tick();
}
const rest = (s, label = "Descanso") => ({ tipo: "descanso", s, label });
const suave = s => ({ tipo: "suave", s, label: "Suave" });
const work = (s, label = "Trabajo") => ({ tipo: "trabajo", s, label });

// Bottom bar: where you are in the session and the one control you need next
function barra() {
  const el = $("#timer"), L = vivo(), run = T.phases.length > 0, c = cur();
  const fase = run ? T.phases[T.i].tipo : "", paused = L ? !!L.pausadoEn : T.paused;
  const ctl = L ? ["tBack", "tPause"] : [];
  let vis = [], top = "", name = "", big = null, chip = null, done = "";
  if (L && L.dk !== c.dk) {
    const o = ctx(L.dk);
    top = "Sesión en curso"; name = `Sesión ${letra(o.di)} · ${o.dia.nombre}`; big = ""; chip = "";
    vis = ["tVolver", "tStop"];
  } else if (L) {
    const TT = turnos(c), t = TT[L.t];
    if (!t) { top = "Sesión completa"; name = "Guarda la sesión para tu registro"; big = ""; chip = ""; done = `${I.check} Guardar`; vis = ["tBack", "tStop", "tDone"]; }
    else {
      const nP = TT.at(-1).k + 1, item = c.dia.ejercicios[t.i], ex = exOf(c, t.i);
      const donde = `Paso ${t.k + 1} de ${nP}` + (t.R > 1 ? ` · ${t.circ ? "Vuelta" : "Serie"} ${t.r + 1} de ${t.R}` : "");
      top = fase === "descanso" ? "Descanso · luego " + donde : donde;
      name = (fase === "descanso" ? "Siguiente: " : "") + t.label + " · " + ex.n;
      if (!run) [big, chip] = objetivo(c, t);
      done = run ? `${I.check} Hecha` : `${I.play} Empezar`;
      if (paused) { vis = ctl.concat("tStop"); chip = "En pausa"; }
      else if (fase === "descanso" || fase === "prep") vis = ctl.concat("tPlus", "tSkip", "tStop");
      else vis = ctl.concat(run ? "tPlus" : [], "tDone", "tStop");
    }
  } else if (run) {
    top = "Temporizador"; name = "";
    vis = ["tMinus", "tPause", "tPlus", "tStop"];
    if (T.paused) chip = "En pausa";
  } else {
    top = `Sesión ${letra(c.di)} · ${c.pk} días por semana`; name = c.dia.nombre; big = ""; chip = "";
    vis = ["tStart"];
  }
  el.dataset.state = run ? "run" : "idle"; el.dataset.phase = fase;
  el.dataset.live = L && L.dk === c.dk ? "1" : "";
  $("#tphase").textContent = top; $("#tname").textContent = name;
  if (big !== null) $("#ttime").textContent = big;
  if (chip !== null) $("#tchip").textContent = chip;
  $("#tclock").textContent = L ? fmt(transcurrido(L) / 1000) : "";
  $("#tDone").innerHTML = done;
  $("#tPause").innerHTML = paused ? I.play : I.pause;
  $("#tPause").classList.toggle("main", paused);
  $("#tPause").setAttribute("aria-label", paused ? "Seguir" : "Pausar");
  el.querySelectorAll(".tbtns button").forEach(b => b.hidden = !vis.includes(b.id));
  // one segment per set of the session: done, current, pending
  const TT = L && L.dk === c.dk ? turnos(c) : [];
  $("#trail").innerHTML = TT.map((t, k) => `<i class="${hecho(c, t) ? "ok" : ""} ${k === L.t ? "now" : ""} ${k && t.k !== TT[k - 1].k ? "gap" : ""}"></i>`).join("");
}

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
    <div class="histlist">${h.slice().reverse().map(x => `<div class="hrow"><span>${fechaCorta(x.fecha)}</span><b>${x.sets.map(fmtSet).join(" · ")}</b></div>`).join("")}</div>`;
  $("#dlgHist").showModal();
}
function openReg() {
  const R = (S.registro[S.perfil] || []).slice().reverse();
  $("#hTitle").textContent = "Registro de sesiones";
  $("#hBody").innerHTML = !R.length
    ? `<p class="empty">Aún no hay sesiones. Pulsa «Empezar sesión» y, al acabar, «Guardar y terminar».</p>`
    : `<p class="label" style="margin:0">${R.length} ${R.length === 1 ? "sesión" : "sesiones"} · ${R.reduce((a, x) => a + x.series, 0)} series</p>
      <div class="histlist">${R.map(x => `<details class="reg"><summary><span class="rdate">${fechaCorta(x.fecha)}</span><span><b>Sesión ${x.sesion} · ${x.nombre}</b><small>${
        [x.min && x.min + " min", x.series + " series", x.vol && x.vol.toLocaleString("es-ES") + " kg levantados"].filter(Boolean).join(" · ")}</small></span></summary>
        <ul>${x.ej.map(e => `<li><b>${e.n}</b><span>${e.s}</span></li>`).join("")}</ul></details>`).join("")}</div>`;
  $("#dlgHist").showModal();
}
function abrirFin(completa) {
  const c = cur(), L = vivo();
  const n = Object.values(S.draft[c.dk] || {}).reduce((a, e) => a + (e.sets || []).filter(s => s && s.ok).length, 0);
  $("#fTitle").textContent = completa ? "¡Sesión completa!" : "¿Terminar la sesión?";
  if (completa) tono(SON.fin);
  $("#fBody").innerHTML = `<p style="margin:0">Llevas <b>${n} ${n === 1 ? "serie" : "series"}</b>${L ? ` en <b>${Math.max(1, Math.round(transcurrido(L) / 60000))} min</b>` : ""}.</p>
    <button class="btn block" id="finGuardar">${I.check} Guardar y terminar</button>
    ${completa ? "" : `<button class="btn ghost block" id="finSalir">Parar sin guardar</button>
    <p class="empty" style="margin:0">Si paras sin guardar, lo que has apuntado se queda como borrador.</p>`}`;
  $("#dlgFin").showModal();
}
function openCfg() {
  const k = S.cfg;
  $("#cBody").innerHTML = `
    <div class="field"><label for="cfRep">Segundos por repetición<small>Duración de cada serie: a ${k.segRep} s, una de 10 reps dura ${tSerie({ reps: 10 })} s. Los descansos los marca la rutina.</small></label><input type="number" id="cfRep" inputmode="decimal" value="${k.segRep}"></div>
    <div class="field"><label for="cfPrep">Preparación (s)<small>Cuenta atrás antes de la primera serie y al cambiar de ejercicio en una superserie</small></label><input type="number" id="cfPrep" inputmode="numeric" value="${k.prep}"></div>
    <div class="field"><label for="cfSon">Sonidos suaves<small>Tic-tic en los 3 últimos segundos, tono que sube al empezar una serie y que baja al empezar un descanso. En iPhone, quita el modo silencio.</small></label><input type="checkbox" id="cfSon" ${k.sonido ? "checked" : ""}></div>
    <button class="btn ghost" id="cfTest">${I.play} Probar sonidos</button>
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
  if (d.empezar !== undefined || d.ronda || d.ir) {
    const TT = turnos(c), pick = f => { const a = TT.findIndex(x => f(x) && !hecho(c, x)); return a >= 0 ? a : TT.findIndex(f); };
    if (d.ir) { const [i, s] = d.ir.split(",").map(Number); return goto(c, TT.findIndex(x => x.i === i && x.r === s)); }
    if (d.ronda) { const [k, r] = d.ronda.split(",").map(Number); return goto(c, pick(x => x.k === k && x.r === r)); }
    const k = +d.empezar;
    return goto(c, k < 0 ? pick(() => true) : pick(x => x.k === k));
  }
  if (d.ct) { const [i, k] = d.ct.split(",").map(Number); return ctStart(c, i, k); }
  if (d.ctpausa !== undefined) return ctPausa();
  if (d.ctstop !== undefined) return ctStop();
  if (d.ctshift) return ctShift(+d.ctshift);
  if (d.swap !== undefined) {
    const key = c.dk + "|" + d.swap;
    if (d.to === c.dia.ejercicios[+d.swap].id) delete S.swaps[key]; else S.swaps[key] = d.to;
    save();
    const el = document.getElementById("ex-" + d.swap);
    el.outerHTML = card(c, c.dia.ejercicios[+d.swap], +d.swap, el.dataset.label);
    barra();
    return;
  }
  if (d.addset !== undefined) {
    const i = +d.addset, e2 = ((S.draft[c.dk] ||= {})[i] ||= { sets: [] });
    e2.sets.length = Math.max(e2.sets.length, c.dia.ejercicios[i].series) + 1;
    for (let k = 0; k < e2.sets.length; k++) e2.sets[k] ||= {};
    save(); render(); return;
  }
  if (d.chk !== undefined) {
    const i = +d.chk, s = +d.s, ok = hecho(c, { i, r: s }), L = vivo();
    if (!ok && ENVIVO) { const t = turnos(c)[L.t]; if (t && t.i === i && t.r === s) return completar(); }
    marcar(c, i, s, !ok); render(); return;
  }
  if (d.intervalos !== undefined || d.continuo !== undefined) {
    const i = +(d.intervalos ?? d.continuo), item = c.dia.ejercicios[i], t = ENVIVO && turnos(c)[vivo().t];
    const ph = d.intervalos !== undefined ? cardioFases(c, i) : [work(item.minutos * 60, exOf(c, i).n)];
    return startTimer(ph, t && t.i === i ? completar : null);
  }
  switch (b.id) {
    case "btnFin": case "finGuardar": return finish();
    case "btnCfg": return openCfg();
    case "btnReg": return openReg();
    case "tVolver": return volver();
    case "tDone": return accion();
    case "tSkip": return saltar();
    case "tBack": return atras();
    case "tPause": return pausa();
    case "tPlus": return shift(15);
    case "tMinus": return shift(-15);
    case "tStop":
      if (!vivo()) return stopTimer();
      if (vivo().dk !== c.dk) volver();
      return abrirFin(false);
    case "finSalir": $("#dlgFin").close(); return parar();
    case "cfTest": {
      unlockAudio();
      const seq = [SON.prep, SON.tic, SON.tic, SON.trabajo, SON.descanso];
      seq.forEach((n, k) => setTimeout(() => tono(n, n === SON.tic ? .08 : .14), k * 700)); return;
    }
    case "cfExp": {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 1)], { type: "application/json" }));
      a.download = "libreta-hierro-" + hoy() + ".json"; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000); return;
    }
    case "cfReset":
      if (d.step === "0") { d.step = "1"; b.textContent = "Pulsa otra vez para borrarlo todo"; b.style.background = "var(--accent)"; b.style.color = "var(--accent-ink)"; return; }
      delete S.hist[S.perfil]; delete S.registro[S.perfil]; delete S.vivo[S.perfil];
      Object.keys(S.draft).forEach(k => k.startsWith(S.perfil + "|") && delete S.draft[k]);
      save(); stopTimer(); render(); $("#dlgCfg").close(); return toast("Progreso borrado");
  }
});
document.addEventListener("input", e => {
  const t = e.target, d = t.dataset;
  if (d.f) return setDraft(+d.i, +d.s, d.f, num(t.value));
  if (d.iv) { const c = cur(), k = c.dk + "|" + d.i; (S.intv[k] ||= {})[d.iv] = Math.max(1, num(t.value) || 1); return save(); }
  if (t.id === "cfRep") S.cfg.segRep = Math.min(10, Math.max(1, num(t.value) || 4));
  if (t.id === "cfPrep") S.cfg.prep = Math.min(60, Math.max(0, num(t.value) ?? 10));
  if (t.id === "cfSon") S.cfg.sonido = t.checked;
  if (t.id === "cfVib") S.cfg.vibrar = t.checked;
  if (t.id.startsWith("cf")) save();
});
document.addEventListener("change", e => {
  if (e.target.id !== "cfImp" || !e.target.files[0]) return;
  e.target.files[0].text().then(txt => {
    const d = JSON.parse(txt);
    if (!d || typeof d !== "object" || !d.hist) throw 0;
    S = { ...defaults(), ...d, cfg: { ...defaults().cfg, ...d.cfg } }; S.perfil = SOLO; save(); render(); $("#dlgCfg").close(); toast("Copia cargada");
  }).catch(() => toast("Ese archivo no es una copia válida"));
});
document.addEventListener("error", e => {
  const img = e.target;
  if (img.tagName === "IMG" && !img.dataset.failed) { img.dataset.failed = 1; img.style.display = "none"; }
}, true);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  if (T.phases.length || vivo()) wake(true);
  if (T.phases.length) tick();
});
document.querySelectorAll("dialog").forEach(dl => dl.addEventListener("click", e => { if (e.target === dl) dl.close(); }));
$("#dlgVideo").addEventListener("close", () => { $("#vBody").innerHTML = ""; });
setInterval(() => { const L = vivo(); if (L) $("#tclock").textContent = fmt(transcurrido(L) / 1000); }, 1000);

let tt;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 3200); }

$("#btnCfg").innerHTML = I.gear; $("#btnReg").innerHTML = I.cal; $("#tStop").innerHTML = I.stop;
$("#tStart").innerHTML = `${I.play} Empezar sesión`; $("#tSkip").innerHTML = `Saltar ${I.next}`; $("#tBack").innerHTML = I.back;
document.querySelectorAll("[data-close]").forEach(b => b.innerHTML = I.x);
// a session left running survives a reload, rest countdown included
{ const L = vivo(); try { if (L) ctx(L.dk); } catch (e) { delete S.vivo[S.perfil]; } }
render();
{ const L = vivo(), r = L && !L.pausadoEn && L.descansoHasta ? (L.descansoHasta - Date.now()) / 1000 : 0;
  if (r > 1) startTimer([rest(Math.round(r))], () => empezarSerie(false)); else if (L && !L.pausadoEn) empezarSerie(true); }
