"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7062:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(7294),a=function(t){var e=t.children;return r.createElement("div",{className:"layout-module--container--JNwd0"},e)},l=n(1721),u=function(t){function e(e){var n;return(n=t.call(this,e)||this).computeOutput=function(t){var e=(t=t.replace(/[\r]/gm,"")).split("\n");return 0==e.length?"":e[0].startsWith(">")?e.slice(1).join(""):e.join("")},n.handleFastaChange=function(t){var e=t.target.value,r=n.computeOutput(e);n.setState(Object.assign({},n.state,{fasta:e,output:r}))},n.name="FASTA to plain string",n.state={fasta:"",output:""},n}return(0,l.Z)(e,t),e.prototype.render=function(){var t=this.state,e=t.fasta,n=t.output;return r.createElement("div",null,r.createElement("h1",null,this.name),r.createElement("h2",null,"input"),r.createElement("textarea",{cols:"80",rows:"15",name:"fasta",value:e,onChange:this.handleFastaChange}),r.createElement("h2",null,"output"),r.createElement("textarea",{cols:"80",rows:"15",name:"output",value:n}))},e}(r.Component),o=u;function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=n(6486),m=function(){var t=function(){for(var t,e=[],n=c(s.range(41));!(t=n()).done;){var a=t.value,l=Math.pow(10,-a/10),u=void 0;u=l>.1?"1 / "+Math.round(10/l)/10:l>1/30?"1 / "+Math.round(1/l):l>.01?"1 / "+5*Math.round(1/(5*l)):l>.001?"1 / "+25*Math.round(1/(25*l)):"1 / "+100*Math.round(1/(100*l));var o=String.fromCharCode(a+33);e.push(r.createElement("tr",null,r.createElement("td",null,o),r.createElement("td",null,a),r.createElement("td",null,u)))}return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Character"),r.createElement("th",null,"Q Score"),r.createElement("th",null,"P(Error)"))),e)}();return r.createElement("div",{className:"fastq-module--container--ElGph"},r.createElement("h1",null,"FASTQ Quality Table"),t)},h=function(){return r.createElement(a,null,r.createElement(o,null),r.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-465f05dc778515a7001c.js.map