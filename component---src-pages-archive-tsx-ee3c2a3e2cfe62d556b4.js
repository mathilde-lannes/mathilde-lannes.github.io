"use strict";(self.webpackChunkmatys_portfolio=self.webpackChunkmatys_portfolio||[]).push([[252],{2415:function(e,n,t){t.r(n);var a,l=t(1880),r=t(7294),i=t(2788),d=t(448),o=t(5882),m=t(8837),s=t(9194),c=t(6955);const h=i.ZP.div(a||(a=(0,l.Z)(["\n  margin: 100px -20px;\n\n  @media (max-width: 768px) {\n    margin: 50px -10px;\n  }\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n\n    .hide-on-mobile {\n      @media (max-width: 768px) {\n        display: none;\n      }\n    }\n\n    tbody tr {\n      &:hover,\n      &:focus {\n        background-color: var(--light-navy);\n      }\n    }\n\n    th,\n    td {\n      padding: 10px;\n      text-align: left;\n\n      &:first-child {\n        padding-left: 20px;\n\n        @media (max-width: 768px) {\n          padding-left: 10px;\n        }\n      }\n      &:last-child {\n        padding-right: 20px;\n\n        @media (max-width: 768px) {\n          padding-right: 10px;\n        }\n      }\n\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n    }\n\n    tr {\n      cursor: default;\n\n      td:first-child {\n        border-top-left-radius: var(--border-radius);\n        border-bottom-left-radius: var(--border-radius);\n      }\n      td:last-child {\n        border-top-right-radius: var(--border-radius);\n        border-bottom-right-radius: var(--border-radius);\n      }\n    }\n\n    td {\n      &.year {\n        padding-right: 20px;\n\n        @media (max-width: 768px) {\n          padding-right: 10px;\n          font-size: var(--fz-sm);\n        }\n      }\n\n      &.title {\n        padding-top: 15px;\n        padding-right: 20px;\n        color: var(--lightest-slate);\n        font-size: var(--fz-xl);\n        font-weight: 600;\n        line-height: 1.25;\n      }\n\n      &.company {\n        font-size: var(--fz-lg);\n        white-space: nowrap;\n      }\n\n      &.tech {\n        font-size: var(--fz-xxs);\n        font-family: var(--font-mono);\n        line-height: 1.5;\n        .separator {\n          margin: 0 5px;\n        }\n        span {\n          display: inline-block;\n        }\n      }\n\n      &.links {\n        min-width: 100px;\n\n        div {\n          display: flex;\n          align-items: center;\n\n          a {\n            ",";\n            flex-shrink: 0;\n          }\n\n          a + a {\n            margin-left: 10px;\n          }\n        }\n      }\n    }\n  }\n"])),(e=>{let{theme:n}=e;return n.mixins.flexCenter}));n.default=e=>{let{location:n,data:t}=e;const a=t.allMarkdownRemark.edges,l=(0,r.useRef)(null),i=(0,r.useRef)(null),p=(0,r.useRef)([]),u=(0,o.Tb)();return(0,r.useEffect)((()=>{u||(m.Z.reveal(l.current,(0,d.srConfig)()),m.Z.reveal(i.current,(0,d.srConfig)(200,0)),p.current.forEach(((e,n)=>m.Z.reveal(e,(0,d.srConfig)(10*n)))))}),[]),r.createElement(s.Z,{location:n},r.createElement("title",null,"Archive"),r.createElement("main",null,r.createElement("header",{ref:l},r.createElement("h1",{className:"big-heading"},"Archive"),r.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),r.createElement(h,{ref:i},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Year"),r.createElement("th",null,"Title"),r.createElement("th",{className:"hide-on-mobile"},"Made at"),r.createElement("th",{className:"hide-on-mobile"},"Built with"),r.createElement("th",null,"Link"))),r.createElement("tbody",null,a.length>0&&a.map(((e,n)=>{let{node:t}=e;const{date:a,github:l,external:i,ios:d,android:o,title:m,tech:s,company:h}=t.frontmatter;return r.createElement("tr",{key:n,ref:e=>p.current[n]=e},r.createElement("td",{className:"overline year"},""+new Date(a).getFullYear()),r.createElement("td",{className:"title"},m),r.createElement("td",{className:"company hide-on-mobile"},h?r.createElement("span",null,h):r.createElement("span",null,"—")),r.createElement("td",{className:"tech hide-on-mobile"},(null==s?void 0:s.length)>0&&s.map(((e,n)=>r.createElement("span",{key:n},e,"",n!==s.length-1&&r.createElement("span",{className:"separator"},"·"))))),r.createElement("td",{className:"links"},r.createElement("div",null,i&&r.createElement("a",{href:i,"aria-label":"External Link"},r.createElement(c.JO,{name:"External"})),l&&r.createElement("a",{href:l,"aria-label":"GitHub Link"},r.createElement(c.JO,{name:"GitHub"})),d&&r.createElement("a",{href:d,"aria-label":"Apple App Store Link"},r.createElement(c.JO,{name:"AppStore"})),o&&r.createElement("a",{href:o,"aria-label":"Google Play Store Link"},r.createElement(c.JO,{name:"PlayStore"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-tsx-ee3c2a3e2cfe62d556b4.js.map