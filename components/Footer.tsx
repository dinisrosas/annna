import { Box, Flex, Grid, Link, Text } from '@modulz/design-system';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { BoxLink } from './BoxLink';
import { RadixLogo } from './RadixLogo';

export const Footer = () => {
	const router = useRouter();
	const isColors = router.pathname.includes('/colors');

	return (
		<Box as="footer" css={{ pb: '$9' }}>
			<Grid
				css={{
					rowGap: '$7',
					columnGap: '$3',
					gridTemplateColumns: 'repeat(2, 1fr)',
					'@bp1': { gridTemplateColumns: 'repeat(3, 1fr)' },
					'@bp2': { gridTemplateColumns: 'repeat(4, 1fr)' },
					'& ul': { listStyle: 'none', margin: '0', padding: '0' }
				}}
			>
				<Flex
					align="start"
					direction="column"
					css={{ gridColumn: '1 / -1', '@bp2': { gridColumn: 'auto' } }}
				>
					<NextLink href={isColors ? '/colors' : '/'} passHref>
						<BoxLink>
							<RadixLogo label={isColors ? 'Radix Colors homepage' : 'Radix homepage'} />
						</BoxLink>
					</NextLink>
					<Text
						as="h6"
						size="2"
						css={{
							lineHeight: '20px',
							color: '$gray10',
							pr: '$8',
							mt: '$5'
						}}
					>
						Uma agência independente com sede em Barcelos, Portugal. Construímos soluções elegantes
						para problemas sofisticados.
					</Text>

					<Link variant="subtle" css={{ mt: '$2', size: '2' }} href="mailto:geral@annna.pt">
						geral@annna.pt
					</Link>
				</Flex>
				<Box>
					<Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
						Processo
					</Text>
					<ul>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#pesquisa" passHref>
									<Link variant="subtle">Análise e Pesquisa</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#estrategia" passHref>
									<Link variant="subtle">Estratégia de Otimização</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#otimizacao" passHref>
									<Link variant="subtle">Otimização da Página</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#relatorio" passHref>
									<Link variant="subtle">Relatório</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>

				<Box>
					<Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
						Sobre
					</Text>
					<ul>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#frustracao" passHref>
									<Link variant="subtle">Frustração</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#casos-de-estudo" passHref>
									<Link variant="subtle">Casos de estudo</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#resultados" passHref>
									<Link variant="subtle">Resultados</Link>
								</NextLink>
							</Text>
						</li>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<NextLink href="#beneficios" passHref>
									<Link variant="subtle">Benefícios</Link>
								</NextLink>
							</Text>
						</li>
					</ul>
				</Box>

				{/* {isColors && (
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/getting-started/installation" passHref>
                    <Link variant="subtle">Portfolio</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/palette-composition/the-scales" passHref>
                    <Link variant="subtle">Resultados</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/colors/palette-composition/composing-a-palette" passHref>
                    <Link variant="subtle">Benefícios</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="/docs/colors/palette-composition/understanding-the-scale"
                    passHref
                  >
                    <Link variant="subtle">Understanding the scale</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
        )} */}
				<Box>
					<Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
						Recursos
					</Text>
					<ul>
						<li>
							<Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
								<Link
									href="https://xks93eskgj8.typeform.com/to/EMjpPzSq"
									variant="subtle"
									target="_blank"
									css={{ display: 'inline-flex', alignItems: 'center' }}
								>
									Avaliar website
									<Flex as="span" css={{ color: '$slate8' }}>
										<ArrowTopRightIcon />
									</Flex>
								</Link>
							</Text>
						</li>
						{/* <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  href="https://twitter.com/radix_ui"
                  variant="subtle"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Twitter
                  <Flex as="span" css={{ color: '$slate8' }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li> */}
						{/* <li>
              <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                <Link
                  href="https://discord.com/invite/7Xb99uG"
                  variant="subtle"
                  target="_blank"
                  css={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Discord
                  <Flex as="span" css={{ color: '$slate8' }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </Link>
              </Text>
            </li> */}
					</ul>
				</Box>
			</Grid>
		</Box>
	);
};
