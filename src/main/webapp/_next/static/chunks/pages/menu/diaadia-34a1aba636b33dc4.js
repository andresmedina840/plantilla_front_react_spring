(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{3379:function(e,t,i){"use strict";var n=i(4836);t.Z=void 0;var r=n(i(4938)),a=i(5893),o=(0,r.default)((0,a.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},4776:function(e,t,i){"use strict";var n=i(7462),r=i(3366),a=i(7294),o=i(8885),s=i(7144),l=i(1705),c=i(2734),d=i(577),u=i(5340),p=i(5893);let f=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function _(e,t,i){let n="function"==typeof i?i():i,r=function(e,t,i){let n;let r=t.getBoundingClientRect(),a=i&&i.getBoundingClientRect(),o=(0,u.Z)(t);if(t.fakeTransform)n=t.fakeTransform;else{let e=o.getComputedStyle(t);n=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let s=0,l=0;if(n&&"none"!==n&&"string"==typeof n){let e=n.split("(")[1].split(")")[0].split(",");s=parseInt(e[4],10),l=parseInt(e[5],10)}return"left"===e?a?`translateX(${a.right+s-r.left}px)`:`translateX(${o.innerWidth+s-r.left}px)`:"right"===e?a?`translateX(-${r.right-a.left-s}px)`:`translateX(-${r.left+r.width-s}px)`:"up"===e?a?`translateY(${a.bottom+l-r.top}px)`:`translateY(${o.innerHeight+l-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-l}px)`:`translateY(-${r.top+r.height-l}px)`}(e,t,n);r&&(t.style.webkitTransform=r,t.style.transform=r)}let h=a.forwardRef(function(e,t){let i=(0,c.Z)(),h={enter:i.transitions.easing.easeOut,exit:i.transitions.easing.sharp},m={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:x,appear:v=!0,children:b,container:g,direction:j="down",easing:w=h,in:Z,onEnter:E,onEntered:y,onEntering:C,onExit:D,onExited:O,onExiting:P,style:k,timeout:I=m,TransitionComponent:N=o.ZP}=e,S=(0,r.Z)(e,f),T=a.useRef(null),L=(0,l.Z)(b.ref,T,t),A=e=>t=>{e&&(void 0===t?e(T.current):e(T.current,t))},M=A((e,t)=>{_(j,e,g),(0,d.n)(e),E&&E(e,t)}),B=A((e,t)=>{let r=(0,d.C)({timeout:I,style:k,easing:w},{mode:"enter"});e.style.webkitTransition=i.transitions.create("-webkit-transform",(0,n.Z)({},r)),e.style.transition=i.transitions.create("transform",(0,n.Z)({},r)),e.style.webkitTransform="none",e.style.transform="none",C&&C(e,t)}),W=A(y),q=A(P),Y=A(e=>{let t=(0,d.C)({timeout:I,style:k,easing:w},{mode:"exit"});e.style.webkitTransition=i.transitions.create("-webkit-transform",t),e.style.transition=i.transitions.create("transform",t),_(j,e,g),D&&D(e)}),F=A(e=>{e.style.webkitTransition="",e.style.transition="",O&&O(e)}),V=a.useCallback(()=>{T.current&&_(j,T.current,g)},[j,g]);return a.useEffect(()=>{if(Z||"down"===j||"right"===j)return;let e=(0,s.Z)(()=>{T.current&&_(j,T.current,g)}),t=(0,u.Z)(T.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[j,Z,g]),a.useEffect(()=>{Z||V()},[Z,V]),(0,p.jsx)(N,(0,n.Z)({nodeRef:T,onEnter:M,onEntered:W,onEntering:B,onExit:Y,onExited:F,onExiting:q,addEndListener:e=>{x&&x(T.current,e)},appear:v,in:Z,timeout:I},S,{children:(e,t)=>a.cloneElement(b,(0,n.Z)({ref:L,style:(0,n.Z)({visibility:"exited"!==e||Z?void 0:"hidden"},k,b.props.style)},t))}))});t.Z=h},8587:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu/diaadia",function(){return i(3902)}])},3902:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return P}});var n=i(5893),r=i(7294),a=i(7484),o=i.n(a),s=i(7536),l=i(9226),c=i(5861),d=i(1820),u=i(2229),p=i.n(u),f=i(3310),_=i(3849),h=i(1649),m=i(3470),x=i(5849),v=i(4069),b=i(5064);function g(e){let{setValue:t}=e,{payload:i}=(0,h.v9)(e=>e.ambitos),a=(0,h.I0)();return(0,r.useEffect)(()=>{a((0,b.O)())},[]),(0,n.jsx)(s.Qr,{...e,render:r=>{let{field:{onChange:a,value:o}}=r;return(0,n.jsx)(v.Z,{disablePortal:!0,onChange:(e,i)=>{a(i),t("tipoEvidencia",""),t("actividad","")},value:o||null,options:i,fullWidth:!0,getOptionLabel:e=>e.descripcion?e.descripcion:"",getOptionSelected:(e,t)=>void 0===t||""===t||e.consecutivo===t.consecutivo,renderInput:t=>(0,n.jsx)(d.Z,{fullWidth:!0,...t,label:null==e?void 0:e.label,variant:"standard",InputLabelProps:{shrink:!0},inputProps:{...t.inputProps,readOnly:!0}}),noOptionsText:"No se ha encontrado informaci\xf3n"})}})}var j=i(9395);function w(e){let{watch:t}=e,{payload:i}=(0,h.v9)(e=>e.ambitosActivity),a=t("ambito"),o=(0,h.I0)();return(0,r.useEffect)(()=>{a&&o((0,j.O)({consecutivo:null==a?void 0:a.consecutivo}))},[a]),(0,n.jsx)(s.Qr,{...e,render:t=>{let{field:{onChange:r,value:a}}=t;return(0,n.jsx)(v.Z,{disablePortal:!0,onChange:(e,t)=>{r(t)},value:a||null,options:i,fullWidth:!0,getOptionLabel:e=>e.descripcion?e.descripcion:"",getOptionSelected:(e,t)=>void 0===t||""===t||e.consecutivo===t.consecutivo,renderInput:t=>(0,n.jsx)(d.Z,{fullWidth:!0,...t,label:null==e?void 0:e.label,variant:"standard",InputLabelProps:{shrink:!0},inputProps:{...t.inputProps,readOnly:!0}}),noOptionsText:"No se ha encontrado informaci\xf3n"})}})}var Z=i(38),E=i(6450);function y(){var e;let{setValue:t,watch:i,register:a,handleSubmit:u,control:v,formState:{errors:b},reset:j}=(0,s.cI)({defaultValues:{identification:null,names:null,group:null,ambito:null,tipoEvidencia:null,actividad:null}}),y=i("actividad"),C=null===(e=i("tipoEvidencia"))||void 0===e?void 0:e.consecutivo,{alert:D}=(0,h.v9)(e=>e.dia),{clean:O}=(0,h.v9)(e=>e.form),P=(0,h.I0)(),k=()=>{let e=sessionStorage.getItem("user"),i=JSON.parse(e);e&&(t("identification",null==i?void 0:i.identificacion),t("names",null==i?void 0:i.nombres),t("group",null==i?void 0:i.unidad),t("ambito",""),t("tipoEvidencia",""),t("actividad",""))};return(0,r.useEffect)(()=>{k()},[]),(0,r.useEffect)(()=>{O&&(j(),k(),P((0,Z.t_)(!1)))},[O]),(0,r.useEffect)(()=>{let e=async()=>{try{let{data:{code:e,msg:i}}=await E.Z.get("/v1/api/ambitodiadialista/descripcionActividadRealizadaByConsecutivo?consecutivo=".concat(C));0===e?t("actividad",i[0].descripcion):t("actividad","")}catch(e){t("actividad","")}};C&&e()},[C]),(0,n.jsxs)(l.Z,{sx:{width:"100%",maxWidth:500},children:[(0,n.jsxs)("form",{id:"hook-form",className:p().root,onSubmit:u(e=>{var i,n;let r={...e,ambito:null==e?void 0:null===(i=e.ambito)||void 0===i?void 0:i.consecutivo,tipoEvidencia:null==e?void 0:null===(n=e.tipoEvidencia)||void 0===n?void 0:n.consecutivo,fecha:o()(Date.now()).format("DD-MM-YYYY")};P((0,_.yr)({data:r,reset:k})),t("tipoEvidencia","")}),children:[(0,n.jsxs)(l.Z,{className:p().tittle,children:[(0,n.jsx)(f.Z,{className:p().tittleChildren}),(0,n.jsx)(c.Z,{sx:{marginLeft:1},className:p().tittleChildren,align:"left",component:"h6",variant:"subtitle1",children:"M\xf3dulo D\xeda a D\xeda"})]}),(0,n.jsxs)(l.Z,{sx:{display:{md:"block"}},children:[(0,n.jsx)(d.Z,{inputProps:{readOnly:!0},variant:"standard",InputLabelProps:{shrink:!0},label:"Identificaci\xf3n",fullWidth:!0,rows:4,...a("identification")}),(0,n.jsx)(d.Z,{inputProps:{readOnly:!0},variant:"standard",InputLabelProps:{shrink:!0},label:"Grado - Nombres y Apellidos",fullWidth:!0,rows:4,...a("names")}),(0,n.jsx)(d.Z,{inputProps:{readOnly:!0},variant:"standard",InputLabelProps:{shrink:!0},label:"Unidad - Grupo",fullWidth:!0,rows:4,...a("group")})]}),(0,n.jsx)(g,{control:v,setValue:t,name:"ambito",label:"* \xc1mbito de Anotaci\xf3n",...a("ambito",{required:!0})}),b.ambito&&(0,n.jsx)(c.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"}),(0,n.jsx)(w,{setValue:t,watch:i,control:v,name:"tipoEvidencia",label:"* Actividad Realizada",...a("tipoEvidencia",{required:!0})}),b.tipoEvidencia&&(0,n.jsx)(c.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"}),(0,n.jsx)(d.Z,{variant:"standard",InputLabelProps:{shrink:!0},label:"* Descripci\xf3n Actividad",inputProps:{maxLength:4e3},helperText:"".concat(null!=y?y.length:0," / ",4e3),multiline:!0,fullWidth:!0,rows:4,...a("actividad",{required:!0})}),b.actividad&&(0,n.jsx)(c.Z,{variant:"caption",className:p().error,children:"Este campo es requerido"}),(0,n.jsx)(x.Z,{})]}),(0,n.jsx)(m.Z,{...D,onClose:()=>{P((0,_.xh)())}})]})}var C=i(6621),D=i(8849),O=i.n(D);function P(){return(0,n.jsx)(C.Z,{children:(0,n.jsx)("main",{className:O().main,children:(0,n.jsx)(y,{})})})}},5849:function(e,t,i){"use strict";i.d(t,{Z:function(){return M}});var n,r,a,o,s=i(5893),l=i(7294),c=i(5697),d=i.n(c),u=i(917),p=i(948),f=i(6720),_=i(9226),h=i(3379),m=i(4776),x=i(3946),v=i(9253),b=i.n(v),g=i(8166),j=i.n(g),w=i(3219);function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var E=function(e){return l.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32"},e),n||(n=l.createElement("circle",{cx:16,cy:16,r:16,fill:"#CDFF00"})),r||(r=l.createElement("path",{fill:"#064665",d:"M17.499 13a5.25 5.25 0 0 0-5.196 4.5h-.053a3.75 3.75 0 1 0 0 7.5h10.5a3.75 3.75 0 0 0 0-7.5h-.055A5.25 5.25 0 0 0 17.5 13H17.5Zm-.318-4.77a.75.75 0 1 0-1.325-.705l-.639 1.204a.75.75 0 1 0 1.325.706l.639-1.207v.002Zm-5.658-1.12a.75.75 0 1 0-1.436.439l.4 1.305a.75.75 0 0 0 1.435-.44l-.4-1.304ZM8.5 14.5c0 .906.269 1.749.73 2.456a5.184 5.184 0 0 1 1.86-.827 6.76 6.76 0 0 1 5.34-4.545A4.5 4.5 0 0 0 8.5 14.5Zm-1.77-4.179a.75.75 0 1 0-.705 1.325l1.205.638a.75.75 0 1 0 .705-1.324l-1.206-.639h.001Zm.624 6.694a.75.75 0 0 0-.44-1.434l-1.304.4a.75.75 0 1 0 .44 1.434l1.304-.4Z"})))},y=e=>(0,s.jsx)(w.Z,{...e,component:E,inheritViewBox:!0});function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var D=function(e){return l.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 33 32"},e),a||(a=l.createElement("circle",{cx:16.5,cy:16,r:16,fill:"#CDFF00"})),o||(o=l.createElement("path",{fill:"#064665",d:"M15.3 21.6h8.4c.34 0 .625-.115.854-.346.23-.23.346-.514.346-.854v-4.8c0-.34-.115-.625-.346-.856a1.16 1.16 0 0 0-.854-.344h-8.4c-.34 0-.625.115-.854.344-.23.23-.346.516-.346.856v4.8c0 .34.115.625.346.854.23.23.514.346.854.346Zm-8.4 3.6a2.31 2.31 0 0 1-1.694-.704A2.312 2.312 0 0 1 4.5 22.8V8.4c0-.66.235-1.225.706-1.694A2.308 2.308 0 0 1 6.9 6h19.2c.66 0 1.225.235 1.696.706.47.47.704 1.034.704 1.694v14.4c0 .66-.235 1.225-.704 1.696-.47.47-1.036.704-1.696.704H6.9Z"})))},O=e=>(0,s.jsx)(w.Z,{...e,component:D,inheritViewBox:!0}),P=i(1664),k=i.n(P),I=i(5861);function N(){let e=e=>()=>{i(e)},[t,i]=l.useState(!1),{roles:n}=JSON.parse(sessionStorage.getItem("user"));return(0,s.jsxs)(_.Z,{className:j().root,children:[(0,s.jsxs)(_.Z,{className:j().box,sx:{textAlign:"center",pt:1,height:90},children:[(0,s.jsx)(x.Z,{onClick:e(!t),"aria-label":"delete",children:(0,s.jsx)(k(),{href:"/menu/diaadia",children:(0,s.jsx)(y,{sx:{fontSize:30}})})}),(0,s.jsx)(I.Z,{variant:"caption",color:"white",children:(0,s.jsx)(k(),{href:"/menu/diaadia",children:"M\xf3dulo D\xeda a D\xeda"})})]}),Object.keys(n).includes("SPAC8314")&&(0,s.jsxs)(_.Z,{className:j().box,sx:{textAlign:"center",pt:1,height:90},children:[(0,s.jsx)(x.Z,{onClick:e(!t),"aria-label":"delete",children:(0,s.jsx)(k(),{href:"/menu/franquicias",children:(0,s.jsx)(O,{sx:{fontSize:30}})})}),(0,s.jsx)(I.Z,{variant:"caption",color:"white",children:(0,s.jsx)(k(),{href:"/menu/franquicias",children:"Franquicias"})})]})]})}N.propTypes={window:d().func};var S=i(4386);let T=(0,p.ZP)("div")(e=>{let{theme:t}=e;return{marginBottom:66,height:"100%",display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"stretch",width:"100%",backgroundColor:t.palette.background.default}}),L=(0,s.jsx)(_.Z,{sx:{m:1,width:"100%",backgroundColor:"inherit",ml:"-10%"},elevation:4,children:(0,s.jsx)(N,{})});function A(){var e;let[t,i]=l.useState(!1);return(0,s.jsxs)(T,{children:[(0,s.jsx)(f.ZP,{}),(0,s.jsx)(u.xB,{styles:{".MuiDrawer-root > .MuiPaper-root":{height:"calc(50% - ".concat(56,"px)"),overflow:"visible"}}}),(0,s.jsx)(_.Z,{className:b().box,sx:{textAlign:"center",pt:1,height:90},children:(0,s.jsx)(S.Z,{title:"Mas Opciones",children:(0,s.jsx)(x.Z,{onClick:(e=!t,()=>{i(e)}),"aria-label":"delete",children:(0,s.jsx)(h.Z,{sx:{fontSize:30}})})})}),(0,s.jsx)(m.Z,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:L})]})}A.propTypes={window:d().func};var M=A},3310:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n,r=i(5893),a=i(7294),o=i(3219);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var l=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),n||(n=a.createElement("circle",{cx:12,cy:12,r:12,fill:"#CDFF00"})))},c=e=>(0,r.jsx)(o.Z,{...e,component:l,inheritViewBox:!0})},6450:function(e,t,i){"use strict";var n=i(6154);let r=n.Z.create({baseURL:"http://192.168.1.12:7001/sigicmovil_back"});r.interceptors.request.use(async e=>{try{let{jwt:t}=await JSON.parse(sessionStorage.getItem("user")),{usuarioSipac:i}=await JSON.parse(sessionStorage.getItem("user")),{undeCodigoSipac:n,roles:r}=await JSON.parse(sessionStorage.getItem("user"));t&&(e.headers.Authorization="Bearer ".concat(t),e.headers.usuarioSipac="".concat(i),e.headers.undeCodigoSipac="".concat(n),e.headers.rol="".concat(Object.keys(r)))}catch(e){}return e},e=>Promise.reject(e)),t.Z=r},8166:function(e){e.exports={root:"bar_root__yuvpC",itemChildren:"bar_itemChildren__nXES8",paper:"bar_paper__QIfpq",buttons:"bar_buttons__uT16p",box:"bar_box__N7lJT"}},9253:function(e){e.exports={root:"drawer_root__fJr2n",buttons:"drawer_buttons__iMjBj",box:"drawer_box__T4PYd"}},2229:function(e){e.exports={root:"forms_root__pP5ei",error:"forms_error__Im4a1",highlights:"forms_highlights__GYH4M",buttons:"forms_buttons___bQr1",tabs:"forms_tabs__QIn_m",tittle:"forms_tittle__Qc5wL",tittleChildren:"forms_tittleChildren___WoF5",labelColor:"forms_labelColor__8PMxi"}},8849:function(e){e.exports={container:"Dia_container__e2kor",main:"Dia_main__cBLdZ",item:"Dia_item__NNjy2",iconChildren:"Dia_iconChildren__ZSIP1",itemChildren:"Dia_itemChildren__v0fHj",mainContainer:"Dia_mainContainer__qkCp6",footer:"Dia_footer__ElBDO",title:"Dia_title__My_ra",description:"Dia_description__pa7CA",code:"Dia_code__M4x_O",grid:"Dia_grid__31PFo",card:"Dia_card__iE4vd",logo:"Dia_logo__33pUM",root:"Dia_root__sL7eC",error:"Dia_error__WYE2G",buttons:"Dia_buttons___umHx",tabs:"Dia_tabs__g67d0",tittle:"Dia_tittle__uhco1",tittleChildren:"Dia_tittleChildren__VWvjz",subTittle:"Dia_subTittle__FAUNW",subTittle2:"Dia_subTittle2__EhNVH",labelColor:"Dia_labelColor__8y9XH",gridContainer:"Dia_gridContainer__q8xYb",gridItem:"Dia_gridItem__dDs2S",itemLocation:"Dia_itemLocation__hILuT",p:"Dia_p__p9d95",form:"Dia_form__Ih55E",imagenProcedimiento:"Dia_imagenProcedimiento__waS5Q"}}},function(e){e.O(0,[536,623,918,154,69,774,888,179],function(){return e(e.s=8587)}),_N_E=e.O()}]);