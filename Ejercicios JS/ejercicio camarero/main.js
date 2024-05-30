const dinner = []; 
dinner.push('🍔'); 
dinner.push('🌭'); 
dinner.push('🍟', '🍟');
dinner.push('🧋', '🧋');

console.log(dinner.reverse()); 


const combinedTicket = ["🍺", "🍺", "🍺", "🥜", "🍺", "🥪", "🥙"];

combinedTicket.pop(); 
combinedTicket.shift(); 

console.log(combinedTicket);


const shake= ['🥛', '🍓', '🍌'];
console.log(shake.join('+'));


const numbers = [1, 100000, 21, 30, 4];


function bubbleSort(arr) {
	const n = arr.length;

    
	for (let i = 0; i < n - 1; i++) {
		
		for (let j = 0; j < n - i - 1; j++) {
			
			if (arr[j] > arr[j + 1]) {
				
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}

console.log(bubbleSort(numbers));



