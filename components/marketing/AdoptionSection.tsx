import {
	Box,
	Container,
	Grid,
	Heading,
	Link,
	Paragraph,
	Section,
	Separator,
	Text
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';

export const AdoptionSection = () => {
	return (
		<Section>
			<Container size="3">
				<Box css={{ mb: '$7' }}>
					<MarketingCaption css={{ mb: '$1' }}>Garantimos resultados. Rápido.</MarketingCaption>
					<Heading as="h2" size="3" css={{ mb: '$4' }}>
						Fazemos o trabalho díficil por si
					</Heading>
					<Link
						href="https://xks93eskgj8.typeform.com/to/EMjpPzSq"
						target="_blank"
						css={{ textDecoration: 'none' }}
					>
						<MarketingButton as="a" icon={ArrowRightIcon}>
							Avaliar o meu website
						</MarketingButton>
					</Link>
				</Box>

				<Grid
					css={{ mb: '$8' }}
					columns={{ '@initial': 1, '@bp1': 2 }}
					gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}
				>
					<Box>
						<Text
							as="h3"
							size="6"
							css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
						>
							Apesar de tudo, podemos não ser a melhor escolha para si.
						</Text>
						<Paragraph>
							Temos todo o gosto em trabalhar consigo apenas se tem capacidade para lidar com um
							aumento substancial de clientes. Se comunica frequente e honestamente. Se quer
							terceirizar a aquisição de tráfego orgânico e se tem disponível um budget para
							investir em marketing.
						</Paragraph>
					</Box>

					<Box>
						<Text
							as="h3"
							size="6"
							css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
						>
							Se tem o que é preciso, fale connosco para avaliarmos a sua situação. É grátis.
						</Text>
						<Paragraph>
							Conte com uma comunição clara, uma equipa pragmática e profissionalismo e rapidez na
							execução de tarefas. Tratamos das empresas com que trabalhamos como se fosse a nossa.
							Peça já uma{' '}
							<Link href="https://xks93eskgj8.typeform.com/to/EMjpPzSq" target="_blank">
								análise grátis
							</Link>{' '}
							ao seu website avalidada em 150€.
						</Paragraph>
					</Box>
				</Grid>
				<Separator size="2" />
			</Container>
		</Section>
	);
};
