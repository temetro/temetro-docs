// @ts-nocheck
import * as __fd_glob_16 from "../content/docs/self-hosting/production.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/self-hosting/environment-variables.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/self-hosting/docker.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/features/staff.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/features/patients.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/features/languages.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/features/appointments.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/getting-started/first-run.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/getting-started/configuration.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/api/authentication.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/self-hosting/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/features/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api/meta.json": __fd_glob_1, "features/meta.json": __fd_glob_2, "getting-started/meta.json": __fd_glob_3, "self-hosting/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "api/authentication.mdx": __fd_glob_6, "getting-started/configuration.mdx": __fd_glob_7, "getting-started/first-run.mdx": __fd_glob_8, "getting-started/installation.mdx": __fd_glob_9, "features/appointments.mdx": __fd_glob_10, "features/languages.mdx": __fd_glob_11, "features/patients.mdx": __fd_glob_12, "features/staff.mdx": __fd_glob_13, "self-hosting/docker.mdx": __fd_glob_14, "self-hosting/environment-variables.mdx": __fd_glob_15, "self-hosting/production.mdx": __fd_glob_16, });