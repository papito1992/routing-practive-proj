export class AuthServiceFake {
  loggedIn = false;

  isAunthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn); }, 800); } );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }
  loggedOut() {
    this.loggedIn = false;
  }
}
