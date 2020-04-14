import * as functions from './functions';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: functions.deriveImpact(data),
  severeImpact: functions.deriveImpact(data, 5)
});

export default covid19ImpactEstimator;
