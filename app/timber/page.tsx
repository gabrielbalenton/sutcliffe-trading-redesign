const manufacturingGrades = ["Clear 1","Clear 2","Mixed Clears","Dressing","Premium","Cuttings 1","Cuttings 2","Cuttings 3","COL","Merch","Industrial"];

const buildingCategories = [
  "Structural Timber","Weatherboards","House Piles","Ceiling Battens","Tile Battens","Mouldings","Fascia","Scaffold Planks","Soleboards","Kickboards","Stair Treads"
];

const outdoorCategories = [
  "Outdoor","Posts","Rails","Palings","Decking","Retaining Boards","Sleepers, Squares & Beams","Screening","Pickets","Capping","Fence Battens","Trellis Battens","Roundwood","Pegs"
];

const endUses = [
  ["Fencing","Palings, posts, rails, fence capping and pegs"],
  ["Retaining","Posts, retaining boards, sleepers, squares and beams"],
  ["Decking","Decking boards, balustrade timber, posts and rails"],
  ["Commercial projects","Bridges, boardwalks and specialist outdoor applications"]
];

const mockupCss = `
.range-intro{display:grid;grid-template-columns:.7fr 1.3fr;gap:9vw;align-items:end;padding:90px 0 46px}.range-intro h2{margin:18px 0 0}.range-intro>p{font:18px/1.65 Georgia,serif;color:var(--muted);margin:0;max-width:680px}.range-jump{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:120px}.range-jump a{padding:22px 22px 20px;border-right:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:18px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}.range-jump a:first-child{border-left:1px solid var(--line)}.range-jump span{font:16px Georgia,serif;color:var(--brass)}
.range-section{padding:0 0 130px;scroll-margin-top:90px}.range-head{display:grid;grid-template-columns:.62fr 1.38fr;gap:8vw;border-top:1px solid var(--line);padding-top:30px;margin-bottom:42px}.range-head h2{font:56px/1 Georgia,serif;margin:14px 0 0}.range-head-copy{display:flex;justify-content:space-between;gap:40px;align-items:end}.range-head-copy>p{font-size:17px;line-height:1.7;color:var(--muted);max-width:620px;margin:0}.range-index{font:20px Georgia,serif;color:var(--brass);white-space:nowrap}
.range-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:stretch}.range-visual{display:grid;grid-template-columns:1.3fr .7fr;grid-template-rows:1fr 1fr;gap:12px;min-height:540px}.range-visual figure{margin:0;overflow:hidden;background:#dedbd3;position:relative}.range-visual figure:first-child{grid-row:1/3}.range-visual img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}.range-visual figure:hover img{transform:scale(1.025)}.range-visual figcaption{position:absolute;left:14px;bottom:14px;background:rgba(6,35,27,.88);color:white;padding:8px 10px;font-size:10px;letter-spacing:.08em;text-transform:uppercase}
.range-panel{border:1px solid var(--line);background:var(--paper);padding:30px;display:flex;flex-direction:column}.panel-kicker{font-size:11px;text-transform:uppercase;letter-spacing:.11em;color:var(--muted);margin:0 0 18px}.range-links{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.range-links a{min-height:56px;padding:14px 10px 12px 0;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:14px;font-weight:700}.range-links a:nth-child(odd){border-right:1px solid var(--line);padding-right:16px}.range-links a:nth-child(even){padding-left:16px}.range-links i{font-style:normal;font-weight:400}.range-action{margin-top:auto;padding-top:28px;display:flex;justify-content:space-between;align-items:center;gap:20px}.range-action p{font:15px/1.5 Georgia,serif;color:var(--muted);margin:0;max-width:330px}.range-action a{white-space:nowrap}
.manufacturing .range-panel{background:#f1f0eb}.grade-cloud{display:flex;flex-wrap:wrap;gap:10px}.grade-cloud span{border:1px solid var(--line);padding:10px 12px;background:var(--paper);font-size:13px}.grade-note{font:16px/1.65 Georgia,serif;color:var(--muted);margin:26px 0 0}
.dunnage-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:42px}.dunnage-visual{height:510px;display:grid;grid-template-columns:1fr 1fr;gap:12px}.dunnage-visual figure{margin:0;overflow:hidden;background:#ddd}.dunnage-visual img{width:100%;height:100%;object-fit:cover}.dunnage-copy{border:1px solid var(--line);padding:40px;display:flex;flex-direction:column;justify-content:center}.dunnage-copy h3{font:38px/1.08 Georgia,serif;margin:0 0 22px}.dunnage-copy p{font-size:16px;line-height:1.7;color:var(--muted);margin:0 0 30px}
.end-use-strip{background:var(--deep);color:var(--paper);padding:85px 0}.end-use-intro{display:grid;grid-template-columns:.7fr 1.3fr;gap:9vw;align-items:end;margin-bottom:45px}.end-use-intro h2{font:50px/1 Georgia,serif;margin:14px 0 0}.end-use-intro p{font:17px/1.65 Georgia,serif;color:#d9d7cf;max-width:660px;margin:0}.end-use-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,.24);border-left:1px solid rgba(255,255,255,.24)}.end-use-card{padding:28px;min-height:190px;border-right:1px solid rgba(255,255,255,.24);border-bottom:1px solid rgba(255,255,255,.24)}.end-use-card span{font:15px Georgia,serif;color:#c7a763}.end-use-card h3{font:28px/1.08 Georgia,serif;margin:42px 0 12px}.end-use-card p{font-size:13px;line-height:1.55;color:#d6d4cc;margin:0}.fpx-note{display:flex;justify-content:space-between;gap:40px;align-items:center;padding:34px 0 90px}.fpx-note p{font:18px/1.6 Georgia,serif;color:var(--muted);margin:0;max-width:760px}
@media(max-width:980px){.range-intro,.range-head,.end-use-intro{grid-template-columns:1fr;gap:28px}.range-jump{grid-template-columns:1fr 1fr}.range-jump a:nth-child(3){border-left:1px solid var(--line)}.range-layout,.dunnage-layout{grid-template-columns:1fr}.range-visual{min-height:460px}.end-use-grid{grid-template-columns:1fr 1fr}.fpx-note{align-items:flex-start;flex-direction:column}}
@media(max-width:620px){.range-intro{padding-top:65px}.range-jump{grid-template-columns:1fr;margin-bottom:85px}.range-jump a,.range-jump a:nth-child(3){border-left:1px solid var(--line);border-bottom:1px solid var(--line)}.range-head h2{font-size:42px}.range-head-copy{display:block}.range-index{display:block;margin-bottom:18px}.range-section{padding-bottom:90px}.range-layout{gap:22px}.range-visual{grid-template-columns:1fr 1fr;grid-template-rows:260px 180px;min-height:0}.range-visual figure:first-child{grid-column:1/3;grid-row:1}.range-links{grid-template-columns:1fr}.range-links a:nth-child(odd){border-right:0;padding-right:0}.range-links a:nth-child(even){padding-left:0}.range-action{align-items:flex-start;flex-direction:column}.dunnage-visual{height:auto;grid-template-columns:1fr}.dunnage-visual figure{height:250px}.dunnage-copy{padding:30px}.end-use-grid{grid-template-columns:1fr}.end-use-intro h2{font-size:40px}}
`;

