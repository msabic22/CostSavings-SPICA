(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{8797:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data",function(){return r(7377)}])},7377:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(7294),i=r(4184),s=r.n(i),d=r(6792);var o=a.forwardRef((({bsPrefix:e,className:t,striped:r,bordered:a,borderless:i,hover:o,size:u,variant:c,responsive:l,...f},h)=>{const p=(0,d.vE)(e,"table"),m=s()(t,p,c&&`${p}-${c}`,u&&`${p}-${u}`,r&&`${p}-striped`,a&&`${p}-bordered`,i&&`${p}-borderless`,o&&`${p}-hover`),x=(0,n.jsx)("table",{...f,className:m,ref:h});if(l){let e=`${p}-responsive`;return"string"===typeof l&&(e=`${e}-${l}`),(0,n.jsx)("div",{className:e,children:x})}return x})),u=r(682),c=r(3760),l=r(9476),f=function(){return(0,n.jsx)("div",{children:(0,n.jsxs)(u.Z,{children:[(0,n.jsx)("h1",{children:"Sample Data"}),(0,n.jsx)("h3",{className:"text-secondary",children:"Single room, one month"}),(0,n.jsxs)(o,{striped:!0,bordered:!0,hover:!0,className:"mt-4",children:[(0,n.jsxs)("thead",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Date"}),(0,n.jsx)("th",{children:"Time"}),(0,n.jsx)("th",{children:"Card"}),l.bp.map((function(e){return(0,n.jsx)("th",{children:e},e)}))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{}),(0,n.jsx)("th",{}),(0,n.jsx)("th",{}),l.bp.map((function(e){return(0,n.jsx)("td",{className:"text-danger",children:c.d[e].hours.toFixed(1)+" hours"},e)}))]})]}),(0,n.jsx)("tbody",{children:c.a.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.date.dateDisplay}),(0,n.jsx)("td",{children:e.date.timeDisplay}),(0,n.jsx)("td",{children:e.card?"Inserted":"Removed"}),l.bp.map((function(t){return(0,n.jsx)("td",{children:e.loads[t]?"On":"Off"},t)}))]},e.index)}))})]})]})})}},3760:function(e,t,r){"use strict";r.d(t,{a:function(){return p},d:function(){return v}});for(var n=r(381),a=r.n(n),i=function(e,t){var r=new Date(e);return r.setMinutes(r.getMinutes()+t),r},s=function(e){var t=Math.floor(e);return t+":"+Math.round(60*(e-t))},d=function(e,t){var r=0;return e.map((function(n,i){var s,d;e[i+1]&&!e.card&&n.loads[t]&&(r+=(s=n.date.date,d=e[i+1].date.date,a().duration(d.diff(s)).asHours()))})),r},o=r(9476),u=0,c=new Date(2022,0,1,0,0,1),l=new Date(2022,1,0,0,0,0),f=c,h=!1,p=[],m=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};f<l;){f=i(f,m(180,360));var x={index:u+=1,card:h,loads:{},date:{date:a()(f),dateTimeDisplay:a()(f).format("DD.MM.YYYY. HH:mm"),dateDisplay:a()(f).format("DD.MM.YYYY."),timeDisplay:a()(f).format("HH:mm")}};o.bp.map((function(e){return x.loads[e]=Boolean(m(0,1))})),p.push(x),h=!h}var v={};o.bp.map((function(e){var t=d(p,e);v[e]={hours:t,hoursDisplay:s(t)}}))},9476:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Y9:function(){return i},jz:function(){return s},Vp:function(){return d},bp:function(){return o}});var a,i={TV:"TV",AC:"AC",Light:"Light"},s={electricity:"Electricity",tvWattage:"TV Wattage",acWattage:"AC Wattage",lightWattage:"light Wattage"},d={roomCount:"Room Count",durationPerirod:"Duration Period"},o=[i.TV,i.AC,i.Light];n(a={},i.TV,{value:30,displayValue:"30 W"}),n(a,i.AC,{value:30,displayValue:"30 W"}),n(a,i.LIGHT,{value:30,displayValue:"30 W"})},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),i=r(7294),s=r(6792),d=r(5893);const o=i.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...i},o)=>{const u=(0,s.vE)(e,"container"),c="string"===typeof t?`-${t}`:"-fluid";return(0,d.jsx)(r,{ref:o,...i,className:a()(n,t?`${u}${c}`:u)})}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o}},function(e){e.O(0,[885,774,888,179],(function(){return t=8797,e(e.s=t);var t}));var t=e.O();_N_E=t}]);