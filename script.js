function stringChop(str, size) {
  let n = str.length;
    let ans = [];
    let i=0;
    while(i<n) {
        let c=0;
        let t = '';
        while(i<n && c<size) {
            t=t+str[i];
            i++;
            c++;
        }
        ans.push(t);
    }
	return ans;
}

Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