function CategoryLinks({items}:{items:string[]}){
  return <div className="range-links">{items.map((item)=><a href="https://www.fpx.nz/" target="_blank" rel="noreferrer" key={item}><span>{item}</span><i>↗</i></a>)}</div>
}

export default function Timber(){return <main>
  <style>{mockupCss}</style>

  <section className="inner-hero shell timber-hero">
    <p className="eyebrow light">Our timber range</p>
    <h1>Timber for<br/><em>what you build next.</em></h1>
    <p>New Zealand-grown timber for manufacturing, construction, landscaping and freight — sourced through established mill and manufacturing relationships.</p>
  </section>

  <section className="shell">
    <div className="range-intro">
      <div><p className="eyebrow">Browse the range</p><h2 className="display-serif">Start with what you need.</h2></div>
      <p>We keep the website focused on the range, not every grade and dimension. Choose a product group below, then head to FPX for current products, stock and specifications.</p>
    </div>
    <nav className="range-jump" aria-label="Product groups">
      <a href="#manufacturing"><b>Manufacturing</b><span>01</span></a>
      <a href="#building"><b>Building & Construction</b><span>02</span></a>
      <a href="#outdoor"><b>Outdoor & Landscaping</b><span>03</span></a>
      <a href="#dunnage"><b>Dunnage</b><span>04</span></a>
    </nav>
  </section>

  <section className="range-section manufacturing shell" id="manufacturing">
    <div className="range-head">
      <div><p className="eyebrow">Product group</p><h2>Manufacturing</h2></div>
      <div className="range-head-copy"><span className="range-index">01</span><p>Timber feedstock for wood processors and timber manufacturers to remanufacture into finished products.</p></div>
    </div>
    <div className="range-layout">
      <div className="range-visual">
        <figure><img src="/category-manufacturing.png" alt="Radiata pine manufacturing timber"/><figcaption>Manufacturing timber</figcaption></figure>
        <figure><img src="/category-untreated.png" alt="Clear and appearance grade timber"/><figcaption>Appearance grades</figcaption></figure>
        <figure><img src="/timber-packet.png" alt="Packeted radiata pine timber"/><figcaption>Production feedstock</figcaption></figure>
      </div>
      <div className="range-panel">
        <p className="panel-kicker">Grades we commonly supply</p>
        <div className="grade-cloud">{manufacturingGrades.map((grade)=><span key={grade}>{grade}</span>)}</div>
        <p className="grade-note">The grades are shown to communicate the breadth of the range. Individual grades, dimensions and live availability stay within FPX.</p>
        <div className="range-action"><p>One product category. Multiple manufacturing grades.</p><a className="button" href="https://www.fpx.nz/" target="_blank" rel="noreferrer">View on FPX ↗</a></div>
      </div>
    </div>
  </section>

  <section className="range-section shell" id="building">
    <div className="range-head">
      <div><p className="eyebrow">Product group</p><h2>Building &amp;<br/>Construction</h2></div>
      <div className="range-head-copy"><span className="range-index">02</span><p>Timber products for structural, building, finishing and specialist construction applications.</p></div>
    </div>
    <div className="range-layout">
      <div className="range-visual">
        <figure><img src="/category-stress.png" alt="Structural timber"/><figcaption>Structural</figcaption></figure>
        <figure><img src="/category-untreated.png" alt="Finishing timber"/><figcaption>Finishing</figcaption></figure>
        <figure><img src="/category-treated.png" alt="Treated construction timber"/><figcaption>Specialist construction</figcaption></figure>
      </div>
      <div className="range-panel">
        <p className="panel-kicker">Product categories</p>
        <CategoryLinks items={buildingCategories}/>
        <div className="range-action"><p>Each category will link directly to its matching FPX category once the app taxonomy is final.</p><a className="button" href="https://www.fpx.nz/" target="_blank" rel="noreferrer">Browse FPX ↗</a></div>
      </div>
    </div>
  </section>

  <section className="range-section shell" id="outdoor">
    <div className="range-head">
      <div><p className="eyebrow">Product group</p><h2>Outdoor &amp;<br/>Landscaping</h2></div>
      <div className="range-head-copy"><span className="range-index">03</span><p>Treated and purpose-made timber for landscaping, fencing, retaining and outdoor construction.</p></div>
    </div>
    <div className="range-layout">
      <div className="range-visual">
        <figure><img src="/category-outdoor.png" alt="Outdoor landscaping timber"/><figcaption>Fencing & outdoor</figcaption></figure>
        <figure><img src="/category-decking.png" alt="Timber decking"/><figcaption>Decking</figcaption></figure>
        <figure><img src="/category-retaining.png" alt="Retaining timber"/><figcaption>Retaining</figcaption></figure>
      </div>
      <div className="range-panel">
        <p className="panel-kicker">Product categories</p>
        <CategoryLinks items={outdoorCategories}/>
        <div className="range-action"><p>Browse by the product itself here; project applications are kept separate below.</p><a className="button" href="https://www.fpx.nz/" target="_blank" rel="noreferrer">Browse FPX ↗</a></div>
      </div>
    </div>
  </section>

  <section className="range-section shell" id="dunnage">
    <div className="range-head">
      <div><p className="eyebrow">Product group</p><h2>Dunnage</h2></div>
      <div className="range-head-copy"><span className="range-index">04</span><p>Timber dunnage for freight, shipping, load support and industrial transport applications.</p></div>
    </div>
    <div className="dunnage-layout">
      <div className="dunnage-visual"><figure><img src="/timber-packet.png" alt="Timber dunnage product"/></figure><figure><img src="/category-treated.png" alt="Timber used for industrial load support"/></figure></div>
      <div className="dunnage-copy"><p className="panel-kicker">One focused category</p><h3>Timber that works where the load does.</h3><p>Show the timber itself alongside real freight and transport use. We do not need another layer of subcategories here.</p><a className="button" href="https://www.fpx.nz/" target="_blank" rel="noreferrer">View Dunnage on FPX ↗</a></div>
    </div>
  </section>

  <section className="end-use-strip">
    <div className="shell">
      <div className="end-use-intro"><div><p className="eyebrow light">End uses / applications</p><h2>Know the job,<br/>not the product name?</h2></div><p>Applications are a second way into the range. They help customers understand what timber may suit the job without mixing project terms into the Product Category structure.</p></div>
      <div className="end-use-grid">{endUses.map(([name,detail],index)=><article className="end-use-card" key={name}><span>{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{detail}</p></article>)}</div>
    </div>
  </section>

  <section className="fpx-note shell"><p><b>For the final build:</b> the category names above stay on the Sutcliffe site for discovery and SEO. The final click goes to the matching category inside FPX, where customers see the actual products, stock and specifications.</p><a className="text-link" href="/contact">Need something specific? Talk to us →</a></section>
</main>}
