import { defineStore } from 'pinia';
import { fetchAllShows } from '../api/tvmaze';
import { groupByGenre } from '../utils/groupByGenre';

export const useShowsStore = defineStore('shows', {
  state: () => ({ genres: {}, loading: false }),
  actions: {
    async loadShows() {
      this.loading = true;
      const res = await fetchAllShows();
      this.genres = groupByGenre(res.data);
      this.loading = false;
    }
  }
});