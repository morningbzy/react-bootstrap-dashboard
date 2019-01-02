const API_BASE_URL = 'http://localhost:8080';
const STATES = ['success', 'warning', 'danger', 'fatal', 'muted'];

const STATE_LABEL = {
  success: 'info',
  warning: 'warn',
  danger: 'error',
  fatal: 'fatal',
};

const STATE_ICONS = {
  success: 'info',
  warning: 'exclamation',
  danger: 'times',
  fatal: 'skull',
};
const STATE_ICONS_CIRCLE = {
  success: 'info-circle',
  warning: 'exclamation-triangle',
  danger: 'times-circle',
  fatal: 'skull',
};

export { API_BASE_URL, STATES, STATE_LABEL, STATE_ICONS, STATE_ICONS_CIRCLE };
