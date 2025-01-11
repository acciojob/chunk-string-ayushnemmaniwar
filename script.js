function stringChop(str, size) {
  // your code here
	let i=0;
    let n=str.length;
    let ans=[];
    while(i<n) {
        let c=0;
        let t='';
        while(i<n && c<size) {
            t=t+str[i];
            i++;
            c++;
        }
        ans.push(t);
    }
    return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
