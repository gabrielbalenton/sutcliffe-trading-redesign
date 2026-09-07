const productGroups = [
  {
    no: "01",
    name: "Manufacturing",
    description: "Timber feedstock for wood processors and timber manufacturers to remanufacture into finished products.",
    image: "/category-manufacturing.png",
    categories: ["Manufacturing Timber"],
    note: "Clear 1, Clear 2, Mixed Clears, Dressing, Premium, Cuttings 1–3, COL, Merch and Industrial."
  },
  {
    no: "02",
    name: "Building & Construction",
    description: "Timber products for structural, building, finishing and specialist construction applications.",
    image: "/category-stress.png",
    categories: ["Structural Timber", "Weatherboards", "House Piles", "Ceiling Battens", "Tile Battens", "Mouldings", "Fascia", "Scaffold Planks", "Soleboards", "Kickboards", "Stair Treads"]
  },
  {
    no: "03",
    name: "Outdoor & Landscaping",
    description: "Treated and purpose-made timber for landscaping, fencing, retaining and outdoor construction.",
    image: "/category-outdoor.png",
    categories: ["Outdoor", "Posts", "Rails", "Palings", "Decking", "Retaining Boards", "Sleepers, Squares & Beams", "Screening", "Pickets", "Capping", "Fence Battens", "Trellis Battens", "Roundwood", "Pegs"]
  },
  {
    no: "04",
    name: "Dunnage",
    description: "Timber dunnage for freight, shipping, load support and industrial transport applications.",
    image: "/timber-packet.png",
    categories: ["Dunnage"],
    note: "Timber supports, bearers and spacers shown both as product and in freight or transport use."
  }
];

const endUses = [
  { name: "Fencing", detail: "Palings, Posts, Rails, Fence Capping, Pegs", image: "/category-outdoor.png" },
  { name: "Retaining", detail: "Posts, Retaining Boards, Sleepers, Squares & Beams", image: "/category-retaining.png" },
  { name: "Decking", detail: "Decking Boards, Balustrade Timber, Posts, Rails", image: "/category-decking.png" },
  { name: "Commercial projects", detail: "Bridges, boardwalks and other specialist outdoor applications", image: "/category-treated.png" }
];

const mockupCss = `
.group-card-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:130px}.group-card{border:1px solid var(--line);background:var(--paper);overflow:hidden}.group-card-image{height:340px;overflow:hidden;background:#e8e5dd}.group-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}.group-card:hover .group-card-image img{transform:scale(1.03)}.group-card-copy{padding:34px 36px 30px}.group-card-no{float:right;font:20px Georgia,serif;color:var(--brass)}.group-card-copy h2{font:42px/1.02 Georgia,serif;margin:18px 0 16px}.group-card-copy>p:not(.eyebrow){font-size:16px;line-height:1.65;color:var(--muted);max-width:650px}.group-card-meta{display:flex;justify-content:space-between;gap:20px;border-top:1px solid var(--line);margin-top:28px;padding-top:22px;text-transform:uppercase;font-size:11px;letter-spacing:.08em}.group-card-meta span{color:var(--deep)}
.group-details{background:#f1f0eb}.group-detail-stack{display:flex;flex-direction:column;gap:110px}.group-detail{border-top:1px solid var(--line);padding-top:34px}.group-detail header{display:grid;grid-template-columns:1fr .8fr;gap:8vw;align-items:end;margin-bottom:42px}.group-detail header h2{margin-top:16px}.group-detail header>p{font-size:17px;line-height:1.7;color:var(--muted);margin:0}.group-detail-body{display:grid;grid-template-columns:.9fr 1.1fr;gap:44px}.group-detail-image{height:520px;overflow:hidden;background:#ddd9d0}.group-detail-image img{width:100%;height:100%;object-fit:cover}.group-category-list{border-top:1px solid var(--line)}.group-category-row{min-height:64px;display:grid;grid-template-columns:54px 1fr 30px;align-items:center;border-bottom:1px solid var(--line);gap:12px}.group-category-row span{font:13px Georgia,serif;color:var(--brass)}.group-category-row b{font-size:15px}.group-category-row i{font-style:normal;text-align:right}.group-note{font:17px/1.6 Georgia,serif;color:var(--muted);padding:28px 0 0;margin:0}
.end-uses-heading{display:grid;grid-template-columns:1.15fr .85fr;gap:8vw;align-items:end;margin-bottom:54px}.end-uses-heading h2{margin-top:18px}.end-uses-heading>p{font-size:16px;line-height:1.7;color:var(--muted)}.end-use-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.end-use-card{border:1px solid var(--line);background:var(--paper)}.end-use-card>div{height:220px;overflow:hidden}.end-use-card img{width:100%;height:100%;object-fit:cover}.end-use-card h3{font:28px/1.05 Georgia,serif;margin:24px 24px 12px}.end-use-card p{font-size:14px;line-height:1.55;color:var(--muted);margin:0 24px 26px}.mockup-note{display:grid;grid-template-columns:.3fr 1fr;gap:7vw;padding:34px 0 100px;border-top:1px solid var(--line)}.mockup-note b{text-transform:uppercase;font-size:11px;letter-spacing:.12em}.mockup-note p{margin:0;font:18px/1.6 Georgia,serif;color:var(--muted)}
@media(max-width:900px){.group-card-grid{grid-template-columns:1fr}.group-card-image{height:300px}.group-detail header,.group-detail-body,.end-uses-heading{grid-template-columns:1fr;gap:28px}.group-detail-image{height:360px}.end-use-grid{grid-template-columns:1fr 1fr}.mockup-note{grid-template-columns:1fr;gap:18px}}
@media(max-width:560px){.group-card-copy{padding:28px 24px}.group-card-copy h2{font-size:34px}.end-use-grid{grid-template-columns:1fr}.group-detail-stack{gap:80px}.group-detail-image{height:280px}.mockup-note{padding-bottom:70px}}
`;

