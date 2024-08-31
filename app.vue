<template>
	<VitePwaManifest />
	<div class="p-3">
		<p>Version : 4</p>
		<UTabs :items="items">
			<template #item="{ item }">
				<div class="pt-2 pb-3 px-4">
					<URadioGroup
						class="choose_flyer"
						color="primary"
						:options="[
							{ value: 'current', label: 'Current Flyer' },
							{ value: 'next', label: 'Upcoming Flyer' },
						]"
						v-model="flyerVersion"
					/>
				</div>
				<UCard @submit.prevent="() => onSubmit(item.key === 'account' ? accountForm : passwordForm)">
					<div class="space-y-3 resizable">
						<iframe :src="flyerVersion === 'next' ? item.next : item.current"></iframe>
					</div>
				</UCard>
			</template>
		</UTabs>
	</div>
</template>

<script setup lang="ts">
const items = [
	{
		key: "superc",
		label: "Super C",
		current: "https://www.circulaires.com/superc/circulaire/?ref=circulaires.com&str=4312044",
		next: "https://v.circulaires.com/superc/circulaire/index.do?str=4312044",
	},
	{
		key: "maxi",
		label: "Maxi",
		current: "https://www.circulaires.com/maxi/circulaire/?ref=circulaires.com&str=4312044",
		next: "https://v.circulaires.com/maxi/circulaire/index.do?str=4312044",
	},
	{
		key: "iga",
		label: "IGA",
		description: "Change your password here. After saving, you'll be logged out.",
		current: "https://www.circulaires.com/supermarche-iga/circulaire/?ref=circulaires.com&str=4312044",
		next: "https://v.circulaires.com/supermarche-iga/circulaire/index.do",
	},
	{
		key: "metro",
		label: "Metro",
		description: "Change your password here. After saving, you'll be logged out.",
		current: "https://www.circulaires.com/metro/circulaire/?ref=circulaires.com&str=4312044",
		next: "https://v.circulaires.com/metro/circulaire/index.do?str=4312044",
	},
	{
		key: "mayrand",
		label: "Mayrand",
		description: "Change your password here. After saving, you'll be logged out.",
		current: "https://circulaires.com/b/?sname=mayrand&dpage=22&str=4312044",
		next: "https://circulaires.com/b/?sname=mayrand&dpage=22&str=4312044",
	},
];

const flyerVersion = ref("current");
</script>

<style lang="scss">
.choose_flyer {
	& > fieldset {
		flex-flow: row nowrap;
		display: flex;
		& > .items-start {
			margin-right: 30px;
		}
	}
}

.resizable {
	margin: 0 auto;
	display: block;
	height: calc(100svh - 180px);
	width: calc(100svh - 180px);
	max-width: 100%;
	resize: horizontal;
	overflow: auto;
}

iframe {
	height: 100%;
	width: 100%;
}
</style>
