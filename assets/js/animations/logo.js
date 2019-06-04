var startingDegArr = [200, 180, 160, 140, 120, 100, 80];
var index = 0;
const numOfCircles = $('.circle').length;

export const Logo = {
	initLogoSpin: function() {
		var spinInterval = setInterval(spin, 1);
	}
};

function spin() {
	for (index; index < numOfCircles; index++) {
		switch (index) {
			case 0:
				circle1(index, 2);
				break;
			case 1:
				circle1(index, 2);
				break;
			case 2:
				circle1(index, 2);
				break;
			case 3:
				circle1(index, 2);
				break;
			case 4:
				circle1(index, 2);
				break;
			case 5:
				circle1(index, 2);
				break;
			case 6:
				circle1(index, 2);
				break;
		}
	}
	index = 0;
}

function circle1(index, num = 1, reverse) {
	if (Math.abs(startingDegArr[index] / 360) === 3) {
		if (index === 6) {
			clearInterval(spinInterval);
		}
	} else {
		$('.circle')
			.eq(index)
			.css({
				transform: 'rotate(' + startingDegArr[index] + 'deg)'
			});
		if (reverse) {
			startingDegArr[index] = startingDegArr[index] - num;
		} else {
			startingDegArr[index] = startingDegArr[index] + num;
		}
	}
}
