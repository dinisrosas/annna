import { DefaultHeader } from '@components/DefaultHeader';
import { Footer } from '@components/Footer';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { CaseStudiesSection } from '@components/marketing/CaseStudiesSection';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { ComponentHighlightsSection } from '@components/marketing/ComponentHighlightsSection';
import { FancyBackground } from '@components/marketing/FancyBackground';
import { MainHero } from '@components/marketing/MainHero';
import { StatsSection } from '@components/marketing/StatsSection';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { Box, Container, Separator } from '@modulz/design-system';

export default function PrimitivesHome() {
  return (
    <Box>
      <TitleAndMetaTags
        title="Triplique o seu trafégo orgânico | Annna"
        description="Aumentamos o trafégo orgânico do seu website
        em 357% em menos de 10 semanas"
        image="default.png"
      />

      <FancyBackground>
        <DefaultHeader />
        <MainHero />
      </FancyBackground>

      <CommunitySection />

      <Container size="3">
        <Separator size="2" />
      </Container>

      <Container size="3">
        <Separator size="2" />
      </Container>

      <Box css={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>

      <CaseStudiesSection />

      <ComponentHighlightsSection />

      {/* <AccessibilitySection /> */}
      {/* <DeveloperExperienceSection /> */}

      <AdoptionSection />

      <Container size="3">
        <Footer />
      </Container>
    </Box>
  );
}
