const categories=[
  ["Manufacturing Grades","/category-manufacturing.png"],
  ["Untreated Timber","/category-untreated.png"],
  ["Treated Timber","/category-treated.png"],
  ["Outdoor","/category-outdoor.png"],
  ["Retaining","/category-retaining.png"],
  ["Stress Graded Timber","/category-stress.png"],
  ["Sleepers, Squares and Beams","/category-retaining.png"],
  ["External Framing","/category-stress.png"],
  ["Internal Framing","/category-untreated.png"],
  ["Decking","/category-decking.png"],
  ["Rails","/category-outdoor.png"],
  ["Screening","/category-decking.png"],
  ["Posts","/category-retaining.png"],
  ["Pegs","/category-retaining.png"],
  ["Palings","/category-outdoor.png"],
  ["Fencing","/category-outdoor.png"],
  ["Kickboards","/category-treated.png"],
  ["Balustrades","/category-untreated.png"],
];
export default function Timber(){return <main>
  <section className="inner-hero shell timber-hero"><p className="eyebrow light">New Zealand-grown Radiata Pine</p><h1>What we supply.<br/><em>Matched to the job.</em></h1><p>Commercial timber sourced through established New Zealand sawmill and manufacturing relationships.</p></section>
  <section className="timber-intro shell section-pad"><p className="eyebrow">The working range</p><div><h2 className="display-serif">From remanufacture<br/>to construction.</h2><p>We supply rough sawn, planed, profiled, treated and cut-to-length timber. Orders are matched by grade, dimensions, condition, treatment, volume and delivery point—with custom specifications arranged where the mills&apos; main cut plans do not fit.</p></div></section>
  <section className="supply-groups shell">
    <article><p className="eyebrow">For wood processors</p><h2>Manufacturing grades</h2><p>High grades including Clears, Dressing and Premium; Cuttings grades for finger-jointing; Merch grade for components and mouldings; and Industrial grade for pallet and case manufacture.</p></article>
    <article><p className="eyebrow">For merchants and builders</p><h2>Construction & framing</h2><p>Machine stress graded timber, internal and external framing, house piles, ceiling battens, formwork, kickboards and pegs—with treatment matched to the hazard class required.</p></article>
    <article><p className="eyebrow">For merchants and end users</p><h2>Outdoor & landscaping</h2><p>Decking, fencing, retaining, balustrades, screening, sleepers, squares and beams across suitable grades, treatments and profiles.</p></article>
    <article><p className="eyebrow">For ports, exporters and freight</p><h2>Dunnage</h2><p>Bearers, spacers and supports for packing, transport and storage, including ISPM 15 heat-treated stock for export.</p></article>
  </section>
  <section className="spec-strip shell"><div><b>Sizes</b><span>Standard and larger cross sections; other dimensions on request.</span></div><div><b>Condition & profile</b><span>Green or kiln dried. Rough sawn, dressed, profiled or docked.</span></div><div><b>Treatment</b><span>Untreated, H1.2 through H6, plus ISPM 15 where required.</span></div><div><b>Custom specification</b><span>Custom cuts, profiles and docked lengths can be arranged.</span></div></section>
  <section className="all-products"><div className="shell product-heading"><p className="eyebrow">Browse timber categories</p><h2 className="display-serif">Available stock,<br/>organised around the job.</h2></div><div className="product-grid shell">{categories.map(([name,image],index)=><a href="https://www.fpx.nz/" target="_blank" rel="noreferrer" className="product-tile reveal" key={name}><span>{String(index+1).padStart(2,"0")}</span><div><img src={image} alt=""/></div><h3>{name}</h3><p>View current availability on FPX ↗</p></a>)}</div></section>
  <section className="closing shell"><p className="eyebrow light">Can&apos;t find the right specification?</p><h2>Tell us what<br/>you need.</h2><a className="button button-light" href="/contact">Start an enquiry</a><span className="closing-mark">Custom sourcing</span></section>
</main>}
