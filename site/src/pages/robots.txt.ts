import type { APIRoute } from 'astro';

// Search/answer bots decide whether CSP can be cited; training bots are allowed by default because the
// mission is to spread ideas (CONFIRM with founder; to opt out of training, set those groups to Disallow: /).
// research/seo-aeo-stack.md §A.6
const searchBots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Applebot', 'DuckDuckBot'];
const trainingBots = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot'];

export const GET: APIRoute = ({ site }) => {
  const rules = 'Allow: /\nDisallow: /admin/\nDisallow: /thanks/\n';
  const body = [
    '# Cultural Shock Party: culturalshockparty.com',
    '# A bot that matches a named group ignores the * group, so the rules repeat per group.',
    '',
    'User-agent: *', rules,
    '# Search and answer engines',
    ...searchBots.map((b) => `User-agent: ${b}`), rules,
    '# Model training (allowed: we want these ideas to travel)',
    ...trainingBots.map((b) => `User-agent: ${b}`), rules,
    `Sitemap: ${new URL('/sitemap-index.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
