var Stack = function() {
	//your code is here
	var storage=[]
	var count=0
	storage.push=function(value){
		
		storage[count]=value
		count++
	}
	storage.pop=function(){
		var temp=storage[count]
		if(storage[count]!==undefined){
		storage.pop()
		count--
		
	}
		return temp
	}
	storage.size=function(){
		return count
	}
	return storage
};