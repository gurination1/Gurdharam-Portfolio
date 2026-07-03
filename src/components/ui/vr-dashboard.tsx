import { useState, useEffect, useRef } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import {
  BarChart, Bar, XAxis, YAxis, Cell, Tooltip,
  ResponsiveContainer, PieChart, Pie,
} from "recharts";

/* ─── DATA ─────────────────────────────────────────────────────────────── */
const RATINGS = [
  { name: "Excellent", value: 28, pct: 58, color: "#00f5ff" },
  { name: "Very Good", value: 8,  pct: 17, color: "#00ff9d" },
  { name: "Good",      value: 10, pct: 21, color: "#ffd700" },
  { name: "Average",   value: 1,  pct: 2,  color: "#ff9d00" },
  { name: "Poor",      value: 1,  pct: 2,  color: "#ff2d55" },
];
const IMMERSION = [
  { name: "Completely", value: 16, color: "#00f5ff" },
  { name: "Very",       value: 24, color: "#a259ff" },
  { name: "Moderately", value: 2,  color: "#ffd700" },
  { name: "Slightly",   value: 6,  color: "#ff2d55" },
];
const MODULES = [
  { name: "Lab Experiment Simulation", value: 35, pct: 73, color: "#00f5ff" },
  { name: "3D Model Exploration",       value: 12, pct: 25, color: "#a259ff" },
  { name: "Study Module",               value: 1,  pct: 2,  color: "#ffd700" },
];
const RECOMMEND = [
  { name: "Definitely",  value: 41, color: "#00ff9d" },
  { name: "Maybe",       value: 6,  color: "#ffd700" },
  { name: "No",          value: 1,  color: "#ff2d55" },
];
const TIMELINE = [
  { date: "May 1",  count: 1  },
  { date: "May 6",  count: 1  },
  { date: "May 7",  count: 15 },
  { date: "May 8",  count: 17 },
  { date: "May 10", count: 1  },
  { date: "May 12", count: 10 },
  { date: "May 15", count: 3  },
];
const QUALITY = [
  { label: "Extremely / Very Realistic",  value: 56, color: "#a259ff" },
  { label: "Easy / Very Easy to Use",     value: 67, color: "#00f5ff" },
  { label: "Absolutely Understood Topic", value: 54, color: "#00ff9d" },
  { label: "Completely Immersed",         value: 33, color: "#ffd700" },
];
const COMMENTS = [
  { name: "Harsukhman Singh",  tag: "LEARNING",   color: "#00ff9d",
    text: "Very informative and based on real life experiences which helped in better understanding." },
  { name: "Mehakdeep Kaur",   tag: "IMMERSION",  color: "#00f5ff",
    text: "Your brain believes you're actually in a new place — like underwater or in space — even sitting in a room." },
  { name: "Amanpreet Kaur",   tag: "RECOMMEND",  color: "#00ff9d",
    text: "Trying this 3D animation — we enjoyed it! We suggest others to try this 3D animation." },
  { name: "Mantoj Singh",     tag: "EXPERIENCE", color: "#00ff9d",
    text: "Learning and enjoying is a fun combination. Already good! 🎯" },
  { name: "Karanveer Singh",  tag: "SUGGEST",    color: "#a259ff",
    text: "I enjoy very much — communicating with students during the session would feel more realistic." },
  { name: "HARJEET Singh",    tag: "MIXED",      color: "#ffd700",
    text: "Educational and interesting. It could be more realistic in some areas." },
];
const IMPROVEMENTS = [
  { text: "Better graphics / higher resolution", n: 8 },
  { text: "Voice clarity & audio feedback",      n: 5 },
  { text: "More realistic 3D environments",       n: 4 },
  { text: "Student-to-teacher interaction",       n: 3 },
];

/* ─── SUB-COMPONENTS ───────────────────────────────────────────────────── */

