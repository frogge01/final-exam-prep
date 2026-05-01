// Global destructuring — compatible with browser Babel (no module imports)
const { useMemo, useState } = React;

const Menu = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const X = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const BookOpen = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const Layers = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>;
const ClipboardList = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
const ChevronDown = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>;
const ArrowLeft = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const ArrowRight = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const CheckSquare = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const Square = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>;
const BarChart3 = (p) => <svg {...p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;

// FileText icon as inline component (not available in CDN lucide global)
const FileText = ({ className }) =>
  React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg", className,
    viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: "2",
    strokeLinecap: "round", strokeLinejoin: "round"
  },
    React.createElement('path', { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    React.createElement('polyline', { points: "14 2 14 8 20 8" }),
    React.createElement('line', { x1: "16", y1: "13", x2: "8", y2: "13" }),
    React.createElement('line', { x1: "16", y1: "17", x2: "8", y2: "17" }),
    React.createElement('polyline', { points: "10 9 9 9 8 9" })
  );

// Button component (simple wrapper — no shadcn needed)
const Button = ({ children, onClick, className = '', variant, size, 'aria-label': ariaLabel }) => {
  let base = 'inline-flex items-center justify-center font-medium transition cursor-pointer border-0 bg-transparent';
  if (variant === 'ghost') base += ' hover:bg-slate-100 rounded-xl p-2';
  else if (size === 'sm') base += ' text-xs px-3 py-1.5 rounded-lg';
  else base += ' px-4 py-2 rounded-lg';
  return React.createElement('button', { onClick, className: `${base} ${className}`, 'aria-label': ariaLabel }, children);
};

// Card components (simple wrappers — no shadcn needed)
const Card = ({ children, className = '' }) =>
  React.createElement('div', { className: `bg-white rounded-3xl border border-slate-200 shadow-sm ${className}` }, children);

const CardContent = ({ children, className = '' }) =>
  React.createElement('div', { className }, children);

// Flashcard data organized by lecture - MEGA PACK (485 flashcards)
const flashcardData = {
  2: [
    { q: "What are lipid rafts?", a: "Specialized membrane microdomains 10-200nm enriched in cholesterol and sphingolipids, liquid-ordered (Lo) phase, more organized than surrounding liquid-disordered (Ld) membrane" },
    { q: "What are the three main components of lipid rafts?", a: "(1) Cholesterol - creates tight packing (2) Sphingolipids - sphingomyelin, gangliosides (3) Proteins - caveolin, flotillin, GPI-anchored proteins" },
    { q: "What is the liquid-ordered (Lo) phase?", a: "Tightly packed membrane state in rafts due to cholesterol and saturated lipids, intermediate between gel and liquid-disordered phases" },
    { q: "What is caveolin-1?", a: "21 kDa integral membrane protein, scaffolding protein for caveolae formation, hairpin structure, binds cholesterol, oligomerizes, marker of lipid rafts" },
    { q: "What are caveolae?", a: "Flask-shaped plasma membrane invaginations 50-100 nm, formed by caveolin oligomers, involved in endocytosis, signaling, mechanosensing" },
    { q: "What is flotillin?", a: "Raft marker protein, forms microdomains, involved in signal transduction and endocytosis, found in non-caveolar rafts" },
    { q: "What are GPI-anchored proteins?", a: "Proteins attached to membrane via glycosylphosphatidylinositol anchor, partition into rafts, lack transmembrane domain, found on outer leaflet" },
    { q: "What are gangliosides?", a: "Glycosphingolipids with sialic acid residues, concentrated in rafts (GM1, GM2, GM3), involved in cell recognition and signaling" },
    { q: "What is GM1 ganglioside specifically?", a: "Monosialotetrahexosylganglioside, major ganglioside in brain rafts, seeds Aβ aggregation in Alzheimer\'s, binds cholera toxin B (detection method)" },
    { q: "What is sphingomyelin?", a: "Phosphosphingolipid with ceramide backbone + phosphocholine head, major component of rafts, interacts with cholesterol" },
    { q: "How does cholesterol affect raft formation?", a: "Increases raft formation and stability, fills gaps between sphingolipids, creates tight packing, reduces membrane fluidity in rafts" },
    { q: "What happens with cholesterol depletion?", a: "Disrupts rafts, increases membrane fluidity, disperses raft proteins, affects signaling, can reduce Aβ production" },
    { q: "What is DRM (detergent-resistant membrane)?", a: "Biochemical isolation method - cold non-ionic detergents (Triton X-100) solubilize bulk membrane but not rafts, rafts float on sucrose gradient" },
    { q: "How does cholera toxin B detect rafts?", a: "Binds specifically to GM1 ganglioside in rafts, can be fluorescently labeled to visualize raft localization by microscopy" },
    { q: "What is filipin staining?", a: "Fluorescent antibiotic that binds cholesterol, used to detect cholesterol-rich raft domains by fluorescence microscopy" },
    { q: "What is methyl-β-cyclodextrin (MβCD)?", a: "Extracts cholesterol from membranes, depletes cholesterol, disrupts rafts, used experimentally to study raft-dependent processes" },
    { q: "What is APP (Amyloid Precursor Protein)?", a: "Type I transmembrane protein, substrate for secretases, processed to produce Aβ (bad pathway) or sAPPα (good pathway)" },
    { q: "Where does amyloidogenic APP processing occur?", a: "IN lipid rafts - BACE1 (β-secretase) and γ-secretase are enriched in rafts, produces Aβ peptide" },
    { q: "What is BACE1?", a: "β-site APP cleaving enzyme 1, cuts APP at β-site → sAPPβ + C99 fragment, first step of amyloidogenic pathway, located in rafts" },
    { q: "What is γ-secretase?", a: "Protein complex (presenilin 1/2, nicastrin, APH-1, PEN-2), cuts C99 fragment → Aβ (40 or 42 residues) + AICD, located in rafts" },
    { q: "Where does non-amyloidogenic APP processing occur?", a: "OUTSIDE rafts - α-secretase (ADAM10) cuts APP in middle of Aβ sequence → prevents Aβ formation → produces sAPPα (neuroprotective)" },
    { q: "Why does α-secretase prevent Aβ formation?", a: "Cuts within Aβ sequence (between residues 16-17) → cannot form full-length Aβ peptide, mutually exclusive with β-cleavage" },
    { q: "How does cholesterol affect Aβ production?", a: "↑ Cholesterol → more rafts → more BACE1/γ-secretase activity → MORE Aβ. ↓ Cholesterol → fewer rafts → less Aβ" },
    { q: "What is GM1\'s role in Alzheimer\'s?", a: "Seeds Aβ aggregation in rafts, GM1-Aβ complex acts as nucleus for fibril formation → accelerates amyloid plaque formation" },
    { q: "What are statins?", a: "HMG-CoA reductase inhibitors, lower cholesterol synthesis, may reduce rafts → reduce Aβ production → potentially protective in AD" },
    { q: "What is ceramide\'s role in Alzheimer\'s?", a: "Sphingolipid enriched in rafts, elevated in AD brains, stimulates BACE1 activity → increases Aβ production" },
    { q: "How are rafts involved in cardiovascular disease?", a: "Cholesterol accumulation in rafts → foam cell formation, atherosclerotic plaques, raft-mediated LDL uptake" },
    { q: "How are rafts involved in diabetes?", a: "Insulin receptor in rafts, raft disruption impairs insulin signaling, chronic hyperglycemia alters raft composition → insulin resistance" },
    { q: "What is caveolin-1\'s role in cancer?", a: "Often downregulated in cancers, acts as tumor suppressor, loss → uncontrolled growth factor signaling (EGFR, TrkB)" },
    { q: "How are rafts involved in apoptosis signaling?", a: "Death receptors (Fas, TRAIL) cluster in rafts upon ligand binding → DISC formation → caspase activation, raft integrity required" },
    { q: "What is PIP2 and where is it located?", a: "Phosphatidylinositol 4,5-bisphosphate, concentrated in rafts, PLC cleaves it → IP3 (Ca²⁺ release) + DAG (activates PKC)" },
    { q: "How does T cell receptor signaling use rafts?", a: "TCR, co-receptors (CD4/CD8), Lck kinase cluster in rafts upon antigen recognition → signaling platform formation → T cell activation" },
    { q: "Why are rafts important for signaling?", a: "Concentrate signaling molecules (receptors, kinases, adaptors) in small domains → rapid, efficient signal transduction, physical platform" },
    { q: "What is raft heterogeneity?", a: "Different raft types with different protein/lipid composition, caveolar vs non-caveolar rafts, dynamic, context-dependent" },
    { q: "What are raft dynamics?", a: "Rafts are dynamic not static, constant formation/dissolution, lifetime milliseconds to seconds, stabilized by protein clustering" },
    { q: "What did super-resolution microscopy reveal about rafts?", a: "Rafts are nanoscale domains (10-200 nm), smaller than diffraction limit, highly dynamic, challenged classical model of large stable rafts" },
    { q: "Omega-3 vs omega-6 fatty acids in rafts?", a: "Omega-6 (arachidonic acid) → pro-inflammatory (prostaglandins, leukotrienes). Omega-3 (EPA/DHA) → anti-inflammatory (resolvins, protectins)" },
    { q: "What is the arachidonic acid cascade?", a: "AA released from phospholipids by PLA₂ → COX pathway (prostaglandins) OR LOX pathway (leukotrienes) OR CYP450 pathway (EETs), pro-inflammatory" },
    { q: "COX-1 vs COX-2?", a: "COX-1: constitutive, housekeeping. COX-2: inducible, inflammation. Both convert AA → prostaglandins. NSAIDs/aspirin inhibit both" },
    { q: "What are therapeutic targets for rafts?", a: "Cholesterol reduction (statins), ceramide inhibitors, raft-disrupting agents (MβCD experimentally), goal: reduce pathological raft processes" },
    { q: "What is ganglioside GM2?", a: "Disialoganglioside, accumulates in Tay-Sachs disease (hexosaminidase A deficiency), causes neurodegeneration" },
    { q: "What is ganglioside GM3?", a: "Simplest ganglioside, modulates insulin signaling, elevated in obesity/diabetes → contributes to insulin resistance" },
    { q: "Typical raft lipid composition?", a: "~50% cholesterol, ~30% sphingolipids, ~20% phospholipids (mainly saturated), varies by cell type" },
    { q: "Why are saturated lipids preferentially in rafts?", a: "Straight chains pack tightly with cholesterol → ordered phase. Unsaturated lipids (kinked due to double bonds) prefer Ld phase" },
    { q: "What is cholesterol\'s specific role in raft structure?", a: "Fills gaps between sphingolipids, rigidifies membrane, promotes Lo phase, essential for raft formation and stability" },
  ],
  3: [
    { q: "What is HV1/VSOP full name?", a: "Hydrogen Voltage-gated channel 1 / Voltage Sensor Only Protein, proton-selective voltage-gated channel" },
    { q: "What is HV1\'s unique structural feature?", a: "Has voltage-sensing domain (VSD) but NO pore domain - the VSD itself IS the pore, unique among voltage-gated channels" },
    { q: "What are HV1\'s gating mechanisms?", a: "(1) Depolarization (voltage-dependent) AND (2) ΔpH (pH gradient across membrane), dual gating mechanism" },
    { q: "Which cells express HV1?", a: "Phagocytes (neutrophils, macrophages, eosinophils), microglia, B lymphocytes, sperm, airway epithelium, osteoclasts" },
    { q: "What is HV1\'s protein structure?", a: "4 transmembrane segments (S1-S4), S4 = voltage sensor with positively charged arginines, C-terminal coiled-coil for dimerization, ~273 amino acids" },
    { q: "What is NADPH oxidase (NOX)?", a: "Enzyme complex producing superoxide (O₂⁻) from O₂ using NADPH, responsible for respiratory burst in phagocytes, 7 isoforms (NOX1-5, DUOX1-2)" },
    { q: "What are NOX2 components?", a: "Membrane: gp91phox (NOX2 catalytic subunit), p22phox. Cytosolic: p47phox, p67phox, p40phox, Rac2. Assembly upon activation" },
    { q: "Why is HV1-NOX coupling necessary?", a: "NOX pumps electrons OUT → depolarization + cytoplasmic acidification. HV1 extrudes H⁺ → compensates charge and pH → sustains NOX activity" },
    { q: "What happens without HV1 during oxidase burst?", a: "Cytoplasm acidifies, membrane depolarizes → NOX activity limited, reduced ROS production, impaired pathogen killing" },
    { q: "What is the respiratory burst?", a: "Massive O₂⁻ production by activated NOX in phagocytes → O₂⁻ + H⁺ → H₂O₂ → HOCl (bleach) → kills bacteria" },
    { q: "What are M1 microglia characteristics?", a: "Pro-inflammatory, activated by LPS/IFNγ, produce TNFα/IL-1β/iNOS/NO, HIGH ROS via NOX, HIGH HV1 expression, cause tissue damage" },
    { q: "What are M2 microglia characteristics?", a: "Anti-inflammatory, activated by IL-4/IL-13, produce IL-10/TGFβ/Arginase-1, phagocytose debris, LOWER HV1, promote tissue repair/neuroprotection" },
    { q: "How does HV1 regulate M1 vs M2 balance?", a: "M1: HIGH HV1 → sustained ROS production → inflammation/damage. M2: LOWER HV1 → less ROS → repair. HV1 acts as M1/M2 switch" },
    { q: "What is the stroke paradox with HV1?", a: "HV1⁻/⁻ mice: LESS stroke damage (↓ microglial ROS = protective) BUT MORE obesity (metabolic dysregulation = harmful). Context-dependent effects" },
    { q: "What is HV1\'s role in adipocytes?", a: "Regulates insulin signaling, metabolic homeostasis, NOX-derived ROS as signaling molecules. HV1⁻/⁻ → obesity, insulin resistance" },
    { q: "How does HV1 knockout cause obesity?", a: "Loss of HV1 → impaired insulin-stimulated glucose uptake in adipocytes, metabolic imbalance, dysregulated energy homeostasis → weight gain" },
    { q: "Why are HV1\'s effects paradoxical?", a: "Tissue-dependent: Microglia (HV1→ROS→damage, knockout good). Adipocytes (HV1→metabolic regulation, knockout bad). Pleiotropic context-specific effects" },
    { q: "Why is HV1 upregulated in cancer?", a: "Tumor cells use glycolysis → lactic acid → H⁺ buildup. HV1 extrudes H⁺ → maintains intracellular pH → avoids acidosis → survival/proliferation" },
    { q: "What is the Warburg effect?", a: "Cancer cells prefer glycolysis even with O₂ present (aerobic glycolysis) → lactate + H⁺ production. HV1 critical for pH homeostasis" },
    { q: "How does HV1 affect cancer metastasis?", a: "Involved in invadopodia formation, extracellular matrix degradation, cell migration. HV1 activity promotes invasiveness" },
    { q: "Is HV1 a cancer therapeutic target?", a: "Yes - HV1 inhibitors could acidify cancer cells → impair metabolism/survival. Under investigation, need specific selective blockers" },
    { q: "What is HV1\'s role in B lymphocytes?", a: "Involved in B cell receptor signaling and antibody production. HV1⁻/⁻ mice have impaired humoral immunity, reduced antibody responses" },
    { q: "What is HV1\'s role in sperm?", a: "Required for sperm capacitation, motility, acrosome reaction. Regulates flagellar pH for proper swimming behavior. HV1⁻/⁻ males are subfertile" },
    { q: "What is HV1\'s role in airway epithelium?", a: "Involved in airway surface liquid pH regulation, mucus properties. May play role in cystic fibrosis and asthma pathophysiology" },
    { q: "What is Zn²⁺\'s effect on HV1?", a: "Zinc blocks HV1 channel (IC50 ~10μM), acts as non-specific inhibitor, used experimentally but not therapeutically specific" },
    { q: "What are HV1 pharmacology challenges?", a: "Few specific inhibitors/activators available. Guanidine derivatives under development. Lack of good pharmacological tools limits research and therapy" },
    { q: "What is HV1\'s proton selectivity mechanism?", a: "No traditional selectivity filter like K⁺ channels. H⁺ move through VSD via water wire/chains (Grotthuss mechanism), electrostatic exclusion of other ions" },
    { q: "Does HV1 dimerize?", a: "Yes - forms dimers via C-terminal coiled-coil domain, each subunit is functional channel, cooperative gating between subunits" },
    { q: "How is HV1 involved in ischemia-reperfusion injury?", a: "ROS burst during reperfusion from neutrophils/microglia. HV1 → ROS → tissue damage. HV1 inhibition potentially protective" },
    { q: "How is HV1 involved in neurodegeneration?", a: "Microglial HV1 → chronic ROS production → neuroinflammation in AD, PD, MS. Potential therapeutic target to reduce inflammation" },
    { q: "What is HV1\'s evolutionary origin?", a: "Ancient channel, found in marine organisms (dinoflagellates), conserved VSD structure, may have evolved from voltage-gated K⁺ channels" },
    { q: "How does HV1 differ structurally from other voltage-gated channels?", a: "Nav, Kv, Cav channels: VSD + separate pore domain. HV1: VSD ONLY (no separate pore). Selectivity mechanism different (electrostatic vs filter)" },
    { q: "What is HV1\'s current-voltage relationship?", a: "Outward rectifying, activated by depolarization, reversal potential shifts with pH gradient according to Nernst equation for H⁺" },
    { q: "What diseases involve HV1?", a: "Chronic granulomatous disease (NOX defects affecting HV1 function), neuroinflammation, cancer, obesity/metabolic syndrome, male infertility" },
    { q: "What is HV1\'s gene name and location?", a: "HVCN1 gene (human), located on chromosome 12, highly conserved across vertebrate species" },
  ],
  4: [
    { q: "What is the nuclear lamina?", a: "Protein meshwork under inner nuclear membrane, made of A-type lamins (lamin A, C) and B-type lamins, provides structural support, organizes chromatin" },
    { q: "What are A-type lamins?", a: "Lamin A and lamin C, encoded by LMNA gene, alternative splicing, expressed in differentiated cells, mutations cause laminopathies" },
    { q: "What are B-type lamins?", a: "Lamin B1 and B2, encoded by separate genes (LMNB1, LMNB2), expressed in all cells, essential for cell viability" },
    { q: "What are the 5 steps of lamin A processing?", a: "(1) Farnesylation at CAAX motif (2) Cleavage by RCE1/ZMPSTE24 (removes AAX) (3) Methylation of farnesyl-cysteine (4) Second cleavage by ZMPSTE24 (removes 15 aa including farnesyl) (5) Mature lamin A" },
    { q: "What is progerin?", a: "Mutant lamin A that lacks ZMPSTE24 cleavage site, remains permanently farnesylated, accumulates in nuclear envelope, causes HGPS (Hutchinson-Gilford Progeria Syndrome)" },
    { q: "What mutation causes HGPS?", a: "LMNA C1824T (G608G) - silent mutation that creates cryptic splice site → 50 aa deletion → progerin (lacks ZMPSTE24 site)" },
    { q: "What are HGPS symptoms?", a: "Premature aging, growth retardation, loss of subcutaneous fat, cardiovascular disease, death by ~13 years, nuclear blebbing in cells" },
    { q: "What is the therapeutic approach for HGPS?", a: "Farnesyltransferase inhibitors (FTIs) block farnesylation of progerin → reduces toxicity, improves some symptoms and lifespan" },
    { q: "What is lamin C?", a: "Alternative splice product of LMNA gene, same as lamin A but lacks C-terminal 90 aa including CAAX motif, NOT farnesylated" },
    { q: "What are laminopathies?", a: "Diseases caused by LMNA mutations - HGPS (progeria), EDMD (Emery-Dreifuss muscular dystrophy), dilated cardiomyopathy, lipodystrophy" },
    { q: "What is the CAAX motif?", a: "C = cysteine, A = aliphatic amino acid, X = any amino acid. Signal for farnesylation (or geranylgeranylation)" },
    { q: "What is farnesyltransferase?", a: "Enzyme that adds 15-carbon farnesyl group to cysteine in CAAX motif, makes proteins more hydrophobic for membrane association" },
    { q: "What is ZMPSTE24?", a: "Zinc metalloprotease that cleaves prelamin A twice - removes AAX after farnesylation, then removes C-terminal 15 aa including farnesyl group" },
    { q: "What is RCE1?", a: "Ras-converting enzyme 1, endoprotease that cleaves AAX from farnesylated CAAX proteins (can partially substitute for ZMPSTE24\'s first cleavage)" },
    { q: "What are nuclear lamina functions?", a: "(1) Structural support for nucleus (2) Chromatin organization (3) Transcription regulation (4) DNA replication and repair (5) Nuclear pore complex anchoring" },
    { q: "What is chromatin?", a: "DNA + histone proteins + non-histone proteins, organized into nucleosomes, exists as euchromatin (open, active) or heterochromatin (closed, silent)" },
    { q: "What is a nucleosome?", a: "~147 bp DNA wrapped 1.65 turns around histone octamer (2 copies each of H2A, H2B, H3, H4), basic unit of chromatin" },
    { q: "What is euchromatin?", a: "Loosely packed chromatin, transcriptionally active, accessible to transcription factors, light staining" },
    { q: "What is heterochromatin?", a: "Tightly packed chromatin, transcriptionally silent, inaccessible, dark staining, facultative (reversible) or constitutive (permanent)" },
    { q: "What is epigenetics?", a: "Heritable changes in gene expression WITHOUT changes in DNA sequence, includes DNA methylation and histone modifications" },
    { q: "What is DNA methylation?", a: "Addition of methyl group (CH₃) to cytosine bases, mainly at CpG dinucleotides, generally represses gene expression" },
    { q: "What are DNMTs?", a: "DNA methyltransferases - enzymes that add methyl groups to DNA. DNMT1 (maintenance methylation), DNMT3A/3B (de novo methylation)" },
    { q: "What is DNMT1\'s function?", a: "Maintenance methyltransferase, copies methylation pattern to newly synthesized DNA strand during replication, preserves epigenetic memory" },
    { q: "What are DNMT3A and DNMT3B?", a: "De novo methyltransferases, establish NEW methylation patterns, important in development and differentiation" },
    { q: "What are TET enzymes?", a: "Ten-Eleven Translocation enzymes (TET1, TET2, TET3), oxidize 5-methylcytosine (5mC) → 5-hydroxymethylcytosine (5hmC) → demethylation" },
    { q: "What is 5-methylcytosine (5mC)?", a: "Methylated form of cytosine, \"fifth base\" of DNA, repressive mark, can be oxidized by TET enzymes for demethylation" },
    { q: "What is 5-hydroxymethylcytosine (5hmC)?", a: "Oxidation product of 5mC by TET enzymes, intermediate in demethylation pathway, may have independent regulatory function" },
    { q: "What are histone modifications?", a: "Post-translational modifications of histone proteins (acetylation, methylation, phosphorylation, ubiquitination) that regulate chromatin state" },
    { q: "What is histone acetylation?", a: "Addition of acetyl groups to lysine residues on histones, neutralizes positive charge → DNA loosens → ACTIVE transcription" },
    { q: "What are HATs?", a: "Histone acetyltransferases, enzymes that add acetyl groups to histones, promote transcription activation" },
    { q: "What are HDACs?", a: "Histone deacetylases, enzymes that remove acetyl groups from histones, promote transcription repression, therapeutic targets in cancer" },
    { q: "What is histone methylation?", a: "Addition of methyl groups to lysine or arginine residues, can be activating OR repressive depending on which residue is modified" },
    { q: "What is H3K4me3?", a: "Trimethylation of histone H3 lysine 4, ACTIVE mark associated with gene promoters and transcriptional activation" },
    { q: "What is H3K27me3?", a: "Trimethylation of histone H3 lysine 27, REPRESSIVE mark deposited by PRC2 (Polycomb Repressive Complex 2), silences genes" },
    { q: "What is H3K9me3?", a: "Trimethylation of histone H3 lysine 9, REPRESSIVE mark associated with heterochromatin formation and gene silencing" },
    { q: "What is PRC2?", a: "Polycomb Repressive Complex 2, contains EZH2 (methyltransferase), deposits H3K27me3 repressive mark, silences developmental genes" },
    { q: "What are HDAC inhibitors?", a: "Drugs that block histone deacetylases (e.g., vorinostat, romidepsin), used in cancer therapy, promote acetylation → gene activation → apoptosis" },
    { q: "What is trichostatin A?", a: "HDAC inhibitor, experimental tool and potential therapeutic, promotes histone acetylation, reactivates silenced tumor suppressor genes" },
    { q: "What is the histone code hypothesis?", a: "Specific combinations of histone modifications create a \"code\" that determines chromatin state and gene expression patterns" },
    { q: "What is chromatin remodeling?", a: "ATP-dependent repositioning of nucleosomes by chromatin remodeling complexes (SWI/SNF, ISWI, CHD), regulates DNA accessibility" },
  ],
  5: [
    { q: "What are the three types of cytoskeletal filaments?", a: "(1) Microtubules (tubulin, 25nm diameter, largest) (2) Actin filaments (7nm, smallest) (3) Intermediate filaments (10nm, includes lamins, keratins, vimentin)" },
    { q: "What are microtubules made of?", a: "α-tubulin and β-tubulin heterodimers polymerized into hollow tube (13 protofilaments), dynamic, plus end (fast-growing) and minus end" },
    { q: "What is microtubule polarity?", a: "Plus end (+): fast-growing, at cell periphery. Minus end (-): slow-growing, at MTOC/centrosome. Determines motor protein direction" },
    { q: "What is the MTOC?", a: "Microtubule organizing center (centrosome), contains two centrioles, γ-tubulin ring complexes nucleate microtubules, minus ends anchored here" },
    { q: "What is dynamic instability?", a: "Microtubules rapidly switch between growth and shrinkage phases, catastrophe (growth→shrinkage) and rescue (shrinkage→growth), regulated by GTP/GDP" },
    { q: "What is the GTP cap?", a: "GTP-tubulin at plus end stabilizes microtubule, loss of GTP cap → GDP-tubulin exposed → catastrophe → rapid depolymerization" },
    { q: "What are MAPs?", a: "Microtubule-associated proteins, stabilize microtubules (tau, MAP2, MAP4), regulate dynamics, cross-link to other structures" },
    { q: "What is tau protein?", a: "Microtubule-associated protein abundant in axons, stabilizes microtubules, hyperphosphorylated in Alzheimer\'s → detaches → NFTs (neurofibrillary tangles)" },
    { q: "What happens with hyperphosphorylated tau?", a: "Loses microtubule-binding ability → microtubules destabilize → impaired axonal transport → tau aggregates into NFTs → neuronal dysfunction/death" },
    { q: "What are neurofibrillary tangles (NFTs)?", a: "Intracellular aggregates of hyperphosphorylated tau in neurons, hallmark of Alzheimer\'s disease along with amyloid plaques" },
    { q: "What kinases hyperphosphorylate tau?", a: "GSK-3β (glycogen synthase kinase-3β), CDK5 (cyclin-dependent kinase 5), others. Insulin normally inhibits GSK-3β" },
    { q: "What is kinesin?", a: "Plus end-directed motor protein, walks toward cell periphery (ANTEROGRADE transport), uses ATP hydrolysis, cargo adapter proteins" },
    { q: "What is dynein?", a: "Minus end-directed motor protein, walks toward cell center/nucleus (RETROGRADE transport), largest motor protein, requires dynactin complex" },
    { q: "What is dynactin?", a: "Dynein activator complex, required for most dynein functions, links dynein to cargo, enhances processivity" },
    { q: "What is axonal transport?", a: "Movement of vesicles, organelles, proteins along axon microtubules. Anterograde (kinesin, cell body→synapse). Retrograde (dynein, synapse→cell body)" },
    { q: "What happens with impaired axonal transport?", a: "Neurodegenerative diseases (AD, ALS, Huntington\'s), synaptic dysfunction, accumulation of proteins/organelles, neuronal death" },
    { q: "What is actin (F-actin)?", a: "Filamentous actin, polymer of G-actin monomers, double helix structure, polar (plus/barbed end fast, minus/pointed end slow), dynamic" },
    { q: "What is G-actin?", a: "Globular actin monomer, binds ATP/ADP, polymerizes into F-actin filaments, concentrated at cell cortex and leading edge" },
    { q: "What is actin treadmilling?", a: "Steady-state where actin adds at plus end and dissociates at minus end at equal rates → net movement without length change" },
    { q: "What are the 4 steps of cell migration?", a: "(1) Protrusion (lamellipodia/filopodia extend) (2) Adhesion (focal adhesions form) (3) Contraction (actomyosin pulls) (4) De-adhesion (rear releases)" },
    { q: "What are lamellipodia?", a: "Broad, flat actin-rich protrusions at leading edge, sheet-like, driven by Rac GTPase, contain branched actin network" },
    { q: "What are filopodia?", a: "Thin, finger-like actin protrusions, exploratory, driven by Cdc42 GTPase, contain parallel actin bundles, sense environment" },
    { q: "What are focal adhesions?", a: "Integrin-based adhesion complexes linking ECM to actin cytoskeleton, contain talin, vinculin, paxillin, FAK, transmit force" },
    { q: "What are integrins?", a: "Transmembrane receptors that bind ECM proteins (fibronectin, collagen, laminin), heterodimers (α and β subunits), bidirectional signaling" },
    { q: "What are RhoGTPases?", a: "Small GTP-binding proteins regulating cytoskeleton: Rac (lamellipodia), Cdc42 (filopodia), RhoA (stress fibers, contraction)" },
    { q: "What does Rac do?", a: "Promotes lamellipodia formation, activates WAVE/Arp2/3 → branched actin polymerization, drives cell spreading and migration" },
    { q: "What does Cdc42 do?", a: "Promotes filopodia formation, activates WASP/N-WASP → actin polymerization, establishes cell polarity, directional sensing" },
    { q: "What does RhoA do?", a: "Promotes stress fiber formation and actomyosin contraction, activates ROCK → myosin II phosphorylation → contractility" },
    { q: "What is myosin II?", a: "Motor protein that binds actin, generates contractile force, non-processive, forms bipolar filaments, required for cytokinesis and cell contraction" },
    { q: "What is the Arp2/3 complex?", a: "Actin-related protein 2/3 complex, nucleates branched actin networks, creates dendritic arrays in lamellipodia, activated by WAVE/WASP" },
    { q: "What are intermediate filaments?", a: "Cytoskeletal filaments (10nm), rope-like structure, tissue-specific (keratin, vimentin, desmin, neurofilaments, lamins), mechanical strength" },
    { q: "What are keratins?", a: "Intermediate filament proteins in epithelial cells, type I (acidic) and type II (basic) form heterodimers, mutations cause blistering diseases" },
    { q: "What is vimentin?", a: "Intermediate filament protein in mesenchymal cells (fibroblasts, endothelial), marker of epithelial-mesenchymal transition (EMT) in cancer" },
    { q: "What are neurofilaments?", a: "Intermediate filaments in neurons (NF-L, NF-M, NF-H), provide structural support in axons, regulate axon diameter" },
    { q: "What is EMT (epithelial-mesenchymal transition)?", a: "Loss of epithelial characteristics, gain of mesenchymal properties, ↓ E-cadherin, ↑ vimentin, promotes cancer metastasis" },
  ],
  6: [
    { q: "What are lysosomes?", a: "Membrane-bound organelles, pH ~4.5-5.0, contain ~60 acid hydrolases, degrade macromolecules, single membrane, merge with endosomes/autophagosomes" },
    { q: "What is lysosomal pH?", a: "~4.5-5.0 (acidic), maintained by V-ATPase proton pump, optimal for acid hydrolase activity" },
    { q: "What is V-ATPase?", a: "Vacuolar H⁺-ATPase, proton pump in lysosomal membrane, uses ATP to pump H⁺ into lumen, acidifies lysosome" },
    { q: "What are acid hydrolases?", a: "Enzymes that function at acidic pH (~5), includes proteases, lipases, nucleases, glycosidases, ~60 different enzymes in lysosomes" },
    { q: "How are lysosomal enzymes targeted?", a: "Mannose-6-phosphate (M6P) tag added in Golgi → M6P receptor binds → vesicle to lysosome, receptor recycled back to Golgi" },
    { q: "What is mannose-6-phosphate (M6P)?", a: "Sugar modification added to lysosomal enzymes in cis-Golgi by GlcNAc phosphotransferase, signal for lysosomal targeting" },
    { q: "What happens in I-cell disease?", a: "Deficiency of GlcNAc phosphotransferase → no M6P tagging → lysosomal enzymes secreted instead of targeted → lysosomal dysfunction, inclusions" },
    { q: "What are the three types of autophagy?", a: "(1) Macroautophagy (autophagosome engulfs cargo) (2) Microautophagy (lysosome directly engulfs cytoplasm) (3) Chaperone-mediated autophagy (CMA, HSC70 recognizes KFERQ motif)" },
    { q: "What is macroautophagy?", a: "Autophagosome (double membrane) forms around cargo → fuses with lysosome → degradation, bulk degradation, starvation response" },
    { q: "What is an autophagosome?", a: "Double-membrane vesicle that engulfs cytoplasmic material for degradation, fuses with lysosome to form autolysosome, contains LC3" },
    { q: "What is LC3?", a: "Microtubule-associated protein light chain 3, marker of autophagosomes, LC3-I (cytoplasmic) → LC3-II (membrane-bound, lipidated with PE)" },
    { q: "What is chaperone-mediated autophagy (CMA)?", a: "Selective autophagy, HSC70 chaperone recognizes KFERQ-like motif in substrate proteins → LAMP2A receptor → direct translocation into lysosome" },
    { q: "What is KFERQ motif?", a: "Pentapeptide sequence (variants with lysine, phenylalanine, glutamate, arginine, glutamine) recognized by HSC70 for CMA targeting" },
    { q: "What is LAMP2A?", a: "Lysosome-associated membrane protein 2A, receptor for CMA, binds HSC70-substrate complex, allows protein translocation into lysosome" },
    { q: "What regulates autophagy?", a: "mTOR (inhibits when active), AMPK (activates), ULK1 complex, Beclin-1 complex, starvation activates autophagy" },
    { q: "What is mTOR?", a: "Mammalian target of rapamycin, serine/threonine kinase, nutrient sensor, INHIBITS autophagy when nutrients available, growth/anabolic processes" },
    { q: "How does starvation activate autophagy?", a: "↓ Nutrients → ↓ mTOR activity → ULK1 complex activated → autophagy initiated → degrades cellular components for energy/building blocks" },
    { q: "What is rapamycin?", a: "mTOR inhibitor, induces autophagy, immunosuppressant drug, potential anti-aging effects, used to study autophagy" },
    { q: "What are lysosomal storage diseases (LSDs)?", a: "Genetic defects in lysosomal enzymes → substrate accumulation → organomegaly, neurodegeneration, ~50 different diseases" },
    { q: "What is Gaucher disease?", a: "Most common LSD, deficiency of β-glucocerebrosidase (GBA1) → glucocerebroside accumulation → Gaucher cells, hepatosplenomegaly" },
    { q: "What is GBA1?", a: "β-glucocerebrosidase, lysosomal enzyme that cleaves glucose from glucocerebroside (glucosylceramide), mutated in Gaucher disease" },
    { q: "What is glucocerebroside?", a: "Glucosylceramide, glycosphingolipid, accumulates in Gaucher disease due to GBA1 deficiency, stored in macrophages → Gaucher cells" },
    { q: "What are Gaucher cells?", a: "Lipid-laden macrophages with \"wrinkled paper\" appearance, engorged with glucocerebroside, found in liver, spleen, bone marrow in Gaucher disease" },
    { q: "What is GBA2?", a: "Non-lysosomal glucosylceramidase, cytoplasmic/ER enzyme, NOT mutated in Gaucher disease, different substrate specificity than GBA1" },
    { q: "GBA1 vs GBA2 differences?", a: "GBA1: lysosomal, acid pH optimum, mutated in Gaucher. GBA2: non-lysosomal (cytosol/ER), neutral pH, NOT mutated in Gaucher, different function" },
    { q: "What are Gaucher disease types?", a: "Type 1 (non-neuropathic, most common, adult-onset). Type 2 (acute neuropathic, infantile, severe). Type 3 (chronic neuropathic, juvenile)" },
    { q: "What is enzyme replacement therapy (ERT)?", a: "IV infusion of recombinant GBA1 enzyme (imiglucerase, velaglucerase), enzyme taken up by macrophages via M6P receptor, reduces substrate" },
    { q: "What is substrate reduction therapy (SRT)?", a: "Miglustat - inhibits glucosylceramide synthase → reduces substrate production → less accumulation, oral medication, used when ERT not suitable" },
    { q: "What is miglustat?", a: "Iminosugar that inhibits glucosylceramide synthase, substrate reduction therapy for Gaucher disease (and Niemann-Pick C), reduces glucocerebroside synthesis" },
    { q: "Gaucher and Parkinson\'s link?", a: "GBA1 mutations = major PD risk factor (5-10x increased risk), heterozygotes also at risk, lysosomal dysfunction → impaired α-synuclein clearance" },
    { q: "Why do GBA1 mutations increase PD risk?", a: "Lysosomal dysfunction → impaired autophagy/mitophagy → α-synuclein accumulation → Lewy bodies → Parkinson\'s pathology" },
    { q: "What is α-synuclein?", a: "Presynaptic protein, aggregates in PD (Lewy bodies), normally degraded by lysosomes via CMA and macroautophagy, accumulates when lysosomal function impaired" },
    { q: "What are other LSDs?", a: "Tay-Sachs (hexosaminidase A deficiency, GM2 ganglioside), Niemann-Pick (sphingomyelinase deficiency), Fabry (α-galactosidase A), Pompe (acid α-glucosidase, glycogen)" },
    { q: "What is autophagy flux?", a: "Complete autophagy process from autophagosome formation through lysosomal degradation, measured by LC3-II turnover and p62 degradation" },
    { q: "What is p62/SQSTM1?", a: "Autophagy receptor/adaptor protein, binds ubiquitinated cargo and LC3, degraded by autophagy, accumulates when autophagy impaired" },
  ],
  7: [
    { q: "What is the central dogma of molecular biology?", a: "DNA → (transcription) → RNA → (translation) → Protein, with reverse transcription possible in retroviruses" },
    { q: "What are the steps from DNA to functional protein?", a: "(1) Transcription (DNA→pre-mRNA) (2) RNA processing (cap, tail, splicing) (3) Export (nucleus→cytoplasm) (4) Translation (mRNA→protein) (5) Post-translational modifications (6) Trafficking to final location" },
    { q: "What is transcription?", a: "DNA → pre-mRNA in nucleus by RNA polymerase II, produces primary transcript with introns and exons" },
    { q: "What are the three RNA processing steps?", a: "(1) 5\' capping (7-methylguanosine cap) (2) 3\' polyadenylation (poly-A tail) (3) Splicing (remove introns, join exons)" },
    { q: "What is the 5\' cap?", a: "7-methylguanosine (m7G) added to 5\' end of mRNA, protects from degradation, required for ribosome binding (translation initiation)" },
    { q: "What is the poly-A tail?", a: "~200 adenine nucleotides added to 3\' end of mRNA, protects from degradation, required for translation, signal for nuclear export" },
    { q: "What is splicing?", a: "Removal of introns (non-coding) and joining of exons (coding) by spliceosome, can be alternative splicing → multiple proteins from one gene" },
    { q: "What is the spliceosome?", a: "Large RNA-protein complex (snRNPs: U1, U2, U4, U5, U6) that catalyzes splicing, recognizes splice sites (GU...AG), removes introns" },
    { q: "What is alternative splicing?", a: "Different combinations of exons included/excluded → multiple mRNA isoforms from one gene → protein diversity (e.g., lamin A vs lamin C)" },
    { q: "What is translation?", a: "mRNA → protein by ribosomes in cytoplasm (or ER), tRNA brings amino acids, peptide bonds formed, N→C terminus direction" },
    { q: "What are the three stages of translation?", a: "(1) Initiation (ribosome assembles at AUG start codon) (2) Elongation (amino acids added) (3) Termination (stop codon UAA/UAG/UGA)" },
    { q: "What is a signal sequence?", a: "N-terminal amino acid sequence (~15-30 aa, hydrophobic) that directs protein to ER, recognized by SRP, cleaved by signal peptidase" },
    { q: "What is SRP (Signal Recognition Particle)?", a: "Ribonucleoprotein complex, recognizes signal sequence emerging from ribosome, pauses translation, targets ribosome to ER via SRP receptor" },
    { q: "What is co-translational translocation?", a: "Protein synthesis and translocation occur simultaneously, SRP pathway, ribosome docked at ER translocon, protein enters ER as it\'s made" },
    { q: "What is the translocon?", a: "Protein channel in ER membrane (Sec61 complex: α, β, γ subunits), allows nascent polypeptide to enter ER lumen, opens in response to signal sequence" },
    { q: "What are the steps of co-translational translocation?", a: "(1) Signal sequence emerges from ribosome (2) SRP binds, pauses translation (3) SRP targets to SRP receptor on ER (4) Transfer to Sec61 translocon (5) Translation resumes, protein enters ER (6) Signal peptidase cleaves signal sequence" },
    { q: "What is post-translational translocation?", a: "Protein fully synthesized in cytoplasm, THEN imported into ER, Sec62/63 pathway, requires chaperones to keep unfolded" },
    { q: "What are the steps of post-translational translocation?", a: "(1) Complete synthesis in cytoplasm (2) HSP70/HSP40 keep unfolded (3) Sec62/Sec63 complex recognizes protein (4) BiP (GRP78) in ER lumen pulls protein through (5) ATP hydrolysis provides energy" },
    { q: "What is BiP/GRP78?", a: "Binding immunoglobulin Protein / 78 kDa Glucose-Regulated Protein, ER chaperone (HSP70 family), facilitates post-translational import, UPR sensor" },
    { q: "What is N-glycosylation?", a: "Addition of oligosaccharide to asparagine (N) residue, occurs in ER and Golgi, most common PTM, affects folding, stability, trafficking" },
    { q: "What is the N-glycosylation consensus sequence?", a: "N-X-S/T (Asn - any aa except Pro - Ser or Thr), not all sites glycosylated, depends on accessibility" },
    { q: "What is dolichol?", a: "Lipid carrier in ER membrane, carries 14-sugar precursor (Glc3Man9GlcNAc2) for N-glycosylation, synthesized on both sides of ER membrane" },
    { q: "What is the 14-sugar precursor for N-glycosylation?", a: "Glc3Man9GlcNAc2 (3 glucose, 9 mannose, 2 N-acetylglucosamine), assembled on dolichol, transferred en bloc to Asn by OST" },
    { q: "What is OST (oligosaccharyltransferase)?", a: "Enzyme complex in ER membrane, transfers 14-sugar precursor from dolichol to Asn residue, co-translational modification" },
    { q: "What is en bloc transfer?", a: "Transfer of entire 14-sugar oligosaccharide from dolichol to protein in single step by OST, occurs as protein enters ER" },
    { q: "What happens after en bloc transfer?", a: "Glucose trimming by glucosidases I and II → removes 2 glucose → Glc1Man9GlcNAc2 → calnexin/calreticulin binding" },
    { q: "What is the calnexin/calreticulin cycle?", a: "ER quality control: monoglucosylated glycoproteins bind calnexin (membrane) or calreticulin (soluble) + ERp57 (oxidoreductase) → folding assistance" },
    { q: "What is UGGT?", a: "UDP-glucose:glycoprotein glucosyltransferase, quality control sensor, re-adds glucose to misfolded proteins → rebinds calnexin/calreticulin → another folding attempt" },
    { q: "How does UGGT work?", a: "Senses protein folding state, if MISFOLDED → adds glucose back → Glc1Man9GlcNAc2 → calnexin/calreticulin cycle repeats, if FOLDED → no glucose added → exits cycle" },
    { q: "What is ERp57?", a: "ER protein 57, oxidoreductase, forms disulfide bonds, works with calnexin/calreticulin to assist glycoprotein folding" },
    { q: "What happens to properly folded glycoproteins?", a: "Final glucose removed → exit ER in COPII vesicles → Golgi for further glycan processing (mannose trimming, addition of GlcNAc, galactose, sialic acid)" },
    { q: "What are COPII vesicles?", a: "Coat protein complex II, mediate ANTEROGRADE transport (ER → Golgi), bud from ER exit sites, coat proteins: Sar1, Sec23/24, Sec13/31" },
    { q: "What is the COPII pathway?", a: "ER exit sites → COPII vesicles → ER-Golgi intermediate compartment (ERGIC) → cis-Golgi, anterograde (forward) direction" },
    { q: "What are COPI vesicles?", a: "Coat protein complex I, mediate RETROGRADE transport (Golgi → ER and intra-Golgi), retrieval pathway, coat proteins: ARF1, coatomer" },
    { q: "What does COPI retrieve?", a: "ER-resident proteins that escaped to Golgi (have KDEL sequence), recycles SNARE proteins, intra-Golgi transport" },
    { q: "What is the KDEL sequence?", a: "Lys-Asp-Glu-Leu, C-terminal ER retention signal, KDEL receptor in Golgi binds these proteins → COPI vesicles → return to ER" },
    { q: "What is the KDEL receptor?", a: "Transmembrane receptor in Golgi that binds KDEL-containing proteins, packages them into COPI vesicles for retrieval to ER" },
    { q: "What are clathrin-coated vesicles?", a: "Clathrin triskelion coat, mediate: (1) Golgi → endosomes (2) Plasma membrane → endosomes (endocytosis), AP (adaptor protein) complexes" },
    { q: "What is clathrin?", a: "Coat protein forming triskelion (3-legged) structure, polymerizes into lattice, forms coated pits and vesicles, requires adaptor proteins (AP complexes)" },
    { q: "What are adaptor proteins (AP)?", a: "Link clathrin to membrane and cargo, AP-1 (Golgi), AP-2 (plasma membrane), recognize sorting signals on cargo proteins" },
    { q: "What is O-glycosylation?", a: "Addition of sugar to serine or threonine (O) residue, occurs in Golgi, no consensus sequence, mucins heavily O-glycosylated" },
    { q: "What is phosphorylation?", a: "Addition of phosphate group (PO₄³⁻) to Ser/Thr/Tyr by kinases, reversible by phosphatases, regulates activity, localization, interactions" },
    { q: "What is ubiquitination?", a: "Addition of ubiquitin (76 aa protein) to lysine residues, signals for proteasome degradation, endocytosis, or other fates, E1-E2-E3 cascade" },
    { q: "What are the three ubiquitination enzymes?", a: "E1 (ubiquitin-activating), E2 (ubiquitin-conjugating), E3 (ubiquitin ligase - provides specificity), transfer ubiquitin to substrate lysine" },
    { q: "What are polyubiquitin chains?", a: "Multiple ubiquitins linked together, K48-linked → proteasome degradation, K63-linked → signaling/endocytosis, different fates" },
    { q: "What is SUMOylation?", a: "Addition of SUMO (Small Ubiquitin-like MOdifier) protein to lysines, affects localization, transcription, NOT degradation signal" },
    { q: "What are prions?", a: "Infectious proteins, misfolded conformations (PrPsc) that propagate by converting normal protein (PrPc) to misfolded form, no nucleic acid" },
    { q: "What is PrPc?", a: "Normal prion protein, α-helix rich, GPI-anchored, on cell surface, protease-sensitive, normal function unclear" },
    { q: "What is PrPsc?", a: "Scrapie form (disease-causing), β-sheet rich, protease-resistant, SAME amino acid sequence as PrPc but different conformation, infectious" },
    { q: "How do prions propagate?", a: "PrPsc acts as template → binds PrPc → induces conformational change → PrPc converts to PrPsc → autocatalytic, self-propagating, no immune response" },
    { q: "What diseases are caused by prions?", a: "Creutzfeldt-Jakob disease (CJD), kuru, fatal familial insomnia (FFI), Gerstmann-Sträussler-Scheinker (GSS), bovine spongiform encephalopathy (BSE, \"mad cow\")" },
    { q: "Why can prions cross species?", a: "Sequence similarity between species\' PrP, but species barrier exists, transmission more efficient within species, variant CJD from BSE" },
    { q: "What makes prions unique?", a: "Protein-only inheritance, no DNA/RNA, conformational templating, resistance to standard sterilization, long incubation, spongiform degeneration" },
  ],
  8: [
    { q: "What is ER stress?", a: "Accumulation of unfolded/misfolded proteins in ER lumen when protein folding capacity is overwhelmed, triggers UPR" },
    { q: "What causes ER stress?", a: "(1) Increased protein synthesis (2) Mutations → misfolded proteins (3) Glucose deprivation (4) Ca²⁺ depletion (5) Oxidative stress (6) Hypoxia (7) Viral infection" },
    { q: "What is the UPR (Unfolded Protein Response)?", a: "Cellular response to ER stress, three signaling branches (PERK, IRE1, ATF6), aims to restore homeostasis or trigger apoptosis if severe" },
    { q: "What is GRP78/BiP\'s role in UPR?", a: "Master ER stress sensor, normally binds and inactivates PERK, IRE1, ATF6. During stress: releases them to bind misfolded proteins → UPR activated" },
    { q: "What are the three UPR branches?", a: "(1) PERK → eIF2α phosphorylation → ↓ translation, ATF4, CHOP (2) IRE1 → XBP1 splicing → ↑ chaperones (3) ATF6 → cleavage → ↑ ER capacity" },
    { q: "What is PERK pathway?", a: "Protein kinase RNA-like ER kinase, transmembrane protein, GRP78 release → dimerization/autophosphorylation → phosphorylates eIF2α → ↓ global translation" },
    { q: "What is eIF2α?", a: "Eukaryotic initiation factor 2α, phosphorylation by PERK → inhibits translation initiation → reduces ER protein load, BUT allows ATF4 translation" },
    { q: "What is ATF4?", a: "Activating transcription factor 4, translated under eIF2α phosphorylation (paradoxical), induces CHOP, amino acid metabolism genes, antioxidant genes" },
    { q: "What is CHOP?", a: "C/EBP Homologous Protein, pro-apoptotic transcription factor, induced by ATF4, high CHOP = maladaptive UPR = cell death pathway, induces DR5, GADD34" },
    { q: "What is the IRE1 pathway?", a: "Inositol-requiring enzyme 1, transmembrane protein with kinase and endoribonuclease domains, GRP78 release → activation → splices XBP1 mRNA" },
    { q: "What is IRE1\'s mechanism?", a: "Endoribonuclease activity splices XBP1 mRNA (removes 26bp intron) → frameshift → XBP1s (spliced, active transcription factor) → upregulates chaperones, ERAD" },
    { q: "What is XBP1u vs XBP1s?", a: "XBP1u (unspliced): unstable, inactive. XBP1s (spliced): stable, active transcription factor, upregulates ER chaperones (BiP, PDI, ERp57), ERAD components, lipid synthesis" },
    { q: "What does XBP1s do?", a: "Transcription factor, increases ER capacity by upregulating: chaperones (GRP78, GRP94, PDI), ERAD components, phospholipid synthesis enzymes" },
    { q: "What is the ATF6 pathway?", a: "Activating transcription factor 6, transmembrane protein, ER stress → translocates to Golgi → cleaved by S1P/S2P proteases → N-terminal fragment (TF) → nucleus" },
    { q: "What are S1P and S2P?", a: "Site-1 protease and Site-2 protease, cleave ATF6 in Golgi, sequential cleavage releases N-terminal transcription factor domain" },
    { q: "What does ATF6 activate?", a: "Transcription of ER chaperones (GRP78, GRP94), ERAD components, XBP1 gene, lipid synthesis genes, expands ER capacity" },
    { q: "What is ERAD?", a: "ER-Associated Degradation, terminally misfolded proteins retrotranslocated from ER to cytoplasm → ubiquitinated → proteasome degradation" },
    { q: "What are the steps of ERAD?", a: "(1) Recognition of misfolded protein (2) Retrotranslocation to cytoplasm through Sec61 or ERAD channels (3) Ubiquitination by E3 ligases (4) Extraction by p97/VCP (5) Proteasome degradation" },
    { q: "What is the proteasome?", a: "26S proteasome, large protein complex, degrades ubiquitinated proteins, 20S catalytic core + 19S regulatory caps, produces small peptides" },
    { q: "What happens in adaptive UPR?", a: "Stress resolved: ↑ chaperones → better folding, ↓ translation → less load, ERAD → removes misfolded, cell survives, homeostasis restored" },
    { q: "What happens in maladaptive/chronic UPR?", a: "Stress unresolved: prolonged CHOP expression → DR5, GADD34, oxidative stress → caspase activation → apoptosis" },
    { q: "What is GADD34?", a: "Growth Arrest and DNA Damage-inducible protein 34, induced by CHOP, recruits PP1 phosphatase → dephosphorylates eIF2α → restores translation during chronic stress → can be maladaptive" },
    { q: "What is DR5?", a: "Death Receptor 5, TRAIL receptor, induced by CHOP, promotes apoptosis during chronic ER stress" },
    { q: "How is ER stress involved in Alzheimer\'s?", a: "↑ XBP1 splicing in AD brains, ↑ CHOP, active UPR near plaques, Aβ and tau cause ER stress, cleaved caspase-12/4/3" },
    { q: "What is caspase-12?", a: "ER-localized caspase (in rodents), activated by ER stress, promotes apoptosis, cleaved in AD brains (caspase-4 in humans is homolog)" },
    { q: "How is ER stress involved in Parkinson\'s?", a: "Parkinsonian toxins (6-OHDA, MPP+, rotenone) activate PERK/IRE1, α-synuclein accumulation → ER stress, PERK⁻/⁻ neurons MORE vulnerable (shows PERK initially protective)" },
    { q: "What are 6-OHDA and MPP+?", a: "Neurotoxins used to model PD, 6-hydroxydopamine (6-OHDA) and 1-methyl-4-phenylpyridinium (MPP+, from MPTP), cause oxidative stress, ER stress, dopaminergic death" },
    { q: "How is ER stress involved in diabetes?", a: "β-cell ER stress from high insulin demand, chronic hyperglycemia → protein glycation → misfolding → UPR → β-cell dysfunction/death" },
    { q: "How is ER stress involved in COVID-19?", a: "SARS-CoV-2 replication → ER stress, viral proteins interfere with UPR, dysregulated UPR → inflammation, cell death, lung damage" },
    { q: "What is tunicamycin?", a: "N-glycosylation inhibitor, blocks dolichol pathway, induces ER stress experimentally, used to study UPR" },
    { q: "What is thapsigargin?", a: "SERCA inhibitor, depletes ER Ca²⁺, induces ER stress, used experimentally to activate UPR" },
    { q: "What is SERCA?", a: "Sarco/Endoplasmic Reticulum Ca²⁺-ATPase, pumps Ca²⁺ into ER, maintains ER Ca²⁺ stores, important for protein folding (Ca²⁺-dependent chaperones)" },
    { q: "What is PDI?", a: "Protein disulfide isomerase, ER chaperone, catalyzes disulfide bond formation/isomerization, important for protein folding" },
    { q: "What are chemical chaperones?", a: "Small molecules that stabilize protein folding (4-phenylbutyrate, TUDCA), reduce ER stress, potential therapeutics for proteinopathies" },
    { q: "What is the link between ER stress and inflammation?", a: "IRE1 can activate JNK → AP-1 → inflammatory genes. ER stress → NF-κB activation → cytokines. Chronic UPR → inflammasome activation" },
  ],
  9: [
    { q: "What are the phases of the cell cycle?", a: "G1 (gap 1, growth, 6-12h) → S (synthesis, DNA replication, 6-8h) → G2 (gap 2, prep for mitosis, 3-4h) → M (mitosis, 1h), total ~18-24h" },
    { q: "What is G0 phase?", a: "Quiescent state, exited cell cycle, cells not dividing, can be reversible (liver, lymphocytes) or irreversible (neurons, senescent cells)" },
    { q: "What are the main cell cycle checkpoints?", a: "(1) G1/S checkpoint (restriction point) - ready for DNA synthesis? (2) G2/M checkpoint - DNA replicated correctly? (3) M checkpoint (spindle checkpoint) - chromosomes attached?" },
    { q: "What is the restriction point (R)?", a: "Point of no return in late G1, before R can exit to G0, after R committed to divide, controlled by pRB/E2F" },
    { q: "What are cyclins?", a: "Regulatory proteins that activate CDKs, levels oscillate during cell cycle, degraded by ubiquitin-proteasome, provide specificity to CDKs" },
    { q: "What are CDKs?", a: "Cyclin-dependent kinases, serine/threonine kinases, inactive alone, activated by cyclin binding, phosphorylate substrates to drive cell cycle" },
    { q: "What are the cyclin-CDK pairs for each phase?", a: "G1: Cyclin D/CDK4/6. G1/S transition: Cyclin E/CDK2. S: Cyclin A/CDK2. M: Cyclin B/CDK1 (Cdc2)" },
    { q: "What does Cyclin D/CDK4/6 do?", a: "Early-mid G1, phosphorylates pRB → releases E2F → S-phase genes, integrates growth signals, oncogene when overexpressed" },
    { q: "What does Cyclin E/CDK2 do?", a: "Late G1/early S, further phosphorylates pRB, initiates DNA replication, commits to S phase" },
    { q: "What does Cyclin A/CDK2 do?", a: "S phase and early G2, S-phase progression, DNA replication, regulates origin firing" },
    { q: "What does Cyclin B/CDK1 do?", a: "G2/M transition and mitosis, also called MPF (M-phase promoting factor), triggers mitotic entry, phosphorylates nuclear lamins, condensins, others" },
    { q: "What is CDK1 also called?", a: "Cdc2 (cell division cycle 2), the key mitotic kinase, essential for M phase, highly conserved, same protein in yeast to humans" },
    { q: "What is pRB (retinoblastoma protein)?", a: "Tumor suppressor, master regulator of G1/S transition, binds and inhibits E2F transcription factors, phosphorylation by cyclin-CDK relieves inhibition" },
    { q: "What is E2F?", a: "Family of transcription factors, activates S-phase genes (DNA polymerase, thymidine kinase, etc.), inhibited by hypophosphorylated pRB" },
    { q: "What is the pRB/E2F pathway?", a: "Hypophosphorylated pRB binds E2F → blocks S-phase genes. Cyclin D/CDK4/6 and E/CDK2 phosphorylate pRB → releases E2F → S-phase genes ON → DNA replication" },
    { q: "What happens when pRB is mutated?", a: "Loss of G1/S checkpoint → uncontrolled proliferation → retinoblastoma (eye cancer in children), also in other cancers" },
    { q: "What is p53?", a: "\"Guardian of the Genome\", tumor suppressor, transcription factor, responds to DNA damage, decides cell fate (arrest, repair, apoptosis, senescence)" },
    { q: "Why is p53 called guardian of the genome?", a: "Responds to DNA damage, prevents replication of damaged DNA, prevents mutations passing to daughter cells, >50% cancers have p53 mutation" },
    { q: "How is p53 activated?", a: "DNA damage → ATM/ATR/Chk1/Chk2 kinases → phosphorylate p53 → stabilized → accumulates in nucleus → acts as transcription factor" },
    { q: "What does p53 normally do (no stress)?", a: "Rapidly degraded, MDM2 ubiquitinates p53 → proteasome, very low levels, allows normal cell division" },
    { q: "What is MDM2?", a: "E3 ubiquitin ligase, binds p53, ubiquitinates it → degradation, keeps p53 levels low, ALSO a p53 target gene (negative feedback loop)" },
    { q: "What are the three p53 outcomes?", a: "(1) Cell cycle arrest (via p21) - allow repair (2) Apoptosis (via BAX, PUMA, NOXA) - if unrepairable (3) Senescence (permanent arrest via p21, p16)" },
    { q: "What is p21 (WAF1/CIP1)?", a: "Universal CDK inhibitor, induced by p53, binds and blocks Cyclin E/CDK2, A/CDK2, B/CDK1 → G1/S or G2/M arrest" },
    { q: "How does p21 cause cell cycle arrest?", a: "Binds to cyclin-CDK complexes → inhibits kinase activity → prevents pRB phosphorylation → E2F remains bound → S-phase genes OFF (G1/S arrest)" },
    { q: "What are p53\'s pro-apoptotic targets?", a: "BAX, PUMA, NOXA (pro-apoptotic Bcl-2 family), DR5 (death receptor), apoptotic pathway if DNA damage irreparable" },
    { q: "What is BAX?", a: "Bcl-2 Associated X protein, pro-apoptotic, p53 target, oligomerizes in mitochondrial outer membrane → MOMP → cytochrome c release → apoptosis" },
    { q: "What are the two CDK inhibitor families?", a: "(1) INK4 family: p15, p16, p19 - inhibit CDK4/6 specifically (2) CIP/KIP family: p21, p27, p57 - broad CDK inhibitors" },
    { q: "What is p16?", a: "INK4a, CDK4/6 inhibitor, tumor suppressor, senescence marker, ↑ with age, prevents pRB phosphorylation" },
    { q: "What is senescence?", a: "Permanent cell cycle arrest (irreversible G0/G1), can\'t respond to growth signals, enlarged morphology, SASP, stress/damage/aging response" },
    { q: "What are senescence markers?", a: "SA-β-galactosidase (pH 6), ↑ p53, ↑ p21, ↑ p16, SASP (secretory phenotype), enlarged flat morphology, DNA damage foci" },
    { q: "What is SA-β-galactosidase?", a: "Senescence-associated β-galactosidase, active at pH 6 (vs normal lysosomal pH 4-5), detects senescent cells, blue staining assay" },
    { q: "What is SASP?", a: "Senescence-Associated Secretory Phenotype, senescent cells secrete IL-6, IL-8, MMPs, inflammatory factors → affects neighboring cells, chronic inflammation" },
    { q: "What are proliferation markers?", a: "Ki67 (present in G1/S/G2/M, absent in G0), BrdU incorporation (S phase only, nucleotide analog), PCNA (proliferating cell nuclear antigen)" },
    { q: "What is Ki67?", a: "Nuclear protein, marker of proliferation, present in all active cell cycle phases (G1/S/G2/M), ABSENT in G0, immunohistochemistry marker for cancer" },
    { q: "What is BrdU?", a: "Bromodeoxyuridine, thymidine analog, incorporated into DNA during S phase, detected by antibody, measures DNA synthesis, S-phase marker" },
    { q: "What is PCNA?", a: "Proliferating Cell Nuclear Antigen, DNA polymerase processivity factor, present during DNA replication, proliferation marker" },
    { q: "What is the G2/M checkpoint?", a: "Ensures complete and correct DNA replication before mitosis, checks DNA damage, ATM/ATR → Chk1/Chk2 → inhibit CDK1, arrests at G2 if problems" },
    { q: "What is the spindle assembly checkpoint (M checkpoint)?", a: "Ensures all chromosomes attached to spindle before anaphase, unattached kinetochores → Mad2/BubR1 → inhibits APC/C → arrests at metaphase" },
    { q: "What is APC/C?", a: "Anaphase-Promoting Complex/Cyclosome, E3 ubiquitin ligase, triggers anaphase by degrading securin (releases separase → cleaves cohesins) and Cyclin B" },
    { q: "What happens in cancer with cell cycle?", a: "Loss of checkpoints (p53, pRB mutations), cyclin/CDK overexpression, CDK inhibitor loss (p16, p21), uncontrolled proliferation" },
  ],
  10: [
    { q: "What is the mitochondrial double membrane?", a: "Outer mitochondrial membrane (OMM) - permeable, porins/VDAC. Inner mitochondrial membrane (IMM) - IMPERMEABLE, ETC complexes, cristae, cardiolipin" },
    { q: "What is ΔΨm (mitochondrial membrane potential)?", a: "Voltage across inner membrane (~-180 mV, matrix negative), generated by proton pumping (Complexes I, III, IV), drives ATP synthesis, damage sensor" },
    { q: "Why is ΔΨm critical?", a: "Drives ATP synthesis, regulates Ca²⁺ uptake, PINK1 fate sensor, protein import, ROS production. ΔΨm drop = mitochondrial damage/dysfunction" },
    { q: "What are the ETC complexes?", a: "Complex I (NADH dehydrogenase), II (succinate dehydrogenase), III (cytochrome bc1), IV (cytochrome c oxidase), V (ATP synthase)" },
    { q: "What does Complex I do?", a: "NADH dehydrogenase, accepts electrons from NADH → NAD+ + 2e- + H+, pumps 4 H+ from matrix to IMS, TARGET OF ROTENONE" },
    { q: "What does Complex II do?", a: "Succinate dehydrogenase, accepts electrons from FADH₂, part of TCA cycle, does NOT pump protons" },
    { q: "What does Complex III do?", a: "Cytochrome bc1, transfers electrons to cytochrome c, pumps 4 H+ (Q cycle)" },
    { q: "What does Complex IV do?", a: "Cytochrome c oxidase, final electron acceptor: O₂ + 4e- + 4H+ → 2H₂O, pumps 2 H+, where oxygen is consumed" },
    { q: "What does Complex V do?", a: "ATP synthase, uses proton gradient to make ATP, H+ flows through F0 → rotates → F1 catalyzes ADP + Pi → ATP" },
    { q: "How is the proton gradient created?", a: "Complexes I, III, IV pump H+ from matrix → intermembrane space → creates electrochemical gradient (chemical ΔpH + electrical ΔΨm) → drives ATP synthase" },
    { q: "How is ΔΨm measured?", a: "TMRM (tetramethylrhodamine methyl ester), JC-1, fluorescent dyes accumulate in mitochondria with high ΔΨm, ↓ signal = ↓ ΔΨm = damage" },
    { q: "What is PINK1?", a: "PTEN-Induced Kinase 1, serine/threonine kinase, 63 kDa, mitochondrial damage sensor, PARK6 gene, mutations cause early-onset Parkinson\'s" },
    { q: "What happens to PINK1 in healthy mitochondria?", a: "High ΔΨm → PINK1 imported via TOM/TIM → MPP cleaves MTS → PARL protease cleaves in IMM → 52 kDa fragment → exported to cytoplasm → degraded by proteasome" },
    { q: "What happens to PINK1 in damaged mitochondria?", a: "Low ΔΨm → PINK1 CANNOT be imported → accumulates on OMM (in TOM complex) → autophosphorylates → becomes active → phosphorylates ubiquitin → recruits Parkin" },
    { q: "What is PARL?", a: "Presenilin-Associated Rhomboid-Like protease, intramembrane protease in IMM, cleaves PINK1 in healthy mitochondria → allows degradation" },
    { q: "What is MPP?", a: "Mitochondrial Processing Peptidase, cleaves mitochondrial targeting sequences (MTS) from imported proteins including PINK1" },
    { q: "What is Parkin?", a: "E3 ubiquitin ligase, 52 kDa, PARK2 gene, most common genetic cause of early-onset Parkinson\'s, auto-inhibited in cytoplasm, activated by PINK1" },
    { q: "What activates Parkin?", a: "(1) Phospho-ubiquitin on damaged mitochondria recruits Parkin (2) PINK1 phosphorylates Parkin at Ser65 → relieves auto-inhibition → active E3 ligase" },
    { q: "What does Parkin ubiquitinate?", a: "OMM proteins: Mfn1, Mfn2 (fusion proteins), VDAC, TOM20, Miro (mitochondrial transport), creates ubiquitin coat → targets for degradation" },
    { q: "What happens to Mfn1/Mfn2 during mitophagy?", a: "Parkin ubiquitinates Mfn1/2 → proteasome degradation → BLOCKS fusion → isolates damaged mitochondrion from network → facilitates mitophagy" },
    { q: "What are the steps of PINK1/Parkin mitophagy?", a: "(1) ΔΨm drops (2) PINK1 accumulates on OMM (3) PINK1 phosphorylates ubiquitin (4) Phospho-Ub recruits Parkin (5) PINK1 phosphorylates Parkin → activates (6) Parkin ubiquitinates OMM proteins (7) Feed-forward loop (8) Autophagy receptors (p62, OPTN, NDP52) bind ubiquitin (9) Link to LC3 (10) Autophagosome engulfs (11) Lysosome fusion → degradation" },
    { q: "What is the feed-forward loop in PINK1/Parkin?", a: "PINK1 phosphorylates NEW ubiquitin added by Parkin → more phospho-Ub → recruits more Parkin → amplification, ensures damaged mitochondrion fully tagged" },
    { q: "What are autophagy receptors for mitophagy?", a: "p62/SQSTM1, OPTN (optineurin), NDP52, recognize ubiquitinated mitochondria, contain LC3-interacting region (LIR), link cargo to autophagosome" },
    { q: "What is rotenone?", a: "Pesticide, Complex I inhibitor, binds ubiquinone site, blocks electron transfer from NADH, models Parkinson\'s disease" },
    { q: "What are rotenone\'s effects?", a: "↓ ATP production, ↓ ΔΨm, ↑ ROS (electrons leak to O₂), oxidative stress, PINK1/Parkin activation, α-synuclein aggregation, dopaminergic neuron death" },
    { q: "Why is rotenone used to model PD?", a: "Induces: (1) Complex I deficiency (seen in PD patients) (2) Oxidative stress (3) α-synuclein pathology (4) Selective dopaminergic death (5) Motor deficits in animals" },
    { q: "What is MPP+?", a: "1-methyl-4-phenylpyridinium, active metabolite of MPTP, Complex I inhibitor like rotenone, taken up by dopamine transporter → selective toxicity, PD model" },
    { q: "What is MPTP?", a: "1-methyl-4-phenyl-1,2,3,6-tetrahydropyridine, converted to MPP+ by MAO-B in brain, caused Parkinsonism in drug users, led to PD models" },
    { q: "What are PINK1 mutations and PD?", a: "Autosomal recessive early-onset PD (20s-40s), ~1-2% of early-onset cases, loss of function → no mitophagy → damaged mitochondria accumulate" },
    { q: "What are Parkin mutations and PD?", a: "Autosomal recessive early-onset PD (20s-40s), MOST COMMON genetic cause (~50% familial early-onset), loss of E3 ligase function → defective mitophagy" },
    { q: "Why are dopaminergic neurons especially vulnerable?", a: "(1) High energy demand (2) Long axons (need ATP for transport) (3) Dopamine metabolism produces ROS (auto-oxidation) (4) High metabolic rate (5) Pacemaking activity" },
    { q: "What is mitochondrial fusion?", a: "Merging of mitochondria, mediated by Mfn1/Mfn2 (OMM fusion) and OPA1 (IMM fusion), creates networks, shares contents, compensates damage" },
    { q: "What is mitochondrial fission?", a: "Division of mitochondria, mediated by Drp1 recruitment (from cytoplasm) to OMM receptors (Fis1, MFF, MiD49/51), creates smaller mitochondria" },
    { q: "What are Mfn1 and Mfn2?", a: "Mitofusins, GTPases on OMM, mediate outer membrane fusion, also tether ER-mitochondria (MAMs), Parkin targets for degradation during mitophagy" },
    { q: "What is OPA1?", a: "Optic Atrophy 1, GTPase in IMM, mediates inner membrane fusion, maintains cristae structure, mutations cause optic atrophy" },
    { q: "What is Drp1?", a: "Dynamin-related protein 1, GTPase, recruited from cytoplasm to OMM during fission, forms spirals that constrict and sever mitochondria" },
    { q: "What protects against rotenone toxicity?", a: "PDGF-BB (platelet-derived growth factor) preserves mitochondrial morphology and ΔΨm. Parkin overexpression enhances mitophagy → removes damaged mitochondria faster" },
    { q: "What is VDAC?", a: "Voltage-Dependent Anion Channel, porin on OMM, allows passage of small molecules, involved in Ca²⁺ transfer at MAMs, Parkin substrate, cytochrome c release pathway" },
  ],
  11: [
    { q: "What are the three main fuel sources for mitochondria?", a: "(1) Carbohydrates (glucose) → glycolysis → pyruvate → Acetyl-CoA (2) Fats (fatty acids) → β-oxidation → Acetyl-CoA (3) Proteins (amino acids) → various TCA intermediates" },
    { q: "What is glycolysis?", a: "Glucose → 2 Pyruvate (cytoplasm), net products: 2 ATP, 2 NADH, anaerobic, 10-step pathway" },
    { q: "What is the pyruvate dehydrogenase complex (PDH)?", a: "Multi-enzyme complex in mitochondrial matrix, Pyruvate + CoA + NAD+ → Acetyl-CoA + NADH + CO₂, irreversible, rate-limiting for glucose oxidation" },
    { q: "How is PDH regulated?", a: "Activated by: Ca²+, CoA, NAD+. Inhibited by: Acetyl-CoA, NADH, ATP (products). Phosphorylation (by PDH kinase) inactivates PDH" },
    { q: "What is the TCA cycle (Krebs cycle)?", a: "Cyclic pathway in mitochondrial matrix, oxidizes Acetyl-CoA to 2 CO₂, generates reduced cofactors (NADH, FADH₂), provides biosynthetic precursors" },
    { q: "What are the TCA cycle products per Acetyl-CoA?", a: "3 NADH, 1 FADH₂, 1 GTP (→ATP), 2 CO₂" },
    { q: "What are the key TCA cycle enzymes?", a: "Citrate synthase (Acetyl-CoA + oxaloacetate → citrate), isocitrate dehydrogenase (isocitrate → α-ketoglutarate + NADH + CO₂, rate-limiting), α-ketoglutarate dehydrogenase (α-KG → succinyl-CoA + NADH + CO₂), succinate dehydrogenase (Complex II, succinate → fumarate + FADH₂), malate dehydrogenase (malate → oxaloacetate + NADH)" },
    { q: "What is anaplerosis?", a: "\"Filling up\" - reactions that replenish TCA cycle intermediates removed for biosynthesis, maintain cycle flux" },
    { q: "What is the main anaplerotic reaction?", a: "Pyruvate + CO₂ + ATP → Oxaloacetate (pyruvate carboxylase), replenishes oxaloacetate when removed for gluconeogenesis/amino acid synthesis" },
    { q: "Why are anaplerotic reactions needed?", a: "TCA intermediates removed for: citrate → fatty acids, α-KG → glutamate/glutamine, succinyl-CoA → heme, oxaloacetate → glucose/aspartate. Must be replaced" },
    { q: "What is pyruvate carboxylase?", a: "Anaplerotic enzyme, biotin-dependent, Pyruvate + CO₂ → Oxaloacetate, replenishes TCA intermediates, regulated by Acetyl-CoA (allosteric activator)" },
    { q: "Total ATP from one glucose molecule?", a: "~30-32 ATP total. Glycolysis: 2 ATP + 2 NADH. Pyruvate → Acetyl-CoA: 2 NADH. TCA (x2): 6 NADH + 2 FADH₂ + 2 ATP. NADH/FADH₂ → ETC → ATP" },
    { q: "How are fatty acids taken up by cells?", a: "(1) CD36/FAT (Fatty Acid Translocase) - main transporter across plasma membrane (2) FABPpm (plasma membrane FABP) (3) FABPc (cytoplasmic FABP) - chaperones FA in cytoplasm" },
    { q: "What is fatty acid activation?", a: "FA + CoA + ATP → Fatty Acyl-CoA (catalyzed by Acyl-CoA synthetase/ACSL1 on OMM), activates FA for metabolism, committed step" },
    { q: "What is the carnitine shuttle?", a: "Transports long-chain fatty acyl-CoA into mitochondrial matrix for β-oxidation, cannot cross IMM directly, uses carnitine as carrier" },
    { q: "What are the three steps of carnitine shuttle?", a: "(1) CPT-1 (OMM): Acyl-CoA + Carnitine → Acylcarnitine + CoA (2) CAT (IMM): transports Acylcarnitine in, free carnitine out (antiporter) (3) CPT-2 (matrix): Acylcarnitine + CoA → Acyl-CoA + Carnitine" },
    { q: "What is CPT-1?", a: "Carnitine Palmitoyltransferase I, on OMM, rate-limiting for FA oxidation, INHIBITED by malonyl-CoA" },
    { q: "What is malonyl-CoA and why does it inhibit CPT-1?", a: "First intermediate of fatty acid SYNTHESIS, inhibits CPT-1 → blocks FA oxidation. Prevents futile cycle (synthesis and oxidation simultaneously). When making FAs, don\'t oxidize them" },
    { q: "What is CAT?", a: "Carnitine-Acylcarnitine Translocase, antiporter in IMM, exchanges acylcarnitine (in) for free carnitine (out)" },
    { q: "What is CPT-2?", a: "Carnitine Palmitoyltransferase II, in mitochondrial matrix, regenerates Acyl-CoA from acylcarnitine for β-oxidation" },
    { q: "What is β-oxidation?", a: "Spiral pathway in mitochondrial matrix, shortens fatty acyl-CoA by 2 carbons each cycle, produces Acetyl-CoA, FADH₂, NADH" },
    { q: "What are the 4 steps of β-oxidation?", a: "(1) Oxidation (Acyl-CoA dehydrogenase, produces FADH₂) (2) Hydration (adds H₂O) (3) Oxidation (produces NADH) (4) Thiolysis (releases Acetyl-CoA), repeat until complete" },
    { q: "What are the products of palmitate (16C) β-oxidation?", a: "7 cycles → 8 Acetyl-CoA + 7 FADH₂ + 7 NADH → ~106 ATP total (much more than glucose 30-32 ATP), energy-dense" },
    { q: "Why are fats more energy-dense than carbohydrates?", a: "More reduced carbons, more H atoms → more NADH/FADH₂ per carbon → more ATP. Fats: 9 kcal/g. Carbs/protein: 4 kcal/g" },
    { q: "What are lipid droplets?", a: "Cytoplasmic organelles storing neutral lipids (triacylglycerols, cholesterol esters), surrounded by phospholipid monolayer + proteins (perilipins), energy reservoir" },
    { q: "What is the insulin signaling pathway?", a: "Insulin → Insulin Receptor (tyrosine kinase) → IRS phosphorylation → PI3K → PIP3 → Akt (PKB) → downstream effects" },
    { q: "What does Akt do in insulin signaling?", a: "(1) GLUT4 translocation → glucose uptake (2) Glycogen synthase activation → glycogen storage (3) mTOR activation → protein synthesis/growth (4) Inhibits gluconeogenesis" },
    { q: "What is GLUT4?", a: "Insulin-responsive glucose transporter, in muscle and adipocytes, normally in intracellular vesicles, insulin → Akt → GLUT4 translocates to membrane → glucose uptake" },
    { q: "What is insulin resistance?", a: "Cells don\'t respond properly to insulin, ↓ glucose uptake despite normal/high insulin levels, leads to Type 2 Diabetes" },
    { q: "What causes insulin resistance?", a: "Obesity (visceral fat), chronic inflammation, lipid accumulation (lipotoxicity), ER stress, mitochondrial dysfunction, sedentary lifestyle" },
    { q: "What are AGEs (Advanced Glycation End products)?", a: "Proteins modified by non-enzymatic reaction with glucose (glycation), irreversible, accumulate in hyperglycemia/aging" },
    { q: "What do AGEs do?", a: "Bind RAGE (Receptor for AGE) → oxidative stress, NF-κB activation → inflammation, vascular damage, tau hyperphosphorylation, Aβ aggregation" },
    { q: "What is RAGE?", a: "Receptor for Advanced Glycation End products, pattern recognition receptor, AGE binding → oxidative stress, inflammation, implicated in diabetes complications and AD" },
    { q: "What is the diabetes-Alzheimer\'s connection?", a: "(1) Brain insulin resistance → ↓ glucose metabolism (2) AGEs → RAGE → inflammation, tau/Aβ pathology (3) Loss of insulin signaling → GSK-3β overactive → tau hyperphosphorylation (4) Vascular damage. Called \"Type 3 Diabetes\"" },
    { q: "What is GSK-3β?", a: "Glycogen Synthase Kinase-3β, tau kinase, normally INHIBITED by insulin/Akt, in diabetes/insulin resistance → GSK-3β overactive → tau hyperphosphorylation → NFTs" },
    { q: "What are GLP-1 agonists?", a: "Glucagon-Like Peptide-1 receptor agonists (liraglutide, semaglutide), diabetes drugs, enhance insulin secretion (glucose-dependent), suppress glucagon" },
    { q: "How do GLP-1 agonists help in Alzheimer\'s?", a: "In AD models: ↓ Aβ accumulation, ↓ tau pathology, improves memory, neuroprotective, activates PI3K/Akt, anti-inflammatory. Clinical trials ongoing for AD" },
    { q: "What is GLP-1?", a: "Incretin hormone from gut, released after eating, enhances glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, satiety" },
  ],
  12: [
    { q: "What are MAMs?", a: "Mitochondria-Associated ER Membranes, contact sites where ER and mitochondria come within 10-30 nm (not fused), ~5-20% of mitochondrial surface, dynamic structures" },
    { q: "What are MAM functions?", a: "(1) Ca²⁺ transfer ER → mitochondria (2) Lipid synthesis and transfer (3) Autophagosome formation (4) Apoptosis regulation (5) Metabolic coordination (6) Mitochondrial dynamics" },
    { q: "What are the main MAM tethering proteins?", a: "(1) Mfn1/Mfn2 (mitofusins) - most important (2) VAPB (ER) - PTPIP51 (mitochondria) (3) IP3R-GRP75-VDAC (Ca²⁺ transfer complex) (4) PACS2 (regulator)" },
    { q: "What are mitofusins (Mfn1/Mfn2)?", a: "GTPases on OMM, primary function: mitochondrial fusion, secondary function: MAM tethering (Mfn2 on OMM can interact with Mfn2 on ER), Parkin substrates" },
    { q: "What is Mfn2\'s dual role?", a: "(1) Mitochondrial fusion - Mfn2 on one mitochondrion binds Mfn2 on another → OMM fusion (2) MAM tethering - Mfn2 on OMM binds Mfn2 on ER → ER-mitochondria contact" },
    { q: "What is PACS2?", a: "Phosphofurin Acidic Cluster Sorting Protein 2, MASTER REGULATOR of MAM formation, controls ER-mitochondria apposition and communication, dysregulated in Alzheimer\'s" },
    { q: "What does PACS2 do?", a: "Promotes MAM formation, increases ER-mitochondria contacts, regulates apposition (closeness), recruits/stabilizes tethering proteins, controls Bid localization to MAMs" },
    { q: "What is VAPB-PTPIP51?", a: "Tethering complex, VAPB on ER membrane, PTPIP51 on OMM, physical interaction bridges organelles, regulates ER-mitochondria distance" },
    { q: "What is the Ca²⁺ transfer pathway at MAMs?", a: "ER: IP3R releases Ca²⁺ → MAM gap (10-30nm) → GRP75 chaperone links IP3R to VDAC → OMM: VDAC → IMM: MCU → mitochondrial matrix" },
    { q: "What is IP3R?", a: "Inositol 1,4,5-trisphosphate receptor, Ca²⁺ release channel on ER membrane, IP₃ binding opens channel → Ca²⁺ flows from ER lumen to cytoplasm (or MAM gap)" },
    { q: "What is GRP75?", a: "75 kDa glucose-regulated protein (HSP70 family chaperone), physically links IP3R (ER) to VDAC (OMM), creates functional Ca²⁺ transfer channel at MAMs" },
    { q: "What is VDAC?", a: "Voltage-Dependent Anion Channel, porin on OMM, allows Ca²⁺ entry into intermembrane space, part of Ca²⁺ transfer complex at MAMs" },
    { q: "What is MCU?", a: "Mitochondrial Calcium Uniporter, Ca²⁺ channel on IMM, allows Ca²⁺ entry into mitochondrial matrix, driven by ΔΨm" },
    { q: "What are the beneficial effects of mitochondrial Ca²⁺?", a: "Physiological [Ca²⁺]: activates TCA cycle dehydrogenases (isocitrate DH, α-ketoglutarate DH, pyruvate DH) → ↑ NADH → ↑ ATP production, metabolic stimulation" },
    { q: "What are the harmful effects of excess mitochondrial Ca²⁺?", a: "Ca²⁺ overload → mitochondrial permeability transition (MPT) → ΔΨm collapse → ATP depletion → cytochrome c release → apoptosis" },
    { q: "What is MPT (mitochondrial permeability transition)?", a: "Ca²⁺ overload + oxidative stress → permeability transition pore (PTP) opens → IMM becomes permeable → ΔΨm collapse, matrix swelling, OMM rupture, cell death" },
    { q: "What lipids are synthesized/transferred at MAMs?", a: "Phosphatidylserine (PS) synthesis in ER → MAMs → mitochondria → PS converted to phosphatidylethanolamine (PE). Cardiolipin precursors. Cholesterol transfer" },
    { q: "What is phosphatidylserine (PS)?", a: "Phospholipid synthesized in ER-MAMs by PS synthase, transferred to mitochondria at MAMs, converted to PE by PS decarboxylase in mitochondria" },
    { q: "How are autophagosomes formed at MAMs?", a: "MAMs provide membranes for phagophore (autophagosome precursor) formation, ER-mitochondria contact sites = autophagosome nucleation sites" },
    { q: "How are MAMs involved in apoptosis?", a: "Excessive Ca²⁺ transfer → mitochondrial Ca²⁺ overload → MPT → cytochrome c release. BAX/BAK recruitment to MAMs. Bid localization to MAMs (PACS2-regulated)" },
    { q: "What happens to MAMs in early ER stress?", a: "Adaptive response: MAMs coordinate Ca²⁺ transfer → mitochondrial metabolism ↑ → ↑ ATP production to cope with ER stress, protective" },
    { q: "What happens to MAMs in prolonged ER stress?", a: "Maladaptive: excessive Ca²⁺ transfer → mitochondrial Ca²⁺ overload → dysfunction → ↓ ΔΨm → ↓ ATP → energetic collapse → cell death" },
    { q: "How does palmitic acid affect MAMs?", a: "Saturated fatty acid (16:0), disrupts MAMs → impaired ER-mitochondria communication → impaired Ca²⁺ homeostasis → mitochondrial dysfunction → insulin resistance" },
    { q: "How does Mfn2 overexpression protect against palmitic acid?", a: "Restores MAMs, improves ER-mitochondria contacts, maintains Ca²⁺ homeostasis, preserves mitochondrial function → prevents/reduces insulin resistance" },
    { q: "How are MAMs disrupted in insulin resistance?", a: "Palmitic acid (saturated fat) → disrupts MAM integrity → impaired Ca²⁺ transfer → mitochondrial dysfunction → insulin resistance. Mfn2 levels also reduced" },
    { q: "How is PACS2 dysregulated in Alzheimer\'s?", a: "PACS2 levels altered in AD models → disrupted ER-mitochondria interface → impaired Ca²⁺ homeostasis → ER stress + mitochondrial dysfunction → contributes to neurodegeneration" },
    { q: "What are the consequences of PACS2 dysregulation in AD?", a: "Disrupted MAMs → impaired Ca²⁺ homeostasis → ER stress → UPR activation → mitochondrial dysfunction → energy deficits → contributes to tau pathology, Aβ accumulation" },
    { q: "How does rotenone affect MAMs?", a: "Rotenone (Complex I inhibitor) → ↓ Mfn2 expression → disrupted MAMs → impaired ER-mitochondria communication → contributes to PD pathology" },
    { q: "How are MAMs linked to mitophagy?", a: "Parkin targets Mfn1/Mfn2 for ubiquitination → degradation → disrupts MAMs AND blocks fusion → isolates damaged mitochondrion. Mitochondrial fission often occurs at ER-mitochondria contact sites" },
    { q: "What is the connection between MAMs and mitochondrial dynamics?", a: "Mitochondrial fission often occurs at ER-mitochondria contact sites. ER wraps around mitochondria → marks fission sites → Drp1 recruitment → fission. MAMs regulate where fission happens" },
    { q: "What are MAM-enriched proteins?", a: "Tethers (Mfn2, VAPB-PTPIP51, PACS2), Ca²⁺ handling (IP3R, GRP75, VDAC, MCU), lipid synthesis (PS synthase), ER stress sensors (PERK, IRE1)" },
    { q: "What is the ER-mitochondria distance at MAMs?", a: "~10-30 nm, optimal for Ca²⁺ transfer (close enough for efficient transfer, far enough to maintain organelle identity), maintained by tethering proteins" },
    { q: "How much of the mitochondrial surface is in MAMs?", a: "~5-20% of mitochondrial outer membrane surface, varies by cell type, metabolic state, stress conditions, dynamic not static" },
    { q: "Can MAMs be visualized?", a: "Yes - electron microscopy (gold standard), split-GFP probes, FRET-based sensors, immunofluorescence of MAM markers (Mfn2, IP3R, VDAC colocalization)" },
  ],
  13: [
    { q: "What is cardiolipin (CL)?", a: "Unique dimeric phospholipid found ONLY in inner mitochondrial membrane, 4 fatty acids + 2 phosphate groups + 3 glycerol backbones, ~20% of IMM lipids" },
    { q: "What is cardiolipin\'s structure?", a: "Dimeric phospholipid: two phosphatidylglycerol molecules joined, 4 fatty acid chains (usually unsaturated), 2 phosphate groups (anionic), 3 glycerol backbones, cone-shaped" },
    { q: "Where is cardiolipin found?", a: "EXCLUSIVELY in inner mitochondrial membrane (IMM), NOT in OMM or other membranes, ancient lipid (also in bacterial membranes, evolutionary origin)" },
    { q: "What is CRLS1?", a: "Cardiolipin Synthase 1, enzyme in IMM that synthesizes cardiolipin, PG + CDP-diacylglycerol → CL, final step of CL synthesis" },
    { q: "What are cardiolipin\'s functions?", a: "(1) ETC complex assembly/stability (2) Cristae structure (cone shape promotes curvature) (3) Binds cytochrome c (prevents apoptosis) (4) Protein import (5) Mitochondrial dynamics" },
    { q: "How does cardiolipin affect ETC complexes?", a: "Required for proper assembly and function of Complexes I, III, IV, V. CL binds directly to complexes, stabilizes supercomplex formation (respirasomes), ↓ CL → ↓ activity" },
    { q: "What is the cardiolipin-cytochrome c interaction?", a: "Normal: Cytochrome c bound to CL on IMM via electrostatic interactions (CL negative, cyt c positive lysines). Keeps cyt c in mitochondria, prevents apoptosis" },
    { q: "What happens during cardiolipin oxidation?", a: "(1) H₂O₂ → unfolds cyt c → cyt c becomes PEROXIDASE (2) Cyt c-peroxidase oxidizes CL (3) Oxidized CL (CLox) has ↓ affinity for cyt c (4) Cyt c detaches" },
    { q: "What is the complete cardiolipin-apoptosis pathway?", a: "(1) Stress → ↑ H₂O₂ (2) Cyt c → peroxidase (3) Oxidizes CL (4) CLox → ↓ affinity (5) Cyt c detaches (6) CLox appears on OMM (7) Attracts tBID (8) BAX/BAK → MOMP (9) Cyt c released to cytoplasm (10) Apoptosome → caspases → apoptosis" },
    { q: "Why is CL oxidation critical for apoptosis?", a: "CL oxidation is REQUIRED for cytochrome c release. Without CL oxidation, cyt c stays bound to IMM → no apoptosis. Acts as gatekeeper of apoptosis" },
    { q: "What is tBID?", a: "Truncated BID, pro-apoptotic Bcl-2 family protein, activated by caspase-8 cleavage, translocates to mitochondria, attracted to oxidized CL on OMM, recruits BAX/BAK" },
    { q: "What is MOMP?", a: "Mitochondrial Outer Membrane Permeabilization, BAX/BAK oligomerize → form pores in OMM → cytochrome c and other pro-apoptotic factors released → apoptosis" },
    { q: "What happens to cardiolipin in Alzheimer\'s disease?", a: "↓ Total CL levels, ↓ CRLS1 expression, altered CL composition (different fatty acids), changes occur EARLY in disease, especially in synaptic mitochondria" },
    { q: "What are the consequences of reduced CL in AD?", a: "↓ ETC complex activity (especially I and IV) → ↓ ATP production, ↓ ΔΨm, disrupted cristae structure, impaired mitochondrial function, synaptic energy deficits" },
    { q: "How is cardiolipin affected in Parkinson\'s disease?", a: "↓ CL levels, altered composition, α-synuclein interacts with CL, may accelerate CL oxidation, contributes to mitochondrial dysfunction in PD" },
    { q: "What is cardiolipin remodeling?", a: "Newly synthesized CL has immature fatty acid composition → remodeling enzymes (tafazzin, others) exchange fatty acids → mature functional CL with tissue-specific composition" },
    { q: "What is tafazzin?", a: "Transacylase enzyme, remodels cardiolipin (exchanges fatty acids), mutations cause Barth syndrome (cardiomyopathy, neutropenia, growth retardation), defective CL" },
    { q: "What is Barth syndrome?", a: "X-linked genetic disorder, tafazzin mutation → defective CL remodeling → abnormal CL → mitochondrial dysfunction, cardiomyopathy, skeletal myopathy, neutropenia" },
    { q: "Why is cardiolipin\'s cone shape important?", a: "Promotes negative membrane curvature, essential for cristae formation (cristae have high curvature), ↓ CL → disrupted cristae structure → ↓ surface area for ETC" },
    { q: "What makes cardiolipin prone to oxidation?", a: "Contains highly unsaturated fatty acids (linoleic acid 18:2 common), multiple double bonds susceptible to ROS attack, located in IMM (site of ROS production)" },
    { q: "What is neuroglobin (Ngb)?", a: "Oxygen-binding globin protein (~17 kDa) expressed in neurons and some other tissues, neuroprotective, discovered in 2000, binds O₂ reversibly" },
    { q: "Where is neuroglobin expressed?", a: "Primarily NEURONS (brain, retina, spinal cord), also in some endocrine tissues, cytoplasm mainly but can translocate to mitochondria and nucleus" },
    { q: "What is neuroglobin\'s structure?", a: "Globular protein, contains HEME group (iron), binds O₂ like hemoglobin/myoglobin, 6-coordinate heme (unusual), higher O₂ affinity than hemoglobin" },
    { q: "What are neuroglobin\'s functions?", a: "(1) O₂ homeostasis/storage (2) Neuroprotection (3) Prevents cytochrome c release (4) Anti-apoptotic (5) ROS scavenging (6) Mitochondrial protection" },
    { q: "How does neuroglobin protect neurons?", a: "(1) Translocates to mitochondria under stress (2) Interacts with cytochrome c → prevents detachment from IMM (3) May prevent CL oxidation (4) Maintains mitochondrial function" },
    { q: "What is neuroglobin\'s anti-apoptotic mechanism?", a: "Prevents cytochrome c release by: (1) Maintaining CL-cyt c binding (2) Possibly preventing CL oxidation (3) Preserving ΔΨm (4) Direct interaction with cyt c" },
    { q: "What signaling pathways does neuroglobin activate?", a: "PI3K/Akt survival pathway - Ngb → PI3K → PIP3 → Akt → phosphorylates BAD (inactivates), activates mTOR (survival), activates CREB (neuroprotective genes)" },
    { q: "How does the PI3K/Akt pathway promote survival?", a: "Akt phosphorylates: (1) BAD (pro-apoptotic) → inactivates it (2) mTOR → cell growth/survival (3) CREB → anti-apoptotic gene expression (4) GSK-3β → inhibits it" },
    { q: "What is neuroglobin\'s role in Alzheimer\'s disease?", a: "Ngb attenuates Aβ-induced apoptosis, inhibits caspase activation, activates PI3K/Akt pathway. Ngb overexpression in AD mice: ↓ neurodegeneration, improves cognition, reduces Aβ toxicity" },
    { q: "What happens in Ngb overexpression studies in AD models?", a: "Transgenic mice with Ngb overexpression: attenuated AD phenotype, reduced neurodegeneration, improved memory/cognition, reduced Aβ toxicity, preserved mitochondrial function" },
    { q: "How do neuroglobin and CRLS1 change with aging?", a: "Both ↓ with aging. ↓ CRLS1 → ↓ cardiolipin. ↓ Ngb → ↓ neuroprotection. Combined deficiency → increased mitochondrial vulnerability, apoptosis susceptibility, age-related neuronal death" },
    { q: "What is the neuroglobin-cardiolipin connection?", a: "Both critical for mitochondrial function and apoptosis regulation. Ngb may preserve CL integrity (prevents oxidation), both ↓ in aging/AD, double hit increases vulnerability" },
    { q: "Can neuroglobin be therapeutic?", a: "Potential therapeutic target - upregulation could be neuroprotective in AD, PD, stroke. Gene therapy, small molecules to increase Ngb expression under investigation" },
    { q: "How does neuroglobin affect mitochondria under stress?", a: "Translocates to mitochondria, improves mitochondrial function, preserves ΔΨm, maintains ATP production, reduces ROS, prevents cytochrome c release, alleviates dysfunction" },
    { q: "What is NAO (Nonyl Acridine Orange)?", a: "Fluorescent dye that binds cardiolipin, used to detect CL in cells/tissues, measures CL content and localization, fluorescence changes with CL oxidation" },
    { q: "How does oxygen-glucose deprivation (OGD) affect cardiolipin?", a: "OGD (ischemia model) → ↑ ROS → CL oxidation → ↓ ΔΨm → ↓ ATP → cytochrome c release → apoptosis. Mimics stroke/ischemic conditions" },
    { q: "What is ceramide and how does it relate to CL?", a: "Sphingolipid, stress/apoptosis signal, accumulates during stress, disrupts mitochondrial membrane, can affect ΔΨm, works with CL oxidation in apoptosis pathway" },
    { q: "What is the cardiolipin fatty acid composition?", a: "Typically highly unsaturated, linoleic acid (18:2) most common in mammalian heart, tissue-specific variations, unsaturation makes it oxidation-prone" },
    { q: "Why is cardiolipin called cardiolipin?", a: "First discovered in beef heart (1940s), named after cardiac tissue, but present in all mitochondria (not just heart)" },
    { q: "Why is Lecture 7 (PTM) a 40-mark essay question?", a: "2019 exam asked \"Describe protein synthesis from nucleus to secreted protein with PTMs.\" Requires complete pathway: transcription → processing → translation → SRP/translocation → glycosylation → COPII → Golgi → secretion. Most comprehensive topic" },
    { q: "How to approach the Lecture 7 essay?", a: "Structure: (1) Transcription in nucleus (2) mRNA processing (cap, tail, splicing) (3) Translation (4) Co-translational translocation (SRP, Sec61) (5) N-glycosylation (dolichol, OST, UGGT, calnexin) (6) COPII vesicles (7) Golgi processing (8) Secretion. Include all steps with details" },
    { q: "What topics appear in BOTH 2019 and 2023 exams?", a: "Cell cycle/p53, mitochondrial function (PINK1/Parkin pathway likely), ER stress/UPR. These are consistently tested" },
    { q: "How does ER stress connect to mitochondria?", a: "Lecture 8 (ER stress) + Lecture 12 (MAMs): Early ER stress → MAMs coordinate Ca²⁺ transfer → mitochondrial ↑ ATP (adaptive). Prolonged ER stress → Ca²⁺ overload → mitochondrial dysfunction → energetic collapse (maladaptive)" },
    { q: "How do PINK1/Parkin connect to MAMs?", a: "Lecture 10 + 12: Parkin ubiquitinates Mfn1/2 → degradation. Mfn2 is MAM tether. So mitophagy (PINK1/Parkin) disrupts MAMs, isolates damaged mitochondrion from ER contacts" },
    { q: "Universal CDK inhibitor?", a: "p21 (WAF1/CIP1), induced by p53, blocks ALL cyclin-CDK complexes (E/CDK2, A/CDK2, B/CDK1), universal cell cycle brake" },
    { q: "Most common genetic cause of early-onset Parkinson\'s?", a: "Parkin (PARK2) mutations, ~50% of familial early-onset PD, autosomal recessive, E3 ligase loss of function, defective mitophagy" },
    { q: "Key pathways to memorize for exam?", a: "(1) Lamin A processing (5 steps) (2) N-glycosylation (dolichol → OST → UGGT cycle) (3) PINK1/Parkin mitophagy (10 steps) (4) Cardiolipin oxidation → apoptosis (5) UPR branches (PERK/IRE1/ATF6) (6) Insulin signaling (IRS → PI3K → Akt)" },
    { q: "Important numbers to memorize?", a: "Lysosome pH ~5, ΔΨm ~-180 mV, MAM distance 10-30 nm, TCA per Acetyl-CoA: 3 NADH + 1 FADH₂ + 1 ATP + 2 CO₂, Palmitate → ~106 ATP, Cell cycle: G1 (6-12h) + S (6-8h) + G2 (3-4h) + M (1h), Cardiolipin: 4 FA + 2 phosphates" },
    { q: "What connects ALL lectures to Alzheimer\'s disease?", a: "L2: Rafts seed Aβ. L4: Epigenetic changes. L7: Protein misfolding/prions. L8: ER stress (XBP1, CHOP). L9: Cell cycle dysregulation. L10: Mitochondrial dysfunction. L11: Diabetes-AD link (AGEs, insulin resistance). L12: PACS2 dysregulation disrupts MAMs. L13: ↓ Cardiolipin, Ngb protective" },
    { q: "What connects multiple lectures to Parkinson\'s disease?", a: "L3: HV1 in microglia ROS. L6: Gaucher (GBA1) → PD risk, lysosomal dysfunction. L8: ER stress from toxins. L10: PINK1/Parkin mutations (most important), rotenone model. L13: ↓ Cardiolipin, α-synuclein affects CL" },
    { q: "High-priority pathways for mitochondria questions?", a: "(1) PINK1/Parkin complete pathway (ΔΨm sensor to mitophagy) (2) Cardiolipin oxidation → cytochrome c release → apoptosis (3) Carnitine shuttle (CPT-1/CAT/CPT-2) (4) MAM Ca²⁺ transfer (IP3R-GRP75-VDAC-MCU)" },
    { q: "How to connect metabolism to neurodegeneration?", a: "Diabetes → insulin resistance → brain insulin resistance + AGEs → RAGE → inflammation + tau hyperphosphorylation + Aβ aggregation. GSK-3β overactive (normally inhibited by insulin) → tau pathology. GLP-1 agonists therapeutic for both diabetes and AD" },
    { q: "What is the diabetes-AD connection summary?", a: "\"Type 3 Diabetes\" - (1) Brain insulin resistance (2) AGEs accumulation (3) Loss of insulin neuroprotection (4) Vascular damage. All contribute to AD pathology" },
    { q: "How do rafts connect to Alzheimer\'s specifically?", a: "BACE1 and γ-secretase both IN rafts → amyloidogenic pathway. α-secretase OUTSIDE rafts → non-amyloidogenic. ↑ Cholesterol → more rafts → more Aβ. GM1 seeds Aβ aggregation" },
    { q: "How does p53 connect to mitochondria?", a: "p53 has pro-apoptotic targets (BAX, PUMA) that act on mitochondria. BAX → MOMP → cytochrome c release. p53 also regulates autophagy/mitophagy genes. Some p53 translocates to mitochondria directly" },
    { q: "What is the ER-mitochondria-autophagy connection?", a: "MAMs (L12) are autophagosome formation sites. ER-mitochondria contacts provide membranes for phagophore. ER stress can trigger autophagy. Mitophagy requires intact ER-mitochondria communication initially" },
    { q: "Study strategy for comprehensive questions?", a: "Practice integrating: (1) Draw complete pathways with all components (2) Connect across lectures (ER stress → mitochondria, rafts → Aβ → AD) (3) Know disease connections for each topic (4) Memorize key numbers and steps (5) Practice 40-mark essay structure (intro, detailed mechanisms, clinical relevance, conclusion)" },
  ],
};


// Exam questions - Testing mode
const examQuestions = {
  2: [
    { num: 'Q1.', question: 'Describe the structure and composition of lipid rafts. Explain how cholesterol contributes to raft formation and discuss the consequences of cholesterol depletion on membrane organization and cellular signaling. (20 marks)' },
    { num: 'Q2.', question: 'Explain the amyloidogenic versus non-amyloidogenic pathways of APP processing. Where does each pathway occur in relation to lipid rafts? Discuss how cholesterol levels and raft integrity affect Aβ production in Alzheimer\'s disease. (20 marks)' },
    { num: 'Q3.', question: 'Describe the role of GM1 ganglioside in lipid rafts and its specific involvement in Alzheimer\'s disease pathology. Include discussion of how GM1 promotes Aβ aggregation and the potential therapeutic implications. (15 marks)' },
    { num: 'Q4.', question: 'Explain three different methods used to detect and isolate lipid rafts. Discuss the advantages and limitations of each method. Include detergent-resistant membranes (DRM), cholera toxin B binding, and filipin staining. (18 marks)' },
    { num: 'Q5.', question: 'Discuss how lipid rafts function as signaling platforms. Use T cell receptor (TCR) signaling as a specific example, explaining why concentrating signaling molecules in rafts enhances signal transduction efficiency. (15 marks)' },
    { num: 'Q6.', question: 'Compare and contrast the roles of caveolin-1 and flotillin in lipid raft organization. Discuss how caveolin-1 functions as a tumor suppressor and what happens when it is lost in cancer cells. (15 marks)' },
    { num: 'Q7.', question: 'Explain the arachidonic acid cascade and how it relates to lipid raft function. Distinguish between omega-6 (pro-inflammatory) and omega-3 (anti-inflammatory) pathways, including specific products and their physiological effects. (18 marks)' },
  ],
  3: [
    { num: 'Q1.', question: 'Describe the unique structural features of the HV1 proton channel that distinguish it from other voltage-gated ion channels. Explain how HV1 achieves proton selectivity without a traditional selectivity filter. (15 marks)' },
    { num: 'Q2.', question: 'Explain the functional coupling between HV1 and NADPH oxidase in phagocytes during the respiratory burst. Describe what happens during NADPH oxidase activation and why HV1 is essential for sustained ROS production. Include the consequences of HV1 knockout in this context. (20 marks)' },
    { num: 'Q3.', question: 'Discuss the role of HV1 in regulating M1 versus M2 microglial polarization. Explain the paradox observed in stroke models where HV1 knockout reduces stroke damage but causes obesity. How can these opposing effects be reconciled? (20 marks)' },
    { num: 'Q4.', question: 'Explain how cancer cells exploit HV1 to maintain pH homeostasis. Include discussion of the Warburg effect, why tumor cells need HV1, and the therapeutic potential of HV1 inhibition in cancer treatment. (18 marks)' },
    { num: 'Q5.', question: 'Describe HV1\'s role in at least three different cell types beyond phagocytes (e.g., B cells, sperm, airway epithelium). For each, explain the specific function of HV1 and the consequences of its loss. (18 marks)' },
    { num: 'Q6.', question: 'Explain the dual gating mechanism of HV1 (voltage and pH-dependent). Why is this dual gating physiologically important? Discuss how HV1 responds to both membrane depolarization and pH gradients. (15 marks)' },
    { num: 'Q7.', question: 'Discuss the challenges in developing HV1-targeted therapeutics. Include current pharmacological tools (e.g., zinc blockade), the need for specific inhibitors, and potential therapeutic applications in inflammation, cancer, and neurodegeneration. (15 marks)' },
  ],
  4: [
    { num: 'Q1.', question: 'Describe the complete 5-step processing pathway of lamin A from prelamin A to mature lamin A. Include all enzymes involved (farnesyltransferase, RCE1/ZMPSTE24) and explain what happens at each step. (20 marks)' },
    { num: 'Q2.', question: 'Explain the molecular basis of Hutchinson-Gilford Progeria Syndrome (HGPS). What is progerin, how does it arise from the LMNA mutation (C1824T), and why does it cause premature aging? Discuss the therapeutic rationale for using farnesyltransferase inhibitors. (20 marks)' },
    { num: 'Q3.', question: 'Compare and contrast DNA methylation and histone modifications as epigenetic mechanisms. For each, describe the writers (enzymes that add marks), erasers (enzymes that remove marks), and readers (proteins that recognize marks). Include specific examples. (20 marks)' },
    { num: 'Q4.', question: 'Explain the opposing roles of histone acetyltransferases (HATs) and histone deacetylases (HDACs) in gene regulation. Why does acetylation activate transcription while deacetylation represses it? Discuss the therapeutic use of HDAC inhibitors in cancer. (18 marks)' },
    { num: 'Q5.', question: 'Describe the functions of the nuclear lamina. Explain what happens when lamin A/C is mutated, using at least three different laminopathies as examples (e.g., HGPS, EDMD, dilated cardiomyopathy). (18 marks)' },
    { num: 'Q6.', question: 'Explain the difference between DNMT1 (maintenance methylation) and DNMT3A/3B (de novo methylation). Why are both types necessary? Discuss the role of TET enzymes in DNA demethylation. (15 marks)' },
    { num: 'Q7.', question: 'Describe how specific histone modifications create a "histone code" that determines chromatin state. Compare H3K4me3 (active), H3K27me3 (repressive by PRC2), and H3K9me3 (heterochromatin) marks, including their functions and the enzymes responsible. (18 marks)' },
  ],
  5: [
    { num: 'Q1.', question: 'Compare and contrast the three types of cytoskeletal filaments: microtubules, actin filaments, and intermediate filaments. Include structure, composition, dynamics, and primary functions of each. (20 marks)' },
    { num: 'Q2.', question: 'Explain the role of tau protein in microtubule stabilization and describe what happens when tau becomes hyperphosphorylated in Alzheimer\'s disease. Include the kinases involved (GSK-3β, CDK5) and the formation of neurofibrillary tangles. (18 marks)' },
    { num: 'Q3.', question: 'Describe the differences between kinesin and dynein motor proteins. Include their directionality (plus vs minus end), cargo, speed, and specific roles in axonal transport. Explain the consequences of impaired axonal transport in neurodegeneration. (20 marks)' },
    { num: 'Q4.', question: 'Explain the four-step cycle of cell migration: protrusion, adhesion, contraction, and de-adhesion. For each step, describe the molecular mechanisms involved and the cytoskeletal structures required. (20 marks)' },
    { num: 'Q5.', question: 'Discuss the roles of the three major Rho GTPases in cell migration: Rac, Cdc42, and RhoA. For each, explain what structures they promote (lamellipodia, filopodia, or stress fibers) and their downstream effectors. (18 marks)' },
    { num: 'Q6.', question: 'Describe the structure and dynamics of microtubules, including the concept of dynamic instability. Explain the GTP cap model and what happens during catastrophe versus rescue events. (15 marks)' },
    { num: 'Q7.', question: 'Explain how focal adhesions function in cell migration. Include the role of integrins, the ECM proteins they bind, and key intracellular components (talin, vinculin, FAK). Discuss how focal adhesions transmit force. (18 marks)' },
  ],
  6: [
    { num: 'Q1.', question: 'Describe the structure and function of lysosomes. Explain how the acidic pH (~5) is maintained and why this pH is critical for lysosomal enzyme function. Include the role of V-ATPase and the consequences of pH disruption. (18 marks)' },
    { num: 'Q2.', question: 'Explain the mannose-6-phosphate (M6P) targeting pathway for lysosomal enzymes. Include where the M6P tag is added, which enzymes are involved, and what happens in I-cell disease when this pathway is defective. (20 marks)' },
    { num: 'Q3.', question: 'Compare and contrast the three types of autophagy: macroautophagy, microautophagy, and chaperone-mediated autophagy (CMA). For each, describe the mechanism, cargo selectivity, and physiological roles. (20 marks)' },
    { num: 'Q4.', question: 'Explain how mTOR regulates autophagy. Describe what happens to mTOR activity and autophagy during nutrient-rich versus starvation conditions. Include the downstream effects on the ULK1 complex. (15 marks)' },
    { num: 'Q5.', question: 'Describe Gaucher disease in detail: the enzyme deficiency (GBA1), the substrate that accumulates (glucocerebroside), the characteristic Gaucher cells, and clinical manifestations. Compare the three disease types. (20 marks)' },
    { num: 'Q6.', question: 'Explain the two therapeutic approaches for Gaucher disease: enzyme replacement therapy (ERT) and substrate reduction therapy (SRT). For each, describe the mechanism, advantages, limitations, and specific drugs used. (18 marks)' },
    { num: 'Q7.', question: 'Discuss the connection between Gaucher disease (GBA1 mutations) and Parkinson\'s disease. Why do GBA1 mutations increase PD risk? Explain the mechanistic link involving lysosomal dysfunction and α-synuclein accumulation. (18 marks)' },
  ],
  7: [
    { num: 'Q1.', question: '[40-MARK ESSAY - 2019 EXAM QUESTION] Describe in detail the process of protein synthesis, from its inception in the nucleus, to the post-translational modifications of the newly formed polypeptide chains, and the transport along the different cellular compartments. Include: (1) Transcription and RNA processing (2) Translation initiation (3) Signal sequence recognition (4) ER translocation pathways (5) N-glycosylation (6) Quality control (7) COPII vesicle formation (8) Golgi processing (9) Final secretion This is THE most comprehensive question - practice this extensively! (40 marks)' },
    { num: 'Q2.', question: 'Compare and contrast co-translational versus post-translational translocation into the ER. For each pathway, describe the complete mechanism including: signal recognition, ribosome/protein targeting, translocon engagement, and the driving force for translocation. (20 marks)' },
    { num: 'Q3.', question: 'Describe the complete N-glycosylation pathway from dolichol-linked oligosaccharide synthesis through ER quality control. Include: en bloc transfer by OST, glucose trimming by glucosidases I/II, the calnexin/calreticulin cycle, and the role of UGGT in quality control. (25 marks)' },
    { num: 'Q4.', question: 'Explain the UGGT (UDP-glucose:glycoprotein glucosyltransferase) quality control mechanism. How does UGGT distinguish between properly folded and misfolded glycoproteins? What happens when a protein repeatedly fails to fold correctly? (18 marks)' },
    { num: 'Q5.', question: 'Compare COPII vesicles (ER→Golgi) and COPI vesicles (Golgi→ER) in terms of: coat proteins, direction of transport, cargo selection, and physiological roles. Explain the KDEL retrieval pathway mediated by COPI. (20 marks)' },
    { num: 'Q6.', question: 'Describe clathrin-coated vesicles: their structure (triskelion), the role of adaptor proteins (AP-1, AP-2), the different pathways they mediate, and how cargo is selected for inclusion in these vesicles. (18 marks)' },
    { num: 'Q7.', question: 'Explain prion diseases at the molecular level. Compare PrPc and PrPsc in terms of structure, properties, and function. Describe how prions propagate without nucleic acids and why they can cross species barriers. Include examples of prion diseases. (20 marks)' },
  ],
  8: [
    { num: 'Q1.', question: 'Describe the three branches of the Unfolded Protein Response (UPR): PERK, IRE1, and ATF6. For each branch, explain: the sensor protein, the activation mechanism, the downstream transcription factor, and the target genes activated. (25 marks)' },
    { num: 'Q2.', question: 'Explain the role of GRP78/BiP as the master regulator of the UPR. How does GRP78 keep PERK, IRE1, and ATF6 inactive under normal conditions? What happens during ER stress to activate all three branches simultaneously? (18 marks)' },
    { num: 'Q3.', question: 'Describe the PERK pathway in detail, from PERK activation through to CHOP induction. Explain the paradox: eIF2α phosphorylation reduces global translation, but INCREASES ATF4 translation. Why is high CHOP expression considered maladaptive? (20 marks)' },
    { num: 'Q4.', question: 'Explain the IRE1 pathway, focusing on its endoribonuclease activity. Describe how IRE1 splices XBP1 mRNA (removal of 26bp intron) and what XBP1s (spliced form) does as a transcription factor. (18 marks)' },
    { num: 'Q5.', question: 'Describe ERAD (ER-Associated Degradation): what proteins are targeted, how they are recognized as terminally misfolded, the retrotranslocation process, and the role of the proteasome. Include the role of p97/VCP. (18 marks)' },
    { num: 'Q6.', question: 'Discuss how ER stress is involved in Alzheimer\'s disease. Include evidence of UPR activation (XBP1 splicing, CHOP expression), the relationship between Aβ/tau and ER stress, and caspase activation (caspase-12/4). (18 marks)' },
    { num: 'Q7.', question: 'Explain the difference between adaptive (beneficial) and maladaptive (harmful) UPR. Under what conditions does the UPR shift from promoting survival to triggering apoptosis? Include the role of CHOP, DR5, and GADD34 in the maladaptive response. (20 marks)' },
  ],
  9: [
    { num: 'Q1.', question: 'Describe the cell cycle phases (G1, S, G2, M) including approximate durations and key events in each phase. Explain the restriction point (R) and why it represents the "point of no return." Discuss what determines whether a cell passes the restriction point. (20 marks)' },
    { num: 'Q2.', question: 'Explain the cyclin-CDK pairs that control each phase of the cell cycle: Cyclin D/CDK4/6 (G1), Cyclin E/CDK2 (G1/S), Cyclin A/CDK2 (S), and Cyclin B/CDK1 (M). For each, describe their specific substrates and functions. (20 marks)' },
    { num: 'Q3.', question: 'Describe the pRB/E2F pathway in detail. Explain how hypophosphorylated pRB inhibits E2F, how cyclin-CDK complexes phosphorylate pRB, and what happens when pRB is released from E2F. Discuss what happens when pRB is mutated (retinoblastoma). (20 marks)' },
    { num: 'Q4.', question: 'Explain p53 as the "Guardian of the Genome." Describe: how p53 is normally kept at low levels (MDM2), how DNA damage activates p53 (ATM/ATR kinases), and the three possible outcomes (cell cycle arrest, apoptosis, senescence). Include the specific target genes for each outcome. (25 marks)' },
    { num: 'Q5.', question: 'Describe p21 as a universal CDK inhibitor. Explain how p21 causes cell cycle arrest by inhibiting multiple cyclin-CDK complexes. Compare p21 to other CDK inhibitors (p16, p27) in the INK4 and CIP/KIP families. (18 marks)' },
    { num: 'Q6.', question: 'Explain cellular senescence: what it is, how it differs from quiescence (G0), the molecular markers (SA-β-gal, p16, p21, p53), and SASP (senescence-associated secretory phenotype). Discuss the role of senescence in aging and cancer prevention. (20 marks)' },
    { num: 'Q7.', question: 'Describe the cell cycle checkpoints: G1/S (restriction point), G2/M, and the spindle assembly checkpoint (M checkpoint). For each, explain what is being monitored, the key regulatory proteins involved, and what happens if problems are detected. (20 marks)' },
  ],
  10: [
    { num: 'Q1.', question: 'Explain the concept of mitochondrial membrane potential (ΔΨm): how it is generated (which ETC complexes pump protons), what the typical value is (~-180 mV), and why ΔΨm is critical for mitochondrial function and serves as a damage sensor. (18 marks)' },
    { num: 'Q2.', question: 'Describe the fate of PINK1 in healthy versus damaged mitochondria. Include: PINK1 import through TOM/TIM, cleavage by MPP and PARL, degradation in healthy mitochondria, and accumulation on the OMM when ΔΨm drops. Explain why ΔΨm determines PINK1\'s fate. (20 marks)' },
    { num: 'Q3.', question: 'Explain the complete PINK1/Parkin mitophagy pathway (10 steps minimum): from ΔΨm drop through to lysosomal degradation. Include: PINK1 accumulation, ubiquitin phosphorylation, Parkin recruitment and activation, OMM protein ubiquitination, autophagy receptor binding, and autophagosome formation. (25 marks)' },
    { num: 'Q4.', question: 'Describe Parkin as an E3 ubiquitin ligase. Explain: its auto-inhibited state in the cytoplasm, how PINK1 activates it (phosphorylation at Ser65), what proteins Parkin ubiquitinates (Mfn1/2, VDAC, TOM20), and why ubiquitinating Mfn1/2 is important for mitophagy. (20 marks)' },
    { num: 'Q5.', question: 'Explain how rotenone models Parkinson\'s disease. Include: its mechanism as a Complex I inhibitor, the downstream effects (↓ATP, ↓ΔΨm, ↑ROS), why it causes selective dopaminergic neuron death, and how it induces α-synuclein aggregation. (18 marks)' },
    { num: 'Q6.', question: 'Discuss PINK1 and Parkin mutations in Parkinson\'s disease. For each: mode of inheritance (autosomal recessive), age of onset, prevalence, and mechanistic explanation (loss of mitophagy → damaged mitochondria accumulate). Why are dopaminergic neurons especially vulnerable? (20 marks)' },
    { num: 'Q7.', question: 'Explain mitochondrial fusion and fission: the proteins involved (Mfn1/2 and OPA1 for fusion; Drp1, Fis1 for fission), why these processes are important, and how Parkin disrupts fusion during mitophagy by targeting Mfn1/2 for degradation. (18 marks)' },
  ],
  11: [
    { num: 'Q1.', question: 'Describe the TCA cycle (Krebs cycle): location, the entry point (Acetyl-CoA), the complete cycle showing key intermediates, and the products per turn (3 NADH, 1 FADH₂, 1 GTP, 2 CO₂). Include the three regulated enzymes (citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase). (25 marks)' },
    { num: 'Q2.', question: 'Explain anaplerotic reactions: what they are ("filling up"), why they\'re necessary, and the main anaplerotic reaction (pyruvate → oxaloacetate by pyruvate carboxylase). Describe what happens when TCA intermediates are removed for biosynthesis and how anaplerosis maintains cycle flux. (18 marks)' },
    { num: 'Q3.', question: 'Describe the complete carnitine shuttle system for fatty acid transport into mitochondria. Include: CPT-1 on OMM, CAT transporter in IMM, CPT-2 in matrix, and the importance of malonyl-CoA inhibition of CPT-1 to prevent futile cycling. (20 marks)' },
    { num: 'Q4.', question: 'Explain β-oxidation of fatty acids: the four steps of each cycle (oxidation-FADH₂, hydration, oxidation-NADH, thiolysis-Acetyl-CoA), using palmitate (16:0) as an example. Calculate the products: 8 Acetyl-CoA, 7 FADH₂, 7 NADH → ~106 ATP total. Compare to glucose oxidation (~30-32 ATP). (20 marks)' },
    { num: 'Q5.', question: 'Describe the insulin signaling pathway: Insulin receptor (tyrosine kinase) → IRS → PI3K → PIP3 → Akt activation. Explain what Akt does: GLUT4 translocation, glycogen synthesis activation, mTOR activation, and gluconeogenesis inhibition. (20 marks)' },
    { num: 'Q6.', question: 'Explain the diabetes-Alzheimer\'s disease connection ("Type 3 Diabetes"). Include four mechanisms: (1) brain insulin resistance → ↓glucose metabolism (2) AGEs → RAGE → inflammation/tau/Aβ (3) loss of insulin signaling → GSK-3β overactive → tau pathology (4) vascular damage. (25 marks)' },
    { num: 'Q7.', question: 'Describe AGEs (Advanced Glycation End products): how they form (non-enzymatic glycation), what RAGE does when AGEs bind, and the downstream effects (oxidative stress, NF-κB activation, inflammation). Discuss how GLP-1 agonists show promise for both diabetes and Alzheimer\'s disease. (20 marks)' },
  ],
  12: [
    { num: 'Q1.', question: 'Define MAMs (Mitochondria-Associated ER Membranes): what they are (contact sites 10-30nm), how much of the mitochondrial surface they comprise (~5-20%), and their five main functions. Explain why these contact sites are important for cellular physiology. (18 marks)' },
    { num: 'Q2.', question: 'Describe the major tethering proteins that maintain MAMs: Mfn1/Mfn2, VAPB-PTPIP51, and the IP3R-GRP75-VDAC complex. For Mfn2, explain its dual role in both mitochondrial fusion AND MAM tethering. (20 marks)' },
    { num: 'Q3.', question: 'Explain PACS2 as the master regulator of MAM formation. Describe what PACS2 does, how it\'s dysregulated in Alzheimer\'s disease, and the consequences of PACS2 dysfunction (disrupted ER-mitochondria interface → impaired Ca²⁺ homeostasis → ER stress + mitochondrial dysfunction). (18 marks)' },
    { num: 'Q4.', question: 'Describe the complete Ca²⁺ transfer pathway at MAMs: IP3R (ER) releases Ca²⁺ → GRP75 linker → VDAC (OMM) → MCU (IMM) → matrix. Explain the dual nature of mitochondrial Ca²⁺: beneficial (activates TCA dehydrogenases → ↑ATP) versus harmful (overload → MPT → apoptosis). (25 marks)' },
    { num: 'Q5.', question: 'Explain the role of MAMs in early versus late/prolonged ER stress. Include: adaptive response (Ca²⁺ transfer → metabolic coordination → ↑ATP) versus maladaptive response (excessive Ca²⁺ → mitochondrial dysfunction → energetic collapse). (20 marks)' },
    { num: 'Q6.', question: 'Describe how MAMs are disrupted in insulin resistance. Include: palmitic acid (saturated fat) disrupts MAMs, the protective effect of Mfn2 overexpression, and how MAM dysfunction contributes to diabetes. Explain the mechanistic link between MAM disruption and insulin resistance. (20 marks)' },
    { num: 'Q7.', question: 'Discuss the connection between PINK1/Parkin mitophagy and MAMs. Explain how Parkin ubiquitinates Mfn1/2 (which are MAM tethers), the consequence of Mfn2 degradation on ER-mitochondria contacts, and why disrupting MAMs helps isolate damaged mitochondria. (18 marks)' },
  ],
  13: [
    { num: 'Q1.', question: 'Describe cardiolipin structure in detail: dimeric phospholipid with 4 fatty acids, 2 phosphate groups, 3 glycerol backbones. Explain why it\'s found ONLY in the inner mitochondrial membrane and its four major functions (ETC complex assembly, cristae structure, cytochrome c binding, protein import). (20 marks)' },
    { num: 'Q2.', question: 'Explain CRLS1 (cardiolipin synthase 1): what it does, where it\'s located, and what happens when CRLS1 is dysfunctional. Describe the cardiolipin remodeling process (tafazzin) and what happens in Barth syndrome when remodeling is defective. (18 marks)' },
    { num: 'Q3.', question: 'Describe the complete cardiolipin oxidation and apoptosis pathway (minimum 8 steps): H₂O₂ → cytochrome c becomes peroxidase → oxidizes cardiolipin → oxidized CL has reduced affinity → cyt c detaches → CLox on OMM → attracts tBID → BAX/BAK → MOMP → cyt c release → apoptosome → apoptosis. Explain why CL oxidation is REQUIRED for apoptosis. (25 marks)' },
    { num: 'Q4.', question: 'Explain the normal cardiolipin-cytochrome c interaction. Include: electrostatic binding (CL negative, cyt c positive), the function of this binding (keeps cyt c in mitochondria, prevents apoptosis), and what breaks this interaction (CL oxidation). (18 marks)' },
    { num: 'Q5.', question: 'Describe cardiolipin changes in Alzheimer\'s disease: reduced total CL levels, decreased CRLS1 expression, altered composition, early changes in synaptic mitochondria. Explain the consequences: ↓ETC activity, ↓ATP production, disrupted cristae, mitochondrial dysfunction. (20 marks)' },
    { num: 'Q6.', question: 'Explain neuroglobin as a neuroprotective protein: structure (O₂-binding globin with heme), localization (cytoplasm but translocates to mitochondria), and four protective mechanisms (prevents cytochrome c release, inhibits CL oxidation, activates PI3K/Akt, maintains ΔΨm/ATP). (20 marks)' },
    { num: 'Q7.', question: 'Describe neuroglobin\'s effects in Alzheimer\'s disease models. Include: attenuation of Aβ-induced apoptosis, caspase inhibition, PI3K/Akt activation. Discuss transgenic mouse studies showing reduced neurodegeneration and improved cognition with Ngb overexpression. Explain therapeutic potential. Also discuss how both neuroglobin and CRLS1 decrease with aging (double vulnerability). (25 marks) ================================================================================ INTEGRATION QUESTIONS - CONNECTING ACROSS LECTURES ================================================================================' },
    { num: 'Q1.', question: 'Trace the complete pathway from lipid raft-associated APP processing (Lecture 2) through protein misfolding and ER stress (Lectures 7, 8) to mitochondrial dysfunction (Lecture 10) and apoptosis (Lecture 13) in Alzheimer\'s disease. Show how multiple lectures connect to explain AD pathology. (30 marks)' },
    { num: 'Q2.', question: 'Explain how insulin resistance (Lecture 11) leads to brain pathology in Alzheimer\'s disease, incorporating: diabetes-AD connection, AGEs/RAGE signaling, MAM dysfunction (Lecture 12), mitochondrial impairment, and tau hyperphosphorylation via GSK-3β. Discuss GLP-1 agonists as therapeutic intervention. (25 marks)' },
    { num: 'Q3.', question: 'Describe the multiple connections between Gaucher disease (Lecture 6) and Parkinson\'s disease (Lecture 10). Include: GBA1 mutations as PD risk factor, lysosomal dysfunction, impaired autophagy/mitophagy, α-synuclein accumulation, and the mechanistic link explaining why lysosomal storage diseases increase neurodegeneration risk. (25 marks)' },
    { num: 'Q4.', question: 'Explain how ER stress (Lecture 8) affects mitochondria through MAMs (Lecture 12). Distinguish between adaptive response (early stress → Ca²⁺ coordination → ↑ATP) and maladaptive response (prolonged stress → Ca²⁺ overload → energetic collapse). Include the role of GRP78 at MAMs. (20 marks)' },
    { num: 'Q5.', question: 'Connect the PINK1/Parkin pathway (Lecture 10) to MAM disruption (Lecture 12). Explain how Parkin ubiquitinates Mfn2 (both a fusion protein AND MAM tether), the consequences for ER-mitochondria communication, and why disrupting MAMs during mitophagy makes biological sense. (20 marks)' },
    { num: 'Q6.', question: 'Discuss how epigenetic modifications (Lecture 4) could affect the expression of genes involved in: lipid raft composition (Lecture 2), lysosomal enzymes (Lecture 6), UPR components (Lecture 8), and mitochondrial quality control (Lecture 10). Consider DNA methylation and histone modifications. (20 marks)' },
    { num: 'Q7.', question: 'Explain the cell cycle dysregulation (Lecture 9) observed in neurodegeneration (Lectures 2, 8, 10, 13). Include: aberrant cell cycle re-entry in post-mitotic neurons, the role of p53 in neuronal apoptosis, connections between cell cycle proteins and tau phosphorylation, and why this represents a failed attempt at division leading to death. (25 marks) ================================================================================ EXAM STRATEGY TIPS ================================================================================ FOR 40-MARK ESSAY (Lecture 7 - PTM): - Spend ~45 minutes - Create outline first (2 minutes) - Introduction with overview (5 minutes) - Each major section with detailed mechanisms (30 minutes): * Transcription & RNA processing * Translation & signal recognition * ER translocation (co- and post-translational) * N-glycosylation (dolichol, OST, UGGT, calnexin) * COPII vesicles * Golgi processing * Secretion - Conclusion with clinical relevance (3 minutes) - Review and add missing details (5 minutes) FOR 20-MARK ESSAYS: - Spend ~25 minutes - Brief introduction (2-3 sentences) - Main content with clear subheadings or logical flow - Include specific mechanisms, protein names, and pathways - Clinical relevance where appropriate - Brief conclusion FOR 15-18 MARK ESSAYS: - Spend ~20 minutes - More focused on specific mechanisms - Less background, more detail on the actual question - Include examples and specific proteins/pathways GENERAL TIPS: - Draw diagrams where helpful (especially for pathways) - Use bullet points for complex lists ONLY when appropriate - Define acronyms first time used - Include numbers (ΔΨm = -180mV, pH~5, etc.) - Connect to disease when relevant - Show understanding, not just memorization HIGH-PRIORITY TOPICS FOR EXAM: 1. Lecture 7 (PTM) - 40-mark essay, know EVERYTHING 2. PINK1/Parkin pathway - complete mechanism 3. UPR branches (PERK/IRE1/ATF6) - all three in detail 4. Cardiolipin oxidation → apoptosis - step by step 5. Cell cycle regulation - cyclins/CDKs, pRB/E2F, p53 6. Diabetes-AD connection - all mechanisms 7. MAMs - tethering, Ca²⁺ transfer, disease connections PRACTICE STRATEGY: - Do at least 3 timed practice essays from each lecture - Practice the 40-mark Lecture 7 question multiple times - Practice integration questions (cross-lecture) - Time yourself strictly - Review and improve based on these flashcards and lecture notes ================================================================================ END OF EXAM QUESTIONS Total: ~90 comprehensive exam-style questions covering all major topics ================================================================================ Good luck on your BY4048 exam! 🎓✨' },
  ],
  integration: [
    { num: 'Q1.', question: 'Trace the complete pathway from lipid raft-associated APP processing (Lecture 2) through protein misfolding and ER stress (Lectures 7, 8) to mitochondrial dysfunction (Lecture 10) and apoptosis (Lecture 13) in Alzheimer\'s disease. Show how multiple lectures connect to explain AD pathology. (30 marks)' },
    { num: 'Q2.', question: 'Explain how insulin resistance (Lecture 11) leads to brain pathology in Alzheimer\'s disease, incorporating: diabetes-AD connection, AGEs/RAGE signaling, MAM dysfunction (Lecture 12), mitochondrial impairment, and tau hyperphosphorylation via GSK-3β. Discuss GLP-1 agonists as therapeutic intervention. (25 marks)' },
    { num: 'Q3.', question: 'Describe the multiple connections between Gaucher disease (Lecture 6) and Parkinson\'s disease (Lecture 10). Include: GBA1 mutations as PD risk factor, lysosomal dysfunction, impaired autophagy/mitophagy, α-synuclein accumulation, and the mechanistic link explaining why lysosomal storage diseases increase neurodegeneration risk. (25 marks)' },
    { num: 'Q4.', question: 'Explain how ER stress (Lecture 8) affects mitochondria through MAMs (Lecture 12). Distinguish between adaptive response (early stress → Ca²⁺ coordination → ↑ATP) and maladaptive response (prolonged stress → Ca²⁺ overload → energetic collapse). Include the role of GRP78 at MAMs. (20 marks)' },
    { num: 'Q5.', question: 'Connect the PINK1/Parkin pathway (Lecture 10) to MAM disruption (Lecture 12). Explain how Parkin ubiquitinates Mfn2 (both a fusion protein AND MAM tether), the consequences for ER-mitochondria communication, and why disrupting MAMs during mitophagy makes biological sense. (20 marks)' },
    { num: 'Q6.', question: 'Discuss how epigenetic modifications (Lecture 4) could affect the expression of genes involved in: lipid raft composition (Lecture 2), lysosomal enzymes (Lecture 6), UPR components (Lecture 8), and mitochondrial quality control (Lecture 10). Consider DNA methylation and histone modifications. (20 marks)' },
    { num: 'Q7.', question: 'Explain the cell cycle dysregulation (Lecture 9) observed in neurodegeneration (Lectures 2, 8, 10, 13). Include: aberrant cell cycle re-entry in post-mitotic neurons, the role of p53 in neuronal apoptosis, connections between cell cycle proteins and tau phosphorylation, and why this represents a failed attempt at division leading to death. (25 marks) ================================================================================' },
  ],
};

const lectures = Array.from({ length: 12 }, (_, index) => {
  const id = index + 2;
  const studyTimes = {
    2: "6h", 3: "5h", 4: "5.5h", 5: "5h", 6: "5h", 7: "7h",
    8: "5h", 9: "5.5h", 10: "5.5h", 11: "5.5h", 12: "5h", 13: "7h"
  };
  
  return {
    id,
    title: `Lecture ${id}`,
    subtitle: id === 2 ? "Lipid Rafts" : 
              id === 3 ? "Voltage-gated Ion Channels" :
              id === 4 ? "Nucleus & Epigenetics" :
              id === 5 ? "Migration & Motor Proteins" :
              id === 6 ? "Lysosomal Function" :
              id === 7 ? "Post-Translational Modifications" :
              id === 8 ? "ER Stress" :
              id === 9 ? "Cell Cycle & p53" :
              id === 10 ? "PINK1/Parkin" :
              id === 11 ? "Mitochondrial Metabolism" :
              id === 12 ? "MAMs" : "Cardiolipin & Neuroglobin",
    studyTime: studyTimes[id],
    highPriority: [7, 8, 9, 10, 11, 12, 13].includes(id),
    topPriority: id === 7,
  };
});

const contentTypes = [
  {
    value: "notes",
    label: "Lecture full notes",
    icon: BookOpen,
    heading: "Full Lecture Notes",
    nextMode: "flashcards",
  },
  {
    value: "flashcards",
    label: "Flash cards",
    icon: Layers,
    heading: "Flash Cards",
    nextMode: "testing",
  },
  {
    value: "testing",
    label: "Testing",
    icon: ClipboardList,
    heading: "Testing Mode",
    nextMode: null,
  },
];

// FormattedLectureNotes Component - Parses and displays lecture notes with sections
function FormattedLectureNotes({ content, lectureTitle }) {
  const [expandedSections, setExpandedSections] = useState({});
  
  if (!content) return <p className="text-slate-600">No notes available for this lecture.</p>;
  
  // Parse the content into sections
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;
  let currentSubsubsection = null;
  let currentContent = [];
  
  lines.forEach((line, index) => {
    if (line.startsWith('### ')) {
      // H3 - Sub-subsection (handle BEFORE H2 and H1)
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
      }
      currentSubsubsection = {
        id: `subsubsection-${index}`,
        title: line.replace(/^### /, ''),
        level: 3,
        content: ''
      };
      currentContent = [];
    } else if (line.startsWith('## ')) {
      // H2 - Subsection
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
        currentSubsubsection = null;
      }
      if (currentSubsection && currentContent.length > 0 && !currentSubsubsection) {
        currentSubsection.content = currentContent.join('\n');
      }
      if (currentSubsection) {
        currentSection?.subsections.push(currentSubsection);
      }
      currentSubsection = {
        id: `subsection-${index}`,
        title: line.replace(/^## /, ''),
        level: 2,
        content: '',
        subsubsections: []
      };
      currentContent = [];
    } else if (line.startsWith('# ')) {
      // H1 - Main section
      if (currentSubsubsection) {
        currentSubsubsection.content = currentContent.join('\n');
        if (currentSubsection) {
          if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
          currentSubsection.subsubsections.push(currentSubsubsection);
        }
        currentSubsubsection = null;
      }
      if (currentSubsection) {
        if (currentContent.length > 0 && !currentSubsubsection) {
          currentSubsection.content = currentContent.join('\n');
        }
        currentSection?.subsections.push(currentSubsection);
        currentSubsection = null;
      }
      if (currentSection) {
        if (currentContent.length > 0 && !currentSubsection) {
          currentSection.content = currentContent.join('\n');
        }
        sections.push(currentSection);
      }
      currentSection = {
        id: `section-${index}`,
        title: line.replace(/^# /, ''),
        level: 1,
        subsections: [],
        content: ''
      };
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  });
  
  // Push the last items
  if (currentSubsubsection) {
    currentSubsubsection.content = currentContent.join('\n');
    if (currentSubsection) {
      if (!currentSubsection.subsubsections) currentSubsection.subsubsections = [];
      currentSubsection.subsubsections.push(currentSubsubsection);
    }
  } else if (currentSubsection) {
    currentSubsection.content = currentContent.join('\n');
    currentSection?.subsections.push(currentSubsection);
  } else if (currentSection && currentContent.length > 0) {
    currentSection.content = currentContent.join('\n');
  }
  if (currentSection) {
    sections.push(currentSection);
  }
  
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  const renderContent = (text) => {
    if (!text || text.trim() === '') return null;
    return (
      <div className="whitespace-pre-wrap text-base leading-relaxed text-slate-700">
        {text}
      </div>
    );
  };
  
  return (
    <div className="space-y-4">
      {sections.map((section, idx) => {
        // Skip table of contents and title sections
        if (section.title.includes('Table of Contents') || 
            section.title.includes('Complete Exam Study Notes') ||
            idx === 0) {
          return null;
        }
        
        const isExpanded = expandedSections[section.id] !== false; // Default expanded
        
        return (
          <div key={section.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
            >
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <ChevronDown 
                className={`h-5 w-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            
            {/* Section Content */}
            {isExpanded && (
              <div className="px-5 pb-5 space-y-4">
                {renderContent(section.content)}
                
                {/* Subsections */}
                {section.subsections.map((subsection) => {
                  const subExpanded = expandedSections[subsection.id] !== false;
                  
                  return (
                    <div key={subsection.id} className="ml-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                      <button
                        onClick={() => toggleSection(subsection.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100 transition"
                      >
                        <h3 className="text-lg font-semibold text-slate-800">{subsection.title}</h3>
                        <ChevronDown 
                          className={`h-4 w-4 text-slate-500 transition-transform ${subExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {subExpanded && (
                        <div className="px-4 pb-4 space-y-3">
                          {renderContent(subsection.content)}
                          
                          {/* Sub-subsections (H3 headers like Ceramide, Gangliosides) */}
                          {subsection.subsubsections?.map((subsubsection) => (
                            <div key={subsubsection.id} className="ml-2 p-4 rounded-lg bg-white border border-slate-200">
                              <h4 className="text-base font-semibold text-slate-800 mb-2">{subsubsection.title}</h4>
                              {renderContent(subsubsection.content)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// TestingSection Component - Manages state for collapsible answer guides
function TestingSection({ selectedLecture, activeLecture, examQuestions, handleGoBack }) {
  const [expandedAnswers, setExpandedAnswers] = useState({});
  
  const toggleAnswer = (index) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Exam Practice Questions</h2>
            <p className="mt-2 text-slate-600">
              {activeLecture?.title} - {examQuestions[selectedLecture]?.length || 0} essay questions
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Practice these in exam conditions - time yourself and write full essay answers
            </p>
          </div>

          <div className="space-y-4">
            {examQuestions[selectedLecture]?.map((q, index) => (
              <div key={index} className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-slate-800">
                        {q.question}
                      </p>
                      {q.question.includes('40 marks') && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">
                          <span>⭐</span>
                          <span>40-MARK ESSAY - HIGH PRIORITY</span>
                        </div>
                      )}
                      {q.question.match(/\((\d+) marks\)/)?.[1] && (
                        <div className="mt-3 text-sm font-medium text-slate-500">
                          Time: ~{Math.round(parseInt(q.question.match(/\((\d+) marks\)/)[1]) * 1.25)} minutes
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <button
                          onClick={() => toggleAnswer(index)}
                          className="flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-200 transition"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedAnswers[index] ? '' : '-rotate-90'}`} />
                          <span>{expandedAnswers[index] ? 'Hide' : 'Show'} Answer Guide</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {expandedAnswers[index] && (
                  <div className="border-t-2 border-emerald-200 bg-emerald-50 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 rounded-lg bg-emerald-700 p-2">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-900">How to Answer This Question</h4>
                        <p className="text-sm text-emerald-700 mt-1">
                          Use the flashcards and lecture notes to build your answer
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white border border-emerald-200 p-4">
                      <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
                        {`USE FLASHCARDS: Check the MEGA flashcard pack for Lecture ${selectedLecture}

KEY STRUCTURE:
• Introduction (1 paragraph): Define key terms and state what you'll cover
• Main content (3-5 paragraphs): Detailed mechanisms and pathways
• Clinical relevance (1 paragraph): Disease connections and therapeutic implications  
• Conclusion (1 paragraph): Summary and significance

TIP: Organize flashcard answers into essay format with clear transitions between sections. Include specific protein names, numbers (pH values, ΔΨm, etc.), and clinical examples.`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {(!examQuestions[selectedLecture] || examQuestions[selectedLecture].length === 0) && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <p className="text-slate-600">No exam questions available for this lecture yet.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Integration Questions */}
      {selectedLecture === 13 && examQuestions.integration && (
        <Card className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-emerald-900">
                🔗 Integration Questions
              </h3>
              <p className="mt-2 text-emerald-700">
                Cross-lecture questions connecting multiple topics - {examQuestions.integration.length} questions
              </p>
            </div>

            <div className="space-y-4">
              {examQuestions.integration.map((q, index) => {
                const intIndex = `int-${index}`;
                return (
                  <div key={index} className="rounded-2xl border-2 border-emerald-300 bg-white overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-base leading-relaxed text-slate-800">
                            {q.question}
                          </p>
                          {q.question.match(/\((\d+) marks\)/)?.[1] && (
                            <div className="mt-3 text-sm font-medium text-emerald-700">
                              Time: ~{Math.round(parseInt(q.question.match(/\((\d+) marks\)/)[1]) * 1.25)} minutes
                            </div>
                          )}
                          
                          <div className="mt-4">
                            <button
                              onClick={() => toggleAnswer(intIndex)}
                              className="flex items-center gap-2 rounded-lg bg-emerald-200 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-300 transition"
                            >
                              <ChevronDown className={`h-4 w-4 transition-transform ${expandedAnswers[intIndex] ? '' : '-rotate-90'}`} />
                              <span>{expandedAnswers[intIndex] ? 'Hide' : 'Show'} Answer Guide</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {expandedAnswers[intIndex] && (
                      <div className="border-t-2 border-emerald-300 bg-emerald-50 p-6">
                        <div className="rounded-lg bg-white border border-emerald-300 p-4">
                          <p className="text-sm leading-relaxed text-slate-700">
                            <strong className="text-emerald-900">Integration Strategy:</strong><br />
                            Connect concepts from multiple lectures. Show how pathways link together. Include specific examples from each lecture mentioned in the question.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center justify-center">
        <Button
          onClick={handleGoBack}
          className="rounded-2xl bg-slate-200 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-300"
        >
          Back to Selection
        </Button>
      </div>
    </div>
  );
}

// FlashCard Component
function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="cursor-pointer h-64"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-600 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Question
            </span>
            <span className="text-xs text-slate-400">Click to flip</span>
          </div>
          <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
            <p className="text-center text-lg font-medium leading-relaxed text-slate-900">
              {question}
            </p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6 shadow-md"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-lg bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
              Answer
            </span>
            <span className="text-xs text-emerald-600">Click to flip back</span>
          </div>
          <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
            <p className="text-center text-base leading-relaxed text-slate-800">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LectureStudyDashboard() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedLecture, setSelectedLecture] = useState(2);
  const [selectedContentType, setSelectedContentType] = useState("notes");
  const [currentView, setCurrentView] = useState("selection");
  const [progressMenuOpen, setProgressMenuOpen] = useState(false);
  
  // Progress tracking: { lectureId: { notes: bool, flashcards: bool, testing: bool } }
  const [progress, setProgress] = useState(() => {
    const initial = {};
    for (let i = 2; i <= 13; i++) {
      initial[i] = { notes: false, flashcards: false, testing: false };
    }
    return initial;
  });

  const activeLecture = useMemo(
    () => lectures.find((lecture) => lecture.id === selectedLecture),
    [selectedLecture]
  );

  const activeContent = useMemo(
    () => contentTypes.find((content) => content.value === selectedContentType),
    [selectedContentType]
  );

  const ActiveIcon = activeContent?.icon || BookOpen;

  // Calculate overall progress
  const calculateProgress = () => {
    const totalSections = 12 * 3; // 12 lectures × 3 sections each
    let completedSections = 0;
    Object.values(progress).forEach(lecture => {
      if (lecture.notes) completedSections++;
      if (lecture.flashcards) completedSections++;
      if (lecture.testing) completedSections++;
    });
    return Math.round((completedSections / totalSections) * 100);
  };

  const toggleProgress = (lectureId, section) => {
    setProgress(prev => ({
      ...prev,
      [lectureId]: {
        ...prev[lectureId],
        [section]: !prev[lectureId][section]
      }
    }));
  };

  const handleOpenContent = () => {
    setCurrentView("content");
  };

  const handleGoBack = () => {
    setCurrentView("selection");
  };

  const handleNextMode = () => {
    if (activeContent?.nextMode) {
      setSelectedContentType(activeContent.nextMode);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Get flashcards for current lecture
  const currentFlashcards = flashcardData[selectedLecture] || [];

  const overallProgress = calculateProgress();

  // Progress Slide-out Menu
  const ProgressMenu = () => (
    <>
      {/* Overlay */}
      {progressMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setProgressMenuOpen(false)}
        />
      )}
      
      {/* Slide-out Panel */}
      <div 
        className={`fixed right-0 top-0 z-50 h-full w-96 transform bg-white shadow-2xl transition-transform duration-300 ${
          progressMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-slate-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Overall Progress</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setProgressMenuOpen(false)}
                className="rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">Course Completion</span>
                <span className="font-bold text-slate-900">{overallProgress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {Object.values(progress).reduce((sum, l) => sum + (l.notes ? 1 : 0) + (l.flashcards ? 1 : 0) + (l.testing ? 1 : 0), 0)} of 36 sections completed
              </p>
            </div>
          </div>

          {/* Lecture List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {lectures.map((lecture) => {
                const lectureProgress = progress[lecture.id];
                const completedSections = (lectureProgress.notes ? 1 : 0) + 
                                         (lectureProgress.flashcards ? 1 : 0) + 
                                         (lectureProgress.testing ? 1 : 0);
                const isComplete = completedSections === 3;
                
                return (
                  <div 
                    key={lecture.id}
                    className={`rounded-2xl border p-4 transition ${
                      isComplete 
                        ? 'border-emerald-200 bg-emerald-50' 
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${
                          isComplete ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {lecture.id}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{lecture.title}</p>
                          <p className="text-xs text-slate-500">{lecture.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-600">{completedSections}/3</span>
                    </div>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleProgress(lecture.id, 'notes')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.notes ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Notes</span>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(lecture.id, 'flashcards')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.flashcards ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Flashcards</span>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(lecture.id, 'testing')}
                        className="flex w-full items-center gap-2 text-left"
                      >
                        {lectureProgress.testing ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-slate-300" />
                        )}
                        <span className="text-xs text-slate-700">Testing</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Exam Prep View — embedded HTML page
  if (currentView === "examprep") {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
            <div className="flex h-16 items-center gap-4 px-6">
              <button
                onClick={() => setCurrentView("selection")}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100 transition"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </button>
              <div className="flex items-center gap-3 ml-2">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold tracking-tight">Section B — Exam Prep</h1>
                  <p className="text-xs text-slate-500">Hypothesis · Rationale · Methodology · Expected Results</p>
                </div>
              </div>
            </div>
          </header>

          {/* Embedded Exam Prep Page */}
          <div className="flex-1">
            <iframe
              src="exam-prep-section-b.html"
              title="Section B Exam Prep — Hypothesis & Model Answers"
              className="w-full border-0"
              style={{ height: "calc(100vh - 64px)" }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Content View Component
  if (currentView === "content") {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <div className="min-h-screen">
          {/* Header with Back Button */}
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
            <div className="flex h-16 items-center gap-4 px-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl"
                onClick={handleGoBack}
                aria-label="Go back to selection"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h1 className="truncate text-lg font-semibold tracking-tight">
                    {activeContent?.heading}
                  </h1>
                  <p className="truncate text-xs text-slate-500">{activeLecture?.title} - {activeLecture?.subtitle}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-6 md:p-8">
            <div className="mx-auto max-w-6xl">
              
              {/* NOTES MODE */}
              {selectedContentType === "notes" && (
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900">{activeLecture?.title}: {activeLecture?.subtitle}</h2>
                      <p className="mt-2 text-sm text-slate-600">
                        Complete book-style notes • Click sections to expand/collapse
                      </p>
                    </div>
                    
                    <FormattedLectureNotes 
                      content={window.lectureNotes[selectedLecture]} 
                      lectureTitle={activeLecture?.title} 
                    />

                    {/* Navigation to Next Mode */}
                    {activeContent?.nextMode && (
                      <div className="mt-12 flex items-center justify-center border-t border-slate-200 pt-8">
                        <Button
                          onClick={handleNextMode}
                          className="group flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800"
                        >
                          <span>Continue to Flash Cards</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* FLASHCARDS MODE */}
              {selectedContentType === "flashcards" && (
                <div className="space-y-6">
                  <Card className="rounded-3xl border-slate-200 shadow-sm">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Flash Cards</h2>
                        <p className="mt-2 text-slate-600">
                          {activeLecture?.title} - {currentFlashcards.length} cards
                        </p>
                        <p className="mt-2 text-sm text-slate-500">Click any card to flip and reveal the answer</p>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {currentFlashcards.map((card, index) => (
                          <FlashCard key={index} question={card.q} answer={card.a} />
                        ))}
                      </div>

                      {currentFlashcards.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                          <p className="text-slate-600">No flashcards available for this lecture yet.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Navigation to Next Mode */}
                  {activeContent?.nextMode && currentFlashcards.length > 0 && (
                    <div className="flex items-center justify-center">
                      <Button
                        onClick={handleNextMode}
                        className="group flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-base font-medium text-white hover:bg-slate-800"
                      >
                        <span>Continue to Testing</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* TESTING MODE */}
              {selectedContentType === "testing" && (
                <TestingSection 
                  selectedLecture={selectedLecture}
                  activeLecture={activeLecture}
                  examQuestions={examQuestions}
                  handleGoBack={handleGoBack}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Selection View (Original Layout)
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <ProgressMenu />
      <div className="flex min-h-screen">
        <aside
          className={`relative border-r border-slate-200 bg-white shadow-sm transition-all duration-300 ${
            menuOpen ? "w-72" : "w-20"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            {menuOpen && (
              <div>
                <h1 className="text-lg font-semibold tracking-tight">Study Hub</h1>
                <p className="text-xs text-slate-500">Lectures 2–13 + Exam Prep</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle lecture menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <nav className="space-y-2 p-3">
            {lectures.map((lecture) => {
              const isActive = lecture.id === selectedLecture;
              const isPriority = lecture.highPriority || lecture.topPriority;
              
              return (
                <button
                  key={lecture.id}
                  onClick={() => setSelectedLecture(lecture.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition relative ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : isPriority 
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {isPriority && !isActive && (
                    <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center">
                      <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                      </svg>
                    </div>
                  )}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${
                      isActive 
                        ? "bg-white/15" 
                        : isPriority
                          ? "bg-yellow-100 text-yellow-900 border-2 border-yellow-400"
                          : "bg-slate-200"
                    }`}
                  >
                    {lecture.id}
                  </div>
                  {menuOpen && (
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-medium">{lecture.title}</p>
                        <span className={`flex-shrink-0 text-xs font-medium ${
                          isActive ? "text-emerald-300" : "text-emerald-600"
                        }`}>
                          ~{lecture.studyTime}
                        </span>
                      </div>
                      <p className={`truncate text-xs ${
                        isActive 
                          ? "text-slate-300" 
                          : "text-slate-500"
                      }`}>
                        {lecture.subtitle}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Exam Prep Section B Button */}
          <div className="border-t border-slate-200 p-3">
            <button
              onClick={() => setCurrentView("examprep")}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition relative ${
                currentView === "examprep"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-semibold ${
                currentView === "examprep" ? "bg-white/20" : "bg-amber-100 border-2 border-amber-400"
              }`}>
                <FileText className="h-4 w-4" />
              </div>
              {menuOpen && (
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">Exam Prep — Section B</p>
                  <p className={`truncate text-xs ${currentView === "examprep" ? "text-amber-100" : "text-amber-600"}`}>
                    Hypothesis & Model Answers
                  </p>
                </div>
              )}
            </button>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                    Opened lecture
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    {activeLecture?.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    Select a lecture from the left menu, then choose what kind of study material you want to view.
                  </p>
                </div>

                <div className="w-full md:w-72">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Choose study mode
                  </label>
                  <div className="relative">
                    <select
                      value={selectedContentType}
                      onChange={(event) => setSelectedContentType(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-10 text-sm font-medium outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                    >
                      {contentTypes.map((content) => (
                        <option key={content.value} value={content.value}>
                          {content.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_280px]">
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white mt-1">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-xl font-semibold tracking-tight md:text-2xl">{activeContent?.heading}</h3>
                      <p className="truncate text-sm text-slate-500">{activeLecture?.title}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                    <p className="mb-4 text-base leading-7 text-slate-700">
                      {selectedContentType === "notes" && "Start by reading the complete lecture notes to understand all concepts."}
                      {selectedContentType === "flashcards" && `Practice with ${currentFlashcards.length} interactive flashcards for quick revision.`}
                      {selectedContentType === "testing" && "Test your knowledge with exam-style questions and MCQs."}
                    </p>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={handleOpenContent}
                        className="rounded-xl bg-slate-900 px-6 py-2 text-sm font-medium text-white hover:bg-slate-800"
                      >
                        Open {activeContent?.label}
                      </Button>
                      {selectedContentType === "flashcards" && (
                        <span className="text-sm text-slate-600">
                          {currentFlashcards.length} cards available
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">Lecture {selectedLecture} Progress</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setProgressMenuOpen(true)}
                        className="h-8 gap-2 rounded-lg text-xs"
                      >
                        <BarChart3 className="h-4 w-4" />
                        All Progress
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'notes')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.notes ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Notes</p>
                          <p className="text-xs text-slate-500">Read all material</p>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'flashcards')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.flashcards ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Flashcards</p>
                          <p className="text-xs text-slate-500">Practice all cards</p>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => toggleProgress(selectedLecture, 'testing')}
                        className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-slate-50"
                      >
                        {progress[selectedLecture]?.testing ? (
                          <CheckSquare className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                        ) : (
                          <Square className="h-5 w-5 flex-shrink-0 text-slate-300" />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-slate-900">Testing</p>
                          <p className="text-xs text-slate-500">Complete exam prep</p>
                        </div>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-slate-900">Study workflow</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'notes' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Read notes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'flashcards' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Practice flashcards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${selectedContentType === 'testing' ? 'bg-slate-900' : 'bg-slate-300'}`} />
                        <span>Test yourself</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(LectureStudyDashboard));
