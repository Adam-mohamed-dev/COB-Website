export interface SuccessStory {
  title: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
}

export interface SolutionDetail {
  slug: string;
  suiteNumber: number;
  title: string;
  tagline: string;
  description: string;
  aboutText: string;
  whyChoose: string[];
  subCategories: {
    slug: string;
    title: string;
    description: string;
  }[];
  successStories: SuccessStory[];
  accentColor: string; // Tailwind class like "from-blue-600 to-cyan-500" or custom colors
  icon: string; // Icon identifier for rendering
}

export const solutionsData: Record<string, SolutionDetail> = {
  "revenue-maximization-protection": {
    slug: "revenue-maximization-protection",
    suiteNumber: 1,
    title: "Revenue Maximization & Protection",
    tagline: "Precision Claims Scrubbing, Instant Authorizations, and Dynamic Denial Mitigation",
    description: "Guard your practice's financial health with our cutting-edge billing and revenue recovery systems, boasting an industry-leading 99.2% clean claim rate.",
    aboutText: "Suite 1 acts as a shield and an accelerator for your medical practice's revenue cycle. By integrating advanced technology with certified, high-volume coding professionals, we eliminate the manual bottlenecks that delay cash flow and cause costly denials. Our real-time checks ensure that every claim is formatted flawlessly and verified against current payer rules before it ever leaves your clinic.",
    accentColor: "from-[#246fb1] to-[#06b6d4]",
    icon: "Activity",
    whyChoose: [
      "99.2% Clean Claim Rate achieved through automated clearinghouse pre-scrubbing.",
      "Real-Time Coverage Verification prevents dynamic eligibility rejections instantly.",
      "Drastic reduction in A/R days from over 45 days down to an average of just 14 days.",
      "Dedicated prior authorization tracking eliminates dynamic peer-to-peer delays.",
      "Certified CPT/ICD-10 clinical compliance audits to guard against post-payment payer recoupments."
    ],
    subCategories: [
      {
        slug: "advanced-medical-billing-revenue-recovery",
        title: "Advanced Medical Billing & Revenue Recovery",
        description: "End-to-end management of claims, automated follow-ups, and aggressive recovery of aged accounts receivable."
      },
      {
        slug: "real-time-eligibility-coverage-verification",
        title: "Real-Time Eligibility & Coverage Verification",
        description: "Instant check of copays, deductibles, active coverage, and out-of-pocket maximums before patient intake."
      },
      {
        slug: "authorizations-mnr-management",
        title: "Authorizations & MNR Management",
        description: "Automated prior authorization tracking and medical necessity review (MNR) to prevent clinical denials."
      },
      {
        slug: "specialized-compliance-coding-audits",
        title: "Specialized Compliance & Coding Audits",
        description: "Proactive charge reviews and coding checks to guarantee full compliance with government and private payer rules."
      },
      {
        slug: "live-medical-coding",
        title: "Live Medical Coding",
        description: "Certified coders working in real-time within your EHR/EMR to assign precise ICD-10, CPT, and HCPCS codes."
      },
      {
        slug: "patient-financial-counseling-payment-plans",
        title: "Patient Financial Counseling & Payment Plans",
        description: "Compassionate patient statements, customized payment portals, and clear financial counseling to improve patient payments."
      }
    ],
    successStories: [
      {
        title: "Manhattan Cardiovascular: Overcoming Severe Denial Backlogs",
        challenge: "Over $400k in cardiology and imaging claims were stuck in payer pending status due to authorization errors.",
        solution: "Implemented the Suite 1 Real-Time Verification and Prior Auth system.",
        metric: "90%",
        metricLabel: "Denial Rate Reduction"
      },
      {
        title: "Apex Diagnostics: Elevating Clean Claims Velocity",
        challenge: "High coding discrepancy rates on complex diagnostic billing led to extended cash flow delays.",
        solution: "Integrated Live Medical Coding and specialized compliance audits directly into their laboratory workflow.",
        metric: "99.4%",
        metricLabel: "Clean Claim Rate Secured"
      }
    ]
  },
  "patient-engagement-growth-ecosystem": {
    slug: "patient-engagement-growth-ecosystem",
    suiteNumber: 2,
    title: "Patient Engagement & Growth Ecosystem",
    tagline: "Elevating Patient Care with a Fully Integrated Virtual Front Desk & Concierge Support Network",
    description: "Streamline patient scheduling, enhance communication, and maximize client retention using our premium patient coordination framework.",
    aboutText: "Suite 2 revolutionizes the patient experience by turning every interaction into a seamless digital journey. We combine virtual medical front desk operations, smart clinical appointment scheduling, and omni-channel cloud communications to ensure your practice is highly visible and deeply trusted. This system reduces front-desk burnout while maintaining a warm, dedicated touch that patients love.",
    accentColor: "from-[#06b6d4] to-[#10b981]",
    icon: "Heart",
    whyChoose: [
      "24/7 Virtual Front Desk coverage ensuring no patient call goes unanswered.",
      "Automated appointment recall campaigns that recover up to 35% of lost patient follow-ups.",
      "Comprehensive telehealth coordination that handles technical onboarding for patients.",
      "Unified Cloud Communications syncing all phone, text, and chat touchpoints into one inbox.",
      "Direct integration with modern digital marketing systems to drive inbound patient volume."
    ],
    subCategories: [
      {
        slug: "patient-concierge-retention",
        title: "Patient Concierge & Retention",
        description: "Dedicated patient experience specialists ensuring high-satisfaction scores, proactive care recalls, and patient loyalty."
      },
      {
        slug: "virtual-front-desk-operations",
        title: "Virtual Front Desk Operations",
        description: "Offload phone answering, scheduling, intake documentation, and general clinic coordination to our elite remote operators."
      },
      {
        slug: "telehealth-coordination-virtual-visit-operations",
        title: "Telehealth Coordination & Virtual Visit Operations",
        description: "End-to-end orchestration of virtual visits, patient tech check-ins, and seamless telehealth session setup."
      },
      {
        slug: "referral-coordination",
        title: "Referral Coordination",
        description: "Outbound and inbound referral tracking to ensure smooth handoffs between primary care and specialists with zero leaks."
      },
      {
        slug: "digital-marketing-practice-visibility",
        title: "Digital Marketing & Practice Visibility",
        description: "Sleek search engine optimization (SEO), localized Google Business profile management, and targeted digital campaigns."
      },
      {
        slug: "elevate-unified-cloud-communications",
        title: "Elevate Unified Cloud Communications",
        description: "HIPAA-compliant cloud phone systems, SMS reminders, and web chat unified under a single secure platform."
      }
    ],
    successStories: [
      {
        title: "Houston Orthopedic Network: Scaling Intake Operations",
        challenge: "Severe understaffing at the physical reception desk caused over 40% of incoming patient calls to drop during peak hours.",
        solution: "Deployed the Virtual Front Desk Operations to absorb overflow calls and manage booking.",
        metric: "8 Days",
        metricLabel: "Average Appointment Lead Time"
      },
      {
        title: "Vanguard Multidisciplinary: 3x Retargeting Recovery",
        challenge: "High patient churn rates due to lack of follow-up on therapeutic recommendations.",
        solution: "Established a dedicated Patient Concierge recall program utilizing unified communications.",
        metric: "94%",
        metricLabel: "Patient Retention Rate"
      }
    ]
  },
  "practice-infrastructure-strategic-operations": {
    slug: "practice-infrastructure-strategic-operations",
    suiteNumber: 3,
    title: "Practice Infrastructure & Strategic Operations",
    tagline: "Automating Credentialing, HR Operations, and Advanced Bookkeeping Systems",
    description: "Build a highly scalable administrative foundation with automated payroll, continuous payer enrollment, and secure workforce planning.",
    aboutText: "Suite 3 provides the operational backbone required to run a high-performing medical group or clinical network. We take the stress out of practice management by automating credentialing, bookkeeping, payroll, and tax compliance. By offloading these highly manual, risk-prone corporate processes, your leadership team can focus entirely on clinical standards and patient wellness.",
    accentColor: "from-[#3b82f6] to-[#6366f1]",
    icon: "Building2",
    whyChoose: [
      "Payer enrollment lead times cut by 60% through automated CAQH credentialing tracking.",
      "Comprehensive, HIPAA-compliant accounting covering payroll, bookkeeping, and tax filings.",
      "Sleek practice financial planning & analysis (FP&A) with real-time gross margin reporting.",
      "Full-service HR Operations managing employee onboarding, background checks, and compliance.",
      "Custom valuation and advisory services to support corporate clinical expansions or M&A."
    ],
    subCategories: [
      {
        slug: "credentialing-provider-network-management",
        title: "Credentialing & Provider Network Management",
        description: "Seamless credentialing and re-credentialing with Medicare, Medicaid, and all major commercial private insurance payers."
      },
      {
        slug: "healthcare-financial-management",
        title: "Healthcare Financial Management",
        description: "Dedicated bookkeeping, payroll, tax filing, cash flow forecasting, accounts payable/receivable management, and valuation services."
      },
      {
        slug: "practice-hr-operations-workforce-planning",
        title: "Practice HR Operations & Workforce Planning",
        description: "Professional workforce scheduling, state compliance audits, benefit packages setup, and full lifecycle HR support."
      }
    ],
    successStories: [
      {
        title: "Midwest Multi-Specialty: Credentialing Time Slashed",
        challenge: "Slow credentialing of 12 new providers with private payers was costing over $150k in unbillable clinical hours.",
        solution: "Deployed the Suite 3 Automated Credentialing & Provider Network Management system.",
        metric: "62%",
        metricLabel: "Credentialing Time Saved"
      }
    ]
  },
  "cob-innovation-lab-enterprise-solutions": {
    slug: "cob-innovation-lab-enterprise-solutions",
    suiteNumber: 4,
    title: "COB Innovation Lab & Enterprise Solutions",
    tagline: "Custom BPO Operations, Dedicated Virtual Medical Assistants, and Custom AI Systems",
    description: "Deploy highly customized business process outsourcing pipelines, trained virtual assistants, and next-gen AI platform nodes.",
    aboutText: "Suite 4 is where advanced technology meets custom clinical outsourcing. We don't believe in one-size-fits-all solutions. Our team of workflow engineers, AI developers, and clinical process experts design custom BPO operations tailored exactly to your clinical guidelines. We also supply trained Virtual Medical Assistants (highly qualified PTs and medical grads) to assist with in-clinic workflows.",
    accentColor: "from-[#8b5cf6] to-[#ec4899]",
    icon: "FlaskConical",
    whyChoose: [
      "Custom-tailored business process outsourcing (BPO) engineered specifically for your clinical metrics.",
      "Virtual Medical Assistants with extensive background (e.g. licensed PTs) ready to assist.",
      "Deploy custom artificial intelligence (AI) nodes to automate secure text and chart processing.",
      "Full-scale clinical workflow engineering removing administrative bottlenecks in real-time.",
      "Direct API integrations bridging legacy EMRs with modern cloud analytical platforms."
    ],
    subCategories: [
      {
        slug: "custom-enterprise-bpo-tailored-operations",
        title: "Custom Enterprise BPO & Tailored Operations",
        description: "Completely customized clinical and administrative outsourcing teams scaled specifically for large networks."
      },
      {
        slug: "virtual-medical-assistants",
        title: "Virtual Medical Assistants",
        description: "Highly trained clinical professionals (often licensed PTs and nurses) acting as virtual scribes, document processors, and administrative aids."
      },
      {
        slug: "advanced-custom-ai-platform-integrations",
        title: "Advanced Custom AI & Platform Integrations",
        description: "Custom LLM integrations, document parser AI, robotic process automations, and secure custom software engineering."
      },
      {
        slug: "clinic-workflow-engineering",
        title: "Clinic Workflow Engineering",
        description: "Strategic consulting to redesign physical and digital workflows, cutting patient wait times and maximizing chart completion speed."
      }
    ],
    successStories: [
      {
        title: "Apex Physical Therapy: Scaling with Virtual PT Assistants",
        challenge: "In-clinic physical therapists were spending over 3 hours a day on intake charting, causing severe burnout.",
        solution: "Integrated dedicated Virtual Medical Assistants (who are licensed PTs overseas) to handle real-time chart documentation.",
        metric: "100%",
        metricLabel: "In-Clinic Documentation Burnout Removed"
      }
    ]
  },
  "executive-consulting-tailored-business-development": {
    slug: "executive-consulting-tailored-business-development",
    suiteNumber: 5,
    title: "Executive Consulting & Tailored Business Development",
    tagline: "Corporate Strategic Advisory, Regulatory Compliance Audits, and M&A Diligence Systems",
    description: "Propel your corporate healthcare group forward with elite consultation, network growth, and diligent M&A operations.",
    aboutText: "Suite 5 delivers strategic clinical executive leadership on demand. Whether you are navigating complex regulatory changes, scaling your referrals network, or preparing for a merger or acquisition, our advisory team provides high-fidelity solutions. We specialize in identifying operational waste, structuring strategic clinical growth, and protecting your entity's compliance status.",
    accentColor: "from-[#f59e0b] to-[#ef4444]",
    icon: "Stethoscope",
    whyChoose: [
      "Expert legal and advisory support covering HIPAA, OIG compliance, and BAA management.",
      "Experienced advisory partners with proven track record in private equity healthcare deals.",
      "Business development outsourcing tailored to scale your physician referral network rapidly.",
      "Post-acquisition integration plans that capture synergy value in less than 90 days.",
      "Sleek operational audits revealing hidden billing leakages within 30 days."
    ],
    subCategories: [
      {
        slug: "healthcare-compliance-management-advisory",
        title: "Healthcare Compliance Management & Advisory",
        description: "Robust internal auditing, compliance policy formulation, and mock OIG inspections to ensure bulletproof billing."
      },
      {
        slug: "operations-rcm-consultation",
        title: "Operations & RCM Consultation",
        description: "Deep diagnostic reviews of your entire billing and clinical operations to identify and plug revenue leaks."
      },
      {
        slug: "healthcare-business-development-outsourcing",
        title: "Healthcare Business Development Outsourcing",
        description: "Dedicated executive sales and corporate development resources to secure B2B contracts and institutional clients."
      },
      {
        slug: "referrals-network-management-growth",
        title: "Referrals Network Management & Growth",
        description: "Structured relationship campaigns designed to expand your physician referral network and capture out-of-network leakage."
      },
      {
        slug: "m-a-diligence-post-acquisition-integration",
        title: "M&A Diligence & Post-Acquisition Integration",
        description: "Comprehensive financial and operational due diligence for clinical acquisitions, followed by structured integration plans."
      }
    ],
    successStories: [
      {
        title: "Tri-State Cardiology Group: Rapid PE Acquisition Transition",
        challenge: "Tri-State needed an immediate, bulletproof audit of their active billing assets prior to signing a private equity buyout.",
        solution: "Deployed the Suite 5 M&A Diligence & RCM consultation team for an intensive 2-week diagnostic audit.",
        metric: "100%",
        metricLabel: "Due Diligence Asset Sign-off"
      }
    ]
  },
  "software-solutions-technology-platform": {
    slug: "software-solutions-technology-platform",
    suiteNumber: 6,
    title: "Software Solutions & Technology Platform",
    tagline: "Proprietary EMR Products, Referral CRMs, and Secure Multi-Tenant Cloud Architecture",
    description: "Deploy secure, enterprise-grade clinical software designed specifically to sync patient charts and marketing outreach.",
    aboutText: "Suite 6 offers state-of-the-art technological infrastructures for modern medical organizations. From our proprietary, lightning-fast EMR product to customized marketing & referral CRM databases, we provide your team with the digital tools they need to operate at peak efficiency. All systems are fully compliant, cloud-native, and designed with high-fidelity UI/UX.",
    accentColor: "from-[#10b981] to-[#3b82f6]",
    icon: "Dna",
    whyChoose: [
      "Customizable, intuitive EMR dashboard built with lightning-fast React architectures.",
      "Marketing and referral CRM systems built specifically for clinical business structures.",
      "Secure, fully redundant HIPAA-compliant cloud storage with automated backup pipelines.",
      "Advanced custom dashboards displaying clinical and financial KPIs in real-time.",
      "Robust REST APIs and HL7 integration nodes connecting to all national clearinghouses."
    ],
    subCategories: [
      {
        slug: "proprietary-emr-product",
        title: "Proprietary EMR Product",
        description: "Sleek, intuitive Electronic Medical Record software built for high speed, smart charting templates, and clear data visualization."
      },
      {
        slug: "marketing-referrals-crm-setup",
        title: "Marketing & Referrals CRM Setup",
        description: "Tailor-made Customer Relationship Management systems built to manage doctor relations, patient pipelines, and marketing campaigns."
      },
      {
        slug: "data-cloud-services",
        title: "Data Cloud Services",
        description: "Secure, elastic, and fully-managed database hosting with automated backups and real-time encryption protocols."
      }
    ],
    successStories: [
      {
        title: "Apex Specialty Clinics: Unifying 6 Fragmented EMRs",
        challenge: "Operational overhead skyrocketed as they managed 6 different clinics with separate legacy database engines.",
        solution: "Migrated the entire ecosystem to COB's Unified Data Cloud & EMR Platform integration.",
        metric: "40%",
        metricLabel: "Software Overhead Cost Reduction"
      }
    ]
  },
  "dedicated-outsourcing-services": {
    slug: "dedicated-outsourcing-services",
    suiteNumber: 7,
    title: "Dedicated Outsourcing Services",
    tagline: "Scale Your Clinic with Full-Time Staff Allocated Exclusively to Your Brand",
    description: "Hire dedicated medical coders, billing specialists, and clinical operators working as direct extensions of your in-office staff.",
    aboutText: "Suite 7 delivers full-time, dedicated operational resources working directly under your protocols. Unlike project-based consulting or transactional billing agencies, we provide specialized staff—such as certified billers, patient support reps, and prior auth specialists—who function exclusively as members of your brand. This model offers incredible financial savings while maintaining full control over operational output.",
    accentColor: "from-[#ef4444] to-[#f59e0b]",
    icon: "Activity",
    whyChoose: [
      "100% Dedicated Staff allocated exclusively to one single healthcare client.",
      "Substantial overhead savings of up to 60% compared to local clinical hires.",
      "We handle background checks, premium training, workstation setup, and local HR.",
      "Direct integration of your hires into your active Slack, Teams, and EMR accounts.",
      "Rapid team scaling, capable of adding specialized billing pods within 14 business days."
    ],
    subCategories: [
      {
        slug: "medical-coders-billers",
        title: "Medical Coders & Billers",
        description: "Highly experienced certified medical coders and billing professionals dedicated to capturing maximum clean claim charges."
      },
      {
        slug: "customer-support-representatives",
        title: "Customer Support Representatives",
        description: "Inbound and outbound patient support, billing hotline answer agents, and customer success coordinators."
      },
      {
        slug: "medical-representatives",
        title: "Medical Representatives",
        description: "Dedicated clinical communication aids, intake coordination professionals, and clinical follow-up representatives."
      },
      {
        slug: "authorization-representatives",
        title: "Authorization Representatives",
        description: "Exclusively allocated agents tasked with tracking, submitting, and chasing prior authorization requests daily."
      },
      {
        slug: "other-functional-outsourcing-roles",
        title: "Other Functional Outsourcing Roles",
        description: "Custom roles matching your operational needs, managed under your direct systems and customized SOPs."
      }
    ],
    successStories: [
      {
        title: "National Diagnostic Lab: Assembling 25 Dedicated Billing Pods",
        challenge: "Massive lab expansion led to over 5,000 unbilled daily checks and an overloaded in-house billing team.",
        solution: "Established a dedicated outsourcing team of 25 full-time billers and customer support reps within 21 days.",
        metric: "60%",
        metricLabel: "Operational Overhead Saved"
      }
    ]
  }
};
