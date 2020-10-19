process.env["NODE_CONFIG_DIR"] = `./${String(process.env.RUN_DIR).trim()}/config`;
import config from 'config';

export default config;