/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { deriveImpact } from './functions';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: deriveImpact(data),
  // eslint-disable-next-line comma-dangle
  severeImpact: deriveImpact(data, 5)
});

export default covid19ImpactEstimator;
