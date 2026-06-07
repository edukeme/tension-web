import { defineMiddleware } from 'astro:middleware';

// Middleware disabled - no age-gating
export const onRequest = defineMiddleware((context, next) => {
  return next();
});
