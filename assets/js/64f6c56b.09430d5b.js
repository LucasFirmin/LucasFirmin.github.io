"use strict";(self.webpackChunkpie_php_doc=self.webpackChunkpie_php_doc||[]).push([[403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1,title:"Register",description:"Register a new user in the database"},s="How to Register Users with Your Framework",o={unversionedId:"authentification/register",id:"authentification/register",title:"Register",description:"Register a new user in the database",source:"@site/docs/authentification/register.md",sourceDirName:"authentification",slug:"/authentification/register",permalink:"/docs/authentification/register",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Register",description:"Register a new user in the database"},sidebar:"tutorialSidebar",previous:{title:"Authentification",permalink:"/docs/authentification/"}},l={},d=[{value:"Add Fields to the User Registration View",id:"add-fields-to-the-user-registration-view",level:3},{value:"Add Variables to the User Model",id:"add-variables-to-the-user-model",level:3},{value:"Add Variables to the User Controller",id:"add-variables-to-the-user-controller",level:3},{value:"Call the Newly Created Variable in the Create Array",id:"call-the-newly-created-variable-in-the-create-array",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-register-users-with-your-framework"},"How to Register Users with Your Framework"),(0,n.kt)("p",null,"When creating a framework, one essential feature is user registration. A framework that allows users to sign up and create accounts provides an excellent foundation for building web applications. However, it's crucial to make the user registration process as seamless as possible for the developers who will use your framework."),(0,n.kt)("p",null,"If you're developing a framework that includes user registration, you should ensure that developers can easily add or modify elements to the registration process. In this article, we will cover the necessary steps for developers to integrate user registration with their database."),(0,n.kt)("h3",{id:"add-fields-to-the-user-registration-view"},"Add Fields to the User Registration View"),(0,n.kt)("p",null,"The first step for developers is to add the fields they have in their database to the user registration view. This step is essential because it ensures that the user registration form will capture all the necessary data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<label for="lastname">Lastname :</label>\n<input\n  class="form-control"\n  placeholder="Lastname"\n  type="lastname"\n  name="lastname"\n  id="lastname"\n  required\n/>\n<div class="invalid-feedback"></div>\n<br />\n')),(0,n.kt)("h3",{id:"add-variables-to-the-user-model"},"Add Variables to the User Model"),(0,n.kt)("p",null,"After developers have added the fields to the user registration view, the next step is to add variables to the User Model. These variables should be protected and named after the fields in the view. This step ensures that the user data captured in the registration form can be saved to the database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"protected $lastname;\n")),(0,n.kt)("h3",{id:"add-variables-to-the-user-controller"},"Add Variables to the User Controller"),(0,n.kt)("p",null,"The third step for developers is to add variables to the User Controller. These variables should be equal to the $request->getPostParam('country'); method. This step ensures that the user data can be passed from the registration form to the controller."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$lastname = $request->getPostParam('lastname');\n")),(0,n.kt)("h3",{id:"call-the-newly-created-variable-in-the-create-array"},"Call the Newly Created Variable in the Create Array"),(0,n.kt)("p",null,"Finally, developers need to call the newly created variable in the create array of the User Controller. This step ensures that the user data is saved to the database when the user clicks the register button."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"'lastname' => $lastname,\n")),(0,n.kt)("p",null,"In conclusion, creating a seamless user registration process is crucial when developing a framework. By following the steps outlined in this article, developers can quickly integrate user registration with their database. The framework will be more user-friendly and more accessible to developers, making it a valuable tool for building web applications."))}p.isMDXComponent=!0}}]);