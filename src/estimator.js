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
      currentlyInfected: currentlyInfectedSevere, infectionsByRequestedTime;
      infectionsRequested(
        currentlyInfectedSevere,
        data.timeToElapse,
        data.periodType
      );
    }
  };
  export default covid19ImpactEstimator;
}
