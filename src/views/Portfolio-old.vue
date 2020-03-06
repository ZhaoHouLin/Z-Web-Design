<template lang="pug">
	.portfolio(@wheel.prevent="wheel")
		.cards
			.card(v-for='dm in dms')
				.left
					.cover(:style='bgcss(dm.cover)')
				.right
					h2 {{dm.name}}
					h4 {{dm.type}}
					p(v-html='dm.description')
</template>

<script>
export default {
	data() {
		return {
			dms: [
				{
					name: "Liar Xmas",
					cover:
						"https://drive.google.com/uc?export=view&id=1reXylXZy4aBQfIcj6yRdILVFF9qZ360V",
					description:
						"Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
					open: false
				},
				{
					name: "揭密阿卡貝拉",
					cover:
						"https://drive.google.com/uc?export=view&id=1HlD4ualiSWZ6TGJTzHFl68ehOhgNjbs4",
					description:
						"Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
					open: false
				}
			]
		};
	},
	created() {
	
	},
	methods: {
		wheel(evt) {
			console.log(evt.deltaY);
			TweenMax.to(".cards", 0.8, {
				left: "+=" + evt.deltaY * 2 + "px"
			});
		},
		bgcss(url) {
			return {
				backgroundImage: "url(" + url + ")"
			};
		}
	}
};
</script>

<style lang="stylus" scoped>
@import '../assets/cssSetting.styl'

.portfolio
	z-index 99
	size(100%,100vh)
	background-color transparent
	position relative
	.cards
		flexCenter()
		size(100%,100vh)
		position absolute
		.card
			size(600px, 240px)
			flexCenter()
			border-radius 16px
			padding 20px
			box-shadow 4px 4px 16px rgba(0, 0, 0, 0.5)
			margin-right 32px
			.left
				size(auto)
				.cover
					size(300px, 420px)
					border-radius 16px
					position relative
					background-size cover
					margin-top -120px
			.right
				flexCenter(center, center, column)
</style>