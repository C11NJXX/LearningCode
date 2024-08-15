function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
  }

  function myCheckAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
  }
  