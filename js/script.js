import budapest from '/photos/Budapest/photos.js';

document.getElementsByTagName('h1')[0].innerHTML += " World!";
let photos = document.getElementById('photos');

budapest.forEach(photo => {
	let elem = document.createElement("img");
	elem.setAttribute('src', photo.src);
	console.log(EXIF.getData(photo, function() {
		let allMetaData = EXIF.getAllTags(this);
		let ISOSpeedRatings = EXIF.getTag(this, 'ISOSpeedRatings');
		let FNumber = EXIF.getTag(this, 'FNumber');
		let ExposureTime = EXIF.getTag(this, 'ExposureTime');
		let FocalLength = EXIF.getTag(this, 'FocalLength');
		console.log(photo.src, ISOSpeedRatings, `F/${FNumber.numerator}`, `${ExposureTime.numerator}/${ExposureTime.denominator}s`, `${FocalLength.numerator}mm`);
	}));
	photos.appendChild(elem);
});