function Counter({ target, duration = 1800 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(e * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <>{n}</>;
}

function Arc({ pct, color, size = 120, label, sub }) {
  const r = size / 2 - 9;
  const circ = 2 * Math.PI * r;
  const [prog, setProg] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setProg((1 - Math.pow(1 - p, 3)) * pct);
      if (p < 1) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 500);
    return () => clearTimeout(t);
  }, [pct]);
  const dash = (prog / 100) * circ;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ position: "absolute", transform: "rotate(-90deg)" }}>
        <defs>
          <filter id={`glow${color.replace("#","")}`}>
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={9}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={9}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          filter={`url(#glow${color.replace("#","")})`}/>
      </svg>
      <div style={{
        position:"absolute", inset:0, display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center", textAlign:"center"
      }}>
        <div style={{fontFamily:"'Orbitron',monospace", fontSize:size>100?18:15, fontWeight:900,
          color, textShadow:`0 0 12px ${color}`}}>
          <Counter target={pct}/>%
        </div>
        <div style={{fontSize:7, color:"rgba(255,255,255,0.4)", letterSpacing:1.5, marginTop:3}}>{label}</div>
        {sub && <div style={{fontSize:6, color:"rgba(255,255,255,0.2)", marginTop:1}}>{sub}</div>}
      </div>
    </div>
  );
}

function Card({ children, accent="#00f5ff", style:s={} }) {
  const C = [
    { top:0, left:0, borderTop:"2px solid", borderLeft:"2px solid" },
    { top:0, right:0, borderTop:"2px solid", borderRight:"2px solid" },
    { bottom:0, left:0, borderBottom:"2px solid", borderLeft:"2px solid" },
    { bottom:0, right:0, borderBottom:"2px solid", borderRight:"2px solid" },
  ];
  return (
    <div style={{
      position:"relative", background:"rgba(0,10,22,0.78)", backdropFilter:"blur(18px)",
      border:`1px solid ${accent}22`, borderRadius:3, padding:20,
      boxShadow:`0 0 28px ${accent}09, 0 8px 48px rgba(0,0,0,0.65)`, ...s
    }}>
      {C.map((c,i)=>(
        <div key={i} style={{position:"absolute",width:13,height:13,...c,
          borderColor:accent,opacity:0.65}}/>
      ))}
      {children}
    </div>
  );
}

function Label({ children, color="#00f5ff" }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:14}}>
      <span style={{fontSize:9, color, textShadow:`0 0 6px ${color}`}}>◈</span>
      <span style={{fontSize:8.5, letterSpacing:3.5, color, fontFamily:"'Share Tech Mono',monospace"}}>{children}</span>
      <div style={{flex:1, height:1, background:`linear-gradient(90deg,${color}44,transparent)`}}/>
    </div>
  );
}

