(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1457:function(t,n,e){"use strict";e.r(n);var i=e(60),u=e(61),o=e(64),r=e(62),a=e(63),_=e(1),c=e.n(_),A=e(858),m=e(65),f=e(794),T=e(907),L=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(o.a)(this,Object(r.a)(n).call(this,t))).state={},e}return Object(a.a)(n,t),Object(u.a)(n,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{style:{width:"100%",justifyContent:"center",textAlign:"center"}},"B\xc1N H\xc0NG"),c.a.createElement(A.c,{style:{height:"100%"}},c.a.createElement(A.a,{style:{overflow:"auto"}})))}}]),n}(_.Component);n.default=Object(m.b)(function(t,n){return{uid:t.firebase.auth.uid}},function(t,n){return{backgroundClick:function(){t(Object(T.a)())},actionGetPermission:function(n){t(Object(f.a)(n))}}})(L)},794:function(t,n,e){"use strict";e.d(n,"y",function(){return u}),e.d(n,"z",function(){return o}),e.d(n,"A",function(){return r}),e.d(n,"a",function(){return a}),e.d(n,"i",function(){return _}),e.d(n,"s",function(){return c}),e.d(n,"f",function(){return A}),e.d(n,"B",function(){return m}),e.d(n,"g",function(){return f}),e.d(n,"C",function(){return T}),e.d(n,"h",function(){return L}),e.d(n,"r",function(){return E}),e.d(n,"w",function(){return h}),e.d(n,"v",function(){return d}),e.d(n,"q",function(){return y}),e.d(n,"p",function(){return p}),e.d(n,"o",function(){return s}),e.d(n,"n",function(){return D}),e.d(n,"m",function(){return O}),e.d(n,"l",function(){return F}),e.d(n,"e",function(){return l}),e.d(n,"d",function(){return G}),e.d(n,"c",function(){return b}),e.d(n,"b",function(){return I}),e.d(n,"j",function(){return S}),e.d(n,"t",function(){return N}),e.d(n,"k",function(){return C}),e.d(n,"u",function(){return H}),e.d(n,"x",function(){return M});var i=e(8),u=function(t){return function(n){i.a.auth().signInWithEmailAndPassword(t.email,t.password).then(function(){n({type:"LOGIN_SUCCESS"})}).catch(function(t){n({type:"LOGIN_ERROR",err:t})})}},o=function(){return function(t,n,e){(0,e.getFirebase)().auth().signOut().then(function(){t({type:"SIGN_OUT_SUCCESS"})}).catch(function(n){t({type:"SIGN_OUT_ERROR",err:n})})}},r=function(t){var n={message:""};return n.message="Password not match",function(e){t.password!==t.rePassword?e({type:"SIGNUP_ERROR",err:n}):i.a.auth().createUserWithEmailAndPassword(t.email,t.password).then(function(n){return i.a.collection("users").doc(n.user.uid).set({firstName:t.nameUser,lastName:"",initials:t.firstName[0]+t.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}},a=function(t){return function(n,e){switch(t){case"HoChiMinh_Quattro":case"HoChiMinh_Viper":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"tuyen.tieu@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Traceability":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"nhan.nguyen@omron.com"===e().firebase.auth.email||"hoa.nguyen@omron.com"===e().firebase.auth.email||"tuyen.tieu@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_MobileRobot":"tinh.le@omron.com"===e().firebase.auth.email||"tuyen.tieu@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Vibration":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"tuyen.tieu@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Cobot":"tinh.le@omron.com"===e().firebase.auth.email||"tuyen.tieu@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HaNoi_AnyFeeder":case"HaNoi_Viper":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"duc.vu@omron.com"===e().firebase.auth.email||"tuan.hoang-manh@omron.com"===e().firebase.auth.email||"do.tran@omron.com"===e().firebase.auth.email||"cam.hoang@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HaNoi_Traceability":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"do.tran@omron.com"===e().firebase.auth.email||"duc.vu@omron.com"===e().firebase.auth.email||"tuan.hoang-manh@omron.com"===e().firebase.auth.email||"cam.hoang@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;case"HaNoi_MobileRobot":case"HaNoi_Vibration":case"HaNoi_Cobot":"tinh.le@omron.com"===e().firebase.auth.email||"tran.binh@omron.com"===e().firebase.auth.email||"cam.hoang@omron.com"===e().firebase.auth.email||"tuan.hoang-manh@omron.com"===e().firebase.auth.email||"duc.vu@omron.com"===e().firebase.auth.email||"do.tran@omron.com"===e().firebase.auth.email?(n({type:"CHANGE_ID_ADMIN_1"}),n({type:"OFF_ALL_STATE"})):(n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"}));break;default:n({type:"CHANGE_ID_ADMIN_0"}),n({type:"OFF_ALL_STATE"})}}},_=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_PANEL"}))}},c=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_PANEL"}))}},A=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_IMAGE"}))}},m=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_IMAGE"}))}},f=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_LABEL"}))}},T=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_LABEL"}))}},L=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_LINE"}))}},E=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_LINE"}))}},h=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_WORDDISPLAY"}))}},d=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_WORDADJUST"}))}},y=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_DWORDDISPLAY"}))}},p=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_DWORDADJUST"}))}},s=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_BITDISPLAY"}))}},D=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_BITADJUST"}))}},O=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_WORDDISPLAY"}))}},F=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_WORDADJUST"}))}},l=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_DWORDDISPLAY"}))}},G=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_DWORDADJUST"}))}},b=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_BITDISPLAY"}))}},I=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_BITADJUST"}))}},S=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_TEXT_FIELD"}))}},N=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_TEXT_FIELD"}))}},C=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_ADD_TEXT_FIELD_INPUT"}))}},H=function(){return function(t,n){"1"===n().auth.idAdmin&&(t({type:"OFF_ALL_STATE"}),t({type:"TOGGLE_EDIT_TEXT_FIELD_INPUT"}))}},M=function(){return function(t,n){"1"===n().auth.idAdmin&&t({type:"OFF_ALL_STATE"})}}},907:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(){return function(t){t({type:"BACKGROUND_CLICK"})}}}}]);
//# sourceMappingURL=45.ff69c0c1.chunk.js.map