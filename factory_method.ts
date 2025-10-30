class IOSButton { }

class AndroidButton { }

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const button1 = factory.createButton(os);
const button2 = factory.createButton(os);
