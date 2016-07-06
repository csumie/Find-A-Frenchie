
//State Dropdown

$('.dropdown-CT').on('click', function(event) {
  fetchCTFrenchies();
});
$('.dropdown-MA').on('click', function(event) {
  fetchMAFrenchies();
});
$('.dropdown-NJ').on('click', function(event) {
  fetchNJFrenchies();
});
$('.dropdown-NY').on('click', function(event) {
  fetchNYFrenchies();
});
$('.dropdown-PA').on('click', function(event) {
  fetchPAFrenchies();
});
$('.dropdown-NH').on('click', function(event) {
  fetchNHFrenchies();
});
$('.dropdown-ME').on('click', function(event) {
  fetchMEFrenchies();
});
$('.dropdown-RI').on('click', function(event) {
  fetchRIFrenchies();
});
$('.dropdown-VT').on('click', function(event) {
  fetchVTFrenchies();
});


//function to call CT frenchies

function fetchCTFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=CT&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});
        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);
            });

}

}


//function to call NJ frenchies

function fetchNJFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=NJ&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>"); 
                var breed = $("<li class='li_breed'>"); 
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('Breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);
            });

}

}

//function to call NY frenchies

function fetchNYFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=NY&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('Breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);
            });

}

}

//function to call MA frenchies

function fetchMAFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=MA&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('Breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);
            });

}

}

//function to call PA frenchies

function fetchPAFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=PA&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);

            });

}

}


//function to call RI frenchies

function fetchRIFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=RI&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);

            });

}

}

//function to call NH frenchies

function fetchNHFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=NH&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);

            });

}

}

//function to call ME frenchies

function fetchMEFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=ME&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);

            });

}

}

//function to call VT frenchies

function fetchVTFrenchies() {
var url = 'https://api.petfinder.com/pet.find?format=json&key=d6fe78aa9f4a94fba6a1481af760a0f9&location=VT&animal=dog&breed=French%20Bulldog&callback=?';

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: url,
    success: function(res) {
        console.log(res);
        doStuff(res);
    },
    error: function(err) {
        console.log('error');
        console.log(err);
    }

});

        function doStuff(res) {
            var animals = res.petfinder.pets.pet;
            $('.frenchieInfo').empty();
            animals.forEach( function(pet) {
                var contentWrapper = $("<article class='content'>");
                var featuredImage = $("<section class='featuredImage'>");
                var img = $("<img>");
                var articleContent = $("<div class='frenchieInfo'>");
                var ul = $('<ul>');

                var name = $("<li class='li_name'>");
                var age = $("<li class='li_age'>");
                var sex = $("<li class='li_sex'>");
                var mix = $("<li class='li_mix'>");
                var breed = $("<li class='li_breed'>");
                var city = $("<li class='li_city'>");
                var zip = $("<li class='li_zip'>");
                var breeder = $("<a class='li_breeder'>");
                var clearfix = $("<div class='clearfix'>");

                img.attr('src', pet.media.photos.photo[3].$t);
                name.text('Name: ' + pet.name.$t);
                age.text('Age: ' + pet.age.$t);
                sex.text('Sex: ' + pet.sex.$t);
                mix.text('Mixed: ' + pet.mix.$t);
                breed.text('breed: ' + pet.breeds.breed.$t);
                city.text('City: ' + pet.contact.city.$t);
                zip.text('Zip Code: ' + pet.contact.zip.$t);
                breeder.text('Contact: ' + pet.contact.email.$t);

                contentWrapper.append(featuredImage);
                featuredImage.append(img);
                contentWrapper.append(name);
                contentWrapper.append(age);
                contentWrapper.append(sex);
                contentWrapper.append(mix);
                contentWrapper.append(breed);
                contentWrapper.append(city);
                contentWrapper.append(zip);
                contentWrapper.append(breeder);
                contentWrapper.append(clearfix);

                $('.frenchieInfo').append(contentWrapper);

            });

}

}