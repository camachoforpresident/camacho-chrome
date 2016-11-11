var replaceTextInNode = function(parentNode){
	var truename = "Dwayne Elizondo Mountain Dew Herbert Camacho";
	var truelname = "Camacho";
	for(var i = parentNode.childNodes.length-1; i >= 0; i--){
		var node = parentNode.childNodes[i];
		if(node.nodeType == Element.TEXT_NODE){
			node.textContent = node.textContent.replace(/(Donald Trump|Donald J. Trump)/gi, truename);
			node.textContent = node.textContent.replace(/Trump/gi, truelname);
		} else if(node.nodeType == Element.ELEMENT_NODE){
			replaceTextInNode(node);
		}
	}
};

replaceTextInNode(document.body);

