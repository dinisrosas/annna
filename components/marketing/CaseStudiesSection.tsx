import React from 'react';
import NextLink from 'next/link';
import {
	Box,
	Grid,
	Text,
	styled,
	Container,
	Flex,
	Heading,
	Section,
	Card,
	Avatar,
	Link,
	Separator
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { CaseStudyLogo } from './CaseStudyLogo';
import { LogoLink } from './LogoLink';

export const CaseStudiesSection = () => {
	return (
		<Section id="casos-de-estudo">
			<Container size="3">
				<Box css={{ mb: '$5' }}>
					<MarketingCaption css={{ mb: '$1' }}>Os nossos clientes</MarketingCaption>
					<Heading as="h2" size="3" css={{ maxWidth: 500 }}>
						Ajudamos dezenas de empresas de renome a crescer ainda mais.
					</Heading>
				</Box>

				<Grid columns={{ '@bp2': 2 }} gap="5" css={{ mb: '$6' }}>
					<Card variant="interactive">
						<Box css={{ p: '$5' }}>
							<Box css={{ mb: '$4' }}>
								<AccessibleIcon label="El Corte Inglés case study">
									<CaseStudyLogo variant="El Corte Inglés" height="45" />
								</AccessibleIcon>
							</Box>
							<TestimonialText css={{ mb: '$4' }}>
								Através de uma aplicação consistente da estratégia proposta, foram alcançados
								resultados impressionantes. A nossa presença passou de invisível para invencível.
							</TestimonialText>
							<Flex align="center" gap="2">
								<Avatar
									size="3"
									src="/marketing/avatar-miguel-fonseca.jpg"
									aria-describedby="person1"
								/>
								<Text variant="gray" size="3" id="person1" css={{ lineHeight: 1.5 }}>
									Miguel Jesus Fonseca, Viajens El Corte Inglés
								</Text>
							</Flex>
						</Box>
					</Card>
					<Card variant="interactive">
						<Box css={{ p: '$5' }}>
							<Box css={{ mb: '$4' }}>
								<AccessibleIcon label="Abreu caso de estudo">
									<CaseStudyLogo variant="Abreu" height="45" />
								</AccessibleIcon>
							</Box>
							<TestimonialText css={{ mb: '$4' }}>
								Os resultados foram de tirar o folêgo. O tráfego aumentou 861% num espaço de menos
								de três meses. As conversões subiram mais de 300%.
							</TestimonialText>
							<Flex align="center" gap="2">
								<Avatar
									size="3"
									src="/marketing/avatar-joao-barbosa.jpg"
									aria-describedby="person2"
								/>
								<Text variant="gray" size="3" id="person2" css={{ lineHeight: 1.5 }}>
									João Barbosa, Abreu Logistics
								</Text>
							</Flex>
						</Box>
					</Card>
				</Grid>

				<Text variant="gray" css={{ mb: '$3' }}>
					<NextLink href="/casos-de-estudo" passHref>
						<Link variant="subtle" css={{ display: 'inline-flex', alignItems: 'center' }}>
							E dezenas de outras empresas
							<ArrowRightIcon />
						</Link>
					</NextLink>
				</Text>
			</Container>

			<Container
				size="3"
				css={{
					position: 'relative',
					overflowX: 'scroll',
					overflowY: 'hidden',
					WebkitOverflowScrolling: 'touch',
					MsOverflowStyle: 'none',
					scrollbarWidth: 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					},

					// Add some padding so that logos aren't clipped when focused.
					py: '$3',
					my: '-$3'
				}}
			>
				<Grid flow="column" align="center" justify="start" gap="6">
					{/* <NextLink href="/casos-de-estudo/portoeditora" passHref> */}
					<LogoLink>
						<AccessibleIcon label="Liveblocks case study">
							<CaseStudyLogo variant="Porto Editora" height="35" />
						</AccessibleIcon>
					</LogoLink>
					{/* </NextLink> */}

					{/* <NextLink href="/casos-de-estudo/ivocutelarias" passHref> */}
					<LogoLink>
						<AccessibleIcon label="Ivo Cutelarias caso de estudo">
							<CaseStudyLogo variant="Ivo Cutelarias" height="42" />
						</AccessibleIcon>
					</LogoLink>
					{/* </NextLink> */}

					{/* <NextLink href="/casos-de-estudo/rubisenergia" passHref> */}
					<LogoLink>
						<AccessibleIcon label="Rubis Gas case study">
							<CaseStudyLogo variant="Rubis Gas" height="40" />
						</AccessibleIcon>
					</LogoLink>
					{/* </NextLink> */}

					{/* <NextLink href="/casos-de-estudo/manitou" passHref> */}
					<LogoLink>
						<AccessibleIcon label="Manitou case study">
							<CaseStudyLogo variant="Manitou" height="28" width="196" />
						</AccessibleIcon>
					</LogoLink>
					{/* </NextLink> */}

					{/* <NextLink href="/casos-de-estudo/porcel" passHref>
            <LogoLink>
              <AccessibleIcon label="Porcel caso de estudo">
                <CaseStudyLogo variant="Porcel" height="35" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink> */}

					{/* <NextLink href="/casos-de-estudo/campera" passHref> */}
					<LogoLink>
						<AccessibleIcon label="Campera caso de estudo">
							<CaseStudyLogo variant="Campera" height="40" />
						</AccessibleIcon>
					</LogoLink>
					{/* </NextLink> */}

					{/* Horizontal scroll spacer */}
					<Box css={{ width: 1, height: 1 }} />
				</Grid>
			</Container>
		</Section>
	);
};

const TestimonialText = styled(
	Text,
	{
		lineHeight: 1.6,
		letterSpacing: '-0.01em',
		textIndent: '-0.577em',
		fontVariantNumeric: 'normal',
		hyphens: 'auto',
		'&::before': { content: '“', mr: '0.07em' },
		'&::after': { content: '”', ml: '0.07em' }
	},
	{
		defaultVariants: {
			size: 4
		}
	}
);
