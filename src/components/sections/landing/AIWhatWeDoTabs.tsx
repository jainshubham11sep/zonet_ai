const AIWhatWeDoTabs = () => {
  return (
    <section className="bg-[#F7F6F3] px-12 pt-14 pb-10 max-w-[1200px] mx-auto relative overflow-hidden">

      {/* Badge */}
      <span className="inline-block border border-[#E6E4DF] rounded-[20px] px-[14px] py-1 text-[11px] font-semibold tracking-[.08em] text-[#686B6B] mb-[18px] bg-white/60">
        WHAT WE DO
      </span>

      {/* Header Row */}
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <h1 className="font-serif text-[38px] font-bold leading-[1.18] text-[#1A1A1A] mb-[14px]">
            We don&apos;t just build products.<br />
            We turn them into <span className="text-[#686BAB]">intelligent systems.</span>
          </h1>
          <p className="text-sm text-[#686B6B] leading-[1.65] max-w-[460px]">
            Zonnetech combines design, engineering, and AI to deliver digital products that are fast, scalable, and future-ready.
          </p>
        </div>
        <div className="w-[220px] shrink-0 relative h-[140px]">
          <svg
            className="absolute right-0 top-[-10px]"
            width="210"
            height="150"
            viewBox="0 0 210 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="105" cy="130" rx="80" ry="18" fill="#E6E4DF" opacity="0.5" />
            <g opacity="0.6">
              <path d="M55 105 L105 90 L155 105 L105 120 Z" fill="#ECEAE4" stroke="#C4C0B8" strokeWidth="1" />
              <path d="M55 105 L55 118 L105 133 L105 120 Z" fill="#E4E1DA" stroke="#C4C0B8" strokeWidth="1" />
              <path d="M155 105 L155 118 L105 133 L105 120 Z" fill="#E8E5DF" stroke="#C4C0B8" strokeWidth="1" />
            </g>
            <g opacity="0.78">
              <path d="M62 75 L105 62 L148 75 L105 88 Z" fill="#E6E3DC" stroke="#B8B4AC" strokeWidth="1" />
              <path d="M62 75 L62 87 L105 100 L105 88 Z" fill="#DEDAD2" stroke="#B8B4AC" strokeWidth="1" />
              <path d="M148 75 L148 87 L105 100 L105 88 Z" fill="#E2DED6" stroke="#B8B4AC" strokeWidth="1" />
            </g>
            <g>
              <path d="M70 44 L105 33 L140 44 L105 55 Z" fill="#DAD6CE" stroke="#ADA9A0" strokeWidth="1.2" />
              <path d="M70 44 L70 56 L105 67 L105 55 Z" fill="#D0CCCA" stroke="#ADA9A0" strokeWidth="1.2" />
              <path d="M140 44 L140 56 L105 67 L105 55 Z" fill="#D8D4CC" stroke="#ADA9A0" strokeWidth="1.2" />
            </g>
            <circle cx="170" cy="30" r="3" fill="#C4C0B8" opacity="0.5" />
            <circle cx="185" cy="20" r="2" fill="#C4C0B8" opacity="0.4" />
            <circle cx="178" cy="50" r="2" fill="#C4C0B8" opacity="0.3" />
            <circle cx="195" cy="60" r="2.5" fill="#C4C0B8" opacity="0.3" />
            <circle cx="35" cy="80" r="2.5" fill="#C4C0B8" opacity="0.3" />
            <circle cx="20" cy="65" r="2" fill="#C4C0B8" opacity="0.25" />
            <line x1="170" y1="30" x2="185" y2="20" stroke="#C4C0B8" strokeWidth="0.8" opacity="0.5" />
            <line x1="178" y1="50" x2="195" y2="60" stroke="#C4C0B8" strokeWidth="0.8" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-3 gap-4 mt-9">

        {/* Card 1: Build */}
        <div className="bg-white border border-[#E6E4DF] rounded-[18px] pt-6 px-[22px] pb-5 relative transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
          <div className="text-[10px] font-bold tracking-[.1em] text-[#1A1A1A] mb-[10px]">01. BUILD</div>
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-3 bg-[#F7F6F3] text-[#1A1A1A]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="font-serif text-[17px] font-semibold text-[#1A1A1A] leading-[1.3] mb-[14px]">
            Digital Products<br />That Scale
          </div>
          <ul className="flex flex-col gap-2">
            {['Custom Web & App Development', 'Scalable Architecture', 'AI-Ready Foundation'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-[#686B6B]">
                <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 text-[10px] bg-[#F7F6F3] text-[#1A1A1A]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[#E6E4DF] flex items-center justify-center text-[#686B6B] text-sm cursor-pointer transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]">
            →
          </div>
        </div>

        {/* Card 2: Optimize — featured / active */}
        <div className="bg-white border border-[#E8C547] rounded-[18px] pt-6 px-[22px] pb-5 relative transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
          <div className="text-[10px] font-bold tracking-[.1em] text-[#686BAB] mb-[10px]">02. OPTIMIZE</div>
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-3 bg-[#EEEEF6] text-[#686BAB]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="font-serif text-[17px] font-semibold text-[#1A1A1A] leading-[1.3] mb-[14px]">
            Improve Performance<br />&amp; User Experience
          </div>
          <ul className="flex flex-col gap-2">
            {['Speed & SEO Optimization', 'Conversion & Analytics', 'Continuous UX Improvements'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-[#686B6B]">
                <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 text-[10px] bg-[#EEEEF6] text-[#686BAB]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[#E6E4DF] flex items-center justify-center text-[#686B6B] text-sm cursor-pointer transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]">
            →
          </div>
        </div>

        {/* Card 3: Automate */}
        <div className="bg-white border border-[#E6E4DF] rounded-[18px] pt-6 px-[22px] pb-5 relative transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
          <div className="text-[10px] font-bold tracking-[.1em] text-[#16a34a] mb-[10px]">03. AUTOMATE</div>
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-3 bg-[#d1fae5] text-[#16a34a]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="font-serif text-[17px] font-semibold text-[#1A1A1A] leading-[1.3] mb-[14px]">
            AI Automation<br />That Works
          </div>
          <ul className="flex flex-col gap-2">
            {['AI Chatbots & Assistants', 'Workflow Automation', 'Smart Integrations'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-[#686B6B]">
                <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 text-[10px] bg-[#d1fae5] text-[#16a34a]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[#d1fae5] flex items-center justify-center text-[#16a34a] text-sm cursor-pointer transition-all duration-200 hover:bg-[#16a34a] hover:text-white hover:border-[#16a34a]">
            →
          </div>
        </div>

      </div>

      {/* Pipeline */}
      <div className="bg-white border border-[#E6E4DF] rounded-[18px] px-6 py-5 mt-5">
        <div className="text-center text-[10px] font-bold tracking-[.12em] text-[#686B6B] mb-[14px]">
          AI-POWERED DELIVERY FRAMEWORK
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="border border-[#E6E4DF] rounded-xl px-4 py-[10px] flex items-center gap-2 text-[13px] font-semibold text-[#1A1A1A] whitespace-nowrap bg-white">
            <span>💡</span> Your Idea
          </div>
          <span className="text-[#686B6B] text-base shrink-0">→</span>
          <div
            className="flex-1 rounded-[14px] px-[18px] py-3 flex items-center gap-[14px] text-white"
            style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d2d2a 100%)' }}
          >
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg shrink-0">🔄</div>
            <div className="text-[11px] font-extrabold tracking-[.04em] leading-[1.2] shrink-0">
              ZONNETECH<br />AI ENGINE
            </div>
            <div className="flex gap-2 flex-wrap flex-1">
              {[
                { icon: '🧠', label: 'Intelligence' },
                { icon: '🤖', label: 'Automation' },
                { icon: '📊', label: 'Analytics' },
                { icon: '🛡️', label: 'Security' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-[5px] text-[11px] font-medium text-white/80 whitespace-nowrap">
                  <span className="text-sm">{icon}</span> {label}
                </div>
              ))}
            </div>
          </div>
          <span className="text-[#686B6B] text-base shrink-0">→</span>
          <div className="border border-[#E8C547] rounded-xl px-[14px] py-[10px] flex items-center gap-2 text-xs font-bold text-[#1A1A1A] bg-[#FFFBEA] whitespace-nowrap">
            <span>🚀</span>
            <span>Smarter Product<br />Better Results</span>
          </div>
        </div>
      </div>

      {/* VS Section */}
      <div className="grid grid-cols-[1fr_auto_1fr] mt-5 rounded-[18px] overflow-hidden border border-[#E6E4DF]">
        <div className="bg-white px-6 py-[22px] border-r border-[#E6E4DF]">
          <div className="text-[10px] font-bold tracking-[.1em] text-[#ef4444] mb-[6px]">TRADITIONAL AGENCY</div>
          <div className="font-serif text-[28px] font-bold leading-none text-[#1A1A1A]">
            3 Months+
          </div>
          <div className="text-[13px] font-semibold text-[#686B6B] mt-0.5 mb-[14px]">To Launch</div>
          <ul className="flex flex-col gap-[7px]">
            {['Slow Development', 'High Communication Cost', 'Manual & Repetitive Work'].map((item) => (
              <li key={item} className="text-[12.5px] text-[#686B6B] flex items-center gap-[6px]">
                <span className="text-[#ef4444] font-bold">✗</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#F7F6F3] flex items-center justify-center px-5 font-serif text-lg font-bold text-[#686B6B] border-r border-[#E6E4DF]">
          VS
        </div>
        <div className="bg-[#F7F6F3] px-6 py-[22px] flex gap-5 items-center">
          <div className="flex-1">
            <div className="text-[10px] font-bold tracking-[.1em] text-[#16a34a] mb-[6px]">ZONNETECH (AI-POWERED)</div>
            <div className="font-serif text-[28px] font-bold leading-none text-[#16a34a]">
              30 Days
            </div>
            <div className="text-[13px] font-semibold text-[#686B6B] mt-0.5 mb-[14px]">To Launch</div>
            <ul className="flex flex-col gap-[7px]">
              {['3x Faster Delivery', '40% Cost Savings', 'AI-Powered Workflows'].map((item) => (
                <li key={item} className="text-[12.5px] text-[#686B6B] flex items-center gap-[6px]">
                  <span className="text-[#16a34a] font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center text-white shrink-0 text-[10px] font-bold tracking-[.04em] leading-[1.4] text-center"
            style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)' }}
          >
            <span className="text-lg mb-0.5">⚡</span>
            Smarter<br />Faster<br />Better
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="mt-5 flex items-center bg-white border border-[#E6E4DF] rounded-[18px] px-6 py-[18px]">
        <div className="flex-[1.2] flex items-start gap-[14px] border-r border-[#E6E4DF] pr-6 mr-6">
          <span className="text-[22px] text-[#1A1A1A] shrink-0 mt-0.5">🛡</span>
          <p className="text-[12.5px] text-[#686B6B] leading-[1.6]">
            We use AI to compress development timelines without compromising quality.<br />
            <strong className="text-[#1A1A1A] font-bold">What takes others 3 months, takes us 30 days.</strong>
          </p>
        </div>
        <div className="flex-[2] flex gap-8">
          {[
            { icon: '🛡', title: 'Enterprise Security', sub: 'Built-in Protection', green: false },
            { icon: '👥', title: 'Agile & Transparent', sub: 'Daily Updates', green: false },
            { icon: '∞', title: 'Future Ready', sub: 'Scalable & Flexible', green: true },
          ].map(({ icon, title, sub, green }) => (
            <div key={title} className="flex items-start gap-[10px]">
              <span className={`text-xl shrink-0 ${green ? 'text-[#16a34a]' : 'text-[#1A1A1A]'}`}>{icon}</span>
              <div>
                <h4 className="text-[13px] font-bold text-[#1A1A1A]">{title}</h4>
                <p className="text-[11.5px] text-[#686B6B] mt-px">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AIWhatWeDoTabs;
