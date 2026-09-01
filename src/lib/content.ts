export type Stance = "promise" | "risk" | "both";

export type Person = {
  id: string;
  name: string;
  role: string;
  org: string;
  initials: string;
  lever: string;
  stance: Stance;
  category: "lab" | "platform" | "chips" | "critic" | "open";
  bio: string;
  now: string;
};

export type EventItem = {
  id: string;
  date: string;
  title: string;
  body: string;
  tag: string;
  stance: Stance;
};

export type Field = {
  id: string;
  title: string;
  kicker: string;
  promise: string;
  risk: string;
  now: string;
};

export type Scenario = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  odds: string;
};

export const ISSUE = {
  name: "SIGNAL 2030",
  kicker: "Issue 01 · September 2026",
  tagline: "Who holds AI, what it already does, and the two futures it could write.",
  author: "Kang Veng Sreng",
};

export const people: Person[] = [
  {
    id: "musk",
    name: "Elon Musk",
    role: "Founder",
    org: "SpaceXAI · Tesla · X · Neuralink",
    initials: "EM",
    lever: "Compute, distribution, robots, brain interfaces",
    stance: "both",
    category: "lab",
    bio: "Musk co-founded OpenAI in 2015, left, then built a rival lab. In 2026 reporting, xAI was folded into SpaceXAI — putting Grok under the same roof as launch, satellites, and Tesla’s physical world. He argues open competition is a safety strategy, and also concentrates unusual power: social feed, chips via Tesla, humanoid robots, and a frontier model.",
    now: "Grok 4.6 shipped August 2026; Grok Bot agents run cloud-side tasks. Colossus is cited as a 200k-GPU cluster. CAISI pre-deployment testing now covers SpaceXAI alongside other frontier labs.",
  },
  {
    id: "altman",
    name: "Sam Altman",
    role: "CEO",
    org: "OpenAI",
    initials: "SA",
    lever: "Consumer scale + enterprise + next-gen models",
    stance: "both",
    category: "lab",
    bio: "Altman runs the lab that put generative AI in hundreds of millions of hands. OpenAI remains the loudest consumer brand even as Anthropic has, in 2026 reporting, pulled ahead on annualized revenue. He talks about digital superintelligence as near — and about hardware, agents, and products that stay in the loop for days.",
    now: "Enterprise deployment is reported at most of the Fortune 500. Partner previews of long-horizon ‘Astra’-class systems circulated in late August 2026. OpenAI is part of U.S. pre-deployment evaluation agreements.",
  },
  {
    id: "amodei",
    name: "Dario Amodei",
    role: "CEO",
    org: "Anthropic",
    initials: "DA",
    lever: "Enterprise models + safety research",
    stance: "both",
    category: "lab",
    bio: "Amodei left OpenAI to found Anthropic with a constitutional, safety-first pitch. By 2026 the company is no longer the underdog: reported ~$30B annualized revenue, Fortune 10 customers, and a valuation round discussed near $900B. The Future of Life Institute’s Summer 2026 safety index again ranked Anthropic first among major labs.",
    now: "Claude research posts in August 2026 cover protein design, analytical chemistry, and an unreleased model’s work on a Riemann-related problem. Heavy hiring from OpenAI, Google, Microsoft, and xAI.",
  },
  {
    id: "hassabis",
    name: "Demis Hassabis",
    role: "CEO",
    org: "Google DeepMind",
    initials: "DH",
    lever: "Science models + Google distribution",
    stance: "promise",
    category: "lab",
    bio: "Hassabis’s lab delivered AlphaFold, which cracked protein structure prediction and won a Nobel. In 2026 he has said AGI could arrive around 2030, plus or minus a year — and that current agents are a practice run. DeepMind sits inside Google’s full stack: search, Android, cloud, and custom TPUs.",
    now: "DeepMind is in CAISI pre-deployment evaluation agreements. Scientific assistants — code, biology protocols, weather — are the 2030 capability most analysts treat as already on a trend line.",
  },
  {
    id: "huang",
    name: "Jensen Huang",
    role: "CEO",
    org: "NVIDIA",
    initials: "JH",
    lever: "The chips everyone trains on",
    stance: "both",
    category: "chips",
    bio: "Frontier labs are downstream of NVIDIA. Training runs projected toward 2030 assume clusters measured in gigawatts and hundreds of billions of dollars. Huang’s company does not write the models; it decides how fast the race can run — and how expensive the electricity bill becomes.",
    now: "Grok 4.5 was reported trained on tens of thousands of GB300 GPUs. Data-center construction, not chatbots, is where a large share of new jobs is already showing up.",
  },
  {
    id: "nadella",
    name: "Satya Nadella",
    role: "CEO",
    org: "Microsoft",
    initials: "SN",
    lever: "Work software + Azure + OpenAI stake",
    stance: "promise",
    category: "platform",
    bio: "Nadella put Copilot inside the tools offices already pay for. That is a quieter form of power than a viral chatbot: default distribution. Microsoft is both OpenAI’s largest backer and a lab of its own, and it signed the 2026 U.S. pre-deployment testing agreements.",
    now: "Copilot has been reported past 15 million paid seats inside Microsoft 365’s hundreds of millions of users. Azure remains a primary cloud for frontier training.",
  },
  {
    id: "pichai",
    name: "Sundar Pichai",
    role: "CEO",
    org: "Google / Alphabet",
    initials: "SP",
    lever: "Search, Android, YouTube, DeepMind",
    stance: "both",
    category: "platform",
    bio: "If AI becomes the new interface, Google still owns the old one. Gemini, DeepMind research, YouTube data, and Android sit in one company. That is an advantage for product — and a concentration risk if a handful of firms mediate most of what people read, watch, and ask.",
    now: "Google I/O 2026 sat in a fortnight of lab announcements. DeepMind science tools and Gemini productization are the twin tracks.",
  },
  {
    id: "zuck",
    name: "Mark Zuckerberg",
    role: "CEO",
    org: "Meta",
    initials: "MZ",
    lever: "Open weights + social distribution",
    stance: "both",
    category: "open",
    bio: "Meta’s Llama strategy — release capable weights — changed who can run serious models. That is a genuine check on closed labs, and also a path for misuse the company does not fully control. Meta AI rides Instagram, WhatsApp, and Facebook. The Summer 2026 safety index had Meta rising while xAI fell.",
    now: "Open-weight competition now includes a Chinese cluster (DeepSeek, Qwen, Moonshot, Zhipu, Baichuan) as well as Llama. Meta remains one of the few Western labs shipping weights at scale.",
  },
  {
    id: "liang",
    name: "Liang Wenfeng",
    role: "Founder",
    org: "DeepSeek",
    initials: "LW",
    lever: "Cost curve + open models",
    stance: "both",
    category: "open",
    bio: "DeepSeek forced the industry to admit that frontier-adjacent capability does not only live in California, and does not only cost California prices. Cheap, strong open models compress the West’s moat — good for access, hard for export controls and for labs whose pitch is exclusive intelligence.",
    now: "Analysts in 2026 describe eight to ten poles at the frontier, including a fast Chinese group. DeepSeek is the name most often used as proof the race is multipolar.",
  },
  {
    id: "hinton",
    name: "Geoffrey Hinton",
    role: "Scientist",
    org: "Independent (ex-Google)",
    initials: "GH",
    lever: "Public risk narrative",
    stance: "risk",
    category: "critic",
    bio: "A ‘godfather’ of deep learning who left Google to speak freely about loss of control, misinformation, and autonomous weapons. He does not run a lab. He changes what voters and regulators think is at stake — which, in a 2026 world of government pre-deployment tests, is a form of power.",
    now: "His warnings sit behind CAISI-style evaluation deals and the safety-index pressure on labs that score poorly on transparency.",
  },
  {
    id: "lecun",
    name: "Yann LeCun",
    role: "Chief AI Scientist",
    org: "Meta",
    initials: "YL",
    lever: "Open science counter-narrative",
    stance: "promise",
    category: "critic",
    bio: "LeCun is the other godfather voice: skeptical that current LLMs are a straight line to godlike AGI, insistent that open research beats a handful of sealed labs. His stance is a check on both doomer timelines and closed-lab monopoly.",
    now: "The argument matters because 2030 forecasts still span ‘plateau at today’s level’ to ‘systems that broadly surpass humans’ — OECD’s 2026 range.",
  },
  {
    id: "fei",
    name: "Fei-Fei Li",
    role: "Scientist / founder",
    org: "Stanford · World Labs",
    initials: "FL",
    lever: "Spatial intelligence + public interest AI",
    stance: "promise",
    category: "critic",
    bio: "Li’s ImageNet work helped start the modern era. She now pushes spatial intelligence — models that understand the physical world — and a more public-interest framing than lab CEOs. If 2030 is about robots in homes and hospitals, her agenda is closer to that future than another chatbot UI.",
    now: "IEEE’s 2026 megatrends report rates physical AI and personalized medicine among the highest-impact 2030 technologies.",
  },
];

