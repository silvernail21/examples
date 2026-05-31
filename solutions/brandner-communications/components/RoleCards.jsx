const roles = [
  {
    title: 'Chief Marketing Officer',
    persona: 'CMO',
    description:
      'Align your entire communications stack behind brand strategy. Get real-time visibility into every channel, campaign, and crisis—from a single dashboard.',
    benefits: ['Brand voice governance', 'Executive communications suite', 'ROI attribution reporting'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: 'Communications Director',
    persona: 'Comms Director',
    description:
      "Orchestrate multi-channel narratives across internal, external, and crisis communications. Brandner's workflow tools keep your team aligned and audit-ready.",
    benefits: ['Workflow & approval management', 'Multi-channel distribution', 'Compliance audit trails'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'PR & Media Relations',
    persona: 'PR Manager',
    description:
      'Build and protect reputation at scale. Manage journalist relationships, monitor coverage, and respond to breaking news with pre-approved messaging workflows.',
    benefits: ['Live media monitoring', 'Press release distribution', 'Journalist CRM & outreach'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
      </svg>
    ),
  },
  {
    title: 'IT & Security Leadership',
    persona: 'CIO / CISO',
    description:
      'Deploy enterprise-grade communications infrastructure that satisfies your security team. SOC 2, ISO 27001, and end-to-end encryption standard on every plan.',
    benefits: ['Zero-trust architecture', 'SSO & SCIM provisioning', 'Data residency controls'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function RoleCards() {
  return (
    <section id="solutions" className="bg-white py-24 px-6" aria-labelledby="roles-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-cta text-sm font-semibold tracking-widest uppercase mb-3">Solutions by Role</p>
          <h2 id="roles-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-text leading-tight mb-4">
            Built for every stakeholder
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you're setting strategy or shipping daily communications, Brandner has the tools and expertise your role demands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ title, persona, description, benefits, icon }) => (
            <div
              key={persona}
              className="group bg-brand-bg border border-gray-200 rounded-3xl p-7 hover:border-cta hover:shadow-lg hover:shadow-cta/10 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white mb-5 group-hover:bg-cta transition-colors duration-300">
                {icon}
              </div>
              <div className="text-xs font-semibold text-cta uppercase tracking-widest mb-1">{persona}</div>
              <h3 className="text-base font-bold text-brand-text mb-3 leading-snug">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2" aria-label={`${persona} benefits`}>
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="flex-shrink-0 w-4 h-4 bg-cta/10 rounded-full flex items-center justify-center mt-0.5" aria-hidden="true">
                      <svg className="w-2.5 h-2.5 text-cta" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
