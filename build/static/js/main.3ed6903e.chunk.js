(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(39)},37:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),u=t(11),r=t.n(u),o=t(12),l=t(13),i=t(2),m=t(3),d=t.n(m),s="https://shielded-coast-46608.herokuapp.com/api/persons",f=function(){return d.a.get(s).then(function(e){return e.data})},h=function(e){return d.a.post(s,e).then(function(e){return e.data})},b=function(e){return d.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})},p=function(e){return d.a.put("".concat(s,"/").concat(e.id),e).then(function(e){return e.data})},v=function(e){var n=e.filter,t=e.handleChange;return c.a.createElement("div",null,"filter shown with ",c.a.createElement("input",{value:n,onChange:t}))},E=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.persons,t=e.handleRemove;return c.a.createElement("div",null,n.map(function(e){return c.a.createElement("div",{key:e.id},e.name," ",e.number,c.a.createElement("button",{onClick:t(e)},"delete"))}))},g=function(e){var n=e.message,t=e.className;return null===n?null:c.a.createElement("div",{className:t},n)},O=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],r=Object(a.useState)(""),m=Object(i.a)(r,2),d=m[0],s=m[1],O=Object(a.useState)(""),j=Object(i.a)(O,2),C=j[0],N=j[1],S=Object(a.useState)(""),k=Object(i.a)(S,2),y=k[0],T=k[1],U=Object(a.useState)(null),D=Object(i.a)(U,2),P=D[0],x=D[1],J=Object(a.useState)(null),R=Object(i.a)(J,2),A=R[0],B=R[1];Object(a.useEffect)(function(){f().then(function(e){u(e)})},[]);var I=t.filter(function(e){return e.name.toUpperCase().includes(y.toUpperCase())});return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(g,{message:P,className:"success"}),c.a.createElement(g,{message:A,className:"error"}),c.a.createElement(v,{filter:y,handleChange:function(e){T(e.target.value)}}),c.a.createElement("h3",null,"add a new"),c.a.createElement(E,{handleSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name.toUpperCase()===d.toUpperCase()});if(n){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=Object(l.a)({},n,{number:C});p(a).then(function(e){u(t.map(function(t){return t.id!==n.id?t:e})),x("Changed ".concat(n.name," number")),setTimeout(function(){x(null)},5e3)}).catch(function(e){B("Person ".concat(n.name," was already removed")),setTimeout(function(){B(null)},5e3)})}}else{var c={name:d,number:C,id:t.length+1};h(c).then(function(e){u(t.concat(e)),s(""),N(""),x("Added ".concat(e.name)),setTimeout(function(){x(null)},5e3)})}},newName:d,newNumber:C,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){N(e.target.value)}}),c.a.createElement("h3",null,"Numbers"),c.a.createElement(w,{persons:I,handleRemove:function(e){return function(){window.confirm("Delete ".concat(e.name,"?"))&&b(e.id).then(function(n){var a=Object(o.a)(t);a.splice(a.indexOf(e),1),u(a),x("Deleted ".concat(e.name)),setTimeout(function(){x(null)},5e3)}).catch(function(n){B("Person ".concat(e.name," already removed")),setTimeout(function(){B(null)},5e3)})}}}))};t(37);r.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.3ed6903e.chunk.js.map