export const events: EventItem[] = [
  {
    id: "caisi",
    date: "May 2026",
    title: "U.S. pre-deployment tests cover all five frontier labs",
    body: "The Commerce Department’s Center for AI Standards and Innovation (CAISI) finalized evaluation agreements with OpenAI, Anthropic, Google DeepMind, Microsoft, and xAI/SpaceXAI. Frontier models now go through government testing before public launch — a real shift from voluntary letters in 2023–24.",
    tag: "Governance",
    stance: "both",
  },
  {
    id: "revenue",
    date: "Spring 2026",
    title: "Anthropic reported ahead of OpenAI on revenue",
    body: "Communications research in 2026 put Anthropic’s annualized revenue near $30B (April) versus OpenAI near $25B (February) — even as OpenAI’s consumer user base remains far larger. Enterprise, not chat virality, is where the money is concentrating.",
    tag: "Market",
    stance: "both",
  },
  {
    id: "grok46",
    date: "August 2026",
    title: "Grok 4.6 and always-on Grok Bot",
    body: "SpaceXAI released Grok 4.6 and a cloud agent (Grok Bot) that can stay signed into apps and run multi-step work without your laptop on. That is the ‘agentic era’ Hassabis called a practice run — and the security gap SIEM tools were not built for.",
    tag: "Agents",
    stance: "both",
  },
  {
    id: "claude-science",
    date: "August 2026",
    title: "Claude used on protein design and hard math",
    body: "Anthropic published results on protein design and analytical chemistry, plus an unreleased research model’s progress on a problem related to the Riemann hypothesis. Science is no longer a slide in a keynote. It is a weekly lab blog.",
    tag: "Science",
    stance: "promise",
  },
  {
    id: "safety-index",
    date: "Summer 2026",
    title: "Safety index: Anthropic on top, xAI slides",
    body: "The Future of Life Institute’s Summer 2026 AI Safety Index again ranked Anthropic first. OpenAI led risk assessment. Meta improved; xAI dropped from 4th to 7th. Safety is now a public scoreboard, not a private essay.",
    tag: "Safety",
    stance: "risk",
  },
  {
    id: "jobs",
    date: "2025–26 reports",
    title: "WEF: 170 million jobs created, 92 million displaced by 2030",
    body: "The World Economic Forum’s Future of Jobs work still projects net job growth — farm, care, construction, green tech — alongside deep disruption of clerical and some white-collar work. Goldman’s base case is a ~10-year adoption wave, not an overnight wipeout. The fight is the transition, not a zero-job future.",
    tag: "Labor",
    stance: "both",
  },
  {
    id: "power",
    date: "Through 2030",
    title: "Training runs heading toward gigawatts",
    body: "Epoch AI’s 2030 scaling work: if trends hold, frontier training uses ~1,000× today’s compute, clusters costing on the order of hundreds of billions, and gigawatts of power. Expert panels have put U.S. AI electricity use in the high single digits of national demand by 2030. The constraint is physical, not just software.",
    tag: "Energy",
    stance: "risk",
  },
  {
    id: "agi-talk",
    date: "2026 interviews",
    title: "Lab leaders keep pointing at ~2030 for AGI",
    body: "Demis Hassabis: around 2030 ± a year. Other lab heads have been earlier. Metaculus-style community forecasts collapsed from decades to this decade. OECD still treats four trajectories as plausible: stall, slow, continue, or accelerate past human-level cognitive work.",
    tag: "AGI",
    stance: "both",
  },
];

