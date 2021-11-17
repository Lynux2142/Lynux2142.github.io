import Budapest from '/photos/Budapest/photos.js';
import Holland from '/photos/Holland/photos.js';

let photos = document.getElementById('photos');
let catalogs = {
	Budapest: Budapest,
	Holland: Holland,
};

const updatePhotos = (catalog) => {
	photos.innerHTML = null;
	catalog.forEach(photo => {
		let div = document.createElement("div");
		let img = document.createElement("img");
		let data = document.createElement("p");
		img.setAttribute('src', photo.src);
		EXIF.getData(photo, function() {
			let ISOSpeedRatings = EXIF.getTag(this, 'ISOSpeedRatings');
			let FNumber = EXIF.getTag(this, 'FNumber');
			let ExposureTime = EXIF.getTag(this, 'ExposureTime');
			let FocalLength = EXIF.getTag(this, 'FocalLength');
			data.innerHTML = `ISO ${ISOSpeedRatings} F/${FNumber.numerator} ${ExposureTime.numerator}/${ExposureTime.denominator}s ${FocalLength.numerator}mm`;
		});
		div.appendChild(img);
		div.appendChild(data);
		photos.appendChild(div);
	});
};

document.getElementById('Budapest').addEventListener("click", (e) => {
	updatePhotos(catalogs[e.target.id]);
});

document.getElementById('Holland').addEventListener("click", (e) => {
	updatePhotos(catalogs[e.target.id]);
});

/*
Budapest.forEach(photo => {
	let elem = document.createElement("img");
	elem.setAttribute('src', photo.src);
	EXIF.getData(photo, function() {
		let allMetaData = EXIF.getAllTags(this);
		let ISOSpeedRatings = EXIF.getTag(this, 'ISOSpeedRatings');
		let FNumber = EXIF.getTag(this, 'FNumber');
		let ExposureTime = EXIF.getTag(this, 'ExposureTime');
		let FocalLength = EXIF.getTag(this, 'FocalLength');
		console.log(photo.src, ISOSpeedRatings, `F/${FNumber.numerator}`, `${ExposureTime.numerator}/${ExposureTime.denominator}s`, `${FocalLength.numerator}mm`);
	});
	photos.appendChild(elem);
});
*/