/* ─── MAIN DASHBOARD ───────────────────────────────────────────────────── */
export default function VRDashboard() {
  const dashRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(dashRef);
  const [time, setTime] = useState(new Date());
  const [ci, setCi] = useState(0);

  useEffect(() => {
    /* inject fonts */
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap";
    document.head.appendChild(l);

    /* inject keyframe animations */
    const st = document.createElement("style");
    st.textContent = `
      @keyframes glitch {
        0%,88%,100%{text-shadow:0 0 18px #00f5ff,0 0 36px #00f5ff33;transform:none}
        89%{text-shadow:-3px 0 #ff2d55,3px 0 #a259ff;transform:skewX(-2deg)}
        91%{text-shadow:3px 0 #00ff9d,-2px 0 #00f5ff;transform:skewX(1deg)}
        93%{text-shadow:none;transform:none}
      }
      @keyframes scanmove {
        0%{top:-6px} 100%{top:100%}
      }
      @keyframes blink2 {
        0%,49%,100%{opacity:1} 50%,98%{opacity:0}
      }
      @keyframes gridpan {
        0%{background-position:0 0,0 0} 100%{background-position:40px 40px,40px 40px}
      }
      @keyframes pulseGreen {
        0%,100%{box-shadow:0 0 5px #00ff9d} 50%{box-shadow:0 0 16px #00ff9d,0 0 32px #00ff9d44}
      }
      @keyframes cfade {
        from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)}
      }
      @keyframes shimmer {
        0%{opacity:0.04} 50%{opacity:0.12} 100%{opacity:0.04}
      }
    `;
    document.head.appendChild(st);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const t1 = setInterval(() => setTime(new Date()), 1000);
    const t2 = setInterval(() => setCi(i => (i + 1) % COMMENTS.length), 4800);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, [isVisible]);

  return (
    <div ref={dashRef} style={{
      minHeight:"100vh", background:"#020c18",
      backgroundImage:`
        linear-gradient(160deg,#020c18 0%,#010c17 50%,#010810 100%),
        linear-gradient(rgba(0,245,255,0.035) 1px,transparent 1px),
        linear-gradient(90deg,rgba(0,245,255,0.035) 1px,transparent 1px)`,
      backgroundSize:"cover, 40px 40px, 40px 40px",
      animation: isVisible ? "gridpan 12s linear infinite" : "none",
      fontFamily:"'Share Tech Mono',monospace",
      color:"#dff4ff",
      padding:"22px 26px",
      boxSizing:"border-box",
      position:"relative",
      overflowX:"hidden",
    }}>

      {/* ambient orbs */}
      <div style={{position:"fixed",top:-280,left:-220,width:720,height:720,
        background:"radial-gradient(circle,rgba(0,245,255,0.065) 0%,transparent 65%)",
        pointerEvents:"none"}}/>
      <div style={{position:"fixed",bottom:-280,right:-220,width:660,height:660,
        background:"radial-gradient(circle,rgba(162,89,255,0.07) 0%,transparent 65%)",
        pointerEvents:"none"}}/>
      <div style={{position:"fixed",top:"40%",left:"50%",transform:"translateX(-50%)",width:900,height:500,
        background:"radial-gradient(ellipse,rgba(0,245,255,0.025) 0%,transparent 65%)",
        pointerEvents:"none"}}/>

      {/* moving scan line */}
      <div style={{
        position:"fixed",top:0,left:0,right:0,height:4,
        background:"linear-gradient(90deg,transparent 0%,rgba(0,245,255,0.4) 50%,transparent 100%)",
        animation:"scanmove 5s linear infinite",
        pointerEvents:"none",zIndex:300}}/>

      {/* CRT scanlines */}
      <div style={{
        position:"fixed",inset:0,
        background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.022) 3px,rgba(0,0,0,0.022) 4px)",
        pointerEvents:"none",zIndex:250}}/>

      <div style={{position:"relative",zIndex:1}}>

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div style={{
          display:"flex",justifyContent:"space-between",alignItems:"flex-start",
          marginBottom:26,paddingBottom:18,
          borderBottom:"1px solid rgba(0,245,255,0.1)"
        }}>
          <div>
            <div style={{
              fontFamily:"'Orbitron',monospace",fontSize:26,fontWeight:900,
              color:"#00f5ff",letterSpacing:5,textTransform:"uppercase",
              animation:"glitch 7s infinite"
            }}>
              ◈ VR Experience Analytics
            </div>
            <div style={{fontSize:9,color:"rgba(0,245,255,0.42)",letterSpacing:5.5,
              marginTop:7,fontFamily:"'Orbitron',monospace"}}>
              BABA FARID GROUP OF INSTITUTIONS  ·  BATHINDA, PUNJAB  ·  2026
            </div>
            <div style={{display:"flex",gap:18,marginTop:12}}>
              {[
                {l:"SYSTEM",v:"ONLINE",c:"#00ff9d",pulse:true},
                {l:"RECORDS",v:"48",c:"#00f5ff"},
                {l:"PERIOD",v:"MAY 2026",c:"#a259ff"},
                {l:"FORMS",v:"JOTFORM",c:"#ffd700"},
              ].map((b,i)=>(
                <div key={i} style={{display:"flex",gap:6,alignItems:"center"}}>
                  <div style={{
                    width:5,height:5,background:b.c,borderRadius:"50%",
                    animation:b.pulse?"pulseGreen 2s infinite":"none"
                  }}/>
                  <span style={{fontSize:8,color:"rgba(255,255,255,0.28)"}}>{b.l}:</span>
                  <span style={{fontSize:8,color:b.c}}>{b.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{textAlign:"right"}}>
            <div style={{
              fontFamily:"'Orbitron',monospace",fontSize:28,fontWeight:900,
              color:"#00f5ff",textShadow:"0 0 14px #00f5ff66",
              animation:"blink2 2s infinite"
            }}>
              {time.toLocaleTimeString("en-IN",{hour12:false})}
            </div>
            <div style={{fontSize:8,color:"rgba(255,255,255,0.28)",marginTop:5,letterSpacing:2}}>INDIA STANDARD TIME</div>
            <div style={{fontSize:8,color:"rgba(0,245,255,0.38)",marginTop:2,letterSpacing:2}}>THU · 21 MAY 2026</div>
          </div>
        </div>

        {/* ── KPI ROW ─────────────────────────────────────────────── */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:16}}>
          {[
            {l:"TOTAL RESPONSES",v:48,s:"",c:"#00f5ff",sub:"PARTICIPANTS"},
            {l:"SATISFACTION SCORE",v:85,s:"%",c:"#00ff9d",sub:"WEIGHTED AVERAGE"},
            {l:"RECOMMEND RATE",v:85,s:"%",c:"#a259ff",sub:"DEFINITELY YES"},
            {l:"DEEP IMMERSION",v:83,s:"%",c:"#ffd700",sub:"VERY + COMPLETELY"},
          ].map((k,i)=>(
            <Card key={i} accent={k.c}>
              <div style={{fontSize:7.5,letterSpacing:3,color:"rgba(255,255,255,0.3)",marginBottom:11}}>{k.l}</div>
              <div style={{
                fontFamily:"'Orbitron',monospace",fontSize:40,fontWeight:900,lineHeight:1,
                color:k.c,textShadow:`0 0 22px ${k.c}88`
              }}>
                <Counter target={k.v}/>{k.s}
              </div>
              <div style={{fontSize:7,color:`${k.c}77`,marginTop:7,letterSpacing:2}}>{k.sub}</div>
              <div style={{height:1,background:`linear-gradient(90deg,${k.c}99,transparent)`,marginTop:12,borderRadius:1}}/>
            </Card>
          ))}
        </div>

        {/* ── CHARTS ROW ──────────────────────────────────────────── */}
        <div style={{display:"grid",gridTemplateColumns:"1.45fr 1fr 1fr",gap:14,marginBottom:16}}>

          {/* Ratings Bar Chart */}
          <Card accent="#00f5ff">
            <Label color="#00f5ff">OVERALL RATINGS BREAKDOWN</Label>
            <ResponsiveContainer width="100%" height={195}>
              <BarChart data={RATINGS} barSize={34} margin={{top:4,right:4,bottom:0,left:-22}}>
                <XAxis dataKey="name" tick={{fill:"rgba(255,255,255,0.38)",fontSize:8.5,fontFamily:"'Share Tech Mono'"}}
                  axisLine={{stroke:"rgba(0,245,255,0.1)"}} tickLine={false}/>
                <YAxis tick={{fill:"rgba(255,255,255,0.28)",fontSize:8,fontFamily:"'Share Tech Mono'"}}
                  axisLine={false} tickLine={false}/>
                <Tooltip contentStyle={{
                  background:"rgba(2,10,22,0.97)",border:"1px solid rgba(0,245,255,0.22)",
                  fontFamily:"'Share Tech Mono'",fontSize:10,borderRadius:3
                }} cursor={{fill:"rgba(0,245,255,0.04)"}}/>
                <Bar dataKey="value" radius={[3,3,0,0]}>
                  {RATINGS.map((r,i)=>(
                    <Cell key={i} fill={r.color} style={{filter:`drop-shadow(0 0 5px ${r.color}99)`}}/>
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"6px 14px",marginTop:8}}>
              {RATINGS.map((r,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:5,fontSize:8.5}}>
                  <div style={{width:8,height:8,background:r.color,borderRadius:2,boxShadow:`0 0 5px ${r.color}`}}/>
                  <span style={{color:"rgba(255,255,255,0.45)"}}>{r.name}</span>
                  <span style={{color:r.color,fontWeight:"bold"}}>{r.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Immersion Donut */}
          <Card accent="#a259ff">
            <Label color="#a259ff">IMMERSION DEPTH</Label>
            <ResponsiveContainer width="100%" height={155}>
              <PieChart>
                <Pie data={IMMERSION} cx="50%" cy="50%" outerRadius={66} innerRadius={36}
                  dataKey="value" paddingAngle={2}>
                  {IMMERSION.map((d,i)=>(
                    <Cell key={i} fill={d.color} style={{filter:`drop-shadow(0 0 4px ${d.color}88)`}}/>
                  ))}
                </Pie>
                <Tooltip contentStyle={{
                  background:"rgba(2,10,22,0.97)",border:"1px solid rgba(162,89,255,0.22)",
                  fontFamily:"'Share Tech Mono'",fontSize:10,borderRadius:3
                }}/>
              </PieChart>
            </ResponsiveContainer>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"6px 12px"}}>
              {IMMERSION.map((d,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:5,fontSize:8.5}}>
                  <div style={{width:7,height:7,background:d.color,borderRadius:2,boxShadow:`0 0 5px ${d.color}`}}/>
                  <span style={{color:"rgba(255,255,255,0.45)"}}>{d.name}</span>
                  <span style={{color:d.color,fontWeight:"bold"}}>{d.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Modules + Recommend */}
          <Card accent="#ffd700">
            <Label color="#ffd700">EXPERIENCE MODULES</Label>
            <div style={{display:"flex",flexDirection:"column",gap:11,marginBottom:18}}>
              {MODULES.map((e,i)=>(
                <div key={i}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:8.5,marginBottom:5}}>
                    <span style={{color:"rgba(255,255,255,0.5)"}}>{e.name}</span>
                    <span style={{color:e.color}}>{e.value} <span style={{color:"rgba(255,255,255,0.22)"}}>({e.pct}%)</span></span>
                  </div>
                  <div style={{height:5,background:"rgba(255,255,255,0.04)",borderRadius:3}}>
                    <div style={{
                      width:`${e.pct}%`,height:"100%",
                      background:`linear-gradient(90deg,${e.color},${e.color}66)`,
                      borderRadius:3,boxShadow:`0 0 8px ${e.color}55`
                    }}/>
                  </div>
                </div>
              ))}
            </div>
            <div style={{height:1,background:"rgba(255,215,0,0.1)",marginBottom:16}}/>
            <Label color="#00ff9d">WOULD RECOMMEND?</Label>
            <div style={{display:"flex",gap:8}}>
              {RECOMMEND.map((r,i)=>(
                <div key={i} style={{
                  flex:1,textAlign:"center",padding:"11px 6px",
                  background:`${r.color}0b`,
                  border:`1px solid ${r.color}33`,borderRadius:3
                }}>
                  <div style={{
                    fontFamily:"'Orbitron',monospace",fontSize:22,fontWeight:900,
                    color:r.color,textShadow:`0 0 10px ${r.color}88`
                  }}>
                    <Counter target={r.value}/>
                  </div>
                  <div style={{fontSize:7,color:"rgba(255,255,255,0.32)",marginTop:5,letterSpacing:1}}>{r.name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── BOTTOM ROW ──────────────────────────────────────────── */}
        <div style={{display:"grid",gridTemplateColumns:"0.78fr 1.64fr 0.78fr",gap:14}}>

          {/* Arc Score Matrix */}
          <Card accent="#00ff9d">
            <Label color="#00ff9d">SCORE MATRIX</Label>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10}}>
              <Arc pct={85} color="#00ff9d" size={118} label="SATISFACTION"  sub="WEIGHTED AVG"/>
              <Arc pct={83} color="#00f5ff" size={106} label="DEEP IMMERSION" sub="VERY+ LEVELS"/>
              <Arc pct={85} color="#a259ff" size={96}  label="RECOMMEND RATE" sub="DEFINITELY YES"/>
            </div>
          </Card>

          {/* Comments + Timeline */}
          <Card accent="#ff2d55">
            <Label color="#ff2d55">FIELD DISPATCHES — LIVE PARTICIPANT FEEDBACK</Label>

            <div key={ci} style={{
              minHeight:108, padding:"16px 18px",
              background:"rgba(255,45,85,0.04)",
              border:"1px solid rgba(255,45,85,0.15)",
              borderRadius:3, animation:"cfade 0.5s ease",
              position:"relative", overflow:"hidden"
            }}>
              {/* shimmer sweep */}
              <div style={{
                position:"absolute",top:0,left:"-60%",width:"50%",height:"100%",
                background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.025),transparent)",
                animation:"shimmer 3s ease infinite"
              }}/>
              <div style={{
                display:"inline-block",fontSize:7.5,letterSpacing:2,padding:"2px 9px",
                borderRadius:2,marginBottom:12,
                background:`${COMMENTS[ci].color}15`,
                border:`1px solid ${COMMENTS[ci].color}44`,
                color:COMMENTS[ci].color,
                textShadow:`0 0 6px ${COMMENTS[ci].color}66`
              }}>
                {COMMENTS[ci].tag}
              </div>
              <div style={{fontSize:12.5,color:"rgba(255,255,255,0.82)",fontStyle:"italic",
                lineHeight:1.75,marginBottom:12}}>
                "{COMMENTS[ci].text}"
              </div>
              <div style={{fontSize:8.5,color:"rgba(255,45,85,0.75)",display:"flex",alignItems:"center",gap:7}}>
                <div style={{width:5,height:5,background:"#ff2d55",borderRadius:"50%",
                  boxShadow:"0 0 8px #ff2d55",flexShrink:0}}/>
                — {COMMENTS[ci].name}
              </div>
            </div>

            {/* dot nav */}
            <div style={{display:"flex",gap:5,marginTop:10,justifyContent:"center"}}>
              {COMMENTS.map((_,i)=>(
                <div key={i} onClick={()=>setCi(i)} style={{
                  width:i===ci?22:6,height:3,borderRadius:2,cursor:"pointer",
                  transition:"all 0.3s",
                  background:i===ci?"#ff2d55":"rgba(255,45,85,0.2)",
                  boxShadow:i===ci?"0 0 8px #ff2d55":"none"
                }}/>
              ))}
            </div>

            {/* Timeline */}
            <div style={{marginTop:18}}>
              <Label color="#ff2d55">SUBMISSION TIMELINE</Label>
              <ResponsiveContainer width="100%" height={62}>
                <BarChart data={TIMELINE} barSize={17} margin={{top:0,right:4,bottom:0,left:-22}}>
                  <XAxis dataKey="date"
                    tick={{fill:"rgba(255,255,255,0.3)",fontSize:7.5,fontFamily:"'Share Tech Mono'"}}
                    axisLine={false} tickLine={false}/>
                  <Bar dataKey="count" fill="#ff2d55" radius={[2,2,0,0]}
                    style={{filter:"drop-shadow(0 0 5px #ff2d5599)"}}/>
                  <Tooltip contentStyle={{
                    background:"rgba(2,10,22,0.97)",border:"1px solid rgba(255,45,85,0.22)",
                    fontFamily:"'Share Tech Mono'",fontSize:10,borderRadius:3
                  }} cursor={{fill:"rgba(255,45,85,0.04)"}}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Quality Signals */}
          <Card accent="#a259ff">
            <Label color="#a259ff">QUALITY SIGNALS</Label>
            <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:18}}>
              {QUALITY.map((q,i)=>(
                <div key={i}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:8.5,marginBottom:5}}>
                    <span style={{color:"rgba(255,255,255,0.48)",lineHeight:1.3,maxWidth:"72%"}}>{q.label}</span>
                    <span style={{color:q.color,fontWeight:"bold"}}>{q.value}%</span>
                  </div>
                  <div style={{height:5,background:"rgba(255,255,255,0.04)",borderRadius:3}}>
                    <div style={{
                      width:`${q.value}%`,height:"100%",
                      background:`linear-gradient(90deg,${q.color},${q.color}77)`,
                      borderRadius:3,boxShadow:`0 0 8px ${q.color}44`
                    }}/>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding:"13px 14px",
              background:"rgba(162,89,255,0.07)",
              border:"1px solid rgba(162,89,255,0.2)",borderRadius:3
            }}>
              <div style={{fontSize:8,color:"rgba(162,89,255,0.6)",letterSpacing:2.5,marginBottom:11}}>
                ▸ TOP IMPROVEMENT REQUESTS
              </div>
              {IMPROVEMENTS.map((s,i)=>(
                <div key={i} style={{
                  display:"flex",justifyContent:"space-between",alignItems:"center",
                  marginBottom:8,fontSize:8.5
                }}>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    <span style={{color:"#ff2d55",fontSize:8}}>▸</span>
                    <span style={{color:"rgba(255,255,255,0.44)"}}>{s.text}</span>
                  </div>
                  <span style={{
                    fontSize:7.5,padding:"1px 7px",borderRadius:2,flexShrink:0,marginLeft:6,
                    background:"rgba(162,89,255,0.16)",color:"#a259ff",
                    border:"1px solid rgba(162,89,255,0.28)"
                  }}>{s.n}×</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── FOOTER ──────────────────────────────────────────────── */}
        <div style={{
          marginTop:18,paddingTop:14,
          borderTop:"1px solid rgba(0,245,255,0.07)",
          display:"flex",justifyContent:"space-between",alignItems:"center",
          fontSize:7.5,color:"rgba(0,245,255,0.2)",letterSpacing:2.5
        }}>
          <span>VR LAB ANALYTICS SYSTEM v2.0 // BABA FARID GROUP OF INSTITUTIONS</span>
          <span style={{color:"rgba(0,255,157,0.3)"}}>● ALL SYSTEMS NOMINAL</span>
          <span>POWERED BY NEOVRIT ANALYTICS ENGINE</span>
        </div>

      </div>
    </div>
  );
}