export const fields: Field[] = [
  {
    id: "health",
    title: "Health & biology",
    kicker: "Highest human impact",
    now: "AlphaFold already changed structural biology. 2026 lab posts show models helping protein design and chemistry. Insilico-style pipelines have cut early drug timelines. IEEE’s megatrends panel scored personalized medicine as the single highest-impact 2030 tech in its set.",
    promise:
      "Earlier diagnosis, trials matched to patients, and treatments aimed at ‘undruggable’ targets. Assistants for clinicians. Mental-health access without a waiting list. Longevity research that is no longer guesswork.",
    risk: "Approved drugs by 2030 will mostly have started in today’s pipelines — regulation is slow on purpose. Diagnostic errors, privacy of genomes, and unequal access could widen health gaps if the best models sit behind hospital systems the poor never reach.",
  },
  {
    id: "work",
    title: "Work & the economy",
    kicker: "The jagged middle",
    now: "Coding assistants are already default. Copilot paid seats are in the tens of millions. Agents are starting to execute, not just draft. WEF still sees net job creation by 2030; exposed occupations are clerical, some design, and knowledge work that is well-specified.",
    promise:
      "Productivity that looks like a junior staffer for every worker. New roles: AI work architects, stewards, data-center trades, power engineers. Software and math move fastest because they live entirely on screens.",
    risk: "Displacement outrunning reskilling. Graduates hitting a colder first-job market. Gains accruing to firms that own models and compute. ‘People without jobs and jobs without people’ — IEEE’s 2026 phrase.",
  },
  {
    id: "science",
    title: "Science & math",
    kicker: "On a measured trend line",
    now: "Epoch’s 2030 note: benchmarks already imply models that implement complex scientific software from language, help formalize proofs, and answer biology-protocol questions. Claude’s 2026 science posts are early evidence, not science fiction.",
    promise:
      "More software, more proofs, faster early-stage biology. Weather and materials. Assistants in every lab comparable to Copilot for engineers.",
    risk: "Experimental science still hits wet-lab and trial bottlenecks. Dual-use: the same systems that design proteins can be probed on biosecurity tasks — SpaceXAI published a biosecurity evaluation in September 2026.",
  },
  {
    id: "robots",
    title: "Robots & the physical world",
    kicker: "Slower than chat, faster than 2016",
    now: "IEEE puts physical AI among the strongest 2030 technical tracks. Robotaxis are expanding city by city. Humanoids are in warehouses first, homes later. Tesla, Figure, and Chinese manufacturers are in a hardware race the chatbot labs cannot skip.",
    promise:
      "Care for aging populations, dangerous industrial work, cheaper logistics. Intelligence that can see and move, not only talk.",
    risk: "Weapons, surveillance, and brittle robots in messy homes. Liability when a machine hurts someone. Labor shock in driving, warehousing, and retail if deployment is sudden.",
  },
  {
    id: "education",
    title: "Education",
    kicker: "A tutor in every pocket",
    now: "Students already use chat models as default homework infrastructure. Adaptive tutors exist; school systems have not caught up with assessment, cheating, or equity.",
    promise:
      "World-class explanation at the price of a phone. Curriculum that flexes to the student. Teachers multiplied, not replaced, if the integration is serious.",
    risk: "Homogenized thinking, collapsed attention, and a split between kids with guidance and kids with a chatbot and no adult. Credentials mean less if everyone can generate the essay.",
  },
  {
    id: "media",
    title: "Media, truth, and mind",
    kicker: "The information war is now",
    now: "Realtime voice and video interfaces are the next default (IEEE: two-to-three-year horizon). Deepfakes are a production cost, not a lab demo. Feeds are already optimized by ranking models.",
    promise:
      "Creation tools for people who cannot hire a studio. Translation, accessibility, archives that can be queried.",
    risk: "Elections, scams, non-consensual imagery, and a public that cannot tell a camera from a render. Concentration of the models that write the feed.",
  },
  {
    id: "energy",
    title: "Energy & infrastructure",
    kicker: "The hidden bottleneck",
    now: "Data-center construction is already visible in hiring (HVAC, electrical, trades). Epoch’s path to 2030 is gigawatts per frontier cluster if scaling continues. Some forecasters put AI electricity near EV-scale global demand.",
    promise:
      "AI that designs better grids, materials, and fusion-adjacent science. Efficiency gains that, in optimistic 2030 takes, bring inference cost down even as capability rises.",
    risk: "Local grid stress, water for cooling, and a buildout that locks in fossil generation. If the models are private, the public pays the power bill and does not own the output.",
  },
  {
    id: "states",
    title: "States & war",
    kicker: "The other customers",
    now: "CAISI testing is civilian-side. Militaries are a parallel market: targeting aids, cyber, logistics, and — in contested policy — lethal autonomy. China and the U.S. treat frontier models as strategic assets, which is why export rules and open weights collide.",
    promise:
      "Better disaster response, fraud detection, and public services that do not require a 14-month wait.",
    risk: "Autonomous weapons, surveillance states, and a race that trades safety for speed. Labs cannot opt out of being dual-use.",
  },
];

