(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,a){"use strict";a(2),a(20);var t=a(0);e.a=function(_){var e="button";return e+=_.operation?" operation":"",e+=_.doubleColumn?" doubleColumn":"",e+=_.operationB?" operationB":"",e+=_.doubleRow?" doubleRow":"",Object(t.jsx)("button",{onClick:function(e){return _.click&&_.click(_.label)},className:e,children:_.label})}},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Calculator_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),_Calculator_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_8__),_components_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(11),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_Component);var _super=Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator);function Calculator(_){var e;return Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator),(e=_super.call(this,_)).state=Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.setOperation=e.setOperation.bind(Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.addDigit=e.addDigit.bind(Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1]))}catch(e){values[0]=this.state.values[0]}values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var a=this.state.current,t=parseFloat(e),l=Object(D_Faculdade_Projetos_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);l[a]=t,this.setState({values:l})}}}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Display__WEBPACK_IMPORTED_MODULE_10__.a,{value:this.state.displayValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"AC",click:this.clearMemory,operationB:!0,doubleColumn:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"/",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"*",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"7",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"8",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"9",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"-",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"4",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"5",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"6",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"+",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"1",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"2",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"3",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"=",click:this.setOperation,operationB:!0,doubleRow:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"0",click:this.addDigit,doubleColumn:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:".",click:this.addDigit})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7__.Component)},,,function(_,e,a){"use strict";a(2),a(22);var t=a(0);e.a=function(_){return Object(t.jsx)("div",{className:"display",children:_.value})}},,,,,,,function(_,e,a){},function(_,e,a){},function(_,e,a){},,function(_,e,a){},function(_,e,a){"use strict";a.r(e);a(2);var t=a(7),l=a.n(t),r=(a(18),a(8)),s=function(_){_&&_ instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(e){var a=e.getCLS,t=e.getFID,l=e.getFCP,r=e.getLCP,s=e.getTTFB;a(_),t(_),l(_),r(_),s(_)}))},o=a(0);l.a.render(Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Calculadora"}),Object(o.jsx)(r.a,{})]}),document.getElementById("root")),s()}],[[23,1,2]]]);
//# sourceMappingURL=main.53045144.chunk.js.map