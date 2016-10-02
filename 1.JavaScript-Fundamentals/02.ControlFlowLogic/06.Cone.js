function cone([r,h]){
    [r, h] = [r, h].map(Number);
    let volume = (Math.PI * r*r * h) / 3;
    let slant = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let area = Math.PI * r * (r + slant);

    console.log(volume);
    console.log(area);
}