export const scenarios: Scenario[] = [
  {
    id: "slow",
    title: "Slow burn",
    kicker: "Progress cools",
    odds: "Still on the table",
    body: "Scaling hits energy, data, or algorithm walls. Models get cheaper and more embedded, but they do not leap. Labor shock stays sectoral. This is the UK ‘Slow Burn’ and OECD ‘stall/slow’ family: less drama, still a lot of software quietly rewriting offices.",
  },
  {
    id: "continue",
    title: "The measured climb",
    kicker: "Today’s trend holds",
    odds: "Base case in most 2026 papers",
    body: "Agents handle most remote knowledge tasks that are well-specified. Science assistants become normal in software, math, and early biology. Robotaxis are common in large cities. Productivity is real; so is a messy labor transition. AGI is argued about, not clearly here.",
  },
  {
    id: "takeoff",
    title: "Takeoff",
    kicker: "The 2030 bet lab CEOs keep making",
    odds: "Inside expert range, not consensus",
    body: "Hassabis’s ±2030 AGI window, automated AI research, systems that match or beat humans across most cognitive work (OECD’s accelerate scenario). Scientific breakthroughs compress. So do the risks of misalignment, concentration, and a public that did not get a vote. Unready institutions are the scary part even the CEOs name.",
  },
];

