function showMap() {

	var nbaArenas = [
		{arena: "TD Garden", team: "Boston Celtics", adress: "226 Causeway St, Boston, MA 02114, USA", lat: 42.366218, long: -71.062216},
		{arena: "Barclays Center", team: "Brooklyn Nets", adress: "620 Atlantic Ave, Brooklyn, NY 11217, USA", lat: 40.682893, long: -73.975828},
		{arena: "Madison Square Garden", team: "New York Knicks", adress: "4 Pennsylvania Plaza, New York, NY 10001, USA", lat: 40.750509, long: -73.993439},
		{arena: "Wells Fargo Center", team: "Philadelphia 76ers", adress: "3601 S Broad St, Philadelphia, PA 19148, USA", lat: 39.901222, long: -75.171982},
		{arena: "Air Canada Centre", team: "Toronto Raptors", adress: "Air Canada Centre, 50 Bay St #500, Toronto, ON M5J 2L2, Canada", lat: 43.643502, long: -79.379101},
		{arena: "Oracle Arena", team: "Golden State Warriors", adress: "7000 Coliseum Way, Oakland, CA 94621, USA", lat: 37.750308, long: -122.202935},
		{arena: "STAPLES Center", team: "LA Clippers & Los Angeles Lakers", adress: "1111 S Figueroa St, Los Angeles, CA 90015, USA", lat: 34.043020, long: -118.267247},
		{arena: "Talking Stick Resort Arena", team: "Phoenix Suns", adress: "201 E Jefferson St, Phoenix, AZ 85004, USA", lat: 33.445741, long: -112.071201},
		{arena: "Golden 1 Center", team: "Sacramento Kings", adress: "500 David J Stern Walk, Sacramento, CA 95814, USA", lat: 38.580648, long: -121.499603},
		{arena: "United Center", team: "Chicago Bulls", adress: "1901 W Madison St, Chicago, IL 60612, USA", lat: 41.880686, long: -87.674182},
		{arena: "Quicken Loans Arena", team: "Cleveland Cavaliers", adress: "1 Center Ct, Cleveland, OH 44115, USA", lat: 41.496485, long: -81.688186},
		{arena: "The Palace of Auburn Hills", team: "Detroit Pistons", adress: "Auburn Hills, MI 48326, USA", lat: 42.696879, long: -83.245796},
		{arena: "Bankers Life Fieldhouse", team: "Indiana Pacers", adress: "125 S Pennsylvania St, Indianapolis, IN 46204, USA", lat: 39.764003, long: -86.155480},
		{arena: "BMO Harris Bradley Center", team: "Milwaukee Bucks", adress: "1001 North 4th Street, 100 Level, Milwaukee, WI 53203, USA", lat: 43.043573, long: -87.916968},
		{arena: "American Airlines Center", team: "Dallas Mavericks", adress: "2500 Victory Ave, Dallas, TX 75219, USA", lat: 32.790523, long: -96.810385},
		{arena: "Toyota Center", team: "Houston Rockets", adress: "1510 Polk St, Houston, TX 77002, USA", lat: 29.750778, long: -95.362039},
		{arena: "FedEx Forum", team: "Memphis Grizzlies", adress: "191 Beale St, Memphis, TN 38103, USA", lat: 35.138234, long: -90.050357},
		{arena: "Smoothie King Center", team: "New Orleans Pelicans", adress: "1501 Dave Dixon Dr, New Orleans, LA 70113, USA", lat: 29.949038, long: -90.082047},
		{arena: "AT&T Center", team: "San Antonio Spurs", adress: "1 AT&T Center Parkway, San Antonio, TX 78219, USA", lat: 29.427197, long: -98.437410},
		{arena: "Philips Arena", team: "Atlanta Hawks", adress: "1 Philips Dr, Atlanta, GA 30303, USA", lat: 33.757293, long: -84.396318},
		{arena: "Spectrum Center", team: "Charlotte Hornets", adress: "333 E Trade St, Charlotte, NC 28202, USA", lat: 35.225145, long: -80.839226},
		{arena: "American Airlines Arena", team: "Miami Heat", adress: "601 Biscayne Blvd, Miami, FL 33132, USA", lat: 25.781408, long: -80.186958},
		{arena: "Amway Center", team: "Orlando Magic", adress: "400 W Church St, Orlando, FL 32801, USA", lat: 28.539257, long: -81.383951},
		{arena: "Verizon Center", team: "Washington Wizards", adress: "601 F St NW, Washington, DC 20004, USA", lat: 38.898029, long: -77.020979},
		{arena: "Pepsi Center", team: "Denver Nuggets", adress: "1000 Chopper Cir, Denver, CO 80204, USA", lat: 39.748665, long: -105.007705},
		{arena: "Target Center", team: "Minnesota Timberwolves", adress: "600 N 1st Ave, Minneapolis, MN 55403, USA", lat: 44.979457, long: -93.276185},
		{arena: "Chesapeake Energy Arena", team: "Oklahoma City Thunder", adress: "208 Thunder Dr, Oklahoma City, OK 73102, USA", lat: 35.463420, long: -97.51510},
		{arena: "Moda Center", team: "Portland Trail Blazers", adress: "1 N Center Ct St #110, Portland, OR 97227, USA", lat: 45.531584, long: -122.666773},
		{arena: "Vivint Smart Home Arena", team: "Utah Jazz", adress: "301 S Temple, Salt Lake City, UT 84101, USA", lat: 40.768274, long: -111.901064}
	]

	var nbaArenasMap = new google.maps.Map(document.getElementById('nba-teams-map'), {
		zoom: 5,
		center: new google.maps.LatLng(37.700228, -99.446216),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < nbaArenas.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(nbaArenas[i].lat, nbaArenas[i].long),
			map: nbaArenasMap
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent("NBA Arena: <strong>" + nbaArenas[i].arena + "</strong><br>" + "Team(s): <strong>" +
										nbaArenas[i].team + "</strong><br>" + "Adress: " + nbaArenas[i].adress);
				infowindow.open(nbaArenasMap, marker);
			}
		})(marker, i));
	}
}
