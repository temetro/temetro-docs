// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "api/authentication.mdx": () => import("../content/docs/api/authentication.mdx?collection=docs"), "features/appointments.mdx": () => import("../content/docs/features/appointments.mdx?collection=docs"), "features/patients.mdx": () => import("../content/docs/features/patients.mdx?collection=docs"), "features/staff.mdx": () => import("../content/docs/features/staff.mdx?collection=docs"), "getting-started/configuration.mdx": () => import("../content/docs/getting-started/configuration.mdx?collection=docs"), "getting-started/first-run.mdx": () => import("../content/docs/getting-started/first-run.mdx?collection=docs"), "getting-started/installation.mdx": () => import("../content/docs/getting-started/installation.mdx?collection=docs"), "self-hosting/docker.mdx": () => import("../content/docs/self-hosting/docker.mdx?collection=docs"), "self-hosting/environment-variables.mdx": () => import("../content/docs/self-hosting/environment-variables.mdx?collection=docs"), "self-hosting/production.mdx": () => import("../content/docs/self-hosting/production.mdx?collection=docs"), }),
};
export default browserCollections;