export const promises = [
  {
    title: "Science that used to take a career",
    body: "Protein folding is solved enough to win a Nobel. 2026 papers show models in protein design, chemistry, and proof assistance. Epoch’s extrapolation is blunt: by 2030, many labs will have AI co-workers the way engineers have Copilot now.",
  },
  {
    title: "Medicine that is actually personal",
    body: "IEEE’s 2026 panel put personalized medicine at the top of human impact. Diagnostics, trial matching, and eventually gene-aware treatment — if hospitals and regulators let them in.",
  },
  {
    title: "A tutor, analyst, and clerk for everyone",
    body: "The unglamorous win: people who could never hire staff get staff-shaped help. Language, code, law-lite, accounting-lite. Access is the moral case for capable models.",
  },
  {
    title: "Physical work humans should not do",
    body: "Warehouses, mines, elder-care lifting, disaster zones. Physical AI is slower than chat, but the 2030 reports put robots in the same conversation as models.",
  },
];

export const risks = [
  {
    title: "A handful of people set the default mind",
    body: "Frontier capability is concentrated in a few labs, one chip vendor, and two clouds. Their CEOs are in this briefing because they are not just founders — they are a new kind of public infrastructure, unelected.",
  },
  {
    title: "Labor shock before the new jobs arrive",
    body: "Net-job forecasts can be true and still brutal. Entry-level knowledge work is the first to hollow. Retraining evidence is mixed; Anthropic itself published a review of that evidence in 2026.",
  },
  {
    title: "Agents that act, then drift",
    body: "Always-on bots that log into apps create a security surface older tools miss. Help Net Security’s 2026 reporting on OpenAI vs Anthropic hiring maps this as a new class of operational risk.",
  },
  {
    title: "Truth, weapons, and energy",
    body: "Synthetic media, military dual-use, and gigawatt training clusters. Hinton’s list has not gotten shorter. Government evals are a start, not a finish — and safety indexes still show labs sliding.",
  },
];

