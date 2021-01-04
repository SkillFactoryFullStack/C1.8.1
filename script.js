function jQuery(selector, context = document) {
	this.elements = Array.from(context.querySelectorAll(selector));
	return this;
}

jQuery.prototype.each = function (fn) {
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn));
	return this;
}

jQuery.prototype.remove = function(){
	this.each(element => element.remove());
	return this;
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none');
	return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '');
	return this;
}

jQuery.prototype.class = function(name) {
	this.each(element => element.className = name);
	return this;
}

// Exercise 1
// Write a jQuery.prototype.html () method that returns
// or change the html content of the selected elements

jQuery.prototype.html = function(newHtml){
	// If nothing is passed to the function, return
	// html content, otherwise change it.
	if (newHtml)
			this.each(element => element.innerHTML = newHtml);
	return this;
}

const $ = (e) => new jQuery(e);
$('button').hide().show().click(e => console.log(e)).class('name')
$('h1').html("Привет");
