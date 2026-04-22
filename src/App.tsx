/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, 
  RotateCcw, 
  Recycle, 
  Info, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  MapPin
} from "lucide-react";

type Tab = "ingredients" | "other" | "dispose";

export default function App() {
  const [activeTabs, setActiveTabs] = useState<Record<string, Tab>>({
    glow: "ingredients",
    ageless: "ingredients",
    daily: "ingredients"
  });

  const setTabForProduct = (id: string, tab: Tab) => {
    setActiveTabs(prev => ({ ...prev, [id]: tab }));
  };

  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const products = [
    {
      id: "glow",
      name: "Glow Eye Reviver",
      tagline: "Brighten and refresh your eyes with the natural power of Assam Tea.",
      highlights: [
        "Brightens & de-puffs tired eyes",
        "For dull, puffy, and dehydrated under-eyes",
        "Look fresher, smoother, and well-rested"
      ],
      size: "20 g / 0.68 oz",
      description: "A nourishing eye cream designed to visibly brighten and revitalize the delicate eye area. Formulated with Assam tea extract, niacinamide, and ceramides, it helps improve the appearance of dullness while supporting skin hydration and barrier function.",
      active: ["Thai Assam tea extract", "Ceramides", "Niacinamide"],
      benefits: [
        { ingredient: "6% Niacinamide", effect: "Brightens dark circles and refines delicate skin texture." },
        { ingredient: "Thai Assam tea extract", effect: "Potent antioxidants neutralize free radicals to revitalize tired eyes." },
        { ingredient: "Ceramide Complex", effect: "Restores the lipid barrier to prevent moisture loss and sagging." },
        { ingredient: "Sodium Hyaluronate", effect: "Plumps and hydrates to minimize the appearance of fine lines." }
      ],
      ingredients: "Aqua, Niacinamide, Cetyl alcohol, C15-19 Alkane, Isononyl isononanoate, Caprylyl /capric triglyceride, Glycerin, Cetearyl alcohol, Jojoba esters, Butylene glycol, Sodium hyaluronate, Camellia sinesis var. assamica leaf extract, Carbomer, Disodium EDTA, Maltodextrin, Propanediol, Sorbitol, Xanthan gum, PEG-20 methyl glucose sesquistearate, Methyl glucose sesquistearate, Sodium lauroyl lactylate, Laureth-4, Mineral oil, Prunus Amygdalus Dulcis Oil/Sweet Almond Oil, Behentrimonium methosulfate, Tocopheryl acetate, Triethanolamine, Hexyldecanol, Pentylene glycol, Hydrogenated lecithin, Phytosterols, Ceramide NP, 1,2-Hexanediol, Phytosteryl/ octyldodecyl lauroyl glutamate, Ceramide AP, Ceramide EOP, Phenoxyethanol, Ethylhexylglycerin, Fragrance",
      warning: "For external use only. Avoid direct contact with eyes and use with care for sensitive skin. Discontinue use if irritation occurs. Keep out of reach of children.",
      directions: "Apply a very small amount around the eye area using your ring finger. Gently massage until fully absorbed. Use morning and evening.",
      storage: "Store in a cool, dry place away from direct sunlight.",
      mfg: "18/04/2026",
      exp: "18/04/2028",
      pao: "12 M",
      dispose: {
        materials: [
          { part: "Bottle", material: "HDPE" },
          { part: "Cap", material: "HDPE" },
          { part: "Inner Plug", material: "HDPE" }
        ],
        prepare: ["Squeeze out all contents", "Rinse if possible", "Keep all parts together"],
        sort: [
          { label: "Clean HDPE", result: "Plastic recycling" },
          { label: "With residue", result: "General waste" }
        ],
        why: "HDPE is widely recyclable and commonly accepted in Thailand",
        dropOff: [
          { 
            name: "MAREA", 
            url: "https://www.marea.com.my", 
            note: "Industry network (Nestlé, Unilever, etc.) driving the plastic recycling chain." 
          },
          { 
            name: "IPC RBBC", 
            url: "https://www.ipc.com.my/services/recycling-buy-back-center/", 
            note: "Direct drop-off for plastic and recyclables with a reward system." 
          },
          { 
            name: "1 Utama 1RC", 
            url: "https://www.1utama.com.my/1rc/", 
            note: "On-site drop-off for plastic, glass, and packaging waste." 
          }
        ]
      },
      image: "/images/1.png", // White treatment tube as seen in Ancestral Set
    },
    {
      id: "ageless",
      name: "Ageless Tea Guarding Moisturizer with SPF",
      tagline: "A silken botanical shield, guarding your eternal radiance.",
      highlights: [
        "Hydrates & protects from daily stressors + UV",
        "For normal to dry, easily dehydrated skin",
        "Skin feels soft, calm, and resilient all day"
      ],
      size: "50 g / 1.69 oz",
      description: "A lightweight daily moisturizer formulated to hydrate and help protect the skin from environmental stressors and UV exposure with 6.2 SPF. Enriched with Thai-grown Assam tea, ceramides, and niacinamide, it helps support the skin barrier while improving overall skin appearance for a smoother, healthier-looking complexion.",
      active: ["Thai Assam tea extract", "Ceramides", "Niacinamide", "Titanium dioxide", "Octisalate"],
      benefits: [
        { ingredient: "Thai Assam tea extract", effect: "Fortifies skin defense against oxidative stress and urban pollution." },
        { ingredient: "Mineral SPF (Titanium Dioxide)", effect: "Reflects harmful UV rays to prevent premature photo-aging." },
        { ingredient: "Triple Ceramide Blend", effect: "Emulates natural skin lipids to repair the protective moisture seal." },
        { ingredient: "Niacinamide", effect: "Calms redness and promotes an even, luminous complexion." }
      ],
      ingredients: "Aqua, Ethylhexyl salicylate/ Octyl salicylate, C12-19 Alkyl benzoate, Cetearyl alcohol, Isononyl isononanoate, Glycerin, C15-19 Alkane, Titanium dioxide, Glyceryl stearate, PEG-100 Stearate, Diatomaceous earth, Coco-caprylate/ caprate, Mineral oil, Camellia sinesis var. assamica leaf extract, Disodium EDTA, Sodium polyacryloyldimethyl taurate, Hydrogenated polydecene, Trideceth-10, Panthenol, Sorbitol, Xanthan gum, Helianthus annuus seed oil, Alumina, Stearic acid, Macadamia integrifolia seed oil, Caprylyl glycol, Sodium stearoyl glutamate, Sodium hyaluronate, Tocopherol acetate, Niacinamide, Hexyldecanol, Pentylene glycol, Hydrogenated lecithin, Phytosterols, Ceramide NP, 1,2-Hexanediol, Phytosteryl/ octyldodecyl lauroyl glutamate, Ceramide AP, Ceramide EOP, Phenoxyethanol, Ethylhexylglycerin, Fragrance",
      warning: "For external use only. Avoid direct contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children.",
      directions: "Apply evenly to face and neck as the last step of your morning skincare routine, before sun exposure. Reapply as needed.",
      storage: "Store in a cool, dry place away from direct sunlight.",
      mfg: "18/04/2026",
      exp: "18/04/2028",
      pao: "12 M",
      dispose: {
        materials: [
          { part: "Body", material: "Glass" },
          { part: "Lid (with inner lining)", material: "PP" }
        ],
        prepare: ["Empty the jar completely", "Rinse lightly to remove residue", "Separate the lid from the glass"],
        sort: [
          { label: "Glass jar", result: "Glass recycling" },
          { label: "PP lid (with inner lining)", result: "General waste" }
        ],
        why: "Lids with inner lining are multi-material components, but simply separating them from the jar ensures they can still be effectively sorted and recycled.",
        dropOff: [
          { 
            name: "Tzu Chi Recycling Centres", 
            url: "https://www.tzuchi.my/en/join-us/recycling-centres", 
            note: "1,000+ centers across Malaysia for glass, plastic, and household recyclables." 
          },
          { 
            name: "Zero Waste Malaysia", 
            url: "https://www.zerowastemalaysia.org", 
            note: "Interactive map to find nearby drop-off points (glass / plastic / e-waste)." 
          },
          { 
            name: "iCycle Malaysia", 
            url: "https://www.icyclemalaysia.com", 
            note: "A network of recycling points for various materials, including plastic and glass." 
          }
        ]
      },
      image: "/images/2.png", // Dark lid glass jar as seen in Ancestral Set
    },
    {
      id: "daily",
      name: "Daily Tea Biphasic Hair Serum Spray",
      tagline: "Radiant, healthy hair with the weightless power of Chiang Rai Assam Tea.",
      highlights: [
        "Refreshes & soothes skin anytime, anywhere",
        "For sensitive, tired, or heat-exposed skin",
        "Instantly feels cool, balanced, and hydrated"
      ],
      size: "40 mL / 1.35 fl oz",
      description: "A lightweight biphasic hair serum spray designed to nourish, hydrate, and enhance the overall appearance of hair. Formulated with Thai-grown Assam tea extract, panthenol, and apricot kernel oil, it helps improve the look of dryness and dullness while supporting softness and shine. Enriched with conditioning agents and proteins, it leaves hair feeling smoother, more manageable, and healthy-looking without weighing it down.",
      active: ["Thai Assam tea extract", "Hydrolyzed wheat protein", "Panthenol"],
      benefits: [
        { ingredient: "Thai Assam tea extract", effect: "Protects hair cuticles from high-temperature and UV damage." },
        { ingredient: "Hydrolyzed Wheat Protein", effect: "Penetrates the hair shaft to strengthen and rebuild structure." },
        { ingredient: "Panthenol (Vitamin B5)", effect: "Deeply conditions to eliminate frizz and provide a mirror-like shine." },
        { ingredient: "Biphasic Suspension", effect: "Instant hydration and oil-based nourishment in one weightless spray." }
      ],
      ingredients: "Aqua, C12-15 Alkyl Benzoate, Isohexadecane, Parfum, Caprylic/capric triglyceride, Glycerin, Propanediol, Isopropyl Myristate, Isododecane, Prunus Armeniaca (Apricot) Kernel Oil, Panthenol, Butylene Glycol, Camellia Senesis var. assamica leaf extract, Camellia Senesis leaf extract, Hydrolyzed Wheat Protein, Tocopherol Acetate, Disodium EDTA, CI 19140, CI 16035, CI 42090, Citric Acid, Sodium Benzoate, Phenoxyethanol",
      warning: "For external use only. Avoid direct contact with eyes. Do not use on children under 3 years of age. Discontinue use if irritation occurs and seek medical advice. Keep out of reach of children.",
      directions: "Shake well before use. Hold the bottle approximately 10–15 cm away and spray evenly onto the desired area. Do not rinse.",
      storage: "Store in a cool, dry place away from direct sunlight.",
      mfg: "18/04/2026",
      exp: "18/04/2028",
      pao: "12 M",
      dispose: {
        materials: [
          { part: "Bottle", material: "Glass" },
          { part: "Spray Head", material: "PP" }
        ],
        prepare: ["Empty and rinse the bottle", "Remove spray head"],
        sort: [
          { label: "Glass bottle", result: "Glass recycling" },
          { label: "Spray head", result: "General waste" }
        ],
        why: "Spray heads contain mixed materials (plastic + metal spring), making them unsuitable for standard recycling",
        dropOff: [
          { 
            name: "Tzu Chi Recycling Centres", 
            url: "https://www.tzuchi.my/en/join-us/recycling-centres", 
            note: "1,000+ centers across Malaysia for glass, plastic, and household recyclables." 
          },
          { 
            name: "iCycle Malaysia", 
            url: "https://www.icyclemalaysia.com", 
            note: "A network of recycling points for various materials, including plastic and glass." 
          },
          { 
            name: "Zero Waste Malaysia", 
            url: "https://www.zerowastemalaysia.org", 
            note: "Interactive map to find nearby drop-off points (glass / plastic / e-waste)." 
          }
        ]
      },
      image: "/images/3.png" // Clear spray bottle with white head as seen in Ancestral Set
    }
  ];

  return (
    <div className="bg-secondary min-h-screen selection:bg-moss selection:text-secondary">
      {/* Decorative Lanna Border */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 pointer-events-none z-50"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-dark-green">OTEARÀ</div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest text-primary/60">
            <a href="#glow" className="hover:text-primary transition-colors">Benchmark</a>
            <a href="#ageless" className="hover:text-primary transition-colors">Skincare</a>
            <a href="#daily" className="hover:text-primary transition-colors">Haircare</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-moss/20 rounded-full blur-3xl pointer-events-none opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <div className="font-serif text-olive/80 text-lg md:text-xl mb-6 tracking-wide lanna-accent">
            Chiang Rai's Assam Tea: Unlocking a radiant glow for your every workday
          </div>
          <h1 className="text-5xl md:text-8xl mb-8 font-serif leading-none text-dark-green tracking-tight">
            The Essence of Northern <br />
            Thai Assam Tea
          </h1>
          <p className="text-lg md:text-xl text-primary/60 font-serif max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.2em]">
            Where Tea Heritage Nurtures Everlasting Beauty
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 border-t border-primary/5 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Muslim Friendly Feature */}
            <motion.div 
              className="flex-1 bg-white/40 backdrop-blur-sm border border-primary/10 rounded-[2rem] p-10 cursor-pointer overflow-hidden group"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedFeature(selectedFeature === 'muslim' ? null : 'muslim')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-olive flex items-center justify-center text-secondary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Discover more</span>
              </div>
              <h3 className="text-2xl font-serif mb-4">Muslim Friendly Formula</h3>
              <AnimatePresence>
                {selectedFeature === 'muslim' ? (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-sm leading-relaxed text-primary/70 italic"
                  >
                    Our commitment to Muslim-friendly beauty ensures that every ingredient is ethically sourced, free from forbidden alcohols, and contains no animal-derived substances. We prioritize spiritual peace of mind alongside botanical efficacy.
                  </motion.p>
                ) : (
                  <p className="text-sm text-primary/50">Ethically crafted for all, respecting heritage and values.</p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Silicone Free Feature */}
            <motion.div 
              className="flex-1 bg-white/40 backdrop-blur-sm border border-primary/10 rounded-[2rem] p-10 cursor-pointer overflow-hidden group"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedFeature(selectedFeature === 'silicone' ? null : 'silicone')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-moss flex items-center justify-center text-secondary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Discover more</span>
              </div>
              <h3 className="text-2xl font-serif mb-4">Silicone Free Clean</h3>
              <AnimatePresence>
                {selectedFeature === 'silicone' ? (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-sm leading-relaxed text-primary/70 italic"
                  >
                    We choose silicone-free compositions to respect your skin's natural rhythm. By removing synthetic silicones, we prevent pore-clogging buildup and environmental bioaccumulation, letting our potent tea antioxidants penetrate deeply.
                  </motion.p>
                ) : (
                  <p className="text-sm text-primary/50">Weightless skin respiration with zero synthetic buildup.</p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Eco-Circular Packaging Feature */}
            <motion.div 
              className="flex-1 bg-white/40 backdrop-blur-sm border border-primary/10 rounded-[2rem] p-10 cursor-pointer overflow-hidden group"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedFeature(selectedFeature === 'eco' ? null : 'eco')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-dark-green flex items-center justify-center text-secondary">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Discover more</span>
              </div>
              <h3 className="text-2xl font-serif mb-4">Eco-Circular Design</h3>
              <AnimatePresence>
                {selectedFeature === 'eco' ? (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-sm leading-relaxed text-primary/70 italic"
                  >
                    Our secondary packaging is crafted from agricultural waste bonded with the mycelium of Black Bhutanese Mushrooms (<i>Pleurotus ostreatus</i>)—a carbon-negative alternative to plastic. Each box is cushioned with dried Water Hyacinth (<i>Pontederia crassipes</i>), harvested locally to restore river clarity while providing 100% biodegradable protection.
                  </motion.p>
                ) : (
                  <p className="text-sm text-primary/50">Bio-grown packaging with zero-waste cushioning.</p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-dark-green mb-6">The OTEARÀ Essential Set</h2>
            <p className="text-moss uppercase tracking-[0.3em] text-xs font-bold font-sans">Natural Assam Tea Ritual for your daily radiance</p>
          </motion.div>
          
          <div className="w-full aspect-[21/9] rounded-[3rem] overflow-hidden bg-neutral-200 shadow-2xl relative group">
            {/* User uploaded image placeholder: OTEARA Ancestral High-Tea Set with green botanical box */}
            <img 
              src="/images/0.png" 
              alt="OTEARÀ Essential Set - White eye cream tube, clear hair serum spray, and dark-lidded facial jars in a luxury presentation" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark-green/20 flex items-end p-12">
              <div className="text-secondary text-left">
                <span className="text-[10px] uppercase tracking-widest block mb-2 opacity-80">Full Collection</span>
                <h3 className="text-3xl font-serif max-w-xl">Simple daily care with Thai Assam tea extract.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((p) => {
        const activeTab = activeTabs[p.id];
        
        return (
          <section key={p.id} id={p.id} className="product-section border-t border-primary/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center"
            >
              {/* Centered Image */}
              <div className="w-full max-w-2xl aspect-[16/10] overflow-hidden rounded-[2rem] bg-neutral-200 mb-12 shadow-2xl shadow-primary/5">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Tagline */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl mb-4 text-dark-green">{p.name}</h2>
                <p className="text-sm uppercase tracking-[0.4em] text-moss font-semibold mb-6">{p.tagline}</p>
                <div className="flex flex-col items-center gap-3">
                  {p.highlights?.map((h: string, i: number) => (
                    <div key={i} className="flex items-center text-dark-green">
                      <span className="text-base font-serif italic tracking-wide">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                <button 
                  onClick={() => setTabForProduct(p.id, "ingredients")}
                  className={`tab-btn font-sans ${activeTab === "ingredients" ? "tab-btn-active text-moss" : "text-primary/60"}`}
                >
                  Ingredients
                </button>
                <button 
                  onClick={() => setTabForProduct(p.id, "other")}
                  className={`tab-btn font-sans ${activeTab === "other" ? "tab-btn-active text-moss" : "text-primary/60"}`}
                >
                  Product Detail
                </button>
                <button 
                  onClick={() => setTabForProduct(p.id, "dispose")}
                  className={`tab-btn font-sans ${activeTab === "dispose" ? "tab-btn-active text-moss" : "text-primary/60"}`}
                >
                  How should I dispose of this?
                </button>
              </div>

              {/* Tab Content */}
              <div className="w-full max-w-3xl min-h-[500px] details-content">
                <AnimatePresence mode="wait">
                  {activeTab === "ingredients" && (
                    <motion.div
                      key="ingredients"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                          <span className="info-label">Active Ingredients</span>
                          <ul className="space-y-3 font-serif">
                            {p.active.map(a => (
                              <li key={a} className="text-xl flex items-center gap-3">
                                <Leaf className="w-4 h-4 text-moss" /> {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="info-label">Key Benefits</span>
                          <div className="space-y-4">
                            {p.benefits.map((b, i) => (
                              <div key={i} className="group">
                                <div className="text-sm font-semibold text-moss">{b.ingredient}</div>
                                <div className="text-xs opacity-70 italic">{b.effect}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-primary/5">
                        <div className="col-span-full">
                          <span className="info-label">Full Ingredients List</span>
                          <p className="text-xs leading-relaxed opacity-60 text-justify tracking-wide italic">
                            {p.ingredients}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "other" && (
                    <motion.div
                      key="other"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-12"
                    >
                      <div className="pb-8 border-b border-primary/5">
                        <span className="info-label italic">Description</span>
                        <p className="text-sm leading-relaxed text-primary/80 font-sans">{p.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                          <span className="info-label">Directions</span>
                          <p className="text-sm font-sans">{p.directions}</p>
                        </div>
                        <div>
                          <span className="info-label">Storage</span>
                          <p className="text-sm font-sans">{p.storage}</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 p-8 rounded-2xl">
                        <span className="info-label text-red-800">Cautions & Warnings</span>
                        <p className="text-sm font-sans text-primary/80">{p.warning}</p>
                      </div>

                      <div className="flex flex-wrap gap-12">
                        <div>
                          <span className="info-label">Batch Details</span>
                          <div className="flex gap-8 items-center text-sm font-sans">
                            <div>MFG: {p.mfg}</div>
                            <div>EXP: {p.exp}</div>
                            <div>PAO: {p.pao}</div>
                          </div>
                        </div>
                        <div>
                          <span className="info-label">Net Weight</span>
                          <span className="text-sm font-sans">{p.size}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "dispose" && (
                    <motion.div
                      key="dispose"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/40 p-8 rounded-2xl border border-primary/5">
                          <span className="info-label flex items-center gap-2 text-olive mb-4">
                            <Leaf className="w-3 h-3"/> Main Material
                          </span>
                          <div className="space-y-4 mb-8">
                            {(() => {
                              const uniqueMaterials = Array.from(new Set(p.dispose.materials.map((m: any) => m.material)));
                              if (uniqueMaterials.length === 1) {
                                return (
                                  <div className="p-5 bg-dark-green/5 rounded-2xl border border-moss/30 shadow-sm">
                                    <div className="text-xs uppercase tracking-[0.3em] text-moss mb-4 font-bold">{uniqueMaterials[0]} material</div>
                                    <div className="flex flex-wrap gap-2">
                                      {p.dispose.materials.map((m: any) => (
                                        <span key={m.part} className="text-sm font-serif text-dark-green bg-white/60 px-4 py-2 rounded-xl border border-moss/20">{m.part}</span>
                                      ))}
                                    </div>
                                  </div>
                                );
                              }
                              return (
                                <div className="grid grid-cols-1 gap-3">
                                  {uniqueMaterials.map((matType: any) => (
                                    <div key={matType} className="flex items-center gap-4 bg-white/40 p-4 rounded-2xl border border-moss/30 shadow-sm">
                                      <span className="text-[10px] bg-moss text-secondary px-3 py-1.5 rounded-full uppercase tracking-widest font-bold min-w-[80px] text-center border border-white/10 shadow-sm">{matType}</span>
                                      <span className="text-sm font-serif text-dark-green opacity-90">
                                        {p.dispose.materials.filter((m: any) => m.material === matType).map((m: any) => m.part).join(", ")}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              );
                            })()}
                          </div>
                          
                          <span className="info-label text-olive mb-4">How to Prepare</span>
                          <ul className="text-base space-y-3 font-sans opacity-80">
                            {p.dispose.prepare.map(item => (
                              <li key={item} className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 bg-olive rounded-full mt-2 shrink-0" /> 
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-10">
                          <div>
                            <span className="info-label flex items-center gap-2 text-moss mb-4">
                              <Recycle className="w-3 h-3"/> Sorting Guide
                            </span>
                            <div className="space-y-3">
                              {p.dispose.sort.map(item => (
                                <div key={item.label} className="flex justify-between items-center bg-secondary/30 p-4 rounded-xl border border-primary/5">
                                  <span className="text-sm font-semibold text-dark-green">{item.label}</span>
                                  <span className="text-[10px] bg-moss text-secondary px-3 py-1 rounded-full uppercase tracking-widest font-bold">{item.result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="info-label text-moss mb-4">Sustainability Commitment</span>
                            <p className="text-base opacity-80 italic leading-relaxed font-serif text-dark-green">"{p.dispose.why}"</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-primary/10 pt-10 flex flex-col gap-8">
                        <div className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold text-center md:text-left">Recommended Recycling Centers (Malaysia)</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {p.dispose.dropOff.map(center => (
                            <a 
                              key={center.name} 
                              href={center.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="group flex flex-col p-6 bg-dark-green text-secondary rounded-[2rem] hover:bg-moss transition-all border border-secondary/5 hover:border-accent/30 shadow-xl"
                            >
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-[11px] font-bold tracking-widest uppercase text-accent group-hover:text-secondary transition-colors">{center.name}</span>
                                <ExternalLink className="w-3 h-3 text-accent group-hover:rotate-45 transition-transform" />
                              </div>
                              <div className="text-xs opacity-70 italic leading-relaxed font-serif">
                                {center.note}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </section>
        );
      })}

      {/* Philosophy Section */}
      <section className="py-32 border-t border-primary/5 bg-secondary overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-16 h-1 bg-moss mx-auto mb-10"></div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-dark-green leading-tight">
              "Inspired by the strength of Northern Thai Assam tea, our formulas are made to celebrate the natural beauty in every woman."
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg opacity-60 leading-relaxed font-sans">
                At OTEARÀ, we combine powerful tea antioxidants with clean science to help your skin and hair stay healthy, fresh, and naturally glowing every day.
              </p>
              <div className="mt-10 font-serif text-moss tracking-[0.2em] uppercase text-sm">
                Designed to empower your radiance
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info Section (Lanna Essence) */}
      <section className="py-32 px-6 bg-dark-green text-secondary overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-20 text-center md:text-left"
           >
              <span className="info-label text-accent mb-4 block">OTEARÀ</span>
              <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight">Stay Radiant, All Day Long</h2>
           </motion.div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-secondary/10 border border-secondary/10 rounded-[3rem] overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 md:p-16 bg-dark-green hover:bg-secondary/[0.02] transition-colors duration-700 h-full"
              >
                 <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-12 font-bold font-sans">01 — The Challenge</span>
                 <h3 className="text-3xl font-serif mb-8 leading-tight">Endless Workdays</h3>
                 <p className="text-sm opacity-60 leading-relaxed font-sans">
                    Whether in a boardroom, a studio, or on an intensive long shift, your day is a marathon. Stress, sleepless nights, and city pollution take a visible toll—often manifesting as tired eyes, fatigued skin, and dull, weighed-down hair.
                 </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
                className="p-12 md:p-16 bg-dark-green hover:bg-secondary/[0.02] transition-colors duration-700 h-full"
              >
                 <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-12 font-bold font-sans">02 — The Problem</span>
                 <h3 className="text-3xl font-serif mb-8 leading-tight">Daily Damage</h3>
                 <p className="text-sm opacity-60 leading-relaxed font-sans">
                    Hours of screen light and dry office air drain moisture from your eyes and skin, while city smog and UV rays cling to your hair. By the afternoon, eyes often look dark, skin loses its natural bounce, and hair feels heavy and lifeless from the day's pressure.
                 </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.2 }}
                className="p-12 md:p-16 bg-dark-green hover:bg-secondary/[0.02] transition-colors duration-700 h-full"
              >
                 <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-12 font-bold font-sans">03 — The Solution</span>
                 <h3 className="text-3xl font-serif mb-8 leading-tight">Ready for Anything</h3>
                 <p className="text-sm opacity-60 leading-relaxed font-sans">
                    OTEARÀ is built for your pace—your constant companion in every situation. Leveraging Northern Thai Assam tea, our formulas offer a fast-acting ritual to revive dark circles, shield skin, and refresh hair from the first meeting to late-night events, ensuring you stay effortlessly radiant all day long.
                 </p>
              </motion.div>
           </div>


        </div>
      </section>

      {/* Real Footer */}
      <footer className="bg-secondary text-primary py-24 px-6 border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div>
              <div className="font-serif text-3xl font-bold mb-6 text-dark-green">OTEARÀ</div>
            </div>
            <div>
              <h4 className="info-label mb-6">Manufactured by</h4>
              <p className="text-sm opacity-80 font-serif leading-relaxed">
                tNorthenré Co., Ltd.<br />
                333 Moo 1, Tha Sut,<br />
                Mueang Chiang Rai, Chiang Rai 57100<br />
                Thailand
              </p>
            </div>
            <div>
              <h4 className="info-label mb-6">Scientific Standard</h4>
              <p className="text-xs opacity-60">
                Product Notification No.: xx-x-xxxxx-x-xxxx<br />
                © 2026 OTEARÀ.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.3em] opacity-40 leading-loose">
                Created for mini project<br />
                School of Cosmetic Science<br />
                Mae Fah Luang University
              </p>
              <div className="mt-4 flex justify-end gap-3 grayscale opacity-30">
                 <ShieldCheck className="w-5 h-5" />
                 <Recycle className="w-5 h-5" />
                 <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
