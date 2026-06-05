// ==UserScript==
// @name         veeto.cn 支出明细精简版
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动过滤支出明细，只显示：成功数量、手机号、短信内容、时间
// @match        *://*.veeto.cn/*
// @grant        none
// ==/UserScript==

(function(){var KEEP=["成功数量","手机号","短信内容","时间"];var on=false,btn;function filter(){var t=document.querySelector("table");if(!t)return;var h=t.querySelectorAll("th"),idx=[];h.forEach(function(th,i){KEEP.forEach(function(k){if(th.textContent.trim().includes(k))idx.push(i)})});if(idx.length<2)return;t.querySelectorAll("tr").forEach(function(r){r.querySelectorAll("td,th").forEach(function(c,i){c.style.display=(on&&!idx.includes(i))?"none":""})});on=!on;btn.textContent=on?"完整视图":"精简视图"}btn=document.createElement("button");btn.textContent="精简视图";btn.style.cssText="position:fixed;top:10px;right:10px;z-index:99999;padding:8px 16px;background:#4f46e5;color:#fff;border:none;border-radius:6px;font-size:14px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.2)";btn.onclick=filter;document.body.appendChild(btn)})();
