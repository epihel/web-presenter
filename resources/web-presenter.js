var WebPresenter = {
	numSlides: 0,
	slideNum: 0
};

WebPresenter.unloadIframe = function() {
	var iframe = $('#content iframe');
	if (iframe.length > 0) {
		iframe[0].remove();
	}
};

WebPresenter.prev = function() {
	if (this.slideNum === 0) {
		this.slideNum = this.numSlides;
	}
	
	else {
		--this.slideNum;
	}
	
	this.loadSlide();
}

WebPresenter.next = function() {
	if (this.slideNum === this.numSlides) {
		this.slideNum = 0;
	}
	
	else {
		++this.slideNum;
	}
	
	this.loadSlide();
}

WebPresenter.getSlides = function() {
	return $('.slide');
};

WebPresenter.loadSlide = function() {
	this.unloadIframe();
	var newSlideContent = $(this.getSlides()[this.slideNum]).html();
	$('#content').html(newSlideContent);
}
	
$(document).ready(function() {
	WebPresenter.numSlides = WebPresenter.getSlides().length - 1;
	
	$(document).keydown(function(e) {
		switch (e.keyCode) {
			// left arrow
			case 37:
				WebPresenter.prev();
				return e.preventDefault();
				
			// right arrow
			case 39:
				WebPresenter.next();
				return e.preventDefault();
		}
	});
	
	WebPresenter.loadSlide();
});

