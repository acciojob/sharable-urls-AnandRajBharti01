// your code here
let inp = document.querySelectorAll("input");
		console.log(inp)
		// let inpInnerValue = inp[0].value
		// console.log(inpInnerValue);
		let btn = document.querySelector("button");
		let h = document.querySelector("h3");
		console.log(h);

		btn.addEventListener("click", fun);
		function fun(){
			// e.priventDefault;
			let val1 =  inp[0].value;
			console.log(val1)
			let val2 = inp[1].value;
			console.log(val2)
			if(val1 != "" && val2 =="" ){
						let final_Ans = h.innerText = `https://localhost:8080/?name=${val1}`;
			}else if(val2 != "" && val1 ==""){
						let final_Ans = h.innerText = `https://localhost:8080/?year=${val2} `;
			}else if(val1!="" && val2!=""){
						let final_Ans = h.innerText = `https://localhost:8080/?name=${val1}&year=${val2} `;
			}