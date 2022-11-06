import React from 'react';
import { styled } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { Box, Paragraph } from '@modulz/design-system';

const StyledProgress = styled(ProgressPrimitive.Root, {
	position: 'relative',
	overflow: 'hidden',
	background: blackA.blackA8,
	borderRadius: '2px',
	width: 250,
	height: 12,

	// Fix overflow clipping in Safari
	// https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
	transform: 'translateZ(0)'
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
	backgroundColor: '$grass8',
	width: '100%',
	height: '100%',
	transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;

// Your app...
export const MainHeroSlider = () => {
	const [progress, setProgress] = React.useState([7, 56, 36]);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress([88, 92, 95]), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Box>
			<Paragraph css={{ fontSize: '$1' }}>Conteúdo da página</Paragraph>
			<Progress>
				<ProgressIndicator style={{ transform: `translateX(-${100 - progress[0]}%)` }} />
			</Progress>

			<Paragraph css={{ fontSize: '$1', mt: '$1' }}>Velocidade do website</Paragraph>
			<Progress>
				<ProgressIndicator style={{ transform: `translateX(-${100 - progress[1]}%)` }} />
			</Progress>

			<Paragraph css={{ fontSize: '$1', mt: '$1' }}>Referências externas</Paragraph>
			<Progress>
				<ProgressIndicator style={{ transform: `translateX(-${100 - progress[2]}%)` }} />
			</Progress>
		</Box>
	);
};