export type Prediction = {
  id: string;
  title: string;
  stance: Stance;
  confidence: string;
  body: string;
  basis: string;
};

export const predictions2030: Prediction[] = [
  {
    id: "agents",
    title: "Agents, not chat boxes, are the default work tool",
    stance: "both",
    confidence: "High if trends hold",
    body: "Most well-specified remote tasks — tickets, code, filings, research briefs — are handled by systems that plan and act for hours or days. Humans set goals, review, and take liability. This is the UK ‘transformation economy’ path, not science fiction: Grok Bot and Copilot already point there in 2026.",
    basis: "Epoch software-engineering trend; IEEE agentic AI; 2026 cloud agents",
  },
  {
    id: "agi-window",
    title: "AGI is either here, or the loudest argument of the decade",
    stance: "both",
    confidence: "Inside expert range",
    body: "Hassabis’s ±2030 window, Amodei’s earlier bets, and Metaculus-style forecasts all put ‘human-level on most cognitive work’ in play. OECD still allows a plateau. Prediction: the public will not agree on the definition — but labs will be running systems that look close enough to force new law.",
    basis: "DeepMind 2026 interviews; OECD trajectories; lab-CEO statements",
  },
  {
    id: "cities",
    title: "Robotaxis are normal in large cities; humanoids stay industrial",
    stance: "promise",
    confidence: "Medium-high",
    body: "Driverless fleets in many metros. Warehouse and factory humanoids are common. Home robots exist as expensive appliances, not family members. Physical AI lags chat by years — IEEE still ranks it as a 2030 winner, not a 2027 one.",
    basis: "IEEE Megatrends 2030; robotaxi deployments",
  },
  {
    id: "clinic",
    title: "Clinics use AI daily; few approved drugs are ‘AI-born’ yet",
    stance: "promise",
    confidence: "High",
    body: "Radiology, triage, trial matching, and draft notes are routine. Personalized medicine is rolling out. Drugs that reach pharmacies in 2030 mostly entered pipelines in the mid-2020s — Epoch’s regulatory lag. The upside shows in discovery speed, not yet in a rewritten pharmacopeia.",
    basis: "IEEE personalized medicine; Epoch 2030 science note",
  },
  {
    id: "jobs",
    title: "Net jobs exist. Entry-level knowledge work is thinner.",
    stance: "risk",
    confidence: "High",
    body: "WEF-style net creation (care, green, trades, AI ops) can coexist with a brutal first-job market for graduates. Goldman’s ~10-year adoption wave is the base. The 2030 pain is transition, not a jobless planet.",
    basis: "WEF Future of Jobs; Goldman labor notes",
  },
  {
    id: "grid",
    title: "AI is a visible line item on the power grid",
    stance: "risk",
    confidence: "High if scaling continues",
    body: "Frontier clusters at gigawatt scale; national AI electricity in the high single digits in some expert panels. Data-center trades are a job engine. Local water and siting fights are politics, not footnotes. Musk’s 2026 G20 warning on power shortages is the preview.",
    basis: "Epoch compute/energy; LEAP electricity forecasts; G20 2026 remarks",
  },
  {
    id: "truth",
    title: "Realtime voice/video is the interface — and the forgery",
    stance: "risk",
    confidence: "High",
    body: "IEEE’s two-to-three-year shift away from typing lands before 2030. Cheap synthetic media is a civic problem, not a parlor trick. Elections, scams, and ‘did this happen’ are the daily fight.",
    basis: "IEEE human-AI interaction; 2026 deepfake economics",
  },
  {
    id: "gov",
    title: "Pre-release testing of frontier models is normal in the West",
    stance: "both",
    confidence: "Medium-high",
    body: "CAISI-style evals expand. Safety indexes stay public scoreboards. China and open-weight labs remain the hole in any Western-only regime. Governance is slower than capability — but it exists.",
    basis: "CAISI 2026 agreements; FLI Safety Index",
  },
];

