import type { App, Plugin } from "vue";
import { each } from "lodash-es";

export function makeInstaller(componets: Plugin[]) {
  const installer = (app: App) => {
    each(componets, (c) => app.use(c));
  };

  return installer as Plugin;
}

export default makeInstaller;
