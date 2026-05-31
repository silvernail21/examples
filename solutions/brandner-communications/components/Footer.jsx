const footerLinks = {
  Expertise: ['Architects & Specifiers', 'Builders & Contractors', 'Dealers & Distributors', 'Homeowners & Retail'],
  Services: ['Advertising', 'Public Relations', 'Digital Marketing', 'Branding & Strategy', 'Video Production', 'Trade Shows'],
  Company: ['About Brandner', 'Our Team', 'Our Work', 'Careers', 'Blog'],
  Connect: ['Get In Touch', 'brandner.com', 'LinkedIn', 'Facebook'],
}

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div>
                <div className="text-white font-extrabold text-sm tracking-tight">BRANDNER</div>
                <div className="text-stone-500 text-xs font-medium">COMMUNICATIONS</div>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-2">
              Full-service advertising & PR agency for the building products industry.
            </p>
            <p className="text-stone-600 text-xs leading-relaxed">
              Federal Way, WA<br />
              32026 32nd Ave S, 98001
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{section}</h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-stone-500 hover:text-stone-300 text-sm transition-colors duration-200 cursor-pointer focus:outline-none focus:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Brandner Communications, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <a key={item} href="#" className="text-stone-600 hover:text-stone-400 text-xs transition-colors duration-200 cursor-pointer focus:outline-none focus:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
