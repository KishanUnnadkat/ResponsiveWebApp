var lock = new Auth0Lock('25kACifUU46nkk8Id1WqEtIGUqN442ZY', 'kishunnadkat.auth0.com');

document.getElementById('btn-login').addEventListener('click', function () {
  lock.show(function (err, profile, token) {
    if (err) {
      console.error("Something went wrong: ", err);
    } else {
      localStorage.setItem('userToken', token);
      localStorage.setItem('userProfile', JSON.stringify(profile));
      document.getElementById('nick').textContent = profile.name;

      document.getElementById('userProfilePic').src = profile.picture;
    }
  });
});

document.getElementById('btn-logout').addEventListener('click', function () {
  console.log('testing logout');
  // if(localStorage.getItem('userToken')) {
  //   localStorage.removeItem('userToken');
  // }
  // if(localStorage.getItem('userProfile')) {
  //   localStorage.removeItem('userProfile');
  // }

});




