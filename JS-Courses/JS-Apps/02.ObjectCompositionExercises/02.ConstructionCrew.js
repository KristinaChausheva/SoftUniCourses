function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
        worker.dizziness = false;
    } 
    return worker;
}

const w = { weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true };

console.log(solve(w));
;
