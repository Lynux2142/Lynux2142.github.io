import Budapest from '/photos/Budapest/photos.js';
import Holland from '/photos/Holland/photos.js';
import Italy from '/photos/Italy/photos.js';
import Oslo from '/photos/Oslo/photos.js';
import Poland from '/photos/Poland/photos.js'
import Reykjavik from '/photos/Reykjavik/photos.js';

let photos = document.getElementById('photos');
let catalogs = {
	Budapest: Budapest,
	Holland: Holland,
	Italy: Italy,
	Oslo: Oslo,
	Poland: Poland,
	Reykjavik: Reykjavik,
};

const fullScrean = (img) => {
	photos.innerHTML = null;
	let div = document.createElement('div');
	let data = document.createElement('p');
	EXIF.getData(img, function() {
		let ISOSpeedRatings = EXIF.getTag(this, 'ISOSpeedRatings');
		let FNumber = EXIF.getTag(this, 'FNumber');
		let ExposureTime = EXIF.getTag(this, 'ExposureTime');
		let FocalLength = EXIF.getTag(this, 'FocalLength');
		data.innerHTML = `ISO ${ISOSpeedRatings} F/${FNumber.numerator} ${ExposureTime.numerator}/${ExposureTime.denominator}s ${FocalLength.numerator}mm`;
	});
	div.appendChild(img);
	div.appendChild(data);
	photos.appendChild(div);
};

const updatePhotos = (catalog) => {
	photos.innerHTML = null;
	catalog.forEach(photo => {
		let div = document.createElement("div");
		let img = document.createElement("img");
		img.setAttribute('src', photo.src);
		img.addEventListener('click', (e) => {
			fullScrean(e.target);
		});
		div.appendChild(img);
		photos.appendChild(div);
	});
};

for (let item of document.getElementById('catalog').getElementsByTagName('a')) {
	item.addEventListener('click', () => {
		updatePhotos(catalogs[item.id]);
	});
}
