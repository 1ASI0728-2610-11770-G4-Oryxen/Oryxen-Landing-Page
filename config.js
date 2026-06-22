/* ============================================================================
   Oryxen Landing Page — runtime configuration
   ----------------------------------------------------------------------------
   Single, environment-decoupled source for external URLs used by the landing
   page. Change `webAppUrl` here (or inject it at deploy time) instead of
   hardcoding the address across the markup. script.js resolves every
   [data-app-link] anchor against this base.
   ========================================================================== */
window.ORYXEN_CONFIG = {
  // Base URL of the Oryxen Web Application (login / register / dashboard).
  webAppUrl: 'http://localhost:5173',
};
