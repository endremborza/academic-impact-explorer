function C(n,$,a,x=0,r=0){const e=(n.y+$.y)/2,s=[n.x,e,$.x,e,$.x,$.y].join(","),d=$.x+a.child,y=n.x+a.parent,o=[d,e,y,e,y,n.y].join(","),t=`M${n.x} ${n.y} C${s} v ${x}`,u=`v ${-x} C${o} v ${-r}`;return`${t} h ${a.child} ${u} h ${-a.parent}z`}export{C as g};
