import { ModernNavigation } from './components/ModernNavigation';
import { ModernHero } from './components/ModernHero';
import { ModernAbout } from './components/ModernAbout';
import { ModernSkills } from './components/ModernSkills';
import { ModernProjects } from './components/ModernProjects';
import { ModernContact } from './components/ModernContact';
import { ModernFooter } from './components/ModernFooter';
import { BackgroundEffect } from './components/BackgroundEffect';

export default function App() {
  return (
    <div className="size-full bg-slate-900 overflow-x-hidden">
      <BackgroundEffect />
      <ModernNavigation />
      <ModernHero />
      <ModernAbout />
      <ModernSkills />
      <ModernProjects />
      <ModernContact />
      <ModernFooter />
    </div>
  );
}