const covid19ImpactEstimator = (data) => data;
function currentlyInfectedPeople(reportedCases, times) {
    return reportedCases *times;

}
function infectionsRequested(currentlyInfected, period) {
    return currentlyInfected * 2 ** (perriod / 3);

}
const covid19ImpactEstimator = (data) => {
    const input = data;
    const currentlyInfectedImpact =currrentlyInfectedPeople(data.reportedCases, times: 10);
    const currentlyInfectedSevere =currentlyInfectedPeople(data.reportedCases, times: 50);
    return {
        data: input,
        impact: {
            currentlyInfected: currentlyInfectedImpact,
            infectionsByrequetedTime: infectionsRequested(currentlyInfectedImpact, dtaa.timeToElapse)
        }
    },
    severeImpact: {
        currentlyInfected: currentlyInfectedSevere,
        infectionsByRequestedTime: infectionsRequested(currentlyInfectedSevere, data.timeToElapse)
        
    }

}
export default covid19ImpactEstimator;

