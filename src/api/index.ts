/* eslint-disable import/prefer-default-export */
import { ApiResponse, VideoSnippet, VideoStatistics } from '@/models/video';
import axios from 'axios';

const TOKEN = 'AIzaSyDnXg38KWbnatg2DEnIq8jbkRn-dv9tvqs';

export const getVideosBySearch = async (
	search: string,
	maxResults = 12
): Promise<VideoSnippet[]> => {
	const requestURI = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${TOKEN}&maxResults=${maxResults}&q=${search}`;
	const response = await axios.get<ApiResponse<VideoSnippet>>(requestURI);
	return response.data.items;
};

export const getVideosStatisticsByIDs = async (ids: string[]): Promise<VideoStatistics[]> => {
	const requestURI = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${ids.join(
		','
	)}&key=${TOKEN}`;
	const response = await axios.get<ApiResponse<VideoStatistics>>(requestURI);
	return response.data.items;
};
