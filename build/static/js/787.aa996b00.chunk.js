"use strict";(self.webpackChunkkinetic_studio_client=self.webpackChunkkinetic_studio_client||[]).push([[787],{1277:function(e,n,i){i.d(n,{Z:function(){return a}});i(2791);var r=i(184);function a(e){var n=e.caption,i=e.title,a=e.copy;return(0,r.jsxs)("div",{className:"intro-section",children:[(0,r.jsxs)("div",{className:"intro-section-header",children:[(0,r.jsx)("p",{className:"caption",children:n}),(0,r.jsx)("h2",{children:i})]}),(0,r.jsx)("p",{children:a})]})}},787:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var r=i(885),a=i(2791),s=i(1277),c=i(9458),t=i(3175),d=i(8458),l=i(4457),u=i(184);function o(e){var n=e.nume,i=e.image,s=e.imageAlt,o=e.tarif,m=e.sedinte,p=e.durata,v=e.masaj,h=(0,a.useContext)(d.I).programareFromCardObj,x=(0,r.Z)(h,2),f=(x[0],x[1]);return(0,u.jsxs)("div",{className:"card-serviciu",children:[(0,u.jsxs)("div",{className:"card-serviciu-header",children:[(0,u.jsx)("p",{className:"card",children:n}),(0,u.jsx)(t.Z,{image:i,imageAlt:s,classe:"card-image",fetchpriority:"low"})]}),(0,u.jsxs)("div",{className:"card-serviciu-body",children:[(0,u.jsxs)("div",{className:"card-serviciu-body-data",children:[(0,u.jsxs)("div",{className:"card-serviciu-body-line",children:[(0,u.jsx)("p",{className:"card",children:"tarif:"}),(0,u.jsx)("p",{className:"card",children:o})]}),(0,u.jsxs)("div",{className:"card-serviciu-body-line",children:[(0,u.jsx)("p",{className:"card",children:"sedinte:"}),(0,u.jsx)("p",{className:"card",children:m})]}),(0,u.jsxs)("div",{className:"card-serviciu-body-line",children:[(0,u.jsx)("p",{className:"card",children:"durata:"}),(0,u.jsx)("p",{className:"card",children:p})]}),(0,u.jsxs)("div",{className:"card-serviciu-body-line",children:[(0,u.jsx)("p",{className:"card",children:"masaj:"}),(0,u.jsx)("p",{className:"card",children:v})]})]}),(0,u.jsx)("div",{className:"btn-wrapper",onClick:function(){return(0,l.eF)(".programare-section"),void f({denumire:n,specializare:v})},children:(0,u.jsx)(c.Z,{classe:"btn-card-programare",text:"programare"})})]})]})}var m=i(6578),p=i(7664);function v(){var e=(0,a.useContext)(d.I).isTablet,n=(0,a.useState)([]),i=(0,r.Z)(n,2),c=i[0],t=i[1];(0,a.useEffect)((function(){(0,l.Wx)(".slider-container")}),[]);var v=(0,m.a)(p.cb),h=null!==v&&void 0!==v&&v.data?v.data.getAllServices:[];return(0,a.useEffect)((function(){if(h){var e=(0,l.G9)(h);e.length?t(e):t([])}}),[h]),(0,u.jsxs)("div",{className:e?"servicii-section container mx-auto":"servicii-section container-fluid mx-auto",children:[(0,u.jsx)(s.Z,{caption:"servicii",title:"Mesaje terapeutice sau de relaxare",copy:"Elimina stresul, oboseala si durerile musculare acumalate dupa serviciu sau efort fizic intens."}),(0,u.jsx)("div",{className:"slider-servicii",children:(0,u.jsx)("div",{className:"slider-container",children:c.map((function(e,n){return(0,u.jsx)(o,{nume:e.denumire,image:e.image,imageAlt:e.denumire,tarif:e.tarif,sedinte:e.sedinte,durata:e.durata,masaj:e.denumire.toLowerCase().includes("terapeutic")?"terapeutic":"relaxare"},n)}))})})]})}},7664:function(e,n,i){i.d(n,{I9:function(){return u},U5:function(){return v},cb:function(){return o},kn:function(){return m},qN:function(){return p}});var r,a,s,c,t,d=i(168),l=i(6320),u=(0,l.Ps)(r||(r=(0,d.Z)(["\n  query {\n    getAllMTypes {\n      mt_id\n      mt_name\n      created\n      updated\n    }\n  }\n"]))),o=(0,l.Ps)(a||(a=(0,d.Z)(["\n  query {\n    getAllServices {\n      s_id\n      service_name\n      m_type_id\n      mt_name\n      appointments_number\n      appointment_duration\n      service_cost\n      profile_picture_url\n    }\n  }\n"]))),m=(0,l.Ps)(s||(s=(0,d.Z)(["\n  query {\n    getAllPartners {\n      p_id\n      first_name\n      last_name\n      profile_picture_url\n      m_types\n      description\n    }\n  }\n"]))),p=(0,l.Ps)(c||(c=(0,d.Z)(["\n  query GetPartnerCurrentSchedule($id: Float) {\n    getPartnerCurrentSchedule(id: $id) {\n      schedule_start\n      schedule_end\n    }\n  }\n"]))),v=(0,l.Ps)(t||(t=(0,d.Z)(["\n  query GetPartnerFilledTimeSlots($id: Float) {\n    getPartnerFilledTimeSlots(id: $id) {\n      schedule_start\n      schedule_end\n    }\n  }\n"])))}}]);
//# sourceMappingURL=787.aa996b00.chunk.js.map