import React from 'react';
import {
	Box,
	Grid,
	Text,
	Container,
	Flex,
	Heading,
	Paragraph,
	Section,
	Separator,
	darkTheme
} from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';

export const BenefitsSection = () => {
	return (
		<Section
			id="resultados"
			css={{
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			<Container size="3">
				<Box css={{ mb: '$7' }}>
					<MarketingCaption css={{ mb: '$1' }}>Garantimos resultados. Rápido.</MarketingCaption>
					<Heading as="h2" size="3">
						Aumente o alcançe da sua
						<br />
						marca. Foque-se no que importa.
					</Heading>
				</Box>

				<Grid columns={{ '@initial': 1, '@bp1': 2 }} gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}>
					<Box>
						<Text
							as="h3"
							size="6"
							css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
						>
							Mais alcançe. Mais clientes.
						</Text>
						<Paragraph css={{ mb: '$5' }}>
							Sabemos o que é ter um bom serviço e não ter clientes e vendas suficientes. O nosso
							processo tem sido continuamente testado e melhorado há mais de 10 anos e já contribuiu
							para que milhares de empresas mudassem radicalmente o seu rumo.
						</Paragraph>
					</Box>

					<Box>
						<Text
							as="h3"
							size="6"
							css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
						>
							Foque-se no seu serviço.
						</Text>
						<Paragraph css={{ mb: '$5' }}>
							Otimizar centenas de fatores que influenciam o ranking do seu website não só é
							extremamente complexo como demora uma eternidade. Ao investir nos nossos serviços
							compra tempo para se focar no seu negócio e nos seus clientes.
						</Paragraph>
					</Box>
				</Grid>
			</Container>
		</Section>
	);
};
