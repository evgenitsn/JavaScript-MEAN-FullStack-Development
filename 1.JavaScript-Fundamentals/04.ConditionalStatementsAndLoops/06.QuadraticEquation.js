function quadraticEquation([a, b, c]){
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    let result = [];
    if (discriminant > 0){
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        result.push(root2);
        result.push(root1);
    }
    else if (discriminant < 0){
        let root = 'No';
        result.push(root);
    }
    else{            // discriminant == 0
        let root = -b / (2*a);
        result.push(root);
    }
    for (let root of result){
        console.log(root);
    }
}

quadraticEquation([6, 11, -35])