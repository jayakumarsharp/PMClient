/*! For license information please see bundle.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Dt=(0,Ct.i7)(At||(At=kt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Pt=(0,Ct.i7)(_t||(_t=kt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),It=(0,je.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Nt=(0,je.Ay)((function(e){const{className:t,classes:r,pulsate:i=!1,rippleX:o,rippleY:a,rippleSize:s,in:l,onExited:c,timeout:u}=e,[d,h]=n.useState(!1),p=(0,Ve.A)(t,r.ripple,r.rippleVisible,i&&r.ripplePulsate),g={width:s,height:s,top:-s/2+a,left:-s/2+o},f=(0,Ve.A)(r.child,d&&r.childLeaving,i&&r.childPulsate);return l||d||h(!0),n.useEffect((()=>{if(!l&&null!=c){const e=setTimeout(c,u);return()=>{clearTimeout(e)}}}),[c,l,u]),(0,Pe.jsx)("span",{className:p,style:g,children:(0,Pe.jsx)("span",{className:f})})}),{name:"MuiTouchRipple",slot:"Ripple"})(Rt||(Rt=kt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }