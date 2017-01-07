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

	storage.first=function(){
		return storage[0]
	}
	storage.last=function(){
		return storage[size-1]
	}
	return storage

};