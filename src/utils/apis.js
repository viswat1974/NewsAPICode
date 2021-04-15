import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0,100).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};

export const getKids = async (id) => {
  try {
    const { data: kids } = await axios.get(
      `${BASE_API_URL}/item/${id}.json`
    );
	
    const comments = await Promise.all(kids.kids.slice(0,20).map(getStory));
    return comments;
  } catch (error) {
    console.log('Error while getting list of comments.');
  }
};