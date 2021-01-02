class Notify {
  constructor () {
    this.checkedPermissions = false;
    this.notificationEnabled = false;
    this.stickyNotification = false;
    this.soundOn = true;
    this.audio = new Audio("/beep.mp3");
  }

  setSound(soundOn) {
    this.soundOn = soundOn;
  }

  setSticky(stickyNotification) {
    this.stickyNotification = stickyNotification;
  }

  requestPermissions() {
    this.checkedPermissions = true;
    if ("Notification" in window && Notification) {
      if (Notification.permission === 'default') {
      Notification.requestPermission().then(function(permission) { 
        // eslint-disable-next-line no-console
        console.log(permission);
       });
      } else {
        this.notificationEnabled = Notification.permission === 'granted';
      }
    } else
      this.notificationEnabled = false;

    if ('vibrate' in navigator) {
      this.vibrateEnabled = navigator.vibrate(1);
    } else {
      this.vibrateEnabled = false;
    }

    this.soundEnabled = this.soundOn; //Todo check permissions

    return {Console: true, Notification: this.notificationEnabled, Vibrate: this.vibrateEnabled, Sound: this.soundEnabled};
  }

  notify (title, body) {
    if(!this.checkedPermissions)
      this.requestPermissions();
    this._console(title, body);

    if (this.notificationEnabled)
      this._Notifcation(title, body);

    if (this.vibrateEnabled)
      this._vibrate();

    if (this.soundOn)
      this._sound();
  }

  _console (title, body) {
    console.log(title);
    console.info(body);
  }

  _Notifcation (title, body) {
    console.log('sticky', this.stickyNotification);
    new Notification(title, {
      body, vibrate: [300], 
      renotify: true, 
      icon: '/timer.png',
      requireInteraction: this.stickyNotification
    });
  }

  _vibrate (){
    navigator.vibrate(300);
  }

  _sound () {
    this.audio.play();
  }
}

const _notify = new Notify()
export default {
  notify: function (t,b) {
    _notify.notify(t,b);
  },
  requestPermissions() {
    return _notify.requestPermissions();
  },
  setSound(soundOn) {
    return _notify.setSound(soundOn);
  },
  setSticky(stickyNotification) {
    return _notify.setSticky(stickyNotification);
  }
}