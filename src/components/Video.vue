<template>
	<div class="main">
		<div class="videos-inner">
			<div class="video" v-for="video in videos" :key="video.id.videoId">
				<a :href="`https://youtube.com/watch?v=${video.id.videoId}`">
					<img :src="video.snippet.thumbnails.high.url" />
				</a>
				<div class="spans">
					<span class="title">{{ video.snippet.title }}</span>
					<div>
						<span class="channelTitle">{{ video.snippet.channelTitle }}</span>
						<span class="viewCount"
							>{{ Math.floor(video.statistics.viewCount / 1000) }} тыс. просмотров</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getVideosBySearch, getVideosStatisticsByIDs } from '@/api';

export default {
	props: ['search'],
	data() {
		return {
			videos: [],
		};
	},
	async mounted() {
		const videos = await getVideosBySearch(this.$props.search);
		const videoIds = videos.map((v) => v.id.videoId);
		const videosStatistics = await getVideosStatisticsByIDs(videoIds);
		this.videos = videos.map((video) => {
			const associatedVideo = videosStatistics.find((v) => v.id === video.id.videoId);
			return {
				...video,
				statistics: associatedVideo ? associatedVideo.statistics : { viewCount: 'NaN' },
			};
		});
	},

	unmounted() {
		this.videos = [];
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.main {
	display: flex;
	justify-content: center;
}

.videos-inner {
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 1040px;
	gap: 20px;
}

.video {
	display: flex;
	flex-direction: column;
	& > a {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	& img {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		border: 1px solid #1390e5;
		border-radius: 10px;
		text-decoration: none;
		color: unset;
		width: 150%;
		height: 100%;
		max-width: 245px;
		max-height: 140px;
	}

	.spans {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 245px;
		gap: 8px;

		.title {
			text-decoration: none;
			font-family: Roboto;
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 16px;

			display: flex;
			align-items: center;

			color: #272727;

			margin: 8px 0px;
		}

		& div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.channelTitle {
			text-decoration: none;
			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;

			color: rgba(23, 23, 25, 0.3);
		}
		.viewCount {
			text-decoration: none;
			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;

			color: rgba(23, 23, 25, 0.3);

			margin: 8px 0px;
		}
	}
}
</style>
