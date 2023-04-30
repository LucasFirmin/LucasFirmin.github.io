"use strict";(self.webpackChunkpie_php_doc=self.webpackChunkpie_php_doc||[]).push([[325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return a?r.createElement(u,s(s({ref:t},d),{},{components:a})):r.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,title:"ORM",description:"Object Relational Mapping"},s="ORM: Object-Relational Mapping",i={unversionedId:"core-components/ORM",id:"core-components/ORM",title:"ORM",description:"Object Relational Mapping",source:"@site/docs/core-components/ORM.md",sourceDirName:"core-components",slug:"/core-components/ORM",permalink:"/docs/core-components/ORM",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ORM",description:"Object Relational Mapping"},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/docs/core-components/routing"},next:{title:"Templates Engine",permalink:"/docs/core-components/templates-engine"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"orm-object-relational-mapping"},"ORM: Object-Relational Mapping"),(0,n.kt)("p",null,"Object-Relational Mapping (ORM) is a technique that allows developers to use objects and classes to interact with a database. Instead of writing SQL queries manually, the ORM provides a way to perform CRUD (Create, Read, Update, Delete) operations using objects."),(0,n.kt)("p",null,"The PHP code provided by the user is a simple ORM framework that allows developers to interact with a database using objects. The framework uses the PDO (PHP Data Objects) extension to interact with the database."),(0,n.kt)("p",null,"The ORM framework provides the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create: inserts a new record into the database table."),(0,n.kt)("li",{parentName:"ul"},"read: retrieves a record from the database table based on the primary key."),(0,n.kt)("li",{parentName:"ul"},"update: updates a record in the database table based on the primary key."),(0,n.kt)("li",{parentName:"ul"},"delete: deletes a record from the database table based on the primary key."),(0,n.kt)("li",{parentName:"ul"},"find: retrieves records from the database table based on the specified criteria.")),(0,n.kt)("p",null,"The framework also supports the concept of relations between database tables. Developers can define relationships between tables, such as one-to-one, one-to-many, or many-to-many, and the ORM will handle the joins and relationships automatically."),(0,n.kt)("p",null,"The create method is used to insert a new record into the database table. The method takes two arguments: the name of the table and an array of field values. The method automatically generates an SQL insert statement based on the field values provided."),(0,n.kt)("p",null,"The read method retrieves a record from the database table based on the primary key. The method takes two arguments: the name of the table and the primary key value. The method automatically generates an SQL select statement to retrieve the record from the database."),(0,n.kt)("p",null,"The update method updates a record in the database table based on the primary key. The method takes three arguments: the name of the table, the primary key value, and an array of field values to update. The method automatically generates an SQL update statement based on the field values provided."),(0,n.kt)("p",null,"The delete method deletes a record from the database table based on the primary key. The method takes two arguments: the name of the table and the primary key value. The method automatically generates an SQL delete statement to delete the record from the database."),(0,n.kt)("p",null,"The find method retrieves records from the database table based on the specified criteria. The method takes two arguments: the name of the table and an array of parameters. The method automatically generates an SQL select statement based on the parameters provided."),(0,n.kt)("p",null,"The ORM framework also supports the concept of relationships between database tables. Developers can define relationships between tables, such as one-to-one, one-to-many, or many-to-many, and the ORM will handle the joins and relationships automatically. The framework provides a static property called $relations, which is an array of relationships between tables."),(0,n.kt)("p",null,"Overall, the ORM framework provided by the user is a simple and effective way for PHP developers to interact with a database using objects. It provides a useful set of CRUD methods and supports the concept of relationships between tables. Developers can use this framework to build web applications quickly and efficiently."))}m.isMDXComponent=!0}}]);