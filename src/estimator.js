/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
const deriveimpact = require('./functions');
import * as functions from './functions';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: functions.deriveImpact(data),
  // eslint-disable-next-line comma-dangle
  severeImpact: functions.deriveImpact(data, 5)
});

export default covid19ImpactEstimator;
