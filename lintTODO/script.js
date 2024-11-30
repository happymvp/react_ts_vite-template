import eslintConfig from "./eslint-custom-conifg.json" with { type: "json" };

const activeRules = Object.entries(eslintConfig.rules || {}).filter(([rule, config]) => config[0] !== 0);

console.dir(activeRules);