export const predictions2050: Prediction[] = [
  {
    id: "asi",
    title: "If AGI arrived near 2030, superintelligence is the 2040s story",
    stance: "both",
    confidence: "Conditional",
    body: "Classic expert surveys (Bostrom / Müller) put a short hop from human-level to superintelligence — years to a few decades. Lab CEOs already talk about it. 2050 is late enough that either (a) it happened and civilization reorganized around it, or (b) the 2030 takeoff was wrong and we live in a world of very strong but still-tool AI. There is little middle.",
    basis: "Expert HLMI surveys; lab ‘superintelligence’ language; OECD accelerate vs stall",
  },
  {
    id: "work-mix",
    title: "Everyday work is a mix of humans, machines, and hybrids",
    stance: "promise",
    confidence: "High even without ASI",
    body: "Service-research 2050 pictures: customers and staff talk to people, robots, and blended systems as the default. Emotion-aware interfaces are ordinary in commerce. That does not require godlike AI — it requires cheap robots plus 2026-class models, compounded.",
    basis: "UQ / service-innovation 2050 work; IEEE physical AI",
  },
  {
    id: "robots-scale",
    title: "Physical labor is majority-automated in rich countries",
    stance: "both",
    confidence: "Musk-high, institutions-medium",
    body: "Musk’s 2026 line: over a billion humanoids outproducing humans within a decade — aggressive. A calmer 2050: driving, warehousing, many factory and farm tasks, and a lot of elder-care lifting are machine-led in high-income states. Poor countries lag, which becomes a new inequality.",
    basis: "Musk G20 2026; IEEE robotics track; demographic aging",
  },
  {
    id: "science",
    title: "Biology and materials look like software: design, then print",
    stance: "promise",
    confidence: "Medium-high",
    body: "Twenty-five years after AlphaFold, closed-loop labs (AI proposes, robots run, models update) should be normal. Medicine, energy materials, and agriculture are the payoff. Dual-use is the tax: the same stack designs pathogens and cures. Biosecurity is a 2050 superpower issue.",
    basis: "AlphaFold lineage; 2026 protein-design posts; biosecurity evals",
  },
  {
    id: "ubi",
    title: "Income policy, not job titles, is the political fight",
    stance: "risk",
    confidence: "Medium",
    body: "Whether or not UBI exists by name, 2050 politics in rich countries is about distributing AI rents. If productivity exploded and wages did not, transfers, public compute, and shorter work weeks are the instruments. The already-poor lose first if policy sleeps.",
    basis: "WEF transition logic; public 2050 labor commentary",
  },
  {
    id: "minds",
    title: "Interfaces go into the body for some people",
    stance: "both",
    confidence: "Low-medium",
    body: "Neuralink-class implants will not be universal. They may be common for paralysis, some sensory loss, and a luxury ‘thought-to-text’ class. 2050 identity fights: who is enhanced, who is watched, who owns the stream. This is Musk’s other lever besides Grok.",
    basis: "Neuralink trajectory; 2040 digital-future expert panels",
  },
  {
    id: "states",
    title: "States that cannot field AI will not be first-rank powers",
    stance: "risk",
    confidence: "High",
    body: "Industry, intel, and weapons all sit on models and robots. 2050 great-power status looks like compute, energy, talent, and chip sovereignty — closer to oil in 1970 than to software in 2010. Open weights vs sealed labs is still the fork.",
    basis: "2026 dual-use reality; export-control politics",
  },
  {
    id: "fork",
    title: "The 2050 fork: abundance with guardrails, or a locked-in few",
    stance: "both",
    confidence: "The real bet",
    body: "Good path: cheap intelligence, longer healthy life, machines on the dangerous jobs, science in overdrive, and institutions that actually bound the labs. Bad path: surveillance defaults, synthetic-truth collapse, labor without a floor, and systems no one can turn off. 2050 is late enough that we will know which way the 2030s went.",
    basis: "UK/OECD scenario families extended; FLI risk framing",
  },
];

