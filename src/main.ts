import {computed, createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import {unsafeWindow} from '$';

const href = unsafeWindow.location.href;
const url = new URL(href);
const hostname = url.hostname;
const pathname = url.pathname;

const mp = (() => {
  const node = document.createElement('div');
  node.id = "modpack-manager";
  let container: HTMLElement | null = null;

  if (hostname == "www.curseforge.com") {
    switch (pathname) {
      case "/minecraft/search":
        container = unsafeWindow.document.querySelector(".container");
        break;
    }
  }

  if (container != null) container.append(node);
  else unsafeWindow.document.body.append(node);
  return node;
})();

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount(mp);
