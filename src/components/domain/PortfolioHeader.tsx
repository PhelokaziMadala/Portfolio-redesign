import { navItems } from '../../utils/portfolioData'

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-cyan-900/40 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold text-cyan-300">Phelokazi Madala</h1>
        <ul className="hidden gap-4 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="capitalize transition hover:text-cyan-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
