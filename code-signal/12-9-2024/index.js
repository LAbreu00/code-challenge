/*
P:
- in: arr of positive integers
- out: string (increasing, decreasing, none)
E:
 - in: numbers = [12, 65, 15, 72, 19, 72]
 - op: even indexs are 12[0], 15[2], 19[4], numbers are increasinng 12 < 15 < 19, so the output is ~>
 - out: "increasing"
*/
const solution = (numbers) => {
    let inc = false
    let dec = false
    
    for (i = 2; i < numbers.length; i += 2) {
        if (numbers[i] >= numbers[i-2]) inc = true
        if (numbers[i] <= numbers[i-2]) dec = true
        
        if (inc === dec) return "none"
    }
    if (inc && dec) return "none"
    return dec ? 'decreasing' : 'increasing'
}