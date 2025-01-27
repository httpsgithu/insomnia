// @flow

declare type DCPlugin = {|
  name: string,
  enabled?: boolean,
  tags?: Array<string>,
  config?: {
    [string]: Object,
  },
|};

declare type DCRoute = {|
  methods: Array<string>,
  strip_path: boolean,
  tags: Array<string>,
  name: string,
  paths: Array<string>,
  plugins?: Array<DCPlugin>,
|};

declare type DCService = {|
  name: string,
  protocol: string,
  host: string,
  port: number,
  path: string,
  routes: Array<DCRoute>,
  tags: Array<string>,
  plugins?: Array<DCPlugin>,
|};

declare type DCTarget = {|
  target: string,
|};

declare type DCUpstream = {|
  name: string,
  tags: Array<string>,
  targets: Array<DCTarget>,
|};

declare type DeclarativeConfig = {|
  _format_version: '1.1',
  services: Array<DCService>,
  upstreams: Array<DCUpstream>,
|};
