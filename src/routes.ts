/***
 * An array of routes that are accessible to the public
 * These routes do not require auth
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * These routes will redirect to settings after auth
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for api auth routes
 * Routes that starts with this prefix are used for api purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Default login redirect links after successfull login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
