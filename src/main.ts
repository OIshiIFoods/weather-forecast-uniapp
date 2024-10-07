import { createSSRApp } from "vue";
import { pinia } from "@/stores";
import 'qweather-icons/font/qweather-icons.css'

import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  return {
    app
  };
}
