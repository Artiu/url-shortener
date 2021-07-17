(this["webpackJsonpurl-shortener"]=this["webpackJsonpurl-shortener"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var i,r,o,c,d,a=t(3),s=t.n(a),l=t(11),h=t.n(l),p=t(2),b=t(4),j=t(1),u=t.p+"static/media/logo.83464303.svg",x=t(15),g=t.p+"static/media/illustration-working.c9b5ef54.svg",m=t(0),O=j.d.div(i||(i=Object(p.a)(["\n    padding-top:80px;\n    background-color:#f0f1f6;\n    @media (min-width:1000px)\n    {\n        padding-top:50px;\n    }\n"]))),f=j.d.div(r||(r=Object(p.a)(["\n    background-color:white;\n    padding:15px 20px;\n    border-radius:10px;\n    width:90%;\n    margin:auto;\n    margin-top:20px;\n    @media (min-width:1000px)\n    {\n        width:80%;\n        display:grid;\n        grid-template-columns:1fr max-content 100px;\n        column-gap:20px;\n        align-items:center;\n    }\n"]))),w=j.d.p(o||(o=Object(p.a)(["\n    width:100%;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    overflow:hidden;\n    border-bottom:1px "," solid;\n    text-align:left;\n    padding:10px 0;\n    @media (min-width:1000px)\n    {\n        border:0;\n        padding:0;\n    }\n"])),(function(n){return n.theme.gray})),v=j.d.p(c||(c=Object(p.a)(["\n    width:100%;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    overflow:hidden;\n    text-align:left;\n    color:",";\n    padding:10px 0;\n    @media (min-width:1000px)\n    {\n        padding:0;\n    }\n"])),(function(n){return n.theme.cyan})),k=j.d.button(d||(d=Object(p.a)(["\n    background-color:",";\n    border:0;\n    border-radius:5px;\n    padding:10px 0;\n    width:100%;\n    font-size:16px;\n    color:white;\n    font-weight:bold;\n    :hover\n    {\n        cursor:pointer;\n        background-color:#9be3e2;\n    }\n"])),(function(n){return n.theme.cyan}));function y(n){var e=Object(a.useContext)(j.a);return Object(m.jsx)(O,{children:n.shortenedLinks.map((function(n){return Object(m.jsxs)(f,{children:[Object(m.jsx)(w,{children:n.previous}),Object(m.jsx)(v,{children:n.shortened}),Object(m.jsx)(k,{onClick:function(t){return function(n,t){navigator.clipboard.writeText(t).then((function(){n.target.innerText="Copied!",n.target.style.background=e.darkViolet}),(function(){n.target.innerText="Failed!",n.target.style.background="red"})),setTimeout((function(){n.target.innerText="Copy",n.target.style.background=""}),3e3)}(t,n.shortened)},children:"Copy"})]},n.shortened)}))})}var z,S,C,F,V,B,L,A,M,T=t.p+"static/media/bg-shorten-mobile.41c34b33.svg",Y=t.p+"static/media/bg-shorten-desktop.0d9742f4.svg",D=j.d.form(z||(z=Object(p.a)(["\n    width:90%;\n    margin:0 auto;\n    padding:1rem;\n    background:url(",") no-repeat;\n    background-position:top right;\n    background-color:",";\n    border-radius:10px;\n    position:relative;\n    top:calc(2.5rem + 32px);\n    @media (min-width:1000px)\n    {\n        width:80%;\n        display:grid;\n        grid-template-columns: 1fr 20%;\n        column-gap: 20px;\n        background:url(",") no-repeat;\n        background-position:top center;\n        background-size: cover;\n        background-color:",";\n        top:56px;\n        clear:both;\n        padding:2rem;\n    }\n"])),T,(function(n){return n.theme.darkViolet}),Y,(function(n){return n.theme.darkViolet})),I=j.d.input.attrs({type:"url",placeholder:"Shorten a link here...",required:"required"})(S||(S=Object(p.a)(["\n    font-size:18px;\n    width:100%;\n    padding:15px 20px;\n    border-radius:5px;\n    border:0;\n"]))),N=j.d.input.attrs({type:"submit",value:"Shorten It!"})(C||(C=Object(p.a)(["\n    width:100%;\n    padding:15px 0;\n    margin-top:1rem;\n    background-color:",";\n    border:0;\n    font-size:18px;\n    color:white;\n    border-radius:5px;\n    font-weight:bold;\n    @media (min-width:1000px)\n    {\n        margin-top:0;\n    }\n    :hover\n    {\n        cursor:pointer;\n        background-color:#9be3e2;\n    }\n"])),(function(n){return n.theme.cyan})),R=Object(j.e)(F||(F=Object(p.a)(["\n    0%{\n        transform:translateY(0);\n    }\n    50%{\n        transform:translateY(-100%);\n    }\n    100%{\n        transform: translateY(0);\n    }\n"]))),G=j.d.div(V||(V=Object(p.a)(["\n    position:absolute;\n    left:0;\n    top:0;\n    width:100%;\n    height:100%;\n    background-color:rgba(255,255,255,0.8);\n    display:flex;\n    align-items:center;\n    justify-content: center;\n"]))),J=j.d.div(B||(B=Object(p.a)(["\n    width:20px;\n    height:20px;\n    background-color:",";\n    border-radius:100%;\n"])),(function(n){return n.theme.darkViolet})),H=Object(j.d)(J)(L||(L=Object(p.a)(["\n    animation:"," 1.5s linear infinite;\n"])),R),P=Object(j.d)(J)(A||(A=Object(p.a)(["\n    animation:"," 1.5s linear 0.5s infinite;\n"])),R),_=Object(j.d)(J)(M||(M=Object(p.a)(["\n    animation:"," 1.5s linear 1s infinite;\n"])),R);function q(n){var e=Object(a.useState)(""),t=Object(b.a)(e,2),i=t[0],r=t[1],o=Object(a.useState)(!1),c=Object(b.a)(o,2),d=c[0],s=c[1];return Object(m.jsxs)(D,{onSubmit:function(e){e.preventDefault(),s(!0),fetch("https://api.shrtco.de/v2/shorten?url="+i).then((function(n){return n.json()})).then((function(e){n.addShortenedLink({shortened:e.result.full_short_link,previous:e.result.original_link})})).catch((function(){alert("Submitted link is invalid or servers are down")})).finally((function(){s(!1)})),r("")},children:[Object(m.jsx)(I,{value:i,onChange:function(n){return r(n.target.value)}}),Object(m.jsx)(N,{}),d?Object(m.jsxs)(G,{children:[Object(m.jsx)(H,{}),Object(m.jsx)(P,{}),Object(m.jsx)(_,{})]}):null]})}var E,U,K,W,X,Q,Z,$,nn,en,tn,rn,on,cn,dn,an,sn,ln,hn,pn,bn,jn,un,xn=t.p+"static/media/bg-boost-mobile.4b04bd89.svg",gn=t.p+"static/media/icon-brand-recognition.c349d3b6.svg",mn=t.p+"static/media/icon-detailed-records.265c8aea.svg",On=t.p+"static/media/icon-fully-customizable.a1532a74.svg",fn=t.p+"static/media/bg-boost-desktop.772154c9.svg",wn=j.d.main(E||(E=Object(p.a)(["\n    text-align:center;\n    overflow-x:hidden;\n"]))),vn=j.d.img(U||(U=Object(p.a)(["\n    max-width:100%;\n    position: relative;\n    left:5%;\n    @media (min-width:1000px)\n    {\n        max-width:35%;\n        float:right;\n    }\n"]))),kn=j.d.p(K||(K=Object(p.a)(["\n    font-size:2rem;\n    color:",";\n    font-weight:bold;\n"])),(function(n){return n.theme.darkBlue})),yn=Object(j.d)(kn)(W||(W=Object(p.a)(["\n    font-size:3rem;\n    padding:0 5%;\n    line-height:1.2;\n    margin-top:5%;\n    @media (min-width:1000px)\n    {\n        padding-left:0;\n        padding-right:10%;\n    }\n"]))),zn=j.d.p(X||(X=Object(p.a)(["\n    color:",";\n    padding:1rem 5%;\n"])),(function(n){return n.theme.grayishViolet})),Sn=j.d.button(Q||(Q=Object(p.a)(["\n    background-color:",";\n    border:0;\n    border-radius:30px;\n    padding:15px 60px;\n    font-size:20px;\n    color:white;\n    font-weight:bold;\n    margin-top:10px;\n    outline:none;\n    @media (min-width:1000px)\n    {\n        padding:10px 30px;\n        font-size:16px;\n    }\n    :hover\n    {\n        cursor:pointer;\n        background-color:#9be3e2;\n    }\n"])),(function(n){return n.theme.cyan})),Cn=Object(j.d)(kn)(Z||(Z=Object(p.a)(["\n    color:white;\n"]))),Fn=j.d.div($||($=Object(p.a)(["\n    background-color:#f0f1f6;\n    padding:calc(5.5rem + 20px) 0;\n"]))),Vn=j.d.div(nn||(nn=Object(p.a)(["\n    background-color:white;\n    width:90%;\n    margin: 0 auto;\n    margin-top:100px;\n    border-radius:10px;\n    position:relative;\n    &.line::before{\n        content:'';\n        position:absolute;\n        top:-100px;\n        transform:translateX(-50%);\n        width:10px;\n        height:100px;\n        background-color:",";\n    }\n    @media(min-width:1000px)\n    {\n        display:inline-block;\n        width:31%;\n        height:300px;\n        margin:0 10px;\n        &.line::before{\n            left:-20px;\n            transform:translateY(-50%);\n            width:20px;\n            height:10px;\n        }\n        &:nth-child(2)\n        {\n            top:40px;\n            ::before\n            {\n                top:calc(50% - 40px);\n            }\n        }\n        &:nth-child(3)\n        {\n            top:80px;\n            ::before\n            {\n                top:calc(50% - 80px);\n            }\n        }\n    }\n    @media (min-width:1300px)\n    {\n        width:25%;\n        margin:0 20px;\n        &.line::before{\n            left:-40px;\n            transform:translateY(-50%);\n            width:40px;\n        }\n    }\n"])),(function(n){return n.theme.cyan})),Bn=j.d.div(en||(en=Object(p.a)(["\n    background:url(",") no-repeat;\n    background-color:",";\n    background-size:cover;\n    background-position:left center;\n    padding: 3rem 0;\n    @media(min-width:1000px)\n    {\n        background:url(",") no-repeat;\n        background-color:",";\n        background-size:cover;\n        background-position:left center;\n    }\n"])),xn,(function(n){return n.theme.darkViolet}),fn,(function(n){return n.theme.darkViolet})),Ln=j.d.img(tn||(tn=Object(p.a)(["\n    position:absolute;\n    left:50%;\n    top:50%;\n    transform:translate(-50%,-50%);\n"]))),An=j.d.div(rn||(rn=Object(p.a)(["\n    position:relative;\n    top:-40px;\n    margin:auto;\n    width:80px;\n    height:80px;\n    background-color:",";\n    border-radius:100%;\n    @media(min-width:1000px)\n    {\n        margin-left:2rem;\n    }\n"])),(function(n){return n.theme.darkViolet})),Mn=j.d.div(on||(on=Object(p.a)(["\n    text-align:center;\n    @media (min-width:1000px)\n    {\n        float:left;\n        text-align:left;\n        padding-left:10%;\n        width:50%;\n    }\n"]))),Tn=j.d.div(cn||(cn=Object(p.a)(["\n    @media (min-width:1000px)\n    {\n        width:30%;\n        margin:0 auto;\n    }\n"]))),Yn=j.d.div(dn||(dn=Object(p.a)(["\n    margin:auto;\n    @media(min-width:1000px)\n    {\n        padding:70px 0;\n    }\n"]))),Dn=Object(j.d)(zn)(an||(an=Object(p.a)(["\n    padding-left:0;\n    padding-right:10%;\n"])));function In(){var n=Object(a.useState)([]),e=Object(b.a)(n,2),t=e[0],i=e[1];Object(a.useEffect)((function(){var n=localStorage.getItem("shortenedLinks");n&&i(JSON.parse(n))}),[]);return Object(m.jsxs)(wn,{children:[Object(m.jsx)(vn,{src:g,alt:"employee at work"}),Object(m.jsxs)(Mn,{children:[Object(m.jsx)(yn,{children:"More than just shorter links"}),Object(m.jsx)(Dn,{children:"Build your brand\u2019s recognition and get detailed insights on how your links are performing."}),Object(m.jsx)(Sn,{children:"Get Started"})]}),Object(m.jsx)(q,{addShortenedLink:function(n){var e=[{shortened:n.shortened,previous:n.previous}].concat(Object(x.a)(t));localStorage.setItem("shortenedLinks",JSON.stringify(e)),i(e)}}),Object(m.jsx)(y,{shortenedLinks:t}),Object(m.jsxs)(Fn,{children:[Object(m.jsxs)(Tn,{children:[Object(m.jsx)(kn,{children:"Advanced Statistics"}),Object(m.jsx)(zn,{children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(m.jsxs)(Yn,{children:[Object(m.jsxs)(Vn,{children:[Object(m.jsx)(An,{children:Object(m.jsx)(Ln,{src:gn})}),Object(m.jsx)(kn,{children:"Brand Recognition"}),Object(m.jsx)(zn,{children:"Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content."})]}),Object(m.jsxs)(Vn,{className:"line",children:[Object(m.jsx)(An,{children:Object(m.jsx)(Ln,{src:mn})}),Object(m.jsx)(kn,{children:"Detailed Records"}),Object(m.jsx)(zn,{children:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."})]}),Object(m.jsxs)(Vn,{className:"line",children:[Object(m.jsx)(An,{children:Object(m.jsx)(Ln,{src:On})}),Object(m.jsx)(kn,{children:"Fully Customizable"}),Object(m.jsx)(zn,{children:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})]}),Object(m.jsxs)(Bn,{children:[Object(m.jsx)(Cn,{children:"Boost your links today"}),Object(m.jsx)(Sn,{children:"Get Started"})]})]})}var Nn=j.d.nav(sn||(sn=Object(p.a)(["\n    display:flex;\n    justify-content: space-between;\n    padding:1rem;\n    @media(min-width:1000px)\n    {\n        display:grid;\n        grid-template-columns:auto 1fr;\n        padding:2rem 10%;\n    }\n"]))),Rn=j.d.button(ln||(ln=Object(p.a)(["\n    background:transparent;\n    width:30px;\n    border:0;\n    border-top:4px "," solid;\n    position:relative; \n    outline:none;\n    ::before,::after{\n        content:'';\n        position: absolute;\n        left:0;\n        top:0;\n        width:100%;\n        border-top:4px "," solid;\n        transform:translateY(6px);\n    }\n    ::after\n    {\n        transform:translateY(16px); \n    }\n    @media(min-width:1000px)\n    {\n        display:none;\n    }\n"])),(function(n){return n.theme.darkBlue}),(function(n){return n.theme.darkBlue})),Gn=Object(j.d)(Sn)(hn||(hn=Object(p.a)(["\n    width:90%;\n    padding:20px 0;\n    margin:0;\n    margin-bottom:40px;\n    @media(min-width:1000px)\n    {\n        font-size:16px;\n        width:auto;\n        margin-bottom:0;\n        padding:10px 20px;\n    }\n"]))),Jn=j.d.div(pn||(pn=Object(p.a)(["\n    background-color:",";\n    position:absolute;\n    top:80px;\n    left:5%;\n    width:90%;\n    text-align:center;\n    border-radius:10px;\n    z-index:2;\n"])),(function(n){return n.theme.darkViolet})),Hn=j.d.p(bn||(bn=Object(p.a)(["\n    color:white;\n    font-size:20px;\n    margin:20px 0;\n    @media(min-width:1000px)\n    {\n        display:inline-block;\n        font-size:16px;\n        color:",";\n        margin:0;\n        padding:2px 15px;\n    }\n    :hover\n    {\n        cursor:pointer;\n        color:",";\n    }\n"])),(function(n){return n.theme.gray}),(function(n){return n.theme.darkBlue})),Pn=j.d.hr(jn||(jn=Object(p.a)(["\n    width:90%;\n    margin:auto;\n"]))),_n=j.d.div(un||(un=Object(p.a)(["\n    display:none;\n    @media(min-width:1000px)\n    {\n        display:flex;\n        justify-content:space-between;\n    }\n"])));function qn(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1];return Object(m.jsxs)(Nn,{children:[Object(m.jsx)("img",{src:u,alt:"logo"}),Object(m.jsx)(Rn,{onClick:function(){i(!t)}}),Object(m.jsxs)(_n,{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(Hn,{children:"Features"}),Object(m.jsx)(Hn,{children:"Pricing"}),Object(m.jsx)(Hn,{children:"Resources"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(Hn,{children:"Login"}),Object(m.jsx)(Gn,{children:"Sign Up"})]})]}),t?Object(m.jsxs)(Jn,{children:[Object(m.jsx)(Hn,{children:"Features"}),Object(m.jsx)(Hn,{children:"Pricing"}),Object(m.jsx)(Hn,{children:"Resources"}),Object(m.jsx)(Pn,{}),Object(m.jsx)(Hn,{children:"Login"}),Object(m.jsx)(Gn,{children:"Sign Up"})]}):null]})}var En,Un,Kn,Wn,Xn,Qn,Zn,$n=t.p+"static/media/logoWhite.7680e6e0.svg",ne=j.d.footer(En||(En=Object(p.a)(["\n    color:white;\n    background-color:",";\n    text-align:center;\n    @media (min-width:1000px)\n    {\n        display:grid;\n        grid-template-columns:30% 1fr 1fr 1fr 25%;\n        text-align:left;\n        padding:30px;\n    }\n"])),(function(n){return n.theme.veryDarkViolet})),ee=j.d.p(Un||(Un=Object(p.a)(["\n    font-weight:bold;\n    padding:1rem 0;\n    @media (min-width:1000px)\n    {\n        padding:0;\n    }\n"]))),te=j.d.p(Kn||(Kn=Object(p.a)(["\n    color:",";\n    padding:0.2rem 0;\n    width:fit-content;\n    margin:0 auto;\n    @media (min-width:1000px)\n    {\n        margin:0;\n        padding:0;\n    }\n    :hover\n    {\n        cursor:pointer;\n        color:",";\n    }\n"])),(function(n){return n.theme.gray}),(function(n){return n.theme.cyan})),ie=j.d.svg(Wn||(Wn=Object(p.a)(["\n    margin:0 10px;\n    :hover\n    {\n        cursor:pointer;\n        fill: ",";\n    }\n"])),(function(n){return n.theme.cyan})),re=j.d.img(Xn||(Xn=Object(p.a)(["\n    padding:2rem 0;\n    @media (min-width:1000px)\n    {\n        padding:0;\n        margin-left:20%;\n        margin-top:5px;\n    }\n"]))),oe=j.d.div(Qn||(Qn=Object(p.a)(["\n    padding:2rem 0;\n    @media (min-width:1000px)\n    {\n        padding:0;\n    }\n"]))),ce=j.d.div(Zn||(Zn=Object(p.a)([""])));function de(){return Object(m.jsxs)(ne,{children:[Object(m.jsx)(re,{src:$n,alt:"logo"}),Object(m.jsxs)(ce,{children:[Object(m.jsx)(ee,{children:"Features"}),Object(m.jsx)(te,{children:"Link Shortening"}),Object(m.jsx)(te,{children:"Branded Links"}),Object(m.jsx)(te,{children:"Analytics"})]}),Object(m.jsxs)(ce,{children:[Object(m.jsx)(ee,{children:"Resources"}),Object(m.jsx)(te,{children:"Blog"}),Object(m.jsx)(te,{children:"Developers"}),Object(m.jsx)(te,{children:"Support"})]}),Object(m.jsxs)(ce,{children:[Object(m.jsx)(ee,{children:"Company"}),Object(m.jsx)(te,{children:"About"}),Object(m.jsx)(te,{children:"Our Team"}),Object(m.jsx)(te,{children:"Careers"}),Object(m.jsx)(te,{children:"Contact"})]}),Object(m.jsxs)(oe,{children:[Object(m.jsx)(ie,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#FFF",children:Object(m.jsx)("path",{d:"M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"})}),Object(m.jsx)(ie,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",fill:"#FFF",children:Object(m.jsx)("path",{d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"})}),Object(m.jsx)(ie,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#FFF",children:Object(m.jsx)("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"})}),Object(m.jsx)(ie,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#FFF",children:Object(m.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})]})]})}var ae,se={cyan:"hsl(180, 66%, 49%)",darkViolet:"hsl(257, 27%, 26%)",red:"hsl(0, 87%, 67%)",gray:"hsl(0, 0%, 75%)",grayishViolet:"hsl(257, 7%, 63%)",darkBlue:"hsl(255, 11%, 22%)",veryDarkViolet:"hsl(260, 8%, 14%)"},le=Object(j.c)(ae||(ae=Object(p.a)(["\n    html,body{\n        font-family: 'Poppins',sans-serif;\n    }\n    *\n    {\n        box-sizing:border-box;\n        margin:0;\n        padding:0;\n    }\n"])));function he(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(j.b,{theme:se,children:[Object(m.jsx)(le,{}),Object(m.jsx)(qn,{}),Object(m.jsx)(In,{}),Object(m.jsx)(de,{})]})})}h.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(he,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.11bd6b63.chunk.js.map