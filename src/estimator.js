estimator();

function estimator() {
  function currentlyInfectedPeople(reportedCases, times) {
    return reportedCases * times;
  }
  function infectionsRequested(currentlyInfected, period, type) {
    let infectionsByRequestedTime;
    switch (type) {
      case 'weeks':
        infectionsRequestedTime =
          currentlyInfected * 2 ** Math.floor((period * 7) / 3);
        break;
      case 'months':
        infectionsByrequestedTime = currentlyInfected * 2 ** (period * 10);
        break;
      default:
        infectionsByrequestedTime =
          currentylyInfected * 2 ** Math.ceil(period / 3);
    }
    return infectionsByRequestedTime;
  }
  const covid19ImpactEstimator = (data) => {
    const input = data;
    const currentlyInfectedImpact = currrentlyInfectedPeople(
      data.reportedCases,
      times,
      10
    );
    const currentlyInfectedSevere = currentlyInfectedPeople(
      data.reportedCases,
      times,
      50
    );
    return (
      {
        data: input,
        impact: {
          currentlyInfected: currentlyInfectedImpact,
          infectionsByrequestedTime: infectionsRequested(
            currentlyInfectedImpact,
            data.timeToElapse,
            data.periodType
          )
        }
      },
      severeImpact
    );
    {
      const currentlyInfected currentlyInfectedSevere, infectionsByRequestedTime;
      infectionsRequested(
        currentlyInfectedSevere,
        data.timeToElapse,
        data.periodType
      );
    }
  };
  export default covid19ImpactEstimator;
}
export function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * 10 * times;
}

export function getNumOfDays({ timeToElapse, periodType = 'days' }) {
  let numOfDays;
  switch (periodType) {
    case 'weeks':
      numOfDays = timeToElapse * 7;
      break;
    case 'months':
      numOfDays = timeToElapse * 30;
      break;
    default:
      numOfDays = timeToElapse;
      break;
  }
  return numOfDays;
}

export function deriveImpact({ region, ...content }, multiplier = 1) {
  const days = getNumOfDays(content);

  const infectionFactor = Math.trunc(days / 3);

  const currentlyInfected = currentlyInfectedPeople(content.reportedCases, multiplier);

  const infectionsByRequestedTime = currentlyInfected * (2 ** infectionFactor);

  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);

  const hospitalBedsByRequestedTime = Math.trunc((content.totalHospitalBeds * 0.35)
    - severeCasesByRequestedTime);

  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);

  const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);

  const dollarsInFlight = Math.trunc((infectionsByRequestedTime * region.avgDailyIncomeInUSD
    * region.avgDailyIncomePopulation) / days);

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
}