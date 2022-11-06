import { amber, lime, mint, sky, yellow, red } from '@radix-ui/colors';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: '18-24',
		uv: 25.47,
		fill: '#8884d8'
	},
	{
		name: '25-29',
		uv: 20.69,
		fill: '#83a6ed'
	},
	{
		name: '30-34',
		uv: 16.69,
		fill: '#8dd1e1'
	},
	{
		name: '35-39',
		uv: 18.22,
		fill: '#82ca9d'
	},
	{
		name: '40-49',
		uv: 23.63,
		fill: '#a4de6c'
	},
	{
		name: 'unknow',
		uv: 19.67,
		fill: '#ffc658'
	}
];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

export default function BarChart() {
	return (
		<ResponsiveContainer width="80%" height="80%">
			<RadialBarChart cx="50%" cy="50%" innerRadius="5%" outerRadius="50%" barSize={15} data={data}>
				<RadialBar
					dataKey="uv"
					// label={{ position: 'insideStart', fill: '#fff', fontSize: 12 }}
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}
