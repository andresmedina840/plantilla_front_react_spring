(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{7951:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu/seguimiento",function(){return n(4669)}])},4669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),i=n(7294),a=n(9226),o=n(5861),s=n(6886),l=n(6447),c=n(1820),d=n(4945),u=n(7536),h=n(3310),_=n(2229),p=n.n(_),x=n(3796),m=n(7484),f=n.n(m),v=n(1587),j=n(1649),g=n(3470),b=n(7921),Z=n(6808),w=n(4069),C=n(994);function D(e){let{watch:t,setValue:n}=e,{payload:a}=(0,j.v9)(e=>e.percentageAdvance),o=t("consCaso"),s=(0,j.I0)();return(0,i.useEffect)(()=>{o&&s((0,C.O)({consCaso:o}))},[o]),(0,r.jsx)(u.Qr,{...e,render:t=>{let{field:{onChange:i,value:o}}=t;return(0,r.jsx)(w.Z,{disablePortal:!0,onChange:(e,t)=>{n("actividad",null==t?void 0:t.descripcionAvance),i(t)},value:o||null,options:a,fullWidth:!0,getOptionLabel:e=>e.porcentajeAvance?e.porcentajeAvance:"",getOptionSelected:(e,t)=>void 0===t||""===t||e.consecutivo===t.consecutivo,renderInput:t=>(0,r.jsx)(c.Z,{fullWidth:!0,...t,label:null==e?void 0:e.label,variant:"standard",InputLabelProps:{shrink:!0},inputProps:{...t.inputProps,readOnly:!0}}),noOptionsText:"No se ha encontrado informaci\xf3n"})}})}var P=n(38);function E(){let{watch:e,setValue:t,control:n,handleSubmit:_,register:m,reset:w,formState:{errors:C}}=(0,u.cI)({defaultValues:{estado:{id:"AC",label:"ACTIVO"},fechaAsignacion:f()(Date.now())}}),E=e("actividad"),[y,O]=i.useState(f()(Date.now())),I=(0,j.I0)(),{alert:N}=(0,j.v9)(e=>e.tracking),{clean:k}=(0,j.v9)(e=>e.form),[A,S]=i.useState(!0),M=()=>{S(!0),w(),I((0,P.ll)(!1)),I((0,P.QZ)(!1))};return(0,i.useEffect)(()=>{k&&(M(),I((0,P.t_)(!1)))},[k]),(0,r.jsxs)(a.Z,{sx:{width:"100%",maxWidth:500},children:[(0,r.jsxs)("form",{id:"hook-form",className:p().root,onSubmit:_(e=>{var t,n;let{_consCaso:r,...i}=e,a={...i,estado:null==e?void 0:null===(t=e.estado)||void 0===t?void 0:t.id,porcentajeId:null==e?void 0:null===(n=e.porcentajeId)||void 0===n?void 0:n.consecutivo,fechaAsignacion:f()(e.fechaAsignacion,"DD-MM-YYYY").format("DD-MM-YYYY"),noticiaCriminal:null==e?void 0:e._consCaso};I((0,v.yr)({payload:a,reset:M}))}),children:[(0,r.jsxs)("div",{className:p().tittle,children:[(0,r.jsx)(h.Z,{className:p().tittleChildren}),(0,r.jsx)(o.Z,{sx:{marginLeft:1},className:p().tittleChildren,align:"left",component:"h6",variant:"subtitle1",children:"Seguimiento Del Proceso"})]}),(0,r.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(Z.Z,{variant:"standard",InputLabelProps:{shrink:!0},id:"consCaso",label:"* Noticia Criminal",fullWidth:!0,register:m,readOnly:A,setReadOnly:S,setValue:t}),C.consCaso&&(0,r.jsx)(o.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"})]}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,sx:{display:A?"none":"block"},children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(D,{watch:e,control:n,setValue:t,name:"porcentajeId",id:"porcentajeId",label:"* Porcentaje de avance",...m("porcentajeId",{required:!0})}),C.porcentajeId&&(0,r.jsx)(o.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"})]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{inputProps:{readOnly:!0,maxLength:4e3},variant:"standard",InputLabelProps:{shrink:!0},id:"actividad",label:"* Actividad",multiline:!0,fullWidth:!0,rows:4,...m("actividad",{required:!0}),helperText:"".concat(null!=E?E.length:0," / ",4e3)}),C.actividad&&(0,r.jsx)(o.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"})]})}),(0,r.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,r.jsx)(x.Z,{control:n,name:"* estado",id:"estado",label:"* Estado",...m("estado",{required:!0})}),C.estado&&(0,r.jsx)(o.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"})]}),(0,r.jsx)(s.ZP,{item:!0,xs:6,children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(u.Qr,{name:"fechaAsignacion",defaultValue:null,control:n,rules:{required:"Este campo es requerido"},render:e=>{let{field:t}=e;return(0,r.jsx)(d.O,{...t,readOnly:!0,value:y,onChange:e=>{O(e)},label:"* Fecha Asignaci\xf3n",inputFormat:"DD-MM-YYYY",disablePast:!0,slotProps:{textField:{fullWidth:!0,variant:"standard"}},renderInput:e=>(0,r.jsx)(c.Z,{inputProps:{readOnly:!0},InputLabelProps:{shrink:!0},label:"* Fecha Asignaci\xf3n",...e})})}}),C.fechaAsignacion&&(0,r.jsx)(o.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"})]})})]})]}),(0,r.jsx)(b.Z,{})]}),(0,r.jsx)(g.Z,{...N,onClose:()=>I((0,v.xh)())})]})}var y=n(6621),O=n(8849),I=n.n(O),N=function(){return(0,r.jsx)(y.Z,{children:(0,r.jsx)("main",{className:I().main,children:(0,r.jsx)(E,{})})})}},7921:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r,i,a,o,s,l,c,d,u=n(5893),h=n(7294),_=n(5697),p=n.n(_),x=n(917),m=n(948),f=n(6720),v=n(9226),j=n(3379),g=n(4776),b=n(3946),Z=n(1578),w=n.n(Z),C=n(4215),D=n.n(C),P=n(3219);function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e){return h.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32"},e),r||(r=h.createElement("circle",{cx:16,cy:16,r:16,fill:"#CDFF00"})),i||(i=h.createElement("path",{stroke:"#064665",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 26a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2m12 5h-8m5 4h-5m-6 4h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z"})),a||(a=h.createElement("path",{stroke:"#064665",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 10h8v4h-8v-4Z"})))},O=e=>(0,u.jsx)(P.Z,{...e,component:y,inheritViewBox:!0}),I=n(1664),N=n.n(I),k=n(5861);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=function(e){return h.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 33 32"},e),o||(o=h.createElement("circle",{cx:16.5,cy:16,r:16,fill:"#CDFF00"})),s||(s=h.createElement("g",{clipPath:"url(#Group_151_svg__a)"},h.createElement("path",{fill:"#064665",d:"M16.413 3.971a.93.93 0 0 0-.115.029.923.923 0 0 0-.721.923v.923H7.269A2.77 2.77 0 0 0 4.5 8.616v12a2.77 2.77 0 0 0 2.77 2.769h8.307v.346l-5.02 2.51a.928.928 0 1 0 .808 1.672l4.212-2.105v.346a.923.923 0 0 0 1.846 0v-.346l4.212 2.105a.929.929 0 0 0 .808-1.672l-5.02-2.51v-.346h8.308a2.77 2.77 0 0 0 2.769-2.77v-12a2.77 2.77 0 0 0-2.77-2.769h-8.307v-.923a.924.924 0 0 0-1.01-.952ZM6.346 8.615h20.308v12H6.346v-12Zm17.423.924a.923.923 0 0 0-.548.259l-3.029 3.03-2.105-2.108a.924.924 0 0 0-1.472.202l-2.74 4.79-1.126-2.828a.922.922 0 0 0-1.528-.318l-2.77 2.77a.94.94 0 0 0 1.329 1.329l1.76-1.76 1.327 3.288a.922.922 0 0 0 1.672.116l3.087-5.395 1.903 1.905a.92.92 0 0 0 1.328 0l3.692-3.693a.923.923 0 0 0-.78-1.587Z"}))),l||(l=h.createElement("defs",null,h.createElement("clipPath",{id:"Group_151_svg__a"},h.createElement("path",{fill:"#fff",d:"M4.5 4h24v24h-24z"})))))},M=e=>(0,u.jsx)(P.Z,{...e,component:S,inheritViewBox:!0});function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){return h.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 24"},e),c||(c=h.createElement("g",{clipPath:"url(#Group_152_svg__a)"},h.createElement("circle",{cx:12.5,cy:11,r:16,fill:"#CDFF00"}),h.createElement("path",{fill:"#064665",d:"M20.3 3a.6.6 0 0 1-.6.6h-2.4a.6.6 0 0 1 0-1.2h.965A4.2 4.2 0 1 0 20.3 6a.6.6 0 1 1 1.2 0 5.4 5.4 0 1 1-2.4-4.49V.6a.599.599 0 0 1 1.024-.424A.6.6 0 0 1 20.3.6V3ZM9.529 6.624a6.6 6.6 0 0 0 8.371 5.728v5.072a1.2 1.2 0 0 1-1.2 1.2h-12a1.2 1.2 0 0 0 1.2 1.2h11.4a.6.6 0 0 1 0 1.2H5.9a2.4 2.4 0 0 1-2.4-2.4v-14.4a2.4 2.4 0 0 1 2.4-2.4h5.09a6.582 6.582 0 0 0-1.249 2.4h.007a6.605 6.605 0 0 0-.222 2.4h.003Z"}))),d||(d=h.createElement("defs",null,h.createElement("clipPath",{id:"Group_152_svg__a"},h.createElement("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})))))},F=e=>(0,u.jsx)(P.Z,{...e,component:B,inheritViewBox:!0});function W(){let e=e=>()=>{n(e)},[t,n]=h.useState(!1);return(0,u.jsxs)(v.Z,{className:D().root,children:[(0,u.jsxs)(v.Z,{className:D().box,sx:{textAlign:"center",pt:1,height:90},children:[(0,u.jsx)(b.Z,{onClick:e(!t),"aria-label":"delete",children:(0,u.jsx)(N(),{href:"/menu/noticiaCriminal",children:(0,u.jsx)(O,{sx:{fontSize:30,fill:"none"}})})}),(0,u.jsx)(k.Z,{variant:"caption",color:"white",children:(0,u.jsx)(N(),{href:"/menu/noticiaCriminal",children:"N. Criminal"})})]}),(0,u.jsxs)(v.Z,{className:D().box,sx:{textAlign:"center",pt:1,height:90},children:[(0,u.jsx)(b.Z,{onClick:e(!t),"aria-label":"delete",children:(0,u.jsx)(N(),{href:"/menu/seguimiento",children:(0,u.jsx)(M,{sx:{fontSize:30}})})}),(0,u.jsx)(k.Z,{variant:"caption",color:"white",children:(0,u.jsx)(N(),{href:"/menu/seguimiento",children:"Seguimiento"})})]}),(0,u.jsxs)(v.Z,{className:D().box,sx:{textAlign:"center",pt:1,height:90},children:[(0,u.jsx)(b.Z,{onClick:e(!t),"aria-label":"delete",children:(0,u.jsx)(N(),{href:"/menu/bitacora",children:(0,u.jsx)(F,{sx:{fontSize:30}})})}),(0,u.jsx)(k.Z,{variant:"caption",color:"white",children:(0,u.jsx)(N(),{href:"/menu/bitacora",children:"Bit\xe1cora"})})]})]})}W.propTypes={window:p().func};var Y=n(4386);let V=(0,m.ZP)("div")(e=>{let{}=e;return{marginBottom:66,height:"100%",display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"stretch",width:"100%",color:"white"}}),q=(0,u.jsx)(v.Z,{sx:{m:1,width:"100%",ml:"-10%"},elevation:4,children:(0,u.jsx)(W,{})});function H(){var e;let[t,n]=h.useState(!1);return(0,u.jsxs)(V,{children:[(0,u.jsx)(f.ZP,{}),(0,u.jsx)(x.xB,{styles:{".MuiDrawer-root > .MuiPaper-root":{height:"calc(50% - ".concat(56,"px)"),overflow:"visible"}}}),(0,u.jsx)(v.Z,{className:w().box,sx:{textAlign:"center",pt:1,height:90},children:(0,u.jsx)(Y.Z,{title:"M\xe1s Opciones",children:(0,u.jsx)(b.Z,{onClick:(e=!t,()=>{n(e)}),"aria-label":"delete",children:(0,u.jsx)(j.Z,{sx:{fontSize:30}})})})}),(0,u.jsx)(g.Z,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:q})]})}H.propTypes={window:p().func};var T=H},3796:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(7294),a=n(1820),o=n(4069),s=n(7536),l=n(6450);function c(e){let[t,n]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let e=async()=>{try{let{data:{code:e,msg:t}}=await l.Z.get("/v1/api/noticiacriminal/listaEstado");0===e?n(t.map(e=>({id:e.consecutivo,label:e.descripcion}))):n([])}catch(e){n([])}};e()},[]),(0,r.jsx)(s.Qr,{...e,render:e=>{let{field:{onChange:n,value:i}}=e;return(0,r.jsx)(o.Z,{readOnly:!0,disablePortal:!0,onChange:(e,t)=>{n(t)},value:i||null,options:t,fullWidth:!0,renderInput:e=>(0,r.jsx)(a.Z,{fullWidth:!0,...e,label:"* Estado",variant:"standard",InputLabelProps:{shrink:!0}})})}})}},6808:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893);n(7294);var i=n(1820),a=n(1649),o=n(5693),s=n(9226),l=n(38);function c(e){let{id:t,register:n,readOnly:c,setReadOnly:d,setValue:u}=e,h=(0,a.I0)(),{cancel:_}=(0,a.v9)(e=>e.form);return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{autoComplete:"off",inputProps:{readOnly:!c},...e,fullWidth:!0,...n("_".concat(t),{onBlur:e=>{h((0,o.O6)({payload:{nroUnico:e.target.value},setReadOnly:d,setValue:u,id:t}))}}),onInput:e=>{e.target.value=e.target.value.replace(/\D/g,"").slice(0,21),""===e.target.value&&_?h((0,l.QZ)(!1)):Number(e.target.value)&&!_&&h((0,l.QZ)(!0))},InputLabelProps:{shrink:!0}}),(0,r.jsx)(i.Z,{sx:{display:{xs:"none"}},...e,fullWidth:!0,...n(t),InputLabelProps:{shrink:!0}})]})}},3310:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,i=n(5893),a=n(7294),o=n(3219);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),r||(r=a.createElement("circle",{cx:12,cy:12,r:12,fill:"#CDFF00"})))},c=e=>(0,i.jsx)(o.Z,{...e,component:l,inheritViewBox:!0})},6450:function(e,t,n){"use strict";var r=n(6154);let i=r.Z.create({baseURL:"http://192.168.1.12:7001/sigicmovil_back"});i.interceptors.request.use(async e=>{try{let{jwt:t}=await JSON.parse(sessionStorage.getItem("user")),{usuarioSipac:n}=await JSON.parse(sessionStorage.getItem("user")),{undeCodigoSipac:r,roles:i}=await JSON.parse(sessionStorage.getItem("user"));t&&(e.headers.Authorization="Bearer ".concat(t),e.headers.usuarioSipac="".concat(n),e.headers.undeCodigoSipac="".concat(r),e.headers.rol="".concat(Object.keys(i)))}catch(e){}return e},e=>Promise.reject(e)),t.Z=i},4215:function(e){e.exports={root:"bar_root__rXYAV",paper:"bar_paper__p3rU2",buttons:"bar_buttons__MXHBZ",box:"bar_box__vtt8u"}},1578:function(e){e.exports={root:"drawer_root__sbzvb",buttons:"drawer_buttons__inF_H",box:"drawer_box__rJZ7m"}},2229:function(e){e.exports={root:"forms_root__pP5ei",error:"forms_error__Im4a1",highlights:"forms_highlights__GYH4M",buttons:"forms_buttons___bQr1",tabs:"forms_tabs__QIn_m",tittle:"forms_tittle__Qc5wL",tittleChildren:"forms_tittleChildren___WoF5",labelColor:"forms_labelColor__8PMxi"}},8849:function(e){e.exports={container:"Dia_container__e2kor",main:"Dia_main__cBLdZ",item:"Dia_item__NNjy2",iconChildren:"Dia_iconChildren__ZSIP1",itemChildren:"Dia_itemChildren__v0fHj",mainContainer:"Dia_mainContainer__qkCp6",footer:"Dia_footer__ElBDO",title:"Dia_title__My_ra",description:"Dia_description__pa7CA",code:"Dia_code__M4x_O",grid:"Dia_grid__31PFo",card:"Dia_card__iE4vd",logo:"Dia_logo__33pUM",root:"Dia_root__sL7eC",error:"Dia_error__WYE2G",buttons:"Dia_buttons___umHx",tabs:"Dia_tabs__g67d0",tittle:"Dia_tittle__uhco1",tittleChildren:"Dia_tittleChildren__VWvjz",subTittle:"Dia_subTittle__FAUNW",subTittle2:"Dia_subTittle2__EhNVH",labelColor:"Dia_labelColor__8y9XH",gridContainer:"Dia_gridContainer__q8xYb",gridItem:"Dia_gridItem__dDs2S",itemLocation:"Dia_itemLocation__hILuT",p:"Dia_p__p9d95",form:"Dia_form__Ih55E",imagenProcedimiento:"Dia_imagenProcedimiento__waS5Q"}}},function(e){e.O(0,[536,623,918,154,69,945,829,774,888,179],function(){return e(e.s=7951)}),_N_E=e.O()}]);