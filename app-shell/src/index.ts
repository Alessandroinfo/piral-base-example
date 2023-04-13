import { startLoadingPilets, createListener } from 'piral-base';
//  This is a manual orchestration of the layout
//  needed if we only use piral-base
import './global';
import './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/feed-test';

const loader = startLoadingPilets({
  createApi(meta) {
    return {
      meta,
      ...createListener(),
    };
  },
  fetchPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});
loader.connect((err, pilets, loaded) => {
  if (err) {
    console.error('Error loading', err);
  } else if (loaded) {
    console.log('Everything loaded', pilets);
  }
});
