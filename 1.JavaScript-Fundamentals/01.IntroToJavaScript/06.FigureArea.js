function figureArea([w, h, W, H]){
    let area = 0;
    let [firstRect, secondRect, commonRect] = [W * H, w * h, Math.min(W, w) * Math.min(H, h)]

    area = firstRect + secondRect - commonRect;
    return area;
}