export const scenarios2050: Scenario[] = [
  {
    id: "tool-world",
    title: "Powerful tools, still ours",
    kicker: "No clean AGI event",
    odds: "If 2030 takeoff was wrong",
    body: "2050 looks like 2030’s measured climb, compounded: robots in the economy, AI in every clinic and classroom, energy still a constraint, humans still clearly in charge. Transformative — not a new species of mind.",
  },
  {
    id: "machine-age",
    title: "The machine age",
    kicker: "AGI then ASI",
    odds: "If the 2030 lab bet paid",
    body: "Human-level systems in the early 2030s, superintelligent ones well before 2050. Science, strategy, and labor are downstream of machines. Politics is about control, alignment, and who owns the surplus. This is the Bostrom-survey shape, sped up by 2020s scaling.",
  },
  {
    id: "split",
    title: "The split planet",
    kicker: "Uneven takeoff",
    odds: "Ugly and plausible",
    body: "A few blocs run superhuman systems; most of the world runs last-generation open models and imported robots. Life expectancy, truth, and power diverge more than they did with the internet. 2050’s ‘AI future’ is not one place.",
  },
];

export const sources = [
  {
    label: "UK government — AI Scenarios 2030",
    href: "https://www.gov.uk/government/publications/ai-scenarios-2030-helping-policymakers-plan-for-the-future-of-ai/ai-scenarios-2030-helping-policymakers-plan-for-the-future-of-ai",
  },
  {
    label: "OECD — AI trajectories through 2030",
    href: "https://www.oecd.org/en/publications/exploring-possible-ai-trajectories-through-2030_cb41117a-en.html",
  },
  {
    label: "Epoch AI — What will AI look like in 2030",
    href: "https://epochai.org/blog/what-will-ai-look-like-in-2030",
  },
  {
    label: "IEEE — Technology Megatrends 2030",
    href: "https://www.prnewswire.com/news-releases/how-ai-will-reshape-life-by-2030-new-ieee-megatrends-report-unveils-tech-forces-transforming-homes-schools-and-work-302835666.html",
  },
  {
    label: "World Economic Forum — Future of Jobs",
    href: "https://www.weforum.org/stories/2025/01/future-of-jobs-report-2025-jobs-of-the-future-and-the-skills-you-need-to-get-them/",
  },
  {
    label: "Future of Life Institute — AI Safety Index Summer 2026",
    href: "https://futureoflife.org/ai-safety-index-summer-2026/",
  },
  {
    label: "NIST / CAISI pre-deployment evaluations (2026)",
    href: "https://thehill.com/homenews/5863937-google-microsoft-xai-ai-testing/",
  },
  {
    label: "AI 2027 scenario (AI Futures Project)",
    href: "https://ai-2027.com/",
  },
];
