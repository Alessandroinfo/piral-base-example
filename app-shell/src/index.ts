import {createListener, startLoadingPilets, getDefaultLoader, runPilet} from 'piral-base';
//  This is a manual orchestration of the layout
//  needed if we only use piral-base
import './global';
import './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/feed-test';

const loadPilet = getDefaultLoader();

const events = createListener();

const createApi = (meta) => {
  return {
    meta,
    ...createListener(),
  };
}

const loader = startLoadingPilets({
  createApi,
  fetchPilets() {
    if (process.env.NODE_ENV === "production") {
      // Production - go against live feed
      return fetch("https://base-demo.my.piral.cloud/api/v1/pilet")
          .then((res) => res.json())
          .then((res) => res.items);
    } else {
      // Development - use relative URL, i.e., emulator API
      const url = `${location.origin}/$pilet-api`;
      const ws = new WebSocket(url.replace("http", "ws"));

      // listen to changes for unload / reload of pilet
      ws.onmessage = ({data}) => {
        const meta = JSON.parse(data);
        const name = meta.name;

        events.emit("unload-pilet", {name});

        loadPilet(meta).then((pilet) => runPilet(createApi, pilet));
      };

      return fetch(url).then((res) => {
        return res.json()
      });
    }
  },
});

loader.connect((err, pilets, loaded) => {
  if (err) {
    console.error('Error loading', err);
  } else if (loaded) {
    console.log('Everything loaded', pilets);
  }
});
