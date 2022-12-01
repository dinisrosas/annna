import { DefaultHeader } from '@components/DefaultHeader';
import { Footer } from '@components/Footer';
import { CaseStudyLogo } from '@components/marketing/CaseStudyLogo';
import { LogoLink } from '@components/marketing/LogoLink';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
  Section,
  Separator,
} from '@modulz/design-system';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';

export default function CaseStudy() {
  return (
    <>
      <TitleAndMetaTags
        title="Casos de Estudo | Annna"
        description="Trabalhamos com todo o tipo de empresas numa ampla variedade de projetos e
              mercados-alvo"
        image="default.png"
      />

      <DefaultHeader />

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Flex direction="column" align="center" css={{ textAlign: 'center', mb: '$5' }}>
            <Heading size="3" css={{ mb: '$2' }}>
              {/* Casos de estudo */}
              Os Nossos Clientes
            </Heading>
            <Paragraph size="2" css={{ maxWidth: 480, mb: '$3' }}>
              Trabalhamos com todo o tipo de empresas numa ampla variedade de projetos e
              mercados-alvo.
            </Paragraph>
          </Flex>
          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{ gap: 1, placeItems: 'stretch', gridAutoRows: '200px', mb: '$8' }}
          >
            {/* <NextLink href="/casos-de-estudo/abreu" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Abreu caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Abreu" height="42" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/elcorteingles" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="El Corte Inglés caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="El Corte Inglés" height="42" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/campera" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Campera caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Campera" height="42" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>

            {/* </NextLink> */}
            {/* <NextLink href="/casos-de-estudo/portoeditora" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Porto Editora caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Porto Editora" height="42" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/rubisenergia" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Rubis Energia caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Rubis Gas" height="50" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/idealista" passHref>
              <LogoLink variant="box">
                <AccessibleIcon label="Idealista caso de estudo">
                  <Flex justify="center" align="center" css={{ height: '100%' }}>
                    <CaseStudyLogo variant="Idealista" height="35" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/manitou" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Manitou caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Manitou" height="28" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/ivocutelarias" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Ivo Cutelarias caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Ivo Cutelarias" height="50" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}

            {/* <NextLink href="/casos-de-estudo/porcel" passHref> */}
            <LogoLink variant="box">
              <AccessibleIcon label="Porcel caso de estudo">
                <Flex justify="center" align="center" css={{ height: '100%' }}>
                  <CaseStudyLogo variant="Porcel" height="28" />
                </Flex>
              </AccessibleIcon>
            </LogoLink>
            {/* </NextLink> */}
          </Grid>

          <Separator size="2" css={{ mb: '$8', mx: 'auto' }} />

          <Box css={{ ta: 'center', maxWidth: 480, mb: '$5', mx: 'auto' }}>
            <Heading size="1" as="h2" css={{ mb: '$2' }}>
              Trabalhou connosco?
            </Heading>

            <Paragraph css={{ ta: 'center' }}>
              Temos todo o gosto em partilhar a sua opinião{' '}
              <Link
                href="https://xks93eskgj8.typeform.com/to/EMjpPzSq"
                target="_blank"
                css={{ display: 'inline-flex' }}
              >
                Submeta o seu caso de estudo
                <ArrowTopRightIcon style={{ marginLeft: -1, marginBottom: -2 }} />
              </Link>
            </Paragraph>
          </Box>
        </Section>

        <Footer />
      </Container>
    </>
  );
}
