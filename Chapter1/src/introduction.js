var __next_objid=1;
function objectId(obj) {
    if (obj==null) return null;
    if (obj.__obj_id==null) obj.__obj_id=__next_objid++;
    return obj.__obj_id;
}


function main10() {
	var temp = Number(100);
	var temp2 = temp;
	console.info(objectId(temp));
	console.info(objectId(temp2));
	temp2 = "Hello, World!";
	temp2 = true;
}

main10();