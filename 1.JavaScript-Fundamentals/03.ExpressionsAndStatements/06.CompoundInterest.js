function compoundInterest([principal, interest, period, time]){
    [principal, interest, period, time] = [principal, interest, period, time].map(Number);
    interest /= 100;
    period = 12 / period;

    let total = principal * Math.pow(1 + interest / period, period*time);
    console.log(total.toFixed(2));
}
terest([1500, 4.3, 3, 6])