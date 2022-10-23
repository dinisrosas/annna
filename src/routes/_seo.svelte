<script>
	let serp = 3;
	let volume = 1700;
	let website_cr = 0.1;
	let company_cr = 0.1;
	let client_value = 200;

	let avg_lead_cost = 70;

	function getSERPCTR(pos) {
		return [0.3273, 0.2471, 0.1866, 0.136, 0.0951][pos - 1];
	}

	$: clients = getSERPCTR(serp) * volume * website_cr;
	$: value = clients * company_cr * client_value;
	$: ads = clients * avg_lead_cost;
</script>

<div>
	<p>
		About This Gig Why SEO Backlinks? Want to know the secret to getting found on Google ranking?
	</p>

	<p>The answer is to give authority to your website.</p>

	<p>How? Building a valuable SEO Backlinks!</p>

	<p>
		With over 8,000+ completed orders in SEO services, I know how to build high quality backlinks
		that can help to improving your website's ranking with safe and efficient Off Page link building
		techiques.
	</p>

	<p>What Will You Get</p>

	<ul>
		<li>
			Contextual Backlinks: I'll create Contextual Backlinks on my blogs with some related content
			about your niche
		</li>

		<li>Mixed and Natural Way: Mostly dofollow, but with some nofollow included</li>

		<li>
			Efficient Strategy: As you know, not all links are the same, I have a unique, safe and
			efficient SEO Backlinks
		</li>

		<li>
			Safe Anchor Text: In addition to your target keywords, I'll use diversified anchor text as URL
			and Generics Keywords
		</li>

		<li>
			High Quality Backlinks: The posts will be placed on blogs with High Ahrefs Metrics DR or UR
			49~20, or High Moz Metrics DA or PA 49~20
		</li>
	</ul>

	What Will I Need Only 1 URL per Order Short Description About Your Business 4 Keywords as Anchor
	Text Indexing: 7~30 Days After Delivery Porn Is Not Accepted Something Unclear?
	Cancellations/Refunds are not accepted, talk to me before buying link building
</div>

<h1>Pagavas-me 938€ se trouxesse 9389€ à tua empresa?</h1>

<p>Três formas de cobrar ao cliente:</p>

<ol>
	<li>
		<p>
			Combinam um valor, a empresa faz a transferência, rezam um pai-nosso e fazem figas para não
			ficarem sem o dinheiro.
		</p>
		<p>Agências marketing, SEO e desenvolvedores de websites</p>

		<p>Ultrapassado. Pouco fiável. Injusto</p>
	</li>

	<li>
		<strong>SEO</strong>

		<br />

		<code
			><span style="background-color:lightgreen;">NEW CLIENTS I BRING</span> = KEYWORD VOLUME * SEARCH
			ENGINE POSITION CTR * WEBSITE CONVERSION RATE</code
		>
		<br />
		<code
			>€€€ I'M BRINGING = <span style="background-color:lightgreen;">NEW CLIENTS I BRING</span> * COMPANY
			CR * AVG. CLIENT LTV</code
		>

		<div>
			<strong>EXEMPLO</strong>
		</div>

		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>CTR</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>32.73%</td>
				</tr>
				<tr>
					<td>2</td>
					<td>24.71%</td>
				</tr>
				<tr>
					<td>3</td>
					<td>18.66%</td>
				</tr>
				<tr>
					<td>4</td>
					<td>13.60%</td>
				</tr>
				<tr>
					<td>5</td>
					<td>9.51%</td>
				</tr>
			</tbody>
		</table>

		<div>
			<div>
				<strong>Palavra-chave</strong>: "mudanças lisboa"
			</div>
			<div>
				<strong>Volume</strong>: 1700 (Fonte: https://ahrefs.com/pt/keyword-generator)
			</div>

			<input type="number" bind:value={volume} placeholder="Volume" />
			<br />
			{serp} <input type="range" min="1" max="5" bind:value={serp} placeholder="SERP" />
			<br />
			{website_cr}
			<input
				type="range"
				min="0"
				max="1"
				bind:value={website_cr}
				step="0.1"
				placeholder="Website CR"
			/>

			<br />
			<br />

			<div>
				<strong>CLIENTES QUE GERO</strong>: {volume} * {getSERPCTR(serp)} * {website_cr} = {clients.toFixed(
					2
				)}
			</div>
			<div>
				<strong>€€€ QUE GERO</strong>: {clients.toFixed(2)} * {client_value}
				= {(value / 0.1).toFixed(2)}

				<br />
				<strong>€€€ QUE RECEBO</strong>: {value} * 0.1 = {(value * 0.1).toFixed(2)}

				<br />
				<strong>€€€ EM ADS</strong>: {clients.toFixed(2)} * {avg_lead_cost} = {ads.toFixed(2)}
				<br /><br />
				<strong>CUSTO LEAD (ORGANIC)</strong>: 1 CLIENTE * 70 * 0.1 = {0.1 * 70}
				<br />
				<strong>CUSTO LEAD (ADS)</strong>: 70
			</div>
		</div>
	</li>
</ol>
