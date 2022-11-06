import React from 'react';
import { Box, Container, Separator } from '@modulz/design-system';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MainHero } from '@components/marketing/MainHero';
import { ComponentHighlightsSection } from '@components/marketing/ComponentHighlightsSection';
import { CaseStudiesSection } from '@components/marketing/CaseStudiesSection';
import { BenefitsSection } from '@components/marketing/BenefitsSection';
import { AccessibilitySection } from '@components/marketing/AccessibilitySection';
import { DeveloperExperienceSection } from '@components/marketing/DeveloperExperienceSection';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { OtherProductsSection } from '@components/marketing/OtherProductsSection';
import { Footer } from '@components/Footer';
import { DefaultHeader } from '@components/DefaultHeader';
import { FancyBackground } from '@components/marketing/FancyBackground';
import { StatsSection } from '@components/marketing/StatsSection';

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