export default function Timber(){return <main>
  <style>{mockupCss}</style>
  <section className="inner-hero shell timber-hero"><p className="eyebrow light">Our timber range</p><h1>Timber for<br/><em>what you build next.</em></h1><p>A practical range of New Zealand-grown timber products, organised by product group and sourced through established mill and manufacturing relationships.</p></section>

  <section className="timber-intro shell section-pad"><p className="eyebrow">Product groups</p><div><h2 className="display-serif">Four clear ways<br/>to browse our range.</h2><p>These pages are designed to show the breadth of what we supply without turning the website into a catalogue of every grade, size and specification. Current products, stock and detailed specifications continue to live within FPX.</p></div></section>

  <section className="group-card-grid shell">
    {productGroups.map((group)=><article className="group-card reveal" key={group.name}>
      <div className="group-card-image"><img src={group.image} alt=""/></div>
      <div className="group-card-copy"><span className="group-card-no">{group.no}</span><p className="eyebrow">Product group</p><h2>{group.name}</h2><p>{group.description}</p><div className="group-card-meta"><b>{group.categories.length} {group.categories.length===1?"category":"categories"}</b><span>Explore group →</span></div></div>
    </article>)}
  </section>

  <section className="group-details section-pad">
    <div className="shell group-detail-stack">
      {productGroups.map((group)=><article className="group-detail reveal" key={group.name}>
        <header><div><p className="eyebrow">{group.no} · Product group</p><h2 className="display-serif">{group.name}</h2></div><p>{group.description}</p></header>
        <div className="group-detail-body">
          <div className="group-detail-image"><img src={group.image} alt=""/></div>
          <div className="group-category-list">
            {group.categories.map((category,index)=><div className="group-category-row" key={category}><span>{String(index+1).padStart(2,"0")}</span><b>{category}</b><i>↗</i></div>)}
            {group.note && <p className="group-note">{group.note}</p>}
          </div>
        </div>
      </article>)}
    </div>
  </section>

  <section className="end-uses shell section-pad">
    <div className="end-uses-heading"><div><p className="eyebrow">End uses / applications</p><h2 className="display-serif">A separate way to explore<br/>what the timber can do.</h2></div><p>Applications sit separately from Product Categories so customers can browse by project without confusing the underlying product structure.</p></div>
    <div className="end-use-grid">{endUses.map((item)=><article className="end-use-card reveal" key={item.name}><div><img src={item.image} alt=""/></div><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div>
  </section>

  <section className="mockup-note shell"><b>Mockup image note</b><p>The structure and category hierarchy above follows George&apos;s email. Existing site photography is being used on this branch as temporary imagery only; each group and category can be replaced with the correct real product photography before launch.</p></section>

  <section className="closing shell"><p className="eyebrow light">Need a specific grade or size?</p><h2>Tell us what<br/>you need.</h2><a className="button button-light" href="/contact">Start an enquiry</a><span className="closing-mark">Current stock lives in FPX</span></section>
</main>}
