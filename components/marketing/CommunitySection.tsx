import { Box, Card, Container, Grid, Heading, Paragraph, Section } from '@modulz/design-system';
import {
	ArrowBottomRightIcon,
	BarChartIcon,
	ChatBubbleIcon,
	FileTextIcon,
	MagnifyingGlassIcon,
	ShuffleIcon
} from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';

import { sage } from '@radix-ui/colors';

export const CommunitySection = () => {
	return (
		<Section id="frustracao">
			<Container size="3">
				<Box css={{ mb: '$5' }}>
					<MarketingCaption css={{ mb: '$1' }}>Garantimos resultados. Rápido.</MarketingCaption>
					<Heading as="h2" size="3" css={{ mb: '$4' }}>
						Já se sentiu frustado com serviços onde:
					</Heading>
				</Box>

				<Grid
					gap="3"
					flow={{ '@initial': 'row', '@bp2': 'column' }}
					css={{ justifyContent: 'start', '@bp2': { gridAutoColumns: '240px' } }}
				>
					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<ArrowBottomRightIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Gastou milhares em marketing e a sua caixa de email continua quase vazia?
							</Paragraph>
						</Box>
					</Card>

					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<ChatBubbleIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Teve pouca ou nenhuma comunicação ou deixou de receber respostas?
							</Paragraph>
						</Box>
					</Card>

					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<BarChartIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Recebeu relatórios confusos onde não conseguiu acompanhar o seu progresso?
							</Paragraph>
						</Box>
					</Card>
				</Grid>

				<Grid
					gap="3"
					flow={{ '@initial': 'row', '@bp2': 'column' }}
					css={{ mt: '$3', justifyContent: 'start', '@bp2': { gridAutoColumns: '240px' } }}
				>
					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<ShuffleIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Ficou completamente sobrecarregado por tentar fazer tudo sozinho e ao mesmo tempo?
							</Paragraph>
						</Box>
					</Card>

					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<FileTextIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Foi adicionado conteúdo de baixa qualidade ao seu website porque "o Google gosta"?
							</Paragraph>
						</Box>
					</Card>

					<Card variant="interactive">
						<Box css={{ p: '$3' }}>
							<Box css={{ mb: '$2' }}>
								<MagnifyingGlassIcon width={24} height={24} color={sage.sage9} />
							</Box>
							<Paragraph as="p" css={{ fontSize: '$5' }}>
								Continuou a sentir-se invisível e ao mesmo tempo a sua competição está em todo lado?
							</Paragraph>
						</Box>
					</Card>
				</Grid>
			</Container>
		</Section>
	);